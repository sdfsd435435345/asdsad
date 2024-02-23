import Icon from '@/components/icon'
import { useMarketStore } from '@/store/market'
import { useSpotFavStore } from '@/store/market/market-favorite'
import { arrayMove, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Cell, Checkbox } from 'react-vant'
import classNames from 'classnames'
import styles from './index.module.css'

function FavoritesListItem(props) {
  const { id, title, setData, data } = props
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const moveToTop = () => {
    setData(prev => {
      const oldIndex = prev.findIndex(f => f.id === id)
      const newIndex = 0
      return arrayMove(prev, oldIndex, newIndex)
    })
  }

  return (
    <span className={styles.scoped} ref={setNodeRef} {...attributes} style={style}>
      <Cell
        icon={<Checkbox shape="square" name={id} checked={!!data.filter(snap => snap.id === id)[0]} />}
        title={title}
        rightIcon={
          <span className="flex flex-row gap-x-7 items-center">
            <Icon name="quotes_top" hasTheme onClick={moveToTop} />
            <span {...listeners}>
              <Icon
                className={classNames({ 'cursor-grab': !isDragging }, { 'cursor-grabbing': isDragging })}
                name="quotes_drag"
                hasTheme
              />
            </span>
          </span>
        }
      />
    </span>
  )
}

export default FavoritesListItem
