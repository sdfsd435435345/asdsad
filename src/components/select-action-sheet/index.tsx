import { t } from '@lingui/macro'
import classNames from 'classnames'
import { HTMLAttributes, ReactNode, useState } from 'react'
import { ActionSheet, ActionSheetProps } from 'react-vant'
import { ActionSheetAction } from 'react-vant/es/action-sheet/PropsType'
import Icon from '../icon'
import styles from './index.module.css'
import { OnlyOneActionSheet } from '../only-one-overlay'

export type ISelectActionSheetProps<T> = {
  label?: string
  actions?: (ActionSheetAction & {
    value?: T
    nameInLabel?: ReactNode
  })[]
  onChange?: (value: T) => void
  /** 自定义触发元素，可以置为 null 来不显示 */
  triggerElement?: ReactNode
  title?: ReactNode
  desc?: ReactNode
  defaultVisible?: boolean
  value?: any
  onCancel?: () => void
  actionSheetElement?: ReactNode
  cartIcon?: ReactNode
  originProps?: ActionSheetProps
  labelClassName?: string
  customHeaderClassName?: string
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'title' | 'actions'>

export function SelectActionSheet<T>({
  label,
  value,
  actions = [],
  className,
  onChange,
  triggerElement,
  actionSheetElement,
  title,
  desc,
  defaultVisible = false,
  onCancel,
  cartIcon,
  originProps = {},
  labelClassName,
  customHeaderClassName,
}: ISelectActionSheetProps<T>) {
  const [visible, setVisible] = useState(defaultVisible)
  const onClickCancel = () => {
    setVisible(false)
    onCancel?.()
  }
  const displayActions: ActionSheetProps['actions'] = actions.map(action => {
    return {
      ...action,
      className: classNames({
        'selected-action': value === action.value,
      }),
    }
  })
  const selectedAction = actions.find(action => action.value === value)
  const onSelect = (action: any) => {
    onChange?.(action.value)
    setVisible(false)
  }

  return (
    <>
      {triggerElement !== undefined ? (
        <div
          className={className}
          onClick={() => {
            setVisible(true)
          }}
        >
          {triggerElement}
        </div>
      ) : (
        <div className={classNames(styles['select-action-sheet-wrapper'], className)}>
          <div
            className="flex items-center justify-between"
            onClick={() => {
              setVisible(true)
            }}
          >
            <div
              className={classNames('label', labelClassName, {
                'only-name': !label,
              })}
            >
              {label && (
                <span>
                  <span>{label}</span>:&nbsp;
                </span>
              )}
              <span>{selectedAction?.nameInLabel || selectedAction?.name}</span>
            </div>
            {cartIcon || <Icon name="regsiter_icon_drop" className="text-xs scale-75 translate-y-px" hasTheme />}
          </div>
        </div>
      )}
      <OnlyOneActionSheet
        className={styles['actions-sheet-wrapper']}
        onSelect={onSelect}
        visible={visible}
        onCancel={onClickCancel}
        closeable={false}
        {...originProps}
        title={
          (title || desc) && (
            <div className={`custom-header ${customHeaderClassName}`}>
              <div className="title">{title}</div>
              <div className="desc">{desc}</div>
            </div>
          )
        }
        actions={displayActions}
        cancelText={t`common.modal.cancel`}
      >
        {actionSheetElement && actionSheetElement}
      </OnlyOneActionSheet>
    </>
  )
}
