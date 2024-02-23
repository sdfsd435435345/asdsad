import { Button, Card, Popup } from 'react-vant'
import { useState } from 'react'
import { t } from '@lingui/macro'
import { YapiGetV1TradePairConceptList } from '@/typings/yapi/TradePairConceptListV1GetApi'
import { link } from '@/helper/link'
import classNames from 'classnames'
import { useMarketListStore } from '@/store/market/market-list'
import { MarketTabsEnum } from '@/constants/market/market-list/market-module'
import Icon from '../../../../components/icon'
import styles from './index.module.css'
import CommonSelector from '../../../../components/common-selector'

export function Tag({
  options,
  symbol,
  type,
}: {
  options: YapiGetV1TradePairConceptList[]
  symbol: string
  type: MarketTabsEnum
}) {
  const defaultOption = options?.[0]
  const [visible, setvisible] = useState(false)
  const { setMarketSectorActiveTab } = useMarketListStore()

  if (!defaultOption) return <></>

  const selectorOptions = options.map(option => {
    return {
      label: option!.name!,
      value: option!.id!,
    }
  })

  const redirect = id => {
    setMarketSectorActiveTab(type)
    link(`/markets/sector-detail/${id}`)
  }

  return (
    <>
      <span
        className={styles.scoped}
        onClick={() => {
          if (options.length > 1) setvisible(true)
          else redirect(defaultOption.id)
        }}
      >
        <span>{defaultOption.name}</span>
        <Icon className={classNames({ hidden: options.length <= 1 })} name="next_arrow" />
      </span>
      <Popup
        className={styles['tag-popup']}
        visible={visible}
        title={t({
          id: 'components_tag_index_hhmbt3m6_k1vwzswnirut',
          values: { 0: symbol },
        })}
        onClose={() => setvisible(false)}
      >
        <Card>
          <Card.Body>
            <span className="text-sm text-text_color_02 font-normal">{t`components_tag_index_os6eyupfau_-mo8_c22mm`}</span>
            <CommonSelector
              options={selectorOptions}
              defaultValue={[defaultOption?.id || 0]}
              onChange={v => redirect(v[0])}
            />
          </Card.Body>
          <Card.Footer>
            <Button block onClick={() => setvisible(false)} type="primary">
              {t`features_message_center_index_5101365`}
            </Button>
          </Card.Footer>
        </Card>
      </Popup>
    </>
  )
}
