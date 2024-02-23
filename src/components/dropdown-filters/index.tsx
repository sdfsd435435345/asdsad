import { ReactNode, forwardRef, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import { useUpdateEffect } from 'ahooks'
import styles from './index.module.css'
import Icon from '../icon'

export type IDropdownFiltersOption = {
  /** 展示标签，默认展示，有值后展示对应值的标签 */
  label: ReactNode
  getLabel?: () => ReactNode
  /** 自定义弹窗内容 */
  popup?: ReactNode
}

export type IDropdownFiltersProps = {
  rightExtra?: ReactNode
  options: IDropdownFiltersOption[]
  onVisibleChange?: (visible: boolean) => void
}
export type IDropdownFiltersInstance = {
  close: () => void
  expandItem: (index: number) => void
}

type IDropdownFiltersPopupProps = {
  children?: ReactNode
  rect: DOMRect
  visible: boolean
  onClose: () => void
}
function DropdownFiltersPopup(props: IDropdownFiltersPopupProps) {
  return createPortal(
    <div
      className={classNames(styles['dropdown-filters-popup-wrapper'], 'text-sm text-leading-1-5', {
        hidden: !props.visible,
      })}
      style={{
        top: `${props.rect.bottom}px`,
        height: `calc(var(--vh100) - ${props.rect.bottom}px)`,
      }}
    >
      <div className="content">{props.children}</div>
      <div className="mask" onClick={props.onClose}></div>
    </div>,
    document.body
  )
}
/** 支持自定义弹窗的下拉，不提供 onChange 等事件 */
function DropdownFilters(props: IDropdownFiltersProps, ref) {
  const [expandIndex, setExpandIndex] = useState(-1)
  const wrapperRef = useRef<HTMLDivElement>(null)
  // 暂时就只支持自定义筛选，通用的后面遇到了再说
  const [wrapperRect, setWrapperRect] = useState({
    bottom: 0,
  } as any as DOMRect)

  useEffect(() => {
    if (wrapperRef.current) {
      setWrapperRect(wrapperRef.current.getBoundingClientRect())
    }
  }, [expandIndex])
  const currentOption = props.options[expandIndex]
  if (ref) {
    ref.current = {
      close: () => {
        setExpandIndex(-1)
      },
      expandItem: (index: number) => {
        setExpandIndex(index)
      },
    }
  }

  useUpdateEffect(() => {
    props.onVisibleChange?.(expandIndex !== -1)
  }, [expandIndex])

  return (
    <div ref={wrapperRef} className={styles['dropdown-filters-wrapper']}>
      <div className="left">
        {props.options.map((option, index) => {
          const isActive = expandIndex === index
          return (
            <div
              key={index}
              className={classNames('filter-item', {
                'is-active': isActive,
              })}
              onClick={() => setExpandIndex(isActive ? -1 : index)}
            >
              <div className="label">{option.getLabel ? option.getLabel() : option.label}</div>
              <Icon
                hiddenMarginTop
                className="icon"
                name={isActive ? 'regsiter_icon_drop_white_hover' : 'regsiter_icon_drop'}
                hasTheme={!isActive}
              />
            </div>
          )
        })}
      </div>
      {props.rightExtra && <div className="right-extra">{props.rightExtra}</div>}
      <DropdownFiltersPopup rect={wrapperRect} visible={expandIndex !== -1} onClose={() => setExpandIndex(-1)}>
        {currentOption?.popup}
      </DropdownFiltersPopup>
    </div>
  )
}

export default forwardRef(DropdownFilters)
