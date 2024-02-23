import create from 'zustand'
import produce from 'immer'
import { createTrackedSelector } from 'react-tracked'

type IStore = ReturnType<typeof getStore>

function getStore(set) {
  return {
    kdramas: [
      {
        id: Math.floor(Math.random() * 100),
        name: 'River Where the Moon Rises',
      },
      {
        id: Math.floor(Math.random() * 100),
        name: 'The Crowned Clown',
      },
    ],
    addDrama: payload =>
      set(
        produce((draft: IStore) => {
          draft.kdramas.push({
            id: Math.floor(Math.random() * 100),
            name: payload,
          })
        })
      ),
    removeDrama: payload =>
      set(
        produce((draft: IStore) => {
          const dramaIndex = draft.kdramas.findIndex(el => el.id === payload)
          draft.kdramas.splice(dramaIndex, 1)
        })
      ),
    patchDrama: payload =>
      set(
        produce((draft: IStore) => {
          const drama = draft.kdramas.find(el => el.id === payload)
          if (drama) {
            drama.name = ''
          }
        })
      ),
  }
}

const baseListStore = create<IStore>(getStore)
// 在合适的场景使用 immer
const useListStore = createTrackedSelector(baseListStore)
export { baseListStore, useListStore }
