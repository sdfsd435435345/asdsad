import { Arrow } from '@react-vant/icons'
import classNames from 'classnames'
import { ReactNode } from 'react'
import { Cell } from 'react-vant'
import { ISearchListItem } from '..'
import styles from './index.module.css'

export interface INavigationItemDetails extends ISearchListItem {
  icon: ReactNode
  title: string
}

function NavigationItemDetails(props: INavigationItemDetails) {
  const { ranking, icon, title } = props
  return (
    <>
      <div className={classNames(styles.layout)}>
        {ranking}
        {icon}
        <Cell title={title} />
      </div>
      <Arrow />
    </>
  )
}

export default NavigationItemDetails
