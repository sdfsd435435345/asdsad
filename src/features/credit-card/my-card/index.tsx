import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import { useEffect, useState } from 'react'
import Link from '@/components/link'
import {
  getCradList,
  getUserVccInfo,
  getHistoryCard,
  postV1HelpCenterHorseLampApiRequest,
} from '@/apis/credit-card/my-card'
import { Button, Dialog } from 'react-vant'
import { getCardLogPageRoutePath, getCreditCardOpenCrad, getCreditCardZfPasswod } from '@/helper/route'
import { link } from '@/helper/link'
import classNames from 'classnames'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import { t } from '@lingui/macro'
import dayjs from 'dayjs'
import { useCommonStore } from '@/store/common'
import styles from './index.module.css'
import Card from '../common/card'
import Skeleton from '../common/skeleton'

function MyCard() {
  const [cardList, setCardList] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [isApplyRig, setIsApplyRig] = useState<boolean>(true)
  const [historyCardList, setHistoryCardList] = useState<any>([])
  const [isSetPassword, setIsSetPassword] = useState<any>(null)
  const [announcementList, setAnnouncementList] = useState<object[]>()
  const [currentTab, setCurrentTab] = useState<'myCard' | 'meltCard'>('myCard')
  const locale = useCommonStore()
  // 获取虚拟卡列表
  const cardHeadList = async () => {
    setLoading(true)
    const res = await getCradList({})
    setLoading(false)
    setCardList(preState => {
      return res.data?.map((item, index) => {
        return {
          ...preState[index],
          ...item,
        }
      })
    })
    setCardList(res.data)
  }
  // 是否设置密码
  const userVccInfo = async () => {
    setLoading(true)
    const res = await getUserVccInfo({})
    const { isOk, data } = res || {}
    setLoading(false)
    if (!isOk) return
    if (data) setIsSetPassword(res.data)
  }
  // 销毁卡
  const historyCard = async () => {
    setLoading(true)
    const res = await getHistoryCard({})
    const { isOk, data } = res || {}
    setLoading(false)
    if (!isOk) return
    if (data) setHistoryCardList(res.data)
  }

  // 获取 cardList
  const request = async () => {
    setLoading(true)
    try {
      const [cardListData, isSetPasswordData, historyCardData] = await Promise.all([
        getCradList({}),
        getUserVccInfo({}),
        getHistoryCard({}),
      ])
      setCardList(cardListData.data)
      setIsSetPassword(isSetPasswordData.data?.isSetPayPassword)
      setLoading(false)
      setHistoryCardList(historyCardData.data)
    } catch {
      setLoading(false)
    }
  }
  // 公告中心
  const horseLamp = async () => {
    const res = await postV1HelpCenterHorseLampApiRequest({ operateType: 1 })

    const { isOk, data } = res || {}
    if (!isOk) return
    if (data) setAnnouncementList(res.data?.lampList)
  }
  const horseLampList = (
    <div className="announcement">
      <div className="announcement-title">
        <Link
          href={`https://fastpay-h5-staging.nbttfc365.com/${locale.locale}/announcement`}
          className="announcement-link"
        >
          <div className="announcement-title-content">
            <span className="title-content-left">{t`features_home_components_announcement_list_index_26uperfbjs`}</span>
            <span className="title-content-right">
              <Icon name="next_arrow_black" />
            </span>
          </div>
        </Link>
      </div>
      <div className="announcement-content-text">
        {announcementList?.map((item: any) => {
          return (
            <div className="common-div" key={item.id}>
              <div className="common-div-text">{item.name}</div>
              <div className="common-div-date">{dayjs(item.pushTime).format('YYYY-MM-DD')}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
  useEffect(() => {
    request()
    horseLamp()
  }, [])

  const getPassword = () => {
    if (isSetPassword) {
      link(getCreditCardOpenCrad())
    } else {
      return Dialog.confirm({
        title: <Icon name="tis" className="look-out" />,
        message: t`features_credit_card_my_card_index_vp8dygg3ei`,
        className: 'dialog-confirm-wrapper cancel-gray confirm-black',
        cancelButtonText: t`assets.financial-record.cancel`,
        confirmButtonText: t`common.confirm`,
        onConfirm() {
          link(getCreditCardZfPasswod())
        },
      })
    }
  }

  const toCardLogPage = () => {
    link(getCardLogPageRoutePath())
  }

  if (loading) {
    return (
      <div className={styles.scoped}>
        <NavBar
          onClickLeft={() => undefined}
          title={null}
          left={
            <div>
              <span className="activeText tabActive">{t`features_credit_card_my_card_index_1r2xphequt`}</span>
              <span className="activeText">{t`features_credit_card_my_card_index_nw6rl87ddc`} </span>
            </div>
          }
          right={
            <div className="navrig flex items-center">
              <span>{t`features_credit_card_my_card_index_e5vmugvvgv`}</span>
              <Icon name="next_arrow-copy" className="navrig" />
            </div>
          }
        />
        <div className="card-list">
          <Skeleton />
          <Skeleton />
        </div>
        <div className="confirm-payment">
          <Button type="primary">{t`features_credit_card_my_card_index_b1l3ntl_fi`}</Button>
        </div>
        <FullScreenLoading isShow={loading} mask />
      </div>
    )
  }
  return (
    <div className={styles.scoped}>
      <NavBar
        onClickLeft={() => undefined}
        title={null}
        left={
          <div>
            <span
              onClick={() => {
                setCurrentTab('myCard')
                setIsApplyRig(true)
              }}
              className={classNames('activeText', { tabActive: currentTab === 'myCard' })}
            >
              {t`features_credit_card_my_card_index_1r2xphequt`}({cardList?.length})
            </span>
            <span
              onClick={() => {
                setCurrentTab('meltCard')
                setIsApplyRig(false)
              }}
              className={classNames('activeText', { tabActive: currentTab === 'meltCard' })}
            >
              {t`features_credit_card_my_card_index_nw6rl87ddc`}({historyCardList.length})
            </span>
          </div>
        }
        right={
          isApplyRig ? (
            <div className="navrig flex items-center">
              <span>{t`features_credit_card_my_card_index_e5vmugvvgv`}</span>
              <Icon name="next_arrow-copy" className="navrig" />
            </div>
          ) : null
        }
        onClickRight={toCardLogPage}
      />

      <div style={currentTab === 'myCard' ? { display: 'block' } : { display: 'none' }} className="content">
        {cardList.length ? (
          cardList?.map((item, index) => {
            return (
              <div key={item.cardId} style={{ marginBottom: '24px' }}>
                <Card
                  onDestorySuccess={() => {
                    cardHeadList()
                    historyCard()
                  }}
                  onShowCardNoSuccess={currentInfo => {
                    setCardList(presState => {
                      presState[index] = currentInfo
                      return [...presState]
                    })
                  }}
                  onAliasUpdateSuccess={() => {
                    cardHeadList()
                  }}
                  cardInfo={item}
                  cardNo={item.cardNo}
                  cardAlias={item.cardAlias}
                  detailOpen={item.open}
                  onDetailShow={show => {
                    setCardList(preState => {
                      preState[index].open = show
                      return [...preState]
                    })
                  }}
                />
              </div>
            )
          })
        ) : (
          <Card isFake isApply isPassword={isSetPassword} />
        )}
        {cardList.length ? null : (
          <>
            <div className="content-text">
              <div className="text1">{t`features_credit_card_my_card_index_ffpoaccjay`}</div>
              <div className="text2">
                <div>{t`features_credit_card_my_card_index_b78md0dghe`}</div>
                <div>{t`features_credit_card_my_card_index_ud03qhwo3n`}</div>
                <div>{t`features_credit_card_my_card_index_u5mbyl8naw`}</div>
                <div>
                  <Link href="https://blockpursevcc.gitbook.io/tips/ ">{t`features_credit_card_my_card_index_3rrcrggu3i`}</Link>
                </div>
              </div>
            </div>
            {/* todo 公告 */}
          </>
        )}
        {cardList.length ? (
          <>
            <div className="confirm-payment">
              <Button onClick={getPassword} type="primary">
                {t`features_credit_card_my_card_index_ivk4okzytc`}
              </Button>
            </div>
          </>
        ) : null}
      </div>
      <div style={currentTab !== 'myCard' ? { display: 'block' } : { display: 'none' }}>
        {historyCardList.length ? (
          historyCardList.map((item, index) => {
            return (
              <div className="card-list" key={index}>
                <div>
                </div>
              </div>
            )
          })
        ) : (
          <div className="pin-card-no">
            <img
              src="https://markcoin.oss-ap-southeast-1.aliyuncs.com/fastpay-h5/image/Group%201000005452.svg"
              alt=""
            />
          </div>
        )}
      </div>

      <FullScreenLoading isShow={loading} mask />
    </div>
  )
}

export default MyCard
