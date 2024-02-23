import { StoreApi } from 'zustand'
import produce from 'immer'
import { getUserToolbarStore, UserToolbarStore } from '@/store/home/more-toolbar/user-toolbar'

type MoreToolbarStore = {
  isOpen: boolean
  ToolbarStates: typeof ToolbarStates
  toolbarCurrentState: ToolbarStates
  updateToolbarState: (newState: ToolbarStates) => void
  toggleMoreToolbar: () => void
} & UserToolbarStore

enum ToolbarStates {
  Editable,
  Completed,
}

function getMoreToolbarStore(
  set: StoreApi<MoreToolbarStore>['setState'],
  get: StoreApi<MoreToolbarStore>['getState']
): MoreToolbarStore {
  return {
    isOpen: false,
    ToolbarStates,
    toolbarCurrentState: ToolbarStates.Completed,
    updateToolbarState: newState =>
      set(
        produce((draft: MoreToolbarStore) => {
          draft.toolbarCurrentState = newState
        })
      ),
    toggleMoreToolbar: () =>
      set(
        produce((draft: MoreToolbarStore) => {
          draft.isOpen = !draft.isOpen
        })
      ),
    ...getUserToolbarStore(set, get),
  }
}

export { MoreToolbarStore, getMoreToolbarStore }
