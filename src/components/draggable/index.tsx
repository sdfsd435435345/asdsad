import {
  closestCenter,
  DndContext,
  DragCancelEvent,
  DragEndEvent,
  DragStartEvent,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { rectSwappingStrategy, SortableContext } from '@dnd-kit/sortable'
import React, { useMemo, useState } from 'react'
import { ModuleNames, ModuleTypes, VantGridModule, VantListModule } from './modules'

type DraggableProps = {
  children: JSX.Element
  data: (unknown & { id: UniqueIdentifier })[]
  onDragEnd?: (event: DragEndEvent) => void
  onDragStart?: (event: DragStartEvent) => void
  onDragCancel?: (event: DragCancelEvent) => void
}

function Draggable(props: DraggableProps) {
  const { children, data, onDragEnd, onDragStart, onDragCancel } = props

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null)
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor))

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    // check if dragged item is not in original position
    if (over && active.id !== over.id) {
      onDragEnd && onDragEnd(event)
    }
    setActiveId(null)
  }

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id)
    onDragStart && onDragStart(event)
  }

  const handleDragCancel = (event: DragCancelEvent) => {
    setActiveId(null)
    onDragCancel && onDragCancel(event)
  }

  const itemIds = useMemo(() => data?.map(item => item.id) || [], [data])

  let subComponentsList = Object.keys(Draggable)

  let subComponents = subComponentsList?.map(key => {
    return React.Children.map(children, child => {
      return child.type.name === ModuleTypes[key] ? React.cloneElement(child, { activeId }) : null
    })
  })

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      onDragCancel={handleDragCancel}
      collisionDetection={closestCenter}
      sensors={sensors}
    >
      <SortableContext items={itemIds} strategy={rectSwappingStrategy}>
        {subComponents}
      </SortableContext>
    </DndContext>
  )
}

Draggable[ModuleNames.GridModule] = VantGridModule

Draggable[ModuleNames.ListModule] = VantListModule

export default Draggable
