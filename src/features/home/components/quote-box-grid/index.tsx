import useWsRecommendedCoins from '@/hooks/features/home/use-ws-recommended-coins'
import { Swiper } from 'react-vant'
import styles from './index.module.css'
import QuoteBox from './quote-box'

function QuoteBoxGrid() {
  const resolvedData = useWsRecommendedCoins() ?? []

  const renderSwiperItems = () => {
    if (resolvedData?.length && resolvedData.length <= 0) return
    const rendered = [] as any[]

    const renderSwiperItem = coins => coins.map((coin, index) => <QuoteBox key={index} {...coin} />)

    if (resolvedData.length <= 3)
      rendered.push(<Swiper.Item className="!grid !grid-cols-3 !px-4">{renderSwiperItem(resolvedData)}</Swiper.Item>)
    else
      for (let i = 0; i < resolvedData.length; i += 3) {
        rendered.push(
          <Swiper.Item key={i} className="!grid !grid-cols-3 !px-4">
            {renderSwiperItem(resolvedData.slice(i, i + 3))}
          </Swiper.Item>
        )
      }
    return rendered
  }

  return (
    <Swiper className={styles.scoped} indicator>
      {renderSwiperItems()}
    </Swiper>
  )
}

export default QuoteBoxGrid
