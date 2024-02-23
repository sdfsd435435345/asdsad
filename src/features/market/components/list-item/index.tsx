import { memo } from 'react'
import CoinItemDetails, { ICoinItemDetailsProps } from './coin-item-details'
import NavigationItemDetails, { INavigationItemDetails } from './navigation-item-details'
import QuoteItemDetails, { IQuoteItemDetails } from './quote-item-details'
import ListItemLayout, { ListItemLayoutTypes } from './list-item-layout'

export interface ISearchListItem {
  ranking?: number
}

const CoinItemList = memo((props: ICoinItemDetailsProps) => {
  return (
    <ListItemLayout type={ListItemLayoutTypes.search}>
      <CoinItemDetails {...props} />
    </ListItemLayout>
  )
})

const NavigationItemList = memo((props: INavigationItemDetails) => {
  return (
    <ListItemLayout type={ListItemLayoutTypes.search}>
      <NavigationItemDetails {...props} />
    </ListItemLayout>
  )
})

const QuoteItemList = memo((props: IQuoteItemDetails) => {
  return (
    <ListItemLayout type={ListItemLayoutTypes.market}>
      <QuoteItemDetails {...props} />
    </ListItemLayout>
  )
})

export { CoinItemList, NavigationItemList, QuoteItemList }
