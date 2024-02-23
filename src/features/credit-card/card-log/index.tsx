import { queryCardOpenLogs } from '@/apis/credit-card/card-log'
import NavBar from '@/components/navbar'
import { CardLogStatusEnum, getCardLogStatusEnumName } from '@/constants/card'
import { formatDate } from '@/helper/date'
import { formatCurrency } from '@/helper/decimal'
import { requestWithLoading } from '@/helper/order'
import { YapiGetV1VccOpenCardRecordListData } from '@/typings/yapi/VccOpenCardRecordV1GetApi'
import { useMount } from 'ahooks'
import classNames from 'classnames'
import { useState } from 'react'
import CommonList from '@/components/common-list/list'
import { useLoadMore } from '@/hooks/use-load-more'
import { replaceEmpty } from '@/helper/filters'
import { t } from '@lingui/macro'
import styles from './index.module.css'

type ILog = YapiGetV1VccOpenCardRecordListData

function CardLog({ log }: { log: ILog }) {
  const props = [
    {
      left: t`user.security_verification_status_05`,
      right: (
        <div
          className={classNames(
            {
              [CardLogStatusEnum.success]: 'text-text_color_02',
              [CardLogStatusEnum.create]: 'text-success_color',
              [CardLogStatusEnum.fail]: 'text-warning_color',
            }[log.status as any]
          )}
        >
          {getCardLogStatusEnumName(log.status as any)}
        </div>
      ),
    },
    {
      left: t`features_credit_card_card_log_index_7qztc2xynv`,
      right: log.cardAlias,
    },
    {
      left: t`features_c2c_center_common_222222222225101700`,
      right: `${replaceEmpty(formatCurrency(log.limitAmount))} USDT`,
    },
    {
      left: t`features_credit_card_card_log_index_p3h_zbmklk`,
      right: formatDate(log.createTime, 'YYYY-MM-DD'),
    },
  ]

  return (
    <div className={styles['card-log']}>
      {props.map((prop, index) => {
        return (
          <div key={index} className="prop-item">
            <div className="left">{prop.left}</div>
            <div className="right">{prop.right}</div>
          </div>
        )
      })}
    </div>
  )
}

function CardLogs() {
  const {
    list,
    loadMore,
    finished,
    refresh: refreshList,
  } = useLoadMore({
    async fetchData(page) {
      const res = await requestWithLoading(queryCardOpenLogs({}))
      if (!res.isOk || !res.data) {
        return
      }
      return res.data
    },
  })
  const refresh = async () => {
    return refreshList()
  }

  return (
    <div className="text-sm text-leading-1-5">
      <NavBar title={t`features_credit_card_my_card_index_e5vmugvvgv`} />
      <CommonList
        refreshing
        emptyClassName="py-20"
        onRefreshing={refresh}
        onLoadMore={loadMore}
        finished={finished}
        listChildren={undefined}
        showEmpty={list.length === 0}
      >
        <div className="p-4">
          {list.map(log => {
            return <CardLog key={log.createTime} log={log} />
          })}
        </div>
      </CommonList>
    </div>
  )
}

export default CardLogs
