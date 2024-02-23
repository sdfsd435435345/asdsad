import 'intro.js/introjs.css'
import { Steps, StepsProps } from 'intro.js-react'
import classNames from 'classnames'
import styles from './index.module.css'

type IProps = Omit<StepsProps, 'initialStep'> & {
  initialStep?: number
  stepEnabled: boolean
  onStartCallback?: () => void
  /**
   * 需使用 style 引入。作用于所有 steps 的样式。
   */
  highlightClassCustom?: string
  tooltipClassCustom?: string
  onChange?: (e?: number) => void
}

/**
 * 更多注解参考此 commit：https://gitlab.nbttfc365.com/fe/newbit/newbit-h5/-/merge_requests/848#939cf66f2e7f8fe778342cfc10498276ac0dccd7
 */
export function IntroSteps({ stepEnabled, steps, onExit, onChange, initialStep = 0, ...rest }: IProps) {
  return (
    <Steps
      enabled={stepEnabled}
      steps={steps}
      initialStep={initialStep}
      onExit={onExit}
      onStart={() => {
        rest.onStartCallback && rest.onStartCallback()
      }}
      /**
       * @doc https://introjs.com/docs/intro/options
       */
      options={{
        ...(rest.options ? rest.options : {}),

        highlightClass: classNames(styles['introjs-helperLayer-custom-default'], {
          [rest.highlightClassCustom || '']: !!rest.highlightClassCustom,
        }),
        tooltipClass: classNames(styles['introjs-tooltip-custom-default'], {
          [rest.tooltipClassCustom || '']: !!rest.tooltipClassCustom,
        }),
      }}
      onChange={onChange && onChange}
    />
  )
}
