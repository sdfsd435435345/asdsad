import classNames from 'classnames'
import { ReactNode, useState } from 'react'
import Icon from '../icon'
import Tooltip from '../tooltip'

type IOverflowToolTipsProps = {
  nodes: ReactNode[]
  max: number
  className?: string
}

/** 展示数量节点，超出的点击箭头以 tooltip 形式展示 */
function OverflowToolTips({ max, className, nodes }: IOverflowToolTipsProps) {
  const visibleNodes = nodes.slice(0, max)
  const hiddenNodes = nodes.slice(max)
  const tooltipTriggerNodeVisible = hiddenNodes.length > 0
  const [tooltipVisible, setTooltipVisible] = useState(false)

  return (
    <div className={classNames(className, 'flex items-center')}>
      {visibleNodes}
      {tooltipTriggerNodeVisible && (
        <Tooltip
          onVisibleChange={setTooltipVisible}
          isLight
          inBottom
          hasArrow={false}
          placement="center"
          content={<div className="flex flex-col">{hiddenNodes}</div>}
        >
          <Icon
            className={classNames('text-xs scale-75', {
              'rotate-180': tooltipVisible,
            })}
            name="regsiter_icon_drop"
            hasTheme
          />
        </Tooltip>
      )}
    </div>
  )
}

export default OverflowToolTips
