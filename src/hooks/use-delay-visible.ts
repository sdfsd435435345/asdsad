import { useState, useEffect } from 'react'

/** 和 prop 同步但关闭时有延迟，适用于 popup 嵌套时用 only-one-popup 使用 destroyOnClose 出现的问题 */
export function useDelayInvisible(propVisible: boolean) {
  const [visible, setVisible] = useState(propVisible)
  useEffect(() => {
    setTimeout(
      () => {
        setVisible(propVisible)
      },
      propVisible ? 0 : 300
    )
  }, [propVisible])

  return visible
}
