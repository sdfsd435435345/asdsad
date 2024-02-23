/**
 * 资产 - 提现表单组件
 */
import { t } from '@lingui/macro'
import { useEffect, useState, useRef, MutableRefObject } from 'react'
import { useUpdateEffect } from 'ahooks'
import { Toast, Input } from 'react-vant'
import Icon from '@/components/icon'
import LazyImage from '@/components/lazy-image'
import classNames from 'classnames'
import { SelectActionSheet } from '@/components/select-action-sheet'
import { AssetsCoinRemindSettingTypeEnum, AssetsWithdrawTypeEnum } from '@/constants/assets/index'
import StopService from '@/features/assets/common/stop-service'
import MainNetWork from '@/features/assets/common/main-network'
import { postWithdrawCoinInfo } from '@/apis/assets/withdraw'
import { WithdrawAddressListResp } from '@/typings/api/assets/assets'
import { IWithdrawFormData } from '@/typings/assets'
import FormItem from '@/features/assets/common/form-item'
import CoinList from '@/features/assets/common/coin-list'
import { useAssetsStore } from '@/store/assets/spot'
import { onVerifyAddress, onGetWithdrawAddress, getAllCoinList, getSubCoinList } from '@/helper/assets/spot'
import { onCheckStr } from '@/helper/reg'
import { useLayoutStore } from '@/store/layout'
import { decimalUtils } from '@/nbit'
import { CommonDigital } from '@/components/common-digital'
import { usePageContext } from '@/hooks/use-page-context'
import { requestWithLoading } from '@/helper/order'
import styles from './withdraw.module.css'
import { EditAddress } from './address/edit-address'

export function WithdrawForm({ page, onChange }: { page?: string; onChange: (data: IWithdrawFormData) => void }) {
  const pageContext = usePageContext()
  const pageSymbol =
    page && !pageContext?.urlParsed?.search?.symbol ? 'USDT' : pageContext?.urlParsed?.search?.symbol || ''
  const pageCount = pageContext?.urlParsed?.search?.count
  const pageAddress = pageContext?.urlParsed?.search?.address
  const pageWithdrawNet = pageContext?.urlParsed?.search?.withdrawNet

  const SafeCalcUtil = decimalUtils.SafeCalcUtil
  const { headerData } = useLayoutStore()
  const { withdrawType, addressList, amountInfo, updateWithdrawModule } = useAssetsStore().withdrawModule

  const [showCoinList, setShowCoinList] = useState(true) // 是否展示币种选择
  const [showAddAddress, setShowAddAddress] = useState(false) // 是否展示添加地址组件
  const addressRef: MutableRefObject<any> = useRef(null) // 提币地址
  const [addressError, setAddressError] = useState(true) // 是否通过提币地址校验
  const [formData, setFormData] = useState({
    coin: {} as any,
    network: {} as any,
    amount: pageCount || '',
    memo: '',
    error: false,
    uid: '',
    address: pageAddress || '',
  })

  /**
   * 获取常用提现地址列表
   */
  const onLoadWithdrawAddress = async () => {
    updateWithdrawModule({ addressList: await onGetWithdrawAddress() })
  }

  /**
   * 获取提币币种信息
   */
  const onLoadCoinInfo = async (coinId, params) => {
    const res = await postWithdrawCoinInfo({
      coinId,
      type: withdrawType,
    })

    const { isOk, data = {}, message = '' } = res || {}

    if (!isOk) {
      Toast(message)
      return
    }

    setFormData({ ...params, error: false })
    updateWithdrawModule({ amountInfo: data })

    if (!onCheckStr(params.address)) {
      return
    }
    setAddressError(await onVerifyAddress(params?.network.symbol, params?.address))
  }

  /**
   * 监听主网变化
   */
  const onChangeNetworks = async (networkId: string) => {
    const { networks = [] } = formData.coin || {}
    let network: any = {}
    networks.forEach(item => {
      if (item.id === networkId) network = item
    })
    setShowCoinList(false)

    onLoadCoinInfo(network?.id, { ...formData, network })
  }

  /**
   * 监听提币数量变化
   */
  const onAmountChange = (e: any) => {
    let newVal = typeof e === 'string' ? e : e.target.value

    /** 控制提币数量精度 */
    const { withdrawPrecision = 0 } = amountInfo
    const valArr = newVal.split('.')
    if (valArr.length > 1 && valArr[1].length > withdrawPrecision) {
      newVal = `${valArr[0]}.${valArr[1].slice(0, withdrawPrecision)}`
    }

    setFormData({ ...formData, amount: newVal })
  }

  /**
   * 监听提币地址变化
   */
  const onWalletAddressChange = async (e: any, type?: string) => {
    const newVal = typeof e === 'string' ? e : e.target.value
    setFormData({ ...formData, address: newVal.trim() })

    type && setAddressError(await onVerifyAddress(formData?.network.symbol, newVal.trim()))
  }

  /**
   * 监听 memo 地址变化
   */
  const onMemoChange = (e: any) => {
    const newVal = e.target.value
    setFormData({ ...formData, memo: newVal.trim() })
  }

  /**
   * 监听 payuid 变化
   */
  const onPayeeUidChange = (e: any) => {
    const newVal = typeof e === 'string' ? e : e.target.value
    setFormData({ ...formData, uid: newVal.trim() })
  }

  /**
   * 有主币 id 情况处理
   */
  const onChangePage = async () => {
    setShowCoinList(false)
    // 获取主币信息
    const res = await getAllCoinList(AssetsCoinRemindSettingTypeEnum.withdraw)
    const coinInfo: any = res.find(item => item?.symbol?.toLocaleUpperCase() === pageSymbol?.toLocaleUpperCase())

    if (coinInfo && coinInfo.id) {
      // 获取主币下主网信息
      const subList = await getSubCoinList(coinInfo.id)
      const network =
        subList.find(subItem => subItem?.mainType?.toLocaleUpperCase() === pageWithdrawNet?.toLocaleUpperCase()) ||
        subList[0]

      const nData = {
        ...formData,
        coin: { ...coinInfo, networks: subList.length === 0 ? [...coinInfo] : subList },
        network: subList.length === 0 ? coinInfo : network,
      }
      await onLoadCoinInfo(nData.network.id, nData)
    }
  }

  useEffect(() => {
    withdrawType === AssetsWithdrawTypeEnum.blockchain && onLoadWithdrawAddress()
    pageSymbol && requestWithLoading(onChangePage(), 0)
  }, [])

  useUpdateEffect(() => {
    let error = false
    if (withdrawType === AssetsWithdrawTypeEnum.blockchain && !addressError) {
      error = true
    }

    if (
      !formData.amount ||
      (amountInfo?.feeSymbol === formData?.network.symbol &&
        Number(SafeCalcUtil.sub(formData.amount, amountInfo.fee)) < 0)
    ) {
      error = true
    }

    if (withdrawType === AssetsWithdrawTypeEnum.blockchain && !formData.address) {
      error = true
    }

    if (withdrawType === AssetsWithdrawTypeEnum.blockchain && formData?.network?.isUseMemo === 1 && !formData.memo) {
      error = true
    }

    if (withdrawType === AssetsWithdrawTypeEnum.platform && !formData.uid) {
      error = true
    }

    onChange({ ...formData, error })
  }, [formData, addressError])

  /**
   * 选择提币地址弹窗
   */
  function AddressActions({ onChange: onSelectAddress }: { onChange: (address: string) => void }) {
    const actions = addressList.map((item: WithdrawAddressListResp) => {
      return {
        ...item,
        value: item.address,
        name: `${item.address.substring(0, 4)}...${item.address.substring(item.address.length - 4)}(${
          item.remark || '--'
        })`,
      }
    })

    return (
      <SelectActionSheet
        title={t`assets.withdraw.select-address.title`}
        desc={t({
          id: 'features_assets_common_withdraw_action_index_5101287',
          values: { 0: headerData?.businessName },
        })}
        value={formData?.address}
        triggerElement={<Icon hasTheme name="asset_drawing_attn" />}
        actionSheetElement={
          <div className={styles['withdraw-from-address-action']}>
            {addressList.length < 10 && (
              <div
                className="action-item border-t-0 active-text"
                onClick={() => {
                  setShowAddAddress(true)
                }}
              >
                <span>+</span>
                <span className="ml-1">{t`assets.withdraw-address.add`}</span>
              </div>
            )}

            {actions.map(actionsItem => {
              return (
                <div
                  key={actionsItem.id}
                  className={`action-item ${formData?.address === actionsItem.address && 'active-text'}`}
                  onClick={() => {
                    onSelectAddress(actionsItem.address)
                  }}
                >
                  {actionsItem.name}
                </div>
              )
            })}
          </div>
        }
      />
    )
  }

  /**
   * memo 地址
   */
  const memoFormItem = (
    <FormItem
      label={<span>{t`assets.withdraw.form.memo.label`}</span>}
      left={
        <input
          className="w-full bg-transparent"
          onChange={onMemoChange}
          value={formData.memo}
          type="text"
          placeholder={t`assets.withdraw.form.memo.placeholder`}
        />
      }
    />
  )

  return (
    <div className={styles['form-wrapper']}>
      <FormItem
        onClick={() => {
          setShowCoinList(true)
        }}
        label={t`assets.withdraw.form.coin.label`}
        left={
          <>
            <LazyImage src={`${formData.coin?.appLogo}`} width={16} height={16} round />
            <span className="ml-2">{formData.coin?.coinName}</span>
          </>
        }
        right={
          <>
            <span>{formData.coin?.coinFullName}</span>
            <Icon name="next_arrow" hasTheme className="arrow-icon" />
          </>
        }
      />

      {withdrawType === AssetsWithdrawTypeEnum.blockchain && (
        <>
          {formData.network?.isWithdraw === 2 ? (
            <StopService
              hint={t`features_assets_withdraw_withdraw_form_510112`}
              network={formData.network}
              type={AssetsCoinRemindSettingTypeEnum.withdraw}
            />
          ) : (
            <FormItem
              className={classNames({
                'is-error': !addressError,
              })}
              label={t`assets.withdraw.form.address.label`}
              left={
                <Input
                  ref={addressRef}
                  className="w-full bg-transparent"
                  onChange={onWalletAddressChange}
                  value={formData.address}
                  type="text"
                  placeholder={t`assets.withdraw.form.address.placeholder`}
                  maxLength={256}
                  onBlur={async () => {
                    if (!onCheckStr(formData.address)) {
                      return
                    }

                    setAddressError(await onVerifyAddress(formData?.network.symbol, formData.address))
                  }}
                />
              }
              right={<AddressActions onChange={(e: string) => onWalletAddressChange(e, 'select')} />}
              error={!addressError && t`features_assets_withdraw_withdraw_form_510113`}
            />
          )}

          {formData.coin?.networks && formData.coin.networks.length > 0 && (
            <MainNetWork
              pageType={AssetsCoinRemindSettingTypeEnum.withdraw}
              networks={formData.coin?.networks}
              onChange={onChangeNetworks}
              value={formData.network?.id}
            />
          )}
        </>
      )}

      {withdrawType === AssetsWithdrawTypeEnum.platform && (
        <FormItem
          label={t`features/assets/withdraw/withdraw-form-0`}
          left={
            <Input
              className="w-full bg-transparent"
              onChange={onPayeeUidChange}
              value={formData.uid}
              type="number"
              placeholder={t`features/assets/withdraw/withdraw-form-1`}
              maxLength={10}
            />
          }
        />
      )}

      {withdrawType === AssetsWithdrawTypeEnum.blockchain &&
        formData.network?.isWithdraw === 1 &&
        formData.network?.isUseMemo === 1 &&
        memoFormItem}

      {((withdrawType === AssetsWithdrawTypeEnum.blockchain && formData.network?.isWithdraw === 1) ||
        withdrawType === AssetsWithdrawTypeEnum.platform) && (
        <FormItem
          label={
            <>
              <span>{t`assets.withdraw.form.count.label`}</span>
              <div className="label-right flex justify-end w-2/3">
                {t`assets.withdraw.form.count.label-2`}
                <CommonDigital content={`${amountInfo.availableAmount || '0'} ${formData.coin.symbol || '--'}`} />
              </div>
            </>
          }
          left={
            <Input
              className="amount-input"
              onChange={onAmountChange}
              value={formData.amount}
              type="number"
              placeholder={`${t`features_assets_withdraw_withdraw_form_510114`}${amountInfo.minAmount || '0'}`}
            />
          }
          right={
            <div className="amount-right">
              <span className="amount-right-symbol">
                {withdrawType === AssetsWithdrawTypeEnum.blockchain ? formData.coin.symbol : formData.network.symbol}
              </span>
              <div className="amount-right-line" />
              <span
                className="amount-right-all"
                onClick={() => {
                  onAmountChange(amountInfo.availableAmount)
                }}
              >
                {t`assets.withdraw.form.count.withdraw-all`}
              </span>
            </div>
          }
        />
      )}

      {/* 币种选择 */}
      {showCoinList && (
        <div className="select-coin">
          <CoinList
            activeCoin={formData?.coin.id || ''}
            pageType={AssetsCoinRemindSettingTypeEnum.withdraw}
            onCoinChange={(coin: any) => {
              setAddressError(true)
              // 平台内转账或有主币数据后不再展示主网选择组件
              if (withdrawType === AssetsWithdrawTypeEnum.platform || formData.network?.id) {
                const nData = {
                  ...formData,
                  coin,
                  network: withdrawType === AssetsWithdrawTypeEnum.platform ? coin : coin?.networks[0] || coin,
                  address: '',
                  memo: '',
                  uid: '',
                  amount: '',
                }

                setShowCoinList(false)
                onLoadCoinInfo(coin.id, nData)
                return
              }

              setFormData({ ...formData, coin, address: '', memo: '', uid: '', amount: '' })
            }}
            onNetworkChange={onChangeNetworks}
            networkTitle={t`assets.common.withdraw-network.title`}
            networkDesc={t`assets.common.withdraw-network.desc`}
            showNetworkModalWhenCoinChange={withdrawType === AssetsWithdrawTypeEnum.blockchain && !formData.network?.id}
            onBack={() => {
              formData.coin?.id ? setShowCoinList(false) : history.back()
            }}
          />
        </div>
      )}

      {/* 添加地址 */}
      {showAddAddress && (
        <div className="add-address">
          <EditAddress
            onBack={() => setShowAddAddress(false)}
            onConfirm={(address: string) => {
              setFormData({ ...formData, address })
              setShowAddAddress(false)
              onLoadWithdrawAddress()
            }}
          />
        </div>
      )}
    </div>
  )
}
