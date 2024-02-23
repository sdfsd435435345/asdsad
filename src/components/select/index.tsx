import cn from 'classnames'
import { Warning, ArrowUp, ArrowDown } from '@react-vant/icons'
import { DropdownMenu } from 'react-vant'

import { useEffect, useState } from 'react'
import styles from './index.module.css'

export default Select

function Select({ showTip = true, onTipClick, overlay = false, ...props }: any) {
  const [open, setOpen] = useState(false)
  const { options = [], value } = props

  const handleChange = helpText => {
    setTimeout(() => {
      const el = document.getElementsByClassName('rv-dropdown-menu__title')
      el.length && el[0].setAttribute('data-after', helpText)
    }, 500)
  }

  useEffect(() => {
    const helpText = options.length ? options.find(i => i.value === value.value)?.help : ''
    if (!helpText) return
    handleChange(helpText)
  }, [value, options])

  return (
    <div className={cn(styles.scoped)}>
      {showTip && (
        <div className="tip" onClick={onTipClick}>
          <Warning />
        </div>
      )}
      <DropdownMenu
        {...props}
        overlay={overlay}
        onOpen={() => {
          setOpen(true)
        }}
        onClose={() => {
          setOpen(false)
        }}
      />
      <div className="arrow-icon">{open ? <ArrowUp /> : <ArrowDown />}</div>
    </div>
  )
}
Select.Item = DropdownMenu.Item
