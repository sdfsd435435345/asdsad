import { useEffect, useRef, useState } from 'react'

function checkIsBottom(reference) {
  return Math.floor(reference.scrollHeight - reference.scrollTop) <= reference.clientHeight
}

function useScrollTrackerYAxis() {
  const scroller = useRef<HTMLDivElement>()
  const [reference, setreference] = useState<HTMLDivElement>()
  const [isBottomSub, setisBottomSub] = useState<boolean>()

  useEffect(() => {
    if (scroller && scroller.current) {
      setreference(scroller.current)
    }
  }, [scroller])

  // update position
  useEffect(() => {
    function updateScrollPosition(e) {
      if (reference) {
        setisBottomSub(checkIsBottom(reference))
      }
    }
    if (reference) {
      reference.addEventListener('scroll', updateScrollPosition)
    }

    return () => {
      if (reference) reference.removeEventListener('scroll', updateScrollPosition)
    }
  }, [reference])

  return { scroller, isBottomSub }
}

export default useScrollTrackerYAxis
