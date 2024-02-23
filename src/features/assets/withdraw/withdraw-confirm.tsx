import { t } from '@lingui/macro'
import { useRequest } from 'ahooks'
import { FC, useState, useEffect } from 'react'
import { Button, Steps, Toast } from 'react-vant'
import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import { link } from '@/helper/link'
import { IWithdrawFormData } from '@/typings/assets'
import { useAssetsStore } from '@/store/assets/spot'
import { AssetsWithdrawTypeEnum } from '@/constants/assets'
import {
  AssetsWithdrawSubmitReq,
  ISafeVerifySendWithdrawalDataProps,
  WithdrawAddressListResp,
} from '@/typings/api/assets/assets'
import { postAddWithdrawAddress, postWithdrawSubmit } from '@/apis/assets/withdraw'
import UniversalSecurityVerification from '@/features/user/universal-security-verification'
import { UserSendValidateCodeBusinessTypeEnum } from '@/constants/user'
import { formatDate } from '@/helper/date'
import { requestWithLoading } from '@/helper/order'
import { onVerifyAddress } from '@/helper/assets/spot'
import { useUserStore } from '@/store/user'
import uuidGen from '@/helper/uuid'
import styles from './withdraw.module.css'

function getDisplayInfos(type: AssetsWithdrawTypeEnum, data: IWithdrawFormData, fee: string, feeCoinName: string) {
  const displayInfos = [
    {
      name: t`assets.withdraw.confirm.coin`,
      value: data.coin.symbol,
      show: true,
    },
    {
      name: t`assets.withdraw.form.count.label`,
      value: data.amount,
      show: true,
    },
    {
      name: t`assets.withdraw.confirm.network`,
      value: data.network.mainnet,
      show: type === AssetsWithdrawTypeEnum.blockchain,
    },
    {
      name: t`assets.withdraw.form.address.label`,
      value: data.address,
      show: type === AssetsWithdrawTypeEnum.blockchain,
    },
    {
      name: t`assets.withdraw.confirm.memo`,
      value: data.memo,
      show: type === AssetsWithdrawTypeEnum.blockchain && data.network?.isUseMemo === 1,
    },
    {
      name: t`assets.withdraw.confirm.charge`,
      value: `${fee} ${feeCoinName}`,
      show: type === AssetsWithdrawTypeEnum.blockchain,
    },
  ]

  return displayInfos
}
function getSteps(type: AssetsWithdrawTypeEnum, submitTime, estimatedFinishTime) {
  const steps = [
    {
      time: `${formatDate(submitTime, 'YYYY-MM-DD HH:mm')}`,
      message:
        type === AssetsWithdrawTypeEnum.blockchain
          ? t`assets.withdraw.success.step-1`
          : t`features_assets_withdraw_withdraw_confirm_2yclxwp_e5urcqkmavccc`,
    },
    {
      time: `${formatDate(estimatedFinishTime, 'YYYY-MM-DD HH:mm')}`,
      message: t`assets.withdraw.success.step-2`,
    },
  ]

  return steps
}

/**
 * 提现结果组件
 */
function WithdrawSuccess() {
  const {
    formData: { amount, coin: { symbol = '' } = {} } = {},
    withdrawResult,
    withdrawType,
  } = useAssetsStore().withdrawModule
  const steps = getSteps(withdrawType, withdrawResult?.submitTime, withdrawResult?.estimatedFinishTime)

  return (
    <div className={styles['withdraw-confirm-success']}>
      <NavBar title={t`assets.withdraw.success.title`} />
      <Icon name="success_icon" isRemoteUrl className="confirm-icon" />
      <div className="hint">{t`assets.withdraw.success.message`}</div>
      <div className="coin-info">
        <div className="info-name">{t`assets.withdraw.form.count.label`}</div>
        <div className="info-value">{`${amount} ${symbol}`}</div>
      </div>
      <Steps
        direction="vertical"
        activeIcon={<Icon name="steps_indicator_active" />}
        inactiveIcon={<Icon name="steps_indicator" hasTheme />}
      >
        {steps.map(step => {
          return (
            <Steps.Item key={step.time}>
              <div className="text-sm">{step.time}</div>
              <div className="text-sm">{step.message}</div>
            </Steps.Item>
          )
        })}
      </Steps>
      <div className={styles['bottom-action-wrapper']}>
        <Button type="primary" className="w-full rounded" onClick={() => link('/')}>
          {t`assets.withdraw.success.view-assets`}
        </Button>
      </div>
    </div>
  )
}

/**
 * 提现信息确认组件
 */
function WithdrawConfirmInfo({ onSuccess, onClose }: { onSuccess: () => void; onClose: () => void }) {
  const { updateWithdrawModule } = useAssetsStore().withdrawModule
  const {
    nickName,
    addressList,
    formData,
    withdrawType,
    amountInfo: { fee = '', feeCoinName = '' } = {},
  } = useAssetsStore().withdrawModule
  const { uid: userUid } = useUserStore().userInfo || {}
  const [isSaveAddress, setIsSaveAddress] = useState(false)
  const [isSelectAddress, setIsSelectAddress] = useState(true)
  const [uuid, setUuid] = useState('')

  const [isShowVerification, setIsShowVerification] = useState(false)
  const { run: submit, loading } = useRequest(
    async () => {
      if (isSaveAddress) {
        // 添加常用地址不影响后续操作
        await postAddWithdrawAddress({ address: formData.address })
      }

      const params: AssetsWithdrawSubmitReq = {
        coinId: formData.network?.id,
        symbol: formData.network?.symbol,
        type: withdrawType,
        amount: Number(formData.amount),
        address: formData.address,
        memo: formData.memo,
        uid: formData.uid,
        uuid,
      }

      if (!formData.address) {
        delete params.address
      }

      if (!formData.memo) {
        delete params.memo
      }

      if (!formData.uid) {
        delete params.uid
      }

      const resp = await requestWithLoading(postWithdrawSubmit(params), 0)
      const { isOk, data, message = '' } = resp || {}

      if (!isOk || !data) return

      if (!data?.isSuccess) {
        Toast(message)
        return
      }

      updateWithdrawModule({ withdrawResult: data })
      onSuccess()
    },
    {
      manual: true,
    }
  )
  const displayInfos = getDisplayInfos(withdrawType, formData, fee, feeCoinName)

  /** 提币 - 发送验证码安全验证 */
  const safeVerifyWithdrawalData: ISafeVerifySendWithdrawalDataProps = {
    currencyCode: formData.coin?.coinName || '',
    quantity: formData?.amount,
    address: formData?.address || formData?.uid,
    memo: formData?.memo,
  }

  useEffect(() => {
    if (withdrawType === AssetsWithdrawTypeEnum.blockchain && addressList.length < 10) {
      for (let index = 0; index < addressList.length; index += 1) {
        const addressItem: WithdrawAddressListResp = addressList[index]

        if (formData.address === addressItem.address) {
          setIsSelectAddress(false)
          break
        }
      }
    }

    const newUuid = `${userUid}-${formData.network?.symbol}-${formData.amount}-${uuidGen()}`
    setUuid(newUuid)
  }, [])

  return (
    <div className={styles['withdraw-confirm-wrapper']}>
      <NavBar title={t`assets.withdraw.confirm.title`} onClickLeft={onClose} />
      <div className="p-4">
        <div className="info-list-wrapper">
          <table className="w-full">
            <tbody>
              {displayInfos.map(item => {
                if (!item.show) return
                return (
                  <tr key={item.name} className="info-item">
                    <td className="name">{item.name}</td>
                    <td className="value">{item.value}</td>
                  </tr>
                )
              })}

              {withdrawType === AssetsWithdrawTypeEnum.platform && (
                <tr className="info-item mt-4">
                  <td className="name">{t`features/assets/withdraw/withdraw-form-0`}</td>
                  <td className="value flex items-center">
                    <div
                      onClick={() => {
                        Toast(
                          `${
                            nickName
                              ? `${t`features_assets_withdraw_withdraw_confirm_510158`} ${nickName}`
                              : t`user.personal_center_01`
                          }`
                        )
                      }}
                    >
                      <span className="uid">{formData.uid}</span>
                      <Icon className="uid-icon" name="payee_uid" hasTheme />
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className="note-item">
          <Icon name="prompt-symbol" className="note-icon" />
          <p>{`${
            withdrawType === AssetsWithdrawTypeEnum.blockchain
              ? t`assets.withdraw.confirm.note-1`
              : t`features_assets_withdraw_withdraw_confirm_510106`
          }`}</p>
        </div>
        <div className="note-item">
          <Icon name="prompt-symbol" className="note-icon" />
          <p>{t`assets.withdraw.confirm.note-2`}</p>
        </div>
      </div>
      <div className={`${styles['bottom-action-wrapper']}`}>
        {withdrawType === AssetsWithdrawTypeEnum.blockchain && isSelectAddress && (
          <div className="save-address">
            <Icon
              name={isSaveAddress ? 'login_verify_selected' : 'login_verify_unselected'}
              hasTheme={!isSaveAddress}
              className="save-address-icon"
              onClick={() => {
                setIsSaveAddress(!isSaveAddress)
              }}
            />
            <span>{t`features_assets_withdraw_withdraw_confirm_510107`}</span>
          </div>
        )}

        <Button
          type="primary"
          className="withdraw-confirm-btn"
          loading={loading}
          onClick={async () => {
            if (
              withdrawType === AssetsWithdrawTypeEnum.blockchain &&
              !(await onVerifyAddress(formData.network?.symbol, formData.address))
            ) {
              Toast.info(t`features_assets_withdraw_withdraw_form_510113`)

              return
            }
            setIsShowVerification(true)
          }}
        >
          {t`common.confirm`}
        </Button>
      </div>

      <UniversalSecurityVerification
        isShow={isShowVerification}
        businessType={UserSendValidateCodeBusinessTypeEnum.withdraw}
        withdrawalData={safeVerifyWithdrawalData}
        onSuccess={(isSuccess: boolean) => {
          if (isSuccess) submit()
        }}
        onClose={() => {
          setIsShowVerification(false)
        }}
      />
    </div>
  )
}

export const WithdrawConfirm: FC<{
  onClose: () => void
}> = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false)

  return submitted ? (
    <WithdrawSuccess />
  ) : (
    <WithdrawConfirmInfo onClose={onClose} onSuccess={() => setSubmitted(true)} />
  )
}
