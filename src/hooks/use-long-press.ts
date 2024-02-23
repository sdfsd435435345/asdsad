interface ILongPressEventsProps {
  onStartCallback: (
    event: React.TouchEvent<HTMLDivElement | HTMLTextAreaElement | HTMLInputElement>['nativeEvent']['target']
  ) => void
  onEndCallback?: (
    event: React.TouchEvent<HTMLDivElement | HTMLTextAreaElement | HTMLInputElement>['nativeEvent']['target']
  ) => void
  ms?: number
}

type ILongPressStartMethod = (event: React.TouchEvent) => NodeJS.Timeout
type ILongPressEndMethod = (event: React.TouchEvent) => void

interface RLongPressEventsReturnTypes {
  onTouchStart: ILongPressStartMethod
  onTouchMove: ILongPressEndMethod
  onTouchEnd: ILongPressEndMethod
}

export function useLongPress({
  onStartCallback,
  onEndCallback,
  ms = 1000,
}: ILongPressEventsProps): RLongPressEventsReturnTypes {
  let timeout: NodeJS.Timeout
  let target: EventTarget | null

  const start: ILongPressStartMethod = event => {
    if (event.nativeEvent instanceof TouchEvent) target = event.nativeEvent.target
    return (timeout = setTimeout(() => onStartCallback(target), ms))
  }
  const stop: ILongPressEndMethod = event => {
    timeout && clearTimeout(timeout) // 合成事件，要先 clear，否则报 warning
    // 下边的其实可以不用，如果不需要结束回调的话
    if (event.nativeEvent instanceof TouchEvent) target = event.nativeEvent.target
    onEndCallback?.(target)
  }

  return {
    onTouchStart: start,
    onTouchMove: stop,
    onTouchEnd: stop,
  }
}
