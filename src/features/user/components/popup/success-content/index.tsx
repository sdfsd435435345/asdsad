import { Button } from 'react-vant'
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import styles from './index.module.css'

interface UserSuccessContentProps {
  /** 按钮文本 */
  buttonText?: string
  /** slot 插槽 支持 a, p, label 标签 */
  slotContent: React.ReactNode
  /** 跳转函数 */
  onLink: () => void
}

function UserSuccessContent({ buttonText, slotContent, onLink }: UserSuccessContentProps) {
  return (
    <div className={styles.scoped}>
      <div className="success-info">
        <div className="icon">
          <Icon name="success_icon" isRemoteUrl />
        </div>
        <div className="title">{slotContent}</div>
        <Button type="primary" onClick={onLink}>
          {buttonText || t`user.retrieve.reset_success_02`}
        </Button>
      </div>
    </div>
  )
}

export default UserSuccessContent
