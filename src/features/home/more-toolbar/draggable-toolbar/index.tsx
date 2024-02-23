import { useHomeStore } from '@/store/home'
import { useUserTools } from '@/hooks/features/home/toolbars'
import { useEffect } from 'react'
import DraggableGrid from './draggable-grid'
import { PlaceholderTool, ResetTool } from '../tools'

function DraggableToolbar() {
  const { maxNumTools, userToolbarSnapshot, updateSnapshot } = useHomeStore()
  const { userTools } = useUserTools()

  useEffect(() => {
    updateSnapshot(prev => userTools)
  }, [userTools])

  const renderRemaining = () => {
    const remainingNum = maxNumTools - userToolbarSnapshot.length
    const remaining: Array<JSX.Element> = []

    for (let i = 0; i <= remainingNum; i += 1) {
      if (i === remainingNum) remaining.push(<ResetTool key={remainingNum + i} />)
      else remaining.push(<PlaceholderTool key={remainingNum + i} />)
    }

    return remaining
  }

  return (
    <div>
      <DraggableGrid>{renderRemaining()}</DraggableGrid>
    </div>
  )
}

export default DraggableToolbar
