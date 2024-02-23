/**
 * 资产 - 提现地址操作指引
 */
import { t } from '@lingui/macro'
import { OSSDOMAIN_IMAGE } from '@/constants/assets'
import { IntroSteps } from '@/components/intro-js/intro-steps'
import { useEffect, useState } from 'react'
import { Step } from 'intro.js-react'
import { WithdrawAddressListResp } from '@/typings/api/assets/assets'
import { useBaseGuideMapStore } from '@/store/server'
import { GuideMapEnum, GuideMapShowEnum } from '@/constants/common'
import styles from './index.module.css'

interface IWithdrawAddressIntroProps {
  list: WithdrawAddressListResp[]
}

function WithdrawAddressIntro(props: IWithdrawAddressIntroProps) {
  const { list } = props || {}
  const [stepEnabled, setStepEnabled] = useState(false)
  const { guideMap, postGuideMapUpdate } = useBaseGuideMapStore()

  useEffect(() => {
    guideMap?.asset_withdrawal_address_management === GuideMapShowEnum.yes && list.length > 0 && setStepEnabled(true)
  }, [guideMap, list])

  const onExit = () => {
    postGuideMapUpdate(GuideMapEnum.assetWithdrawalAddressManagement)
    setStepEnabled(false)
  }

  const steps: Step[] = [
    {
      element: `#page-content > div > div.address-list > div:nth-child(1)`,
      intro: (
        <div className={styles['withdraw-address-intro-root']}>
          <div className="content-img">
            <img alt="" src={`${OSSDOMAIN_IMAGE}withdrawal_address_list_arrow.svg`} width={94} height={23} />
            <img
              alt=""
              src={`${OSSDOMAIN_IMAGE}withdrawal_address_list_guide.svg`}
              width={26}
              height={34}
              style={{ marginRight: '30px', marginTop: '4px' }}
            />
          </div>

          <div className="hint-text">{t`features_assets_withdraw_address_withdraw_address_510163`}</div>
        </div>
      ),
      position: 'bottom',
    },
  ]

  return (
    <IntroSteps
      steps={steps}
      stepEnabled={stepEnabled}
      onExit={onExit}
      tooltipClassCustom={styles['introjs-tooltip-custom']}
      highlightClassCustom={styles['introjs-highlight-custom']}
      options={{
        showButtons: true,
        showBullets: false,
        showProgress: false,
        helperElementPadding: 0,
        doneLabel: t`features_assets_withdraw_address_withdraw_address_510164`,
        exitOnOverlayClick: false,
      }}
    />
  )
}

export { WithdrawAddressIntro }
