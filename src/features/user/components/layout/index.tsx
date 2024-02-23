import { ReactNode } from 'react'
import NavBar from '@/components/navbar'
import styles from './index.module.css'

interface UserLayoutProps {
  /** 页面组件 */
  content: ReactNode
  /** 标题 */
  title?: string
}

function UserLayout({ content, title }: UserLayoutProps) {
  return (
    <div className={`user-layout ${styles.scoped}`}>
      <div className="user-layout-wrap">
        <NavBar title={title} />
        {content}
      </div>
    </div>
  )
}

export default UserLayout
