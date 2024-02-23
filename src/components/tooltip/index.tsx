import { envIsServer } from '@/helper/env'
import { hooks } from 'react-vant'
import { useClickAway } from 'ahooks'
import classNames from 'classnames'
import { MutableRefObject, ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './index.module.css'

/** 目前只考虑这几种 */
type Placement = 'left' | 'right' | 'center'
type ITipNodeProps = {
  children: ReactNode
  placement?: Placement
  inBottom?: boolean
  target?: HTMLDivElement | null
  isLight?: boolean
  tipRef: MutableRefObject<HTMLDivElement | null>
  hasArrow?: boolean
}
function TipNode({
  children,
  hasArrow = true,
  tipRef,
  isLight,
  target,
  inBottom,
  placement = 'center',
}: ITipNodeProps) {
  const targetRect = target?.getBoundingClientRect() || {
    left: 0,
    top: 0,
    bottom: 0,
    width: 0,
    height: 0,
  }
  const contentRef = tipRef
  const windowHeight = envIsServer ? 675 : window.innerHeight
  const windowWidth = envIsServer ? 375 : window.innerWidth
  const [isShow, setIsShow] = useState(false)
  // 在触发 dom 比较小的时候不使用 center 会有显示问题，不过这种情况也只该使用 center
  // 使用 fixed 是为了避免 transform 时被遮挡，但带来的问题是滚动时不会跟随
  // 解决办法是滚动时消失
  function getPosition() {
    const arrowHeight = 4
    const contentGap = 16
    const arrowLeft = targetRect.left + targetRect.width / 2
    const arrowBottom = windowHeight - targetRect.top + 4
    const arrowTop = targetRect.bottom
    const contentRefWidth = contentRef.current?.clientWidth || 0
    let contentLeftWhenCenter = arrowLeft - contentRefWidth / 2
    // 超出右边边界
    if (contentLeftWhenCenter + contentRefWidth + contentGap >= windowWidth) {
      contentLeftWhenCenter = windowWidth - contentRefWidth - contentGap
    }
    // 超出左边界
    if (contentLeftWhenCenter < contentGap) {
      contentLeftWhenCenter = contentGap
    }
    const contentLeft =
      placement === 'left'
        ? targetRect.left
        : placement === 'center' && contentRef.current
        ? contentLeftWhenCenter
        : undefined
    const contentRight = placement === 'right' ? targetRect.left + targetRect.width : undefined
    const contentBottom = inBottom ? undefined : arrowBottom + arrowHeight
    const contentTop = inBottom ? arrowTop + arrowHeight : undefined
    const contentMaxWidth =
      placement === 'center'
        ? windowWidth - contentGap * 2
        : placement === 'left'
        ? windowWidth - contentGap - (contentRight || 0)
        : windowWidth - (contentLeft || 0) - contentGap
    return {
      arrowLeft,
      arrowBottom,
      contentLeft,
      contentRight,
      contentBottom,
      contentMaxWidth,
      contentTop,
      arrowTop,
    }
  }

  const [
    { arrowLeft, arrowTop, contentTop, arrowBottom, contentLeft, contentRight, contentBottom, contentMaxWidth },
    setPosition,
  ] = useState(() => getPosition())
  // 暂不考虑其它属性引起的变化
  useEffect(() => {
    setPosition(getPosition())
    setIsShow(true)
  }, [placement, inBottom])

  if (!target) {
    return null
  }
  return createPortal(
    <div
      className={classNames(styles['tip-wrapper'], {
        'opacity-0': !isShow,
        'is-light': isLight,
      })}
    >
      <div
        className={classNames(
          'arrow',
          {
            hidden: !hasArrow,
          },
          inBottom ? 'arrow-bottom' : 'arrow-top'
        )}
        style={{
          left: arrowLeft,
          bottom: inBottom ? undefined : arrowBottom,
          top: inBottom ? arrowTop : undefined,
        }}
      ></div>
      <div
        className="content"
        ref={contentRef}
        style={{
          left: contentLeft,
          right: contentRight,
          bottom: contentBottom,
          maxWidth: contentMaxWidth,
          top: contentTop,
        }}
      >
        {children}
      </div>
    </div>,
    document.body
  )
}

export type ITooltipProps = {
  children: ReactNode
  content: ReactNode
  className?: string
  placement?: Placement
  inBottom?: boolean
  isLight?: boolean
  hasArrow?: boolean
  onVisibleChange?: (visible: boolean) => void
}
function Tooltip(props: ITooltipProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const tipRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    props.onVisibleChange?.(isOpen)
  }, [isOpen])
  useClickAway(
    () => {
      setIsOpen(false)
    },
    [containerRef, tipRef],
    // click 事件可能会被子元素阻止冒泡，同时滚动时消失，避免重新计算定位
    ['touchstart', 'click', 'mousedown']
  )
  return (
    <div ref={containerRef} onClick={() => setIsOpen(!isOpen)} className={props.className}>
      {props.children}
      {isOpen && (
        <TipNode
          isLight={props.isLight}
          inBottom={props.inBottom}
          target={containerRef.current}
          placement={props.placement}
          tipRef={tipRef}
          hasArrow={props.hasArrow}
        >
          {props.content}
        </TipNode>
      )}
    </div>
  )
}

export default Tooltip
