import { useCallback, useRef, useState } from 'react'

interface optionsType {
  shouldPreventDefault: boolean
  delay: number
}
interface useLongPressPros {
  onLongPress(event: Event, custom: any): void
  onClick?(): void
  options: optionsType
}

interface startProps {
  event: Event
  custom?: any
}

interface endProps {
  event: Event
  shouldTriggerClick?: boolean
  custom?: any
}

const isTouchEvent = (event: TouchEvent) => {
  return 'touches' in event
}

const preventDefault = (event: any) => {
  if (!isTouchEvent(event)) return

  if (event.touches.length < 2 && event.preventDefault) {
    event.preventDefault()
  }
}

const useLongPress = ({
  onLongPress,
  onClick,
  options: { shouldPreventDefault = true, delay = 300 },
}: useLongPressPros) => {
  const [longPressTriggered, setLongPressTriggered] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout>>()
  const target = useRef<EventTarget>()

  const start = useCallback(
    ({ event, custom }: startProps) => {
      if (shouldPreventDefault && event.target) {
        event.target.addEventListener('touchend', preventDefault, {
          passive: false,
        })
        target.current = event.target
      }
      timeout.current = setTimeout(() => {
        onLongPress(event, custom)
        setLongPressTriggered(true)
      }, delay)
    },
    [onLongPress, delay, shouldPreventDefault]
  )

  const clear = useCallback(
    ({ event, shouldTriggerClick = true }: endProps) => {
      timeout.current && clearTimeout(timeout.current)
      shouldTriggerClick && !longPressTriggered && onClick && onClick()
      setLongPressTriggered(false)
      if (shouldPreventDefault && target.current) {
        target.current.removeEventListener('touchend', preventDefault)
      }
    },
    [shouldPreventDefault, onClick, longPressTriggered]
  )

  return {
    onMouseDown: (event: Event) => start({ event }),
    onTouchStart: (event: any, custom?: any) => start({ event, custom }),
    onMouseUp: (event: Event) => clear({ event }),
    onMouseLeave: (event: Event, custom?: any) => clear({ event, shouldTriggerClick: false, custom }),
    onTouchEnd: (event: any) => clear({ event }),
  }
}

export default useLongPress
