import { Popup } from 'react-vant'
import styles from './index.module.css'

export default UserCenter

function UserCenter({ visible, onClose }) {
  return (
    <div className={styles.scoped}>
      <Popup visible={visible} style={{ width: '100%', height: '100%' }} position="left">
        <div className="p-4">
          <div onClick={() => onClose()}>点我关闭</div>
        </div>
      </Popup>
    </div>
  )
}
