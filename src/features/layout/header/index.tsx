import { getBusinessName } from '@/helper/common'
import { link } from '@/helper/link'
import styles from './index.module.css'
import LoginInfo from './login-info'
import IconBar from './icon-bar'

export default Header

function Header({ isShow }) {
  if (!isShow) return null

  return (
    <div className={styles.scoped}>
      <div className="flex flex-row h-11 text-center relative">
        <span onClick={() => link('/')} className="header-title">
          {getBusinessName()}
        </span>
        <IconBar noSearchBar />
        {/* <div className="flex items-center justify-between header-content">
        <LoginInfo />
        <IconBar />
        {/* <div className="text-nc_01 link">
          {!isLogin && (
            <>
              <Link href="/login">登录</Link>
              <Link href="/register">注册</Link>
            </>
          )}
        </div> */}
      </div>
    </div>
  )
}
