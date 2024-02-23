import { IntroSteps } from '@/components/intro-js/intro-steps'
import { ApiStatusEnum } from '@/constants/market/market-list'
import { t } from '@lingui/macro'
import { Step } from 'intro.js-react'
import { isEmpty } from 'lodash'
import DynamicLottie from '@/components/dynamic-lottie'
import { LottieRef } from 'lottie-react'
import { useState, useEffect, useRef } from 'react'
import { useCommonStore } from '@/store/common'
import { useBaseGuideMapStore } from '@/store/server'
import { GuideMapEnum } from '@/constants/common'
import styles from './index.module.css'

const animationData = () => import('@/assets/json/market_spot_intro_light.json')
const animationDataDark = () => import('@/assets/json/market_spot_intro_dark.json')

export default function MarketListSpotIntro({ apiStatus, data }) {
  const { postGuideMapUpdate } = useBaseGuideMapStore()
  const steps: Step[] = [
    {
      element: `table > tbody > tr:nth-child(${data.length >= 3 ? 3 : 1})`,
      intro: <div></div>,
    },
  ]

  const common = useCommonStore()
  const [stepEnabled, setStepEnabled] = useState(true)
  const [stepVisible, setStepVisible] = useState(false)
  const [isAnimationDataLoaded, setOnAnimationDataLoaded] = useState(false)
  const [topOffset, setTopOffset] = useState(0)
  const lottieRef: LottieRef = useRef(null)
  const lottieData = animationDataDark

  useEffect(() => {
    if (apiStatus === ApiStatusEnum.succeed && data.length) {
      setStepVisible(true)
    }
  }, [apiStatus])

  useEffect(() => {
    if (!isAnimationDataLoaded) return

    const node = document.getElementsByClassName('introjs-tooltipReferenceLayer')[0] as any
    const offset = node?.style?.top

    if (offset) {
      setTopOffset(offset)
      setStepVisible(true)
      lottieRef?.current?.play()
    }
  }, [isAnimationDataLoaded, stepVisible])

  const onExit = () => {
    setStepEnabled(false)
    setStepVisible(false)
  }

  const onAck = () => {
    onExit()
    postGuideMapUpdate(GuideMapEnum.marketPage)
  }

  if (isEmpty(data)) return null

  return (
    <>
      <div
        className={`${styles['tooltip-content-wrapper']}`}
        style={{
          top: `calc(${topOffset} + 76px)`,
          display: topOffset && stepVisible ? 'block' : 'none',
        }}
      >
        <div className="row-1">
          <DynamicLottie
            lottieRef={lottieRef}
            animationData={lottieData}
            loop={false}
            autoplay={false}
            onAnimationDataLoaded={res => {
              if (res) {
                setOnAnimationDataLoaded(true)
              }
            }}
          />
        </div>
        <div className="row-2">
          <span className="message">{t`features_market_market_quatation_common_market_list_market_list_table_content_spot_intro_market_spot_index_5101530`}</span>
          <span className="exit-button" onClick={onAck}>{t`features_trade_common_notification_index_5101066`}</span>
        </div>
      </div>

      <IntroSteps
        steps={steps}
        stepEnabled={stepEnabled}
        onExit={onExit}
        tooltipClassCustom={styles['introjs-tooltip-custom']}
        options={{
          showButtons: false,
          showBullets: false,
          showProgress: false,
        }}
      />
    </>
  )
}
