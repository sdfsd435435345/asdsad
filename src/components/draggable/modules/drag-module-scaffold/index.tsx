import { DragOverlay } from '@dnd-kit/core'
import React from 'react'

function DragModuleScaffold(props) {
  const { children, activeId, Core, ...rest } = props

  const renderSelected = React.Children.map(children, child => (child.props.id === activeId ? child : null))

  return (
    <>
      <Core {...rest}>{children}</Core>
      <DragOverlay adjustScale>{renderSelected}</DragOverlay>
    </>
  )
}

export default DragModuleScaffold
