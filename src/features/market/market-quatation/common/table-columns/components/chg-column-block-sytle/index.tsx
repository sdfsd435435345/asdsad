import { formatTradePair } from '@/helper/market'
import { YapiGetV1TradePairListData } from '@/typings/yapi/TradePairListV1GetApi'
import { marketUtils } from '@/nbit'
import styles from './index.module.css'

function ChgColumnBlockStyle({ item }: { item: YapiGetV1TradePairListData }) {
  const bgName = marketUtils.getColorClassByPrice(item.chg)
  // 有背景色的时候始终 text 是白色，没有的时候按照全局背景色变化
  const textName = bgName ? 'text-button_text_01' : 'text-text_color_01'
  const resolvedBgName = bgName?.replace('text', 'bg') || 'bg-bg_sr_color'

  return (
    <div className={`${styles.scoped} ${resolvedBgName}`}>
      <span className={textName}>{formatTradePair(item).chgWithoutColor()}</span>
    </div>
  )
}

export default ChgColumnBlockStyle
