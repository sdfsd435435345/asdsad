import { Image } from 'react-vant'
import { useCreation } from 'ahooks'
import { useState } from 'react'
import { ThemeEnum } from '@/constants/base'
import { useCommonStore } from '@/store/common'
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component'
import { oss_svg_image_domain_address, oss_svg_domain_address } from '@/constants/oss'
import {
  replacementS3,
  patternS3,
  compressionS3,
  replacementOss,
  compressionOss,
  imagePatternType,
} from '@/constants/lazy-image'
import classNames from 'classnames'
import styles from './index.module.css'

type imageSrc = LazyLoadImageProps & {
  /** 图片地址 * */
  src: string
  width?: number
  height?: number
  imageType?: Type
  /** 图片底部名称 * */
  imageName?: string
  /** 是否是主题色图片 * */
  hasTheme?: boolean
  /** 是否开启懒加载 * */
  lazyload?: boolean
  className?: string
  /** 是否圆角 * */
  round?: boolean
  /** 圆角大小 * */
  radius?: number
  alt?: string
  /** 加载图标和失败图标的大小 * */
  iconSize?: number | string
  /** 图片加载失败时触发 * */
  onError?: () => void
  /** 图片加载完毕时触发 * */
  afterLoad?: () => void
  /**  在占位符被图像元素替换之前调用的函数。* */
  beforeLoad?: () => void
  renderOriginalSize?: boolean
  /** 是否需要占位图片 * */
  whetherPlaceholdImg?: boolean
}

export enum Type {
  svg = '.svg',
  png = '.png',
}

type ImgDimension = {
  width?: number
  height?: number
}

enum UrlIndexOfEnum {
  match = -1,
}

const LazyImage = (props: imageSrc) => {
  const {
    src,
    round = false,
    className,
    hasTheme,
    imageName,
    imageType,
    lazyload = true,
    renderOriginalSize = false,
    whetherPlaceholdImg = false,
    ...other
  } = props
  const commonState = useCommonStore()
  const isTheme = commonState?.theme === ThemeEnum.dark ? '_black' : '_white'
  /** 渐变色 svg * */
  const svgAddress = oss_svg_image_domain_address
  /** 非渐变色 svg * */
  const svgOssHas = oss_svg_domain_address

  const [href, setHref] = useState<string>(src)
  const [dimensions, setdimensions] = useState<ImgDimension>({})

  const svgHref = `${svgAddress}load_fail_icon${isTheme}${Type.svg}`
  /** 加载失败或加载时的图像 src * */
  const placeholderSrc = whetherPlaceholdImg ? (
    <img
      src={svgHref}
      alt={other.alt}
      width={renderOriginalSize ? dimensions.width : other.width}
      height={renderOriginalSize ? dimensions.height : other.height}
    />
  ) : undefined

  /**
   * retrieve img original size
   */
  const onImgLoad = ({ target }: { target: HTMLImageElement }) => {
    setdimensions({
      width: target.naturalWidth,
      height: target.naturalHeight,
    })
    return true
  }

  /** 处理压缩图片拼接* */
  const handleStitching = (url: string, type: string) => {
    /** 需要知道改 url 有无？，如果有则获取到索引值* */
    const queryIndex = url.indexOf('?')
    const newBaseUrl = queryIndex !== UrlIndexOfEnum.match ? url.slice(0, queryIndex) : url
    return `${newBaseUrl}${type}`
  }

  /** 处理压缩图片* */
  const handleImageSrc = (url: string) => {
    /** 如果后缀是 svg 就不做处理* */
    const reg = /.(svg)/
    if (reg.test(src)) return url
    /** oss 和 s3 匹配处理* */
    if (url.includes(replacementS3)) {
      // 执行替换操作
      url = url?.replace(replacementS3, patternS3)
      return handleStitching(url, compressionS3)
    }
    if (url.includes(replacementOss)) {
      return handleStitching(url, compressionOss)
    }
    return url
  }

  useCreation(() => {
    if (!src) return
    let type = Type.svg
    /** 主题颜色后缀 * */
    const themeText = hasTheme ? isTheme : ''
    /** 图片是否是后端传，正则判断传来 src 有无后缀 * */
    const reg = imagePatternType
    if (reg.test(src)) {
      const newSrc = handleImageSrc(src)
      setHref(newSrc || '')
      return
    }
    /** 通过对地址匹配，知道是否需要拼 svg 或 png * */
    const isTrue = src.includes(svgAddress) || src.includes(svgOssHas)
    type = isTrue ? Type.svg : Type.png
    if (imageType) type = imageType
    const currentSrc = `${src}${themeText}${type}`
    const newSrc = handleImageSrc(currentSrc)
    setHref(type !== Type.svg ? newSrc : currentSrc)
  }, [src])

  if (!href) {
    // fix：api 加载的时候图片内容，如果图片的地址为空，则直接返回占位。
    return (
      <span
        style={{
          width: other.width || 0,
          height: other.height || 0,
        }}
      />
    )
  }

  // 不使用懒加载返回图片
  if (!lazyload) {
    return (
      <div className={classNames(styles.scoped, className)}>
        <Image round={round} src={href} alt={other.alt} width={other.width} height={other.height} />
      </div>
    )
  }
  const placeholder = placeholderSrc ? { placeholder: placeholderSrc } : {}
  return (
    <div
      style={{ width: other.width, height: other.height }}
      className={classNames(styles.scoped, className, round ? 'lazy-radius' : '')}
    >
      <LazyLoadImage {...other} src={href} {...placeholder} onLoad={renderOriginalSize ? onImgLoad : (null as any)} />
      <label>{imageName || ''}</label>
    </div>
  )
}
export default LazyImage
