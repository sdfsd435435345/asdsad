/**
 * 资产 - 提现
 */
import { t } from '@lingui/macro'
import NavBar from '@/components/navbar'
import { useState, useEffect } from 'react'
import classNames from 'classnames'
import Icon from '@/components/icon'
import { Button, Dialog, Toast } from 'react-vant'
import { AssetsRouteEnum, AssetsWithdrawTypeEnum } from '@/constants/assets/index'
import { usePageContext } from '@/hooks/use-page-context'
import { useAssetsStore } from '@/store/assets/spot'
import { useUserStore } from '@/store/user'
import { onVerifyAddress, rateFilter } from '@/helper/assets/spot'
import { link } from '@/helper/link'
import { getNickName } from '@/apis/assets/withdraw'
import { useUpdateEffect } from 'ahooks'
import { formatNumberDecimal } from '@/helper/decimal'
import { useLayoutStore } from '@/store/layout'
import { requestWithLoading } from '@/helper/order'
import { getAssetsHistoryPageRoutePath } from '@/helper/route'
import styles from './withdraw.module.css'
import { WithdrawForm } from './withdraw-form'
import { WithdrawActions } from './withdraw-form-actions'
import { WithdrawConfirm } from './withdraw-confirm'

export function WithdrawLayout({ page }: { page?: string }) {
  const { uid: userUid } = useUserStore().userInfo
  const { headerData } = useLayoutStore()
  const formData = { ...useAssetsStore().withdrawModule.formData }
  const { withdrawType, amountInfo, updateWithdrawModule } = useAssetsStore().withdrawModule
  const [showConfirm, setShowConfirm] = useState(false) // 是否展示确认区域
  const [showWithdrawalLimit, setShowWithdrawalLimit] = useState(false)

  function getNotes() {
    const coinName = withdrawType === AssetsWithdrawTypeEnum.blockchain ? formData.coin.symbol : formData.network.symbol
    return [
      `${t`features_assets_withdraw_withdraw_layout_510109`}${amountInfo.minAmount || '0'} ${coinName || '--'}`,
      `${t`features_assets_withdraw_withdraw_layout_ceowwljbaw`}${amountInfo.maxWithdrawAmount || '0'} ${
        coinName || '--'
      }`,
      t`assets.withdraw.note-2`,
      t`assets.withdraw.note-3`,
    ]
  }

  const notes = getNotes()

  /**
   * 收款人 UID 校验
   */
  const onVerifyUid = async (uid: string) => {
    const res = await getNickName({ uid })
    const { isOk, data } = res || {}

    updateWithdrawModule({ nickName: data && data.nickname ? data.nickname : '' })
    return isOk
  }

  const onFormSubmit = async () => {
    if (
      withdrawType === AssetsWithdrawTypeEnum.blockchain &&
      !(await onVerifyAddress(formData?.network.symbol, formData.address))
    )
      return

    const {
      remainingWithdrawalAmount = '0',
      fee = '0',
      feeSymbol = '',
      usrFeeAmount = '',
      maxWithdrawAmount = '',
      availableAmount = '',
      minAmount = '',
    } = amountInfo

    // 平台内提币需要校验 uid
    if (
      withdrawType === AssetsWithdrawTypeEnum.platform &&
      (formData.uid === userUid || !(await onVerifyUid(formData.uid)))
    ) {
      Toast(t`features_assets_withdraw_withdraw_layout_510170`)
      return
    }

    if (Number(formData.amount) > Number(availableAmount)) {
      Toast(t`features_assets_withdraw_withdraw_form_510110`)
      return
    }

    if (Number(formData.amount) < Number(minAmount)) {
      Toast(t`features_assets_withdraw_withdraw_form_510111`)
      return
    }

    if (Number(formData.amount) > Number(maxWithdrawAmount)) {
      Toast.info(t`features_assets_withdraw_withdraw_layout_5101238`)
      return
    }

    if (
      Number(remainingWithdrawalAmount) > -1 &&
      Number(
        `${formatNumberDecimal(
          rateFilter({ symbol: formData.coin?.symbol, amount: formData.amount, showUnit: false, rate: 'usd' })
        )}`
      ) > Number(remainingWithdrawalAmount)
    ) {
      setShowWithdrawalLimit(true)
      return
    }

    /**
     * 区块链提币
     * 提币币种≠手续费币种 && 手续费 > 用户手续费币种可用数量
     */
    if (
      withdrawType === AssetsWithdrawTypeEnum.blockchain &&
      formData?.coin.symbol !== feeSymbol &&
      Number(fee) > Number(usrFeeAmount)
    ) {
      Toast(t`features_assets_withdraw_withdraw_layout_510148`)
      return
    }

    setShowConfirm(true)
  }

  const pageContext = usePageContext()

  useEffect(() => {
    const typeId = Number(pageContext?.urlParsed?.search?.type)
    updateWithdrawModule({ withdrawType: page ? AssetsWithdrawTypeEnum.blockchain : typeId })
  }, [])

  useUpdateEffect(() => {}, [useAssetsStore().withdrawModule])

  return (
    <>
      <div
        className={classNames(styles['layout-wrapper'], {
          hidden: showConfirm,
        })}
      >
        <NavBar
          title={
            withdrawType === AssetsWithdrawTypeEnum.blockchain
              ? t`assets.withdraw.title`
              : t`features_assets_common_withdraw_action_index__fswhn4z1k`
          }
          right={
            <Icon
              name="assets_financial_records"
              hasTheme
              className="record-icon"
              onClick={() => link(getAssetsHistoryPageRoutePath())}
            />
          }
        />

        <WithdrawForm onChange={params => updateWithdrawModule({ formData: params })} page={page} />

        {((withdrawType === AssetsWithdrawTypeEnum.blockchain && formData.network?.isWithdraw === 1) ||
          withdrawType === AssetsWithdrawTypeEnum.platform) && (
          <>
            <div className="withdraw-notes">
              {notes.map(note => {
                return (
                  <div className="withdraw-notes-item" key={note}>
                    <Icon name="prompt-symbol" className={'withdraw-notes-icon'} />
                    <span>{note}</span>
                  </div>
                )
              })}
            </div>
            <div className="fixed left-0 bottom-0 w-full">
              <WithdrawActions onSubmit={() => requestWithLoading(onFormSubmit(), 0)} />
            </div>
          </>
        )}
      </div>

      {showConfirm && <WithdrawConfirm onClose={() => setShowConfirm(false)} />}

      <Dialog visible={showWithdrawalLimit} showConfirmButton={false}>
        <div className={styles['limit-dialog-wrapper']}>
          <span className="limit-hint">{`${t`features_assets_withdraw_withdraw_layout_510152`} ${
            amountInfo.remainingWithdrawalAmount || '--'
          } USD`}</span>

          <Button type="primary" className="limit-btn" onClick={() => setShowWithdrawalLimit(false)}>
            {t`user.field.reuse_17`}
          </Button>
        </div>
      </Dialog>
    </>
  )
}
