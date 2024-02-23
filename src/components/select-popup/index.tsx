import { useState } from 'react'
import { Popup, Button } from 'react-vant'
import { Cross, Arrow } from '@react-vant/icons'
import styles from './index.module.css'

export default SelectPopup

function SelectPopup({ label = '', title = '标题', showConfirm = true, children, onConfirm, width = 100 }) {
  const [visible, setVisible] = useState(false)

  const onClose = () => {
    setVisible(false)
  }

  return (
    <div className={styles.scoped}>
      <div className="trigger" onClick={() => setVisible(true)} style={{ width: `${width}px` }}>
        <span>{label}</span>
        <Arrow />
      </div>
      <Popup visible={visible} onClose={onClose} style={{ height: '40%' }} position="bottom">
        <div className={styles.content} style={{ padding: '12px' }}>
          <div className="title">{title}</div>
          <div className="close" onClick={onClose}>
            <Cross fontSize="20px" />
          </div>
          {children}
          {showConfirm && (
            <div className="confirm-btn">
              <Button type="primary" onClick={onConfirm}>
                确认
              </Button>
            </div>
          )}
        </div>
      </Popup>
    </div>
  )
}
