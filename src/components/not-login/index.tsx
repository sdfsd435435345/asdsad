import { useUserStore } from '@/store/user'
import classNames from 'classnames'
import { ReactNode } from 'react'

export type INotLoginProps = {
  children?: ReactNode
  className?: string
  notLoginNode?: ReactNode
}
/**
 * 未登录组件，未登录会展示登录提示，已登录正常展示组件内容
 */
function NotLogin({ children, className, notLoginNode }: INotLoginProps) {
  const userState = useUserStore()
  const isLogin = userState.isLogin
  if (isLogin) {
    return children! as JSX.Element
  }
  return <div className={classNames(className)}>{notLoginNode || <div></div>}</div>
}

export default NotLogin
