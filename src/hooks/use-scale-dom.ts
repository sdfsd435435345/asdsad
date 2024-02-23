import { useEffect, useRef } from 'react'

type INotArray<T> = T extends Array<infer U> ? never : T

/** 如果当前 dom 宽度超出指定宽度，会进行缩放以适应 */
export function useScaleDom<T>(width: number, dep: INotArray<T>, minScale = 0) {
  const ref = useRef<HTMLDivElement>(null)
  const run = () => {
    const dom = ref.current
    if (!dom) return
    // 在弹窗中或其它情况下可能为 0
    if (dom.scrollWidth === 0) {
      setTimeout(run, 300)
      return
    }
    // @ts-ignore
    dom.style.zoom = 1
    dom.style.transform = 'translateY(0)'
    // width 为 0 的话取元素本身宽度
    let scale = (width === 0 ? dom.clientWidth : width) / dom.scrollWidth
    if (minScale && scale < minScale) {
      scale = minScale
    }
    if (scale < 1) {
      // zoom 相对于左上角缩放的，所以需要向下移动，但是缩放又不是特别规范（本身就不在规范里面），所以这里取个大概偏移即可
      dom.style.transform = `translateY(${((1 - scale) * dom.offsetHeight) / 4}px)`
      // @ts-ignore
      dom.style.zoom = scale
    }
  }
  useEffect(run, [dep, minScale, width])

  return ref
}
