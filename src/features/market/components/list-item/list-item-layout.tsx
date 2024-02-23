import classNames from 'classnames'
import { memo } from 'react'
import { Cell } from 'react-vant'
import styles from './index.module.css'

export enum ListItemLayoutTypes {
  search,
  market,
}

interface Props {
  children: React.ReactNode
  type: ListItemLayoutTypes
}

function ListItemLayout(props: Props) {
  const { type, children } = props

  return (
    <Cell.Group
      className={classNames(
        { [styles.search]: type === ListItemLayoutTypes.search },
        { [styles.market]: type === ListItemLayoutTypes.market }
      )}
    >
      {children}
    </Cell.Group>
  )
}

export default memo(ListItemLayout)
