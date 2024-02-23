import { createFromIconfontCN } from '@react-vant/icons'
import { ThemeEnum } from '@/constants/base'
import classNames from 'classnames'
import { useCommonStore } from '@/store/common'
import { oss_svg_domain_address, oss_svg_image_domain_address } from '@/constants/oss'
import { useCopyToClipboard } from 'react-use'
import { useEffect, useState } from 'react'
import { useMount } from 'ahooks'
import Styles from './index.module.css'

const IconFont = createFromIconfontCN(oss_svg_domain_address)
const brandColor = 'brand'

interface IconProps {
  className?: string
  spin?: boolean
  hover?: boolean | typeof brandColor
  name: string
  onClick?: any
  rotate?: number
  hasTheme?: boolean
  // 是否远端 oss 图片、svg 链接
  isRemoteUrl?: boolean
  // 隐藏默认的负边距，为了兼容以前的代码，只能默认为 false
  hiddenMarginTop?: boolean
}

const Icon = (props: IconProps) => {
  const isBrandColor = props.hover === brandColor
  const isTextColor = !isBrandColor && props.hover
  const handleClick = (e: any) => {
    props.onClick && props.onClick(e)
  }
  const commonState = useCommonStore()
  const theme = commonState.theme
  // svg 支持明暗色主题切换

  let href = ''
  let iconName = ''

  /** 主题颜色后缀 */
  const themeText = props.hasTheme ? (theme === ThemeEnum.dark ? '_black' : '_white') : ''

  if (props.isRemoteUrl) {
    /** 渐变色远程链接 */
    href = `${oss_svg_image_domain_address}${props.name}${themeText}.svg`
  } else {
    /** 图标名称 */
    iconName = `icon-${props.name}${themeText}`
  }
  const [iconVisible, setIconVisible] = useState<boolean>(true)
  useEffect(() => {
    if (props.isRemoteUrl) {
      setIconVisible(true)
      return
    }
    const el = document.querySelector(`#${iconName}`)
    setIconVisible(true)
  }, [props.name, iconName, props.hasTheme])

  return (
    <div
      className={classNames(Styles.scoped, props.className, {
        'text-brand_color': isBrandColor,
        'text-text_color_01': isTextColor,
        'hidden-mt': props.hiddenMarginTop,
      })}
      onClick={handleClick}
    >
      {iconVisible && (
        <>
          {props.isRemoteUrl ? (
            <svg className={`icon-${props.name}${themeText}`}>
              <image href={href} x="0" y="0" width="100%" />
            </svg>
          ) : (
            <IconFont name={iconName} spin={props.spin} rotate={props.rotate} />
          )}
        </>
      )}
      {!iconVisible && <span>图标</span>}
    </div>
  )
}

export default Icon
