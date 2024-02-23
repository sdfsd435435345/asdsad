import { UniqueIdentifier } from '@dnd-kit/core'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import classNames from 'classnames'

type DraggableItemProps = {
  id: UniqueIdentifier
  children?: JSX.Element
}

function DraggableItem({ id, children }: DraggableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <span
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className={classNames({ 'cursor-grab': !isDragging }, { 'cursor-grabbing': isDragging })}
    >
      {children}
    </span>
  )
}

export default DraggableItem
