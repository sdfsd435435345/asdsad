import Draggable from '@/components/draggable'
import { getCurrentQuoteShowCoin } from '@/helper/market'
import { useFuturesFavList, useSpotFavList } from '@/hooks/features/market/favourite'
import { baseSpotFavStore, useFuturesFavStore, useSpotFavStore } from '@/store/market/market-favorite'
import { arraySwap } from '@dnd-kit/sortable'
import { t } from '@lingui/macro'
import { Cell } from 'react-vant'
import { useEffect } from 'react'
import FavoritesListItem from '../favorites-list-item'

function DraggableList({ data, setData }) {
  const onLoad = async () => {
    // setCount(v => v + 1)
    // const data = await getData(count === 1)
    // setList(v => [...v, ...data])
    // if (list.length >= 30) {
    //   setFinished(true)
    // }
  }

  const handleDragEnd = event => {
    const { active, over } = event

    setData(data => {
      const oldIndex = data.findIndex(f => f.id === active.id)
      const newIndex = data.findIndex(f => f.id === over.id)
      return arraySwap(data, oldIndex, newIndex)
    })
  }

  return (
    <>
      <Cell
        className="text-xs pb-0"
        title={t`features_market_market_quatation_common_market_favorites_editing_draggable_list_index_5101064`}
        rightIcon={
          <div className="flex flex-row gap-x-7 items-center">
            <span>{t`features_market_market_quatation_common_market_favorites_editing_draggable_list_index_5101065`}</span>
            <span>{t`features_market_market_quatation_common_market_favorites_editing_draggable_list_index_5101066`}</span>
          </div>
        }
      />
      <Draggable data={data} onDragEnd={handleDragEnd}>
        <Draggable.List onLoad={onLoad} finished>
          {data?.map((fav, index) => (
            <FavoritesListItem
              key={fav.id}
              id={fav.id}
              title={getCurrentQuoteShowCoin(fav.baseSymbolName, fav.quoteSymbolName, true)}
              setData={setData}
              data={data}
            />
          ))}
        </Draggable.List>
      </Draggable>
    </>
  )
}

function SpotDraggableList() {
  const spotFavList = useSpotFavList().state
  const { favListSnap: spotFavListSnap, updateFavListSnap: updateSpotFavListSnap } = useSpotFavStore()

  useEffect(() => {
    updateSpotFavListSnap(prev => [...spotFavList])
  }, [spotFavList])

  return <DraggableList data={spotFavListSnap} setData={updateSpotFavListSnap} />
}

function FuturesDraggableList() {
  const futuresFavList = useFuturesFavList().state
  const { favListSnap: futuresFavListSnap, updateFavListSnap: updateFuturesFavListSnap } = useFuturesFavStore()

  useEffect(() => {
    updateFuturesFavListSnap(prev => [...futuresFavList])
  }, [futuresFavList])
  return <DraggableList data={futuresFavListSnap} setData={updateFuturesFavListSnap} />
}

export { SpotDraggableList, FuturesDraggableList }
