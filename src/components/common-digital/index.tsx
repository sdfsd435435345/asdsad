/**
 * 数量/价格展示组件
 * 根据控件宽度和内容实现字体自动缩放及点击展示全部内容功能
 * 整合资产加密展示组件
 */
import { useAssetsStore } from '@/store/assets/spot'
import { Toast } from 'react-vant'
import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { useUpdateEffect, useUpdateLayoutEffect } from 'ahooks'
import styles from './index.module.css'

function CommonDigital({
  content,
  isEncrypt = false,
  className,
  style,
  children,
}: {
  content: string | number
  isEncrypt?: boolean
  className?: string
  style?: any
  children?: any
}) {
  const ref: any = useRef(null)
  const spanRef: any = useRef(null)
  const { encryption } = useAssetsStore().assetsModule
  const [isOverflow, setIsOverflow] = useState(false)
  const contentText = encryption && isEncrypt ? '******' : content || '--'

  const onChangeSize = () => {
    const outerWidth = ref.current?.offsetWidth
    const childWidth = spanRef.current?.offsetWidth
    setIsOverflow(outerWidth < childWidth)
  }

  useEffect(() => {
    onChangeSize()
  }, [])

  useUpdateEffect(() => {}, [encryption])

  useUpdateLayoutEffect(() => {
    onChangeSize()
  }, [contentText])

  return (
    <div ref={ref} className={classNames(styles['common-digital-root'], className)} style={style}>
      <span
        ref={spanRef}
        className={`text ${isOverflow ? 'text-zoom' : ''}`}
        onClick={(e: any) => {
          if (!isOverflow || (encryption && isEncrypt)) return

          e.stopPropagation()
          Toast.info(`${content}`)
        }}
      >
        {contentText}
      </span>
      {children}
    </div>
  )
}

export { CommonDigital }
