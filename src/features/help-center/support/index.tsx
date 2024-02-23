import { useEffect, useState } from 'react'
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { link } from '@/helper/link'
import { Toast } from 'react-vant'
import NavBar from '@/components/navbar'
import { getSupportHomePage } from '@/apis/support'
import HelpCenterHeader from '@/features/help-center/header'
import NoDataImage from '@/components/no-data-image'
import {
  HelpCenterArticleListHomePage,
  HelpCenterQuestionListHomePage,
  CenterDateType,
} from '@/typings/api/help-center'
import styles from './index.module.css'
import SupportCard from './component/support-card'
import SupportArticle from './component/support-article'

function HelpCenter() {
  const [loading, setLoading] = useState<boolean>(true)
  const [articleList, setArticleList] = useState<Array<HelpCenterArticleListHomePage>>([])
  const [questionList, setQuestionList] = useState<Array<HelpCenterQuestionListHomePage>>([])

  const onloadCurrencies = async () => {
    setLoading(true)
    const res = await getSupportHomePage({})
    if (res.isOk && res.data) {
      setArticleList(res.data?.articleList)
      setQuestionList(res.data?.questionList?.slice(0, 19))
    }
    setLoading(false)
  }

  useEffect(() => {
    onloadCurrencies()
  }, [])

  useEffect(() => {
    loading
      ? Toast.loading({
          duration: 0,
          message: t`features_assets_coin_details_coin_details_510157`,
        })
      : Toast.clear()
  }, [loading])

  /** 点击问题模块* */
  const onCardChange = v => {
    link(`/support/navigation?subMenuId=${v.id}`)
  }

  const onChangeMore = () => {
    link(`/support/navigation`)
  }

  /** 点击当前文章* */
  const onCheckArticle = v => {
    link(`/support/article/${v.id}`)
  }

  /** 点击查看更多* */
  const onMore = v => {
    link(`/support/article/${v.id}`)
  }

  /** 搜索* */
  const onSearchChange = v => {
    v && link(`/support/search?type=1&searchName=${v}#1`)
  }

  return (
    <section className={`help-center-support ${styles.scoped}`}>
      <div className="help-center-support-wrap">
        <NavBar title={t`user.personal_center_06`} left={<Icon name="back" hasTheme className="header-back" />} />
        <div className="help-center-support-header">
          <HelpCenterHeader onSearch={onSearchChange} placeholder={t`features_help_center_support_index_5101232`} />
        </div>
        <div className="content">
          <div className="content-title">
            <div className="content-title-header">
              <Icon name="tips_icon" className="problem-icon" />
              <span className="problem-text">{t`features_help_center_support_index_5101072`}</span>
            </div>
            <div className="content-title-footer">
              <label className="footer-text-first">{t`features_help_center_support_index_5101073`}</label>
              <label className="footer-text-second">
                <span>{t`features_help_center_support_index_5101074`}</span>
                <span className="text-time-color">{t`features_help_center_support_index_5101075`}</span>
                <span>{t`features_help_center_support_index_5101076`}</span>
              </label>
            </div>
          </div>
          <div className="content-func">
            {questionList?.length ? (
              <SupportCard data={questionList} onChange={onCardChange} onMore={onChangeMore} />
            ) : loading ? null : (
              <NoDataImage className="mt-8" />
            )}
          </div>
          <div className="content-divider" />
          <div className="content-new-article">
            <div className="new-article-header">
              <Icon name="latest_articles" className="article-icon" />
              <span className="problem-text">{t`features_help_center_support_index_5101077`}</span>
            </div>
            <SupportArticle
              finished
              colNumber={1}
              onMore={onMore}
              loading={loading}
              data={articleList}
              refreshing={false}
              currentKey="noHtmlContent"
              onCheckArticle={onCheckArticle}
              dateFormat={CenterDateType.MinDate}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HelpCenter
