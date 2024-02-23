import { t } from '@lingui/macro'
import { useC2CCenterStore } from '@/store/c2c/center'
import { C2cCenterMenuEnum } from '@/constants/c2c/center'
import { C2CCenterMenuType } from '@/typings/api/c2c/center'
import { formatNumberDecimal } from '@/helper/decimal'
// import { formatDate } from '@/helper/date'
import styles from './index.module.css'

type MenuCardItem = {
  id: string
  title: string
  value: string
}

type MenuCardType = {
  useId: string
  data: MenuCardItem[]
  isCoinList: boolean
}

enum percentageEnum {
  zero,
  one,
  percentage = 100,
}

export default function MenuCard({ data, useId, isCoinList }: MenuCardType) {
  const { C2CCenterUser } = useC2CCenterStore()

  const formatTime = (time = 0) => {
    const divide = (time / 60) | 0
    const second = time % 60
    return `${divide < 10 ? `0${divide}` : divide}′${second < 10 ? `0${second}` : second}″`
  }

  /** 处理菜单数据* */
  const handleMenu = (params: C2CCenterMenuType) => {
    let menuText: string | number = '0'
    if (C2CCenterUser) {
      switch (params.type) {
        case 'percent':
          const isPercentage = C2CCenterUser[params.value] >= percentageEnum.percentage
          menuText = C2CCenterUser[params.value]
            ? `${formatNumberDecimal(
                C2CCenterUser[params.value],
                isPercentage ? percentageEnum.zero : percentageEnum.one
              )}%`
            : '0%'
          break
        case 'time':
          menuText = C2CCenterUser[params.value] ? formatTime(C2CCenterUser[params.value]) : '00′00′′'
          break
        default:
          menuText = C2CCenterUser[params.value] || '0'
          break
      }
    }
    return menuText
  }
  return (
    <div className={styles['menu-card']}>
      {data?.map(v => {
        /** 如果自己主页没广告* */
        if (!useId && !isCoinList && v.id === C2cCenterMenuEnum.peopleServed) return
        /** 如果不是自己页面，而且是交易总额则隐藏* */
        if (useId && v.id === C2cCenterMenuEnum.transaction) return
        return (
          <div className="center-main-item" key={v.id}>
            <div className="main-item-contair">
              <div className="main-item-title">
                <span className="title">{v.title}</span>
              </div>
              <div className="main-item-value">{handleMenu(v)}</div>
              {(v.id === C2cCenterMenuEnum.depositTimeInside || v.id === C2cCenterMenuEnum.depositTimeOff) && (
                <div
                  className={`main-item-round ${v.id === C2cCenterMenuEnum.depositTimeInside ? 'inside' : 'outside'}`}
                >
                  {v.id === C2cCenterMenuEnum.depositTimeInside
                    ? t`features_trade_future_c2c_25101574`
                    : t`features_trade_future_c2c_25101575`}
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
