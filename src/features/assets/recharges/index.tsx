/**
 * 资产 - 充值
 */
import { t } from '@lingui/macro'
import { FC, useState, useEffect, useRef } from 'react'
import { Button, Dialog, Form, Input, NumberKeyboard, PasswordInput, Toast } from 'react-vant'
import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import LazyImage from '@/components/lazy-image'
import MainNetWork from '@/features/assets/common/main-network'
import PayAddress from '@/features/assets/recharge/pay-address'
import { link } from '@/helper/link'
import { postDepositAddress } from '@/apis/assets/recharge'
import { AssetsDepositAddressResp } from '@/typings/api/assets/assets'
import { AssetsCoinRemindSettingTypeEnum, AssetsRouteEnum } from '@/constants/assets'
import { useUpdateEffect } from 'ahooks'
import { requestWithLoading } from '@/helper/order'
import { getAssetsHistoryPageRoutePath } from '@/helper/route'
import { getV1VccGetRechargeCoinListApiRequest, postV1VccCardRechargeApiRequest } from '@/apis/assets/financial-records'
import { usePageContext } from '@/hooks/use-page-context'
import { rateFilter, rateFilterFutures } from '@/helper/assets/spot'
import { formatCurrency } from '@/helper/decimal'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import { debounce } from 'lodash'
import classnames from 'classnames'
import { encryptAES } from '@/helper/ASE_RSA'
import { copyCoinAddress } from './helper/common'
import { ICoin } from '../common/coin-list'
import styles from './index.module.css'

export default Recharge
interface RechargeProps {
  coin: ICoin
  networkId: any
  /** 事件回调函数 */
  openCoinListWrap: (val) => void
}

function Recharge({ coin, networkId, openCoinListWrap }: RechargeProps) {
  const [fullScreenLoading, setFullScreenLoading] = useState<boolean>(false)
  const [buttonLoading, setButtonLoading] = useState<boolean>(false)
  const [isNumberKeyboard, setIsNumberKeyboard] = useState<boolean>(false)

  // 选中主网 ID
  const [selectedMainNetworkVal, setSelectedMainNetworkVal] = useState(networkId)
  const [coinList, setCoinList] = useState<any>([])
  const [pwdDialogVisible, setPwdDialogVisible] = useState<boolean>(false)
  const formDataRef = useRef<string>()
  const [password, setPassword] = useState<string>('')
  // TODO 主币下都有主网信息，后期可以去掉 length 判断
  let nNetwork: any = {}
  if (coin.networks && coin.networks.length > 0) {
    nNetwork = coin.networks[0]
  } else {
    nNetwork = coin
  }

  // 选中主网信息
  let selectedMainNetwork: any = {}
  if (selectedMainNetworkVal) {
    selectedMainNetwork =
      coin?.networks && coin?.networks.length > 0
        ? coin?.networks?.find(network => network.id === selectedMainNetworkVal)
        : nNetwork
  }

  // 充值地址
  const [coinAddress, setCoinAddress] = useState<AssetsDepositAddressResp>({ address: '', hint: '', memo: '' })

  /**
   * 查询充值地址
   * @returns
   */
  const onLoadDepositAddress = async () => {
    const res = await postDepositAddress({ coinId: selectedMainNetwork?.id || coin.id })

    const { isOk, data, message = '' } = res || {}
    if (!isOk) {
      Toast(message)
      return
    }

    data && setCoinAddress(data)
  }

  /**
   * memo 地址组件
   */
  const MemoAddrItem = () => {
    return (
      <>
        <div className="memo">
          <div className="item-title">{t`features_assets_recharge_index_510099`}</div>
          <div className="memo-content">
            <div className="memo-text">{coinAddress.memo}</div>
            <Button
              className="memo-btn"
              type="primary"
              onClick={() => {
                copyCoinAddress(coinAddress.memo, t`features_assets_recharge_index_605`)
              }}
            >{t`features_assets_recharge_pay_address_index_603`}</Button>
          </div>
          <div className="memo-tips">{t`features_assets_recharge_index_606`}</div>
        </div>
      </>
    )
  }

  /**
   * 充值提示
   * 分享按钮
   * @returns
   */
  const ShareButtonItem: FC = () => {
    return (
      <>
        {coinAddress.hint && (
          <div className="recharge-tips">
            <div className="item-title">{t`features_assets_recharge_index_510100`}</div>
            <div className="tips-content">
              <Icon name="msg" className="tips-content-icon" />
              <span>{coinAddress.hint}</span>
            </div>
          </div>
        )}
        {/* H5 隐藏分享图片功能 */}
        {/* <div className="share-div">
          <Button
            type="primary"
            block
            round
            onClick={() => {
              Toast.info(t`features_assets_recharge_index_607`)
            }}
          >
            {t`features_assets_recharge_index_608`}
          </Button>
        </div> */}
      </>
    )
  }

  // useEffect(() => {
  //   setSelectedMainNetworkVal(networkId)
  // }, [networkId])

  // useUpdateEffect(() => {
  //   selectedMainNetwork && selectedMainNetwork.isDeposit === 1 && requestWithLoading(onLoadDepositAddress(), 0)
  // }, [selectedMainNetwork])

  useEffect(() => {
    setFullScreenLoading(true)
    getV1VccGetRechargeCoinListApiRequest({}).then(res => {
      if (res.isOk) {
        setCoinList(res.data || [])
      }
      setFullScreenLoading(false)
    })
  }, [])

  const [form] = Form.useForm()
  const pageContext = usePageContext()

  const cardId = pageContext.urlParsed.search?.id

  /** 提交申请 */
  const onFinish = v => {
    if (v?.amount) {
      formDataRef.current = v?.amount || ''
      setPwdDialogVisible(true)
      setIsNumberKeyboard(true)
    }

    // postV1VccCardRechargeApiRequest({
    //   coinId: Number(coin.id),
    //   cardId,
    //   amount: v.amount,
    //   password: '123456',
    // }).then(res => {
    //   if (res.isOk) {
    //     //
    //   }
    // })
  }

  Form.useWatch('amount', form)

  // form.getFieldValue('amount')

  const getplaceholder = () => {
    const minRechargeAmount = coinList?.filter(item => {
      return Number(item.coinId) === Number(coin?.id)
    })?.[0]?.minRechargeAmount
    return `${t`features_assets_recharges_index_arzhuy0jc7`} ${minRechargeAmount || 0}USD`
  }
  return (
    <div className={styles.scoped}>
      <NavBar
        title={t`assets.enum.tradeRecordType.deposit`}
        right={
          <Icon
            name="asset_record"
            hasTheme
            className="record-icon"
            onClick={() => link(getAssetsHistoryPageRoutePath(AssetsRouteEnum.coins))}
          />
        }
      />

      <div className="select-currency">
        <div className="item-title">{t`assets.withdraw.form.coin.label`}</div>
        <div
          className="coin-info"
          // onClick={() => {
          //   openCoinListWrap(true)
          // }}
        >
          <div className="coin-info-item">
            <LazyImage width={20} height={20} src={coin && coin.appLogo} round />
            <span className="coin-name">{coin && coin.coinName}</span>
          </div>

          <div className="coin-info-item">
            <span>{coin.coinFullName}</span>
            {/* <Icon hasTheme name="next_arrow" className="next-icon" /> */}
          </div>
        </div>
      </div>

      {/* {selectedMainNetwork?.isDeposit && (
        <PayAddress rechargeData={coinAddress} coin={coin} network={selectedMainNetwork} />
      )}

      {coin?.networks && coin?.networks.length > 0 && (
        <MainNetWork
          pageType={AssetsCoinRemindSettingTypeEnum.recharge}
          networks={coin.networks}
          value={selectedMainNetwork?.id}
          onChange={setSelectedMainNetworkVal}
        />
      )} */}

      <div className="form-wrap">
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          footer={
            <div className="footer-wrap">
              <Button nativeType="submit" type="primary" block>
                {t`features_assets_recharges_index_nvkybwvxbn`}
              </Button>
            </div>
          }
        >
          <Form.Item
            rules={[
              {
                required: true,
                message: t`features_assets_recharges_index_lslptu93h4`,
              },
            ]}
            name="amount"
            label={t`features_assets_recharges_index__mjd6zlvyw`}
          >
            <Input type="digit" clearable placeholder={getplaceholder()} />
          </Form.Item>
        </Form>
      </div>
      <div className="divide"></div>
      <div className="px-4 w-full">
        <div className="handling-fee">
          <span className="title">{t`features_assets_recharges_index_hl4c1blctk`}</span>
          <span className="value">${formatCurrency(((form.getFieldValue('amount') || 0) * 2) / 100)}</span>
        </div>

        <div className="handling-fee mt-4">
          <span className="title">{t`features_assets_recharges_index_xsqgcmbrlb`}</span>
          <span className="value">${formatCurrency(((form.getFieldValue('amount') || 0) * 98) / 100)}</span>
        </div>
      </div>

      {/* {selectedMainNetwork?.isDeposit === 1 && (
        <>
          {coinAddress.memo && <MemoAddrItem />}
          <ShareButtonItem />
        </>
      )} */}

      <FullScreenLoading isShow={fullScreenLoading} />

      <Dialog
        visible={pwdDialogVisible}
        showCancelButton
        title={t`features_assets_recharges_index_zj10pjc71b`}
        className={classnames(
          password && password.length === 6 ? styles['dialog-pwd'] : styles['dialog-pwd-disabled'],
          'dialog-confirm-wrapper',
          'cancel-gray',
          'confirm-black'
        )}
        cancelButtonText={t`assets.financial-record.cancel`}
        confirmButtonText={t`common.confirm`}
        onCancel={() => {
          setPwdDialogVisible(false)
          setPassword('')
          setIsNumberKeyboard(false)
        }}
        onConfirm={debounce(() => {
          if (!password || password.length !== 6) {
            return
          }
          setPwdDialogVisible(false)
          setIsNumberKeyboard(false)
          setPassword('')
          setFullScreenLoading(true)
          postV1VccCardRechargeApiRequest({
            coinId: Number(coin.id),
            cardId,
            amount: Number(formDataRef.current),
            password: encryptAES(password, true),
          }).then(res => {
            setFullScreenLoading(false)
            if (res.isOk) {
              Toast.success(t`features_assets_recharges_index_w9f3v1wl_o`)
              setTimeout(() => {
                link('/credit-card/my-card')
              }, 500)
            }
          })
        }, 500)}
      >
        <PasswordInput
          value={password}
          className="pwd-Input"
          type="number"
          gutter={6}
          onChange={value => {
            setPassword(value)
          }}
        />
      </Dialog>
      <NumberKeyboard
        zIndex={9999999}
        visible={isNumberKeyboard}
        value={password}
        className={styles.customNumberKeyboard}
        onInput={key => {
          if (password?.length !== 6) {
            setPassword(prevPassword => {
              return prevPassword + key
            })
          }
        }}
        onDelete={() => setPassword(prevPassword => prevPassword?.slice(0, -1))}
      />
    </div>
  )
}
