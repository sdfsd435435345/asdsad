import { Cell } from 'react-vant'
import classNames from 'classnames'
import styles from './index.module.css'

export default TableItem

function TableItem(props) {
  const { coin, price, changes } = props
  return (
    <Cell.Group className={classNames(styles.scoped)} border={false}>
      <Cell
        title={
          <>
            <span className="text-lg">{coin.split('/')[0]}</span>
            <span>{` /${coin.split('/')[1]}`}</span>
          </>
        }
      />
      <Cell className={classNames('table-item-price')} title={price} />
      <Cell className={classNames('table-item-changes')}>
        <div className={classNames({ 'table-item-up': changes[0] === '+' }, { 'table-item-down': changes[0] === '-' })}>
          {changes}
        </div>
      </Cell>
    </Cell.Group>
  )
}
