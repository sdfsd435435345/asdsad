// import React from 'react'
// import Icon from '@/components/icon'
import { UserSelectConfigurationItemType } from '@/typings/api/user'
import styles from './index.module.css'

function UserSelectConfigurationItem({
  list,
  onClose,
  settingOptions,
}: {
  list: Array<UserSelectConfigurationItemType>
  onClose?: () => void
  settingOptions: (row: UserSelectConfigurationItemType) => void
}) {
  const handleChecked = (row: UserSelectConfigurationItemType) => {
    settingOptions(row)
    onClose && onClose()
  }
  return (
    <div className={`select-item ${styles.scoped}`}>
      <div className="select-item-wrap">
        {list.map((v, index) => (
          <div className={`cell ${v.isChecked && 'is-checked'}`} key={index} onClick={() => handleChecked(v)}>
            {v.icon && <div className="icon">{v.icon}</div>}
            <div className="text">
              <label>{v.text}</label>
            </div>
            {/* <div className="checked">{v.isChecked ? <Icon name="choose-language_selected" /> : null}</div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserSelectConfigurationItem
