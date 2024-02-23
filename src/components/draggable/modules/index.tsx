import { UniqueIdentifier } from '@dnd-kit/core'
import { Grid, GridProps, List, ListProps } from 'react-vant'
import DragModuleScaffold from './drag-module-scaffold'

type VantGridModuleProps = GridProps & {
  activeId?: UniqueIdentifier
}

type VantListModuleProps = ListProps & {
  activeId?: UniqueIdentifier
}

const VantGridModule = (props: VantGridModuleProps) => {
  const { children, ...rest } = props
  return (
    <DragModuleScaffold Core={Grid} {...rest}>
      {children}
    </DragModuleScaffold>
  )
}

const VantListModule = (props: VantListModuleProps) => {
  const { children, ...rest } = props
  return (
    <DragModuleScaffold Core={List} {...rest}>
      {children}
    </DragModuleScaffold>
  )
}

enum ModuleNames {
  GridModule = 'Grid',
  ListModule = 'List',
}

const ModuleTypes = {
  [ModuleNames.GridModule]: VantGridModule.name,
  [ModuleNames.ListModule]: VantListModule.name,
}

export { VantGridModule, VantListModule, ModuleTypes, ModuleNames }
