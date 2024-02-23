import { arraySwap } from '@dnd-kit/sortable'
import { useHomeStore } from '@/store/home'
import Draggable from '@/components/draggable'
import styles from './index.module.css'
import { ToolItem } from '../../tools'

function DraggableGrid({ children }) {
  const { userToolbarSnapshot, updateSnapshot } = useHomeStore()

  const handleDragEnd = event => {
    const { active, over } = event
    updateSnapshot(data => {
      const oldIndex = data.findIndex(f => f.id === active.id)
      const newIndex = data.findIndex(f => f.id === over.id)
      return arraySwap(data, oldIndex, newIndex)
    })
  }

  return (
    <div className={styles.scoped}>
      <Draggable onDragEnd={handleDragEnd} data={userToolbarSnapshot}>
        <Draggable.Grid border={false}>
          {userToolbarSnapshot.map((tool, index) => (
            <ToolItem key={`${index} ${tool.id}`} {...tool} isDraggable />
          ))}
          {children}
        </Draggable.Grid>
      </Draggable>
    </div>
  )
}

export default DraggableGrid
