import Banner from './components/banner'
import styles from './index.module.css'
import QuoteBoxGrid from './components/quote-box-grid'
import NavigationCard from './components/navigation-card'
import MoreToolbar from './more-toolbar'
import ToolbarGrid from './components/toolbar-grid'
import MarketHomeInfo from '../market/market-home-info'
import MarketFavoritesEditing from '../market/market-quatation/common/market-favorites-editing'
import UserTotalAsset from './components/user-total-asset'
import AnnouncementList from './components/announcement-list'

export default IndexPage

function IndexPage() {
  return (
    <div className={styles.scoped}>
      <div className="bg-bg_color">
        <Banner />
        <UserTotalAsset />
        <ToolbarGrid />
      </div>
      <div className="section">
        <NavigationCard />
        <QuoteBoxGrid />
        <div className="table-section">
          <MarketHomeInfo />
          <AnnouncementList />
        </div>
      </div>
      <MoreToolbar />
      <MarketFavoritesEditing />
    </div>
  )
}
