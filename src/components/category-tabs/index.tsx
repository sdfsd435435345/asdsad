import classNames from 'classnames'
import { ReactNode, memo } from 'react'
import { Tabs } from 'react-vant'
import { TabsProps } from 'react-vant/es/tabs/PropsType'
import styles from './index.module.css'

interface ICategoryTabs extends TabsProps {
  categories: {
    title: string
  }[]
  children: ReactNode
}

function CategoryTabs(props: ICategoryTabs) {
  const { categories, children, ...rest } = props
  return (
    <Tabs animated lazyRender swipeable className={classNames(styles.scoped)} {...rest}>
      {categories.map(category => (
        <Tabs.TabPane name={category.title} key={category.title} title={category.title}>
          {children}
        </Tabs.TabPane>
      ))}
    </Tabs>
  )
}

export default memo(CategoryTabs)
