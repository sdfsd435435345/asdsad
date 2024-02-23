import classNames from 'classnames'
import Icon from '../icon'

/** 提示 icon，因为大小比较特殊，所以单独抽出一个组件 */
function PromptIcon({ className = 'scale-50' }) {
  return <Icon hiddenMarginTop name="prompt-symbol" className={classNames('text-xs origin-left ', className)} />
}

export default PromptIcon
