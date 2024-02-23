import Icon from '@/components/icon'

export type IFullTipProps = {
  message: string
}
/**
 * 铺满页面的提示框
 */
function FullTip({ message }: IFullTipProps) {
  return (
    <div className="px-4 py-2 bg-tips_warning_bg_color">
      <div className="flex text-warning_color text-xs">
        <Icon name="msg" className="mr-1 mt-0.5" />
        <div>{message}</div>
      </div>
    </div>
  )
}

export default FullTip
