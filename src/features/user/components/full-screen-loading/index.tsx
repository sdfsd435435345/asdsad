import classNames from 'classnames'
import { createPortal } from 'react-dom'
import { envIsServer } from '@/helper/env'
import DynamicLottie from '@/components/dynamic-lottie'
import styles from './index.module.css'

const RefreshLoadingData = () => import('@/assets/json/refresh_loading.json')

function FullScreenLoading({ isShow, className, mask }: { isShow: boolean; className?: string; mask?: boolean }) {
  if (envIsServer) {
    return null
  }
  return createPortal(
    <div
      className={classNames(
        styles['full-screen-loading'],
        isShow ? 'flex' : 'hidden',
        {
          'with-mask': mask,
        },
        className
      )}
    >
      <DynamicLottie animationData={RefreshLoadingData} loop style={{ width: '45px', height: '45px' }} />
    </div>,
    document.body
  )
}

export default FullScreenLoading
