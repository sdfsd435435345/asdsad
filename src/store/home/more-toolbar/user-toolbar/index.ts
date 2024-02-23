import { StoreApi } from 'zustand'
import produce from 'immer'
import { FormattedTools } from '@/typings/api/home/toolbars'

type UserToolbarStore = {
  maxNumTools: number
  hasToolsUpdated: boolean
  updateTools: () => void
  userToolbarSnapshot: FormattedTools
  addTool: (tool: FormattedTools[0]) => void
  rmTool: (tool: FormattedTools[0]) => void
  updateSnapshot: (
    callback: (prevSnap: UserToolbarStore['userToolbarSnapshot']) => UserToolbarStore['userToolbarSnapshot']
  ) => void
}

const maxNumTools = 9

function getUserToolbarStore(
  set: StoreApi<UserToolbarStore>['setState'],
  get: StoreApi<UserToolbarStore>['getState']
): UserToolbarStore {
  return {
    maxNumTools,
    hasToolsUpdated: false,
    updateTools: () =>
      set(
        produce((draft: UserToolbarStore) => {
          draft.hasToolsUpdated = !draft.hasToolsUpdated
        })
      ),
    userToolbarSnapshot: [],
    addTool: newTool =>
      get().updateSnapshot(prev => {
        if (prev.length < maxNumTools) prev.push(newTool)
        return prev
      }),
    rmTool: toRemove => get().updateSnapshot(prev => prev.filter(f => f.name !== toRemove.name)),
    updateSnapshot: callback =>
      set(
        produce((draft: UserToolbarStore) => {
          draft.userToolbarSnapshot = callback(draft.userToolbarSnapshot)
        })
      ),
  }
}

export { UserToolbarStore, getUserToolbarStore }
