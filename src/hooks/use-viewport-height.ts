import { useState, useEffect } from 'react'

/** 兼容 ios 中 100vh 高度不正确的情况 */
export function useViewportHeight() {
  const [height, setHeight] = useState(0)
  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight)
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return height
}
