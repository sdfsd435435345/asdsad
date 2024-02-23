import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { useRef, useState, useEffect } from 'react'
import NavBar from '@/components/navbar'
import { MarketDetailType } from '@/typings/api/sector'
import { usePageContext } from '@/hooks/use-page-context'
import { getMarketSectorDetail } from '@/apis/market/market-sector'
import LazyImage from '@/components/lazy-image'
import commonStyles from '@/features/market/market-quatation/index.module.css'
import MarketSectorDetailsTable from './sector-details-table'
import styles from './index.module.css'

type HeightListType = {
  parentHeight: number
  spansHeight: number
}

const MarketSectorDetails = () => {
  const pageContext = usePageContext()
  const spanText = useRef<HTMLSpanElement>(null)
  const boxSector = useRef<HTMLDivElement>(null)
  const footerBox = useRef<HTMLDivElement>(null)
  const [heightList, setHeightList] = useState<HeightListType>({ parentHeight: 240, spansHeight: 115 })
  const [descList, setDescList] = useState<MarketDetailType>()
  const [isMore, setIsMore] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    const articleId = pageContext?.routeParams?.id
    getSectorDetail(articleId)
  }, [])

  /** 处理展开列表* */
  useEffect(() => {
    const spanList = spanText.current?.getClientRects()
    if ((spanList?.length as number) > 3) {
      setIsMore(true)
    }
  }, [descList?.description])

  const openMoreText = () => {
    if (isOpen) {
      const list = {
        parentHeight: 240,
        spansHeight: 115,
      }
      setIsOpen(false)
      setHeightList(list)
    } else {
      const spanList = spanText?.current
      const addRows = (spanList?.getClientRects().length as number) - 3
      const spansHeight = 115 + addRows * 24
      const parentHeight = 240 + addRows * 24
      const list = { parentHeight, spansHeight }
      setIsOpen(true)
      setHeightList(list)
    }
  }

  const getSectorDetail = async id => {
    const res = await getMarketSectorDetail({ id })
    setDescList(res?.data)
  }

  const onDescName = name => {
    let reg = new RegExp(t`constants_market_market_list_market_module_index_510107`, 'g')
    if (reg.test(name)) {
      name = name.replace(reg, '')
    }
    return name
  }

  return (
    <div className={styles.scoped}>
      <div className="sector-detail-content">
        <NavBar
          title={t`features_market_market_quatation_market_sector_sector_glate_detail_index_510152`}
          left={<Icon name="back" hasTheme />}
        />
        <div className="sector-detail-body" ref={boxSector} style={{ height: heightList.parentHeight as number }}>
          <div className="detail-header-text">
            <span className="header-text">{descList?.name ? onDescName(descList?.name) : ''}</span>
            {t`constants_market_market_list_market_module_index_510107`}
          </div>
          <div className="detail-header-image">
            <LazyImage className="body-image" src={descList?.icon as string} />
          </div>
          <div className="detail-footer" ref={footerBox} style={{ height: heightList.spansHeight as number }}>
            <div className="footer-text">
              <div className="footer-content-text">
                <span ref={spanText}>{descList?.description ? descList?.description : ''}</span>
              </div>
              {isMore ? (
                <div className="footer-text-icon" onClick={openMoreText}>
                  <div>
                    {isOpen
                      ? t`features_market_detail_current_coin_describe_index_510215`
                      : t`features_market_market_quatation_market_sector_sector_glate_detail_index_510154`}
                  </div>
                  <Icon
                    className="icon"
                    name={isOpen ? 'regsiter_icon_away_white_hover' : 'regsiter_icon_drop_white_hover'}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className={`${commonStyles['market-table-common']} sector-detail-table`}>
        <MarketSectorDetailsTable conceptId={pageContext?.routeParams?.id?.trim()} />
      </div>
    </div>
  )
}
export default MarketSectorDetails
