/**
 * 资产 - 提币方式弹窗组件
 */
import { SelectActionSheet } from '@/components/select-action-sheet'
import { AssetsWithdrawTypeEnum } from '@/constants/assets'
import { link } from '@/helper/link'
import { t } from '@lingui/macro'
import { ReactNode, useState } from 'react'
import { Toast } from 'react-vant'
import { getWithdrawVerify } from '@/apis/assets/common'
import UserPopUp from '@/features/user/components/popup'
import UserPopupContent from '@/features/user/components/popup/content'
import { baseLayoutStore, useLayoutStore } from '@/store/layout'
import { getAssetsWithdrawPageRoutePath } from '@/helper/route'

function getWithdrawTypes() {
  const withdrawTypes = [
    {
      name: t`features_assets_common_withdraw_action_index__fswhn4z1k`,
      value: AssetsWithdrawTypeEnum.platform,
    },
    {
      name: t`features_assets_common_withdraw_action_index_lagvehztlc`,
      value: AssetsWithdrawTypeEnum.blockchain,
    },
  ]
  return withdrawTypes
}

function WithdrawAction({ children, coinId, symbol }: { children: ReactNode; coinId?: string; symbol?: string }) {
  const { headerData } = useLayoutStore()
  const navigate = link
  const withdrawTypes = getWithdrawTypes()
  const [isShow, setIsShow] = useState(false)

  /**
   * 提币前校验
   */
  const onCheck = async () => {
    const res = await getWithdrawVerify({})
    const { isOk, data: { errMsg = '', isOpenSafeVerify = false, isSuccess = false } = {}, message = '' } = res || {}

    if (!isOk) {
      Toast(message)
      return false
    }

    // if (!isSuccess) {
    //   Toast(errMsg)
    //   return false
    // }

    if (!isOpenSafeVerify) {
      // 展示其用安全验证提示弹窗
      setIsShow(true)
      return false
    }

    return true
  }

  /**
   * 选择提币方式
   * @param withdrawType
   * @returns
   */
  const onSelectType = async (withdrawType: any) => {
    const isCheck = await onCheck()
    if (!isCheck) {
      return
    }

    navigate(getAssetsWithdrawPageRoutePath({ type: withdrawType, symbol }))
  }

  return (
    <>
      <SelectActionSheet
        className="flex-1"
        triggerElement={children}
        value={withdrawTypes[0].value}
        actions={withdrawTypes}
        onChange={onSelectType}
        title={t`assets.common.withdraw-select.title`}
        desc={t({
          id: 'features_assets_common_withdraw_action_index_5101287',
          values: { 0: headerData?.businessName },
        })}
      />

      <UserPopUp
        visible={isShow}
        onClose={() => setIsShow(false)}
        slotContent={
          <UserPopupContent
            content={
              <>
                <p>{t`user.universal_security_verification_07`}</p>
                <p>{t`user.universal_security_verification_09`}</p>
                <p>{t`user.universal_security_verification_10`}</p>
                <p>{t`user.universal_security_verification_11`}</p>
              </>
            }
            rightButtonText={t`user.universal_security_verification_08`}
            onClose={() => setIsShow(false)}
            onContinue={() => {
              setIsShow(false)
              link('/personal-center/account-security')
            }}
          />
        }
      />
    </>
  )
}

export default WithdrawAction
