import Icon from '@/components/icon'
import { OnlyOneActionSheet } from '@/components/only-one-overlay'
import { link } from '@/helper/link'
import { usePageContext } from '@/hooks/use-page-context'
import { t } from '@lingui/macro'
import classNames from 'classnames'
import { useState } from 'react'
import { getC2cFastTradePageRoutePath, getC2cThirdTradePageRoutePath, getC2cTradePageRoutePath } from '@/helper/route'
import { useC2CCenterStore } from '@/store/c2c/center'
import { useMount } from 'ahooks'

export function SwitchTradeMode() {
  const { getOTCStatus, isOpenOTC } = useC2CCenterStore()

  const [selectedMode, setSelectedMode] = useState()
  const [visible, setVisible] = useState(false)
  const modes = [
    {
      name: t`features_assets_overview_c2c_overview_knro0veozagstcy9ungh3`,
      icon: 'icon_equity_recharge_black',
      desc: t`features_c2c_trade_switch_trade_mode_p85le0vah1u1irfnwhhgq`,
      value: getC2cFastTradePageRoutePath(),
    },
    {
      name: t`features_c2c_trade_index_25101626`,
      icon: 'c2c_transaction_black',
      desc: t`features_c2c_trade_switch_trade_mode_43eggsslz0lgnlyl8q8z3`,
      value: getC2cTradePageRoutePath(),
    },
    isOpenOTC
      ? {
          name: t`features_c2c_trade_switch_trade_mode_0wuqc5nstq`,
          icon: 'icon_equity_third_black',
          desc: t`features_c2c_trade_switch_trade_mode_od9tw3uoco`,
          value: getC2cThirdTradePageRoutePath(),
        }
      : null,
  ].filter(i => i !== null) as any

  useMount(() => {
    getOTCStatus()
  })
  const selectedModeItem = modes.find(mode => mode.value === selectedMode)
  const onModeChange = (value: string) => {
    setVisible(false)
    link(value, {
      overwriteLastHistoryEntry: true,
    })
  }

  return (
    <div className="flex justify-center">
      <div className="flex items-center text-base" onClick={() => setVisible(true)}>
        {selectedModeItem?.name}{' '}
        <Icon name="regsiter_icon_drop" className="text-xs scale-75 translate-y-px ml-0.5" hasTheme />
      </div>
      <OnlyOneActionSheet onClose={() => setVisible(false)} closeOnClickOverlay visible={visible}>
        <div className="text-text_color_01">
          <div className="flex items-center justify-between p-4 pb-2">
            <div className="text-base font-medium">{t`features_c2c_trade_switch_trade_mode_bd1mgvrlll-wwhbyqgjlr`}</div>
            <Icon hasTheme name="close" className="text-xl" onClick={() => setVisible(false)} />
          </div>
          <div className="mb-4">
            {modes.map(mode => (
              <div
                key={mode.value}
                className="flex items-center p-4"
                onClick={() => {
                  onModeChange(mode.value)
                }}
              >
                <Icon name={mode.icon} className="mr-4 text-2xl" />
                <div className="">
                  <div
                    className={classNames('text-base font-medium mb-1', {
                      // 'text-brand_color': mode.value === selectedMode,
                    })}
                  >
                    {mode.name}
                  </div>
                  <div className="text-xs text-text_color_02">{mode.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </OnlyOneActionSheet>
    </div>
  )
}
