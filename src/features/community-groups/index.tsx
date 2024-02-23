import { t } from '@lingui/macro'
import { Toast, Sticky } from 'react-vant'
import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import { useCommonStore } from '@/store/common'
import { useState, useEffect } from 'react'
import NoDataImage from '@/components/no-data-image'
import LazyImage, { Type } from '@/components/lazy-image'
import { getCommunityGroups } from '@/apis/community-groups'
import { oss_svg_image_domain_address } from '@/constants/oss'
import { HomeCommunityGroupsType } from '@/typings/api/community-groups'
import CommunityMenu from '@/features/community-groups/component/community-menu'
import CommunityHeader from '@/features/community-groups/component/community-header'
import { useLayoutStore } from '@/store/layout'
import styles from './index.module.css'

function CommunityGroups() {
  const { headerData } = useLayoutStore()
  const { locale, businessId } = useCommonStore()
  const [loading, setLoading] = useState<boolean>(true)
  const [isMenuPage, setIsMenuPage] = useState<boolean>(false)
  const [groupsData, setGroupsData] = useState<Array<HomeCommunityGroupsType>>([])

  const pageCommunityData = async () => {
    const params = {
      businessId,
      lanType: locale,
    }
    const { isOk, data } = await getCommunityGroups(params)
    setLoading(false)
    if (!isOk) return
    setGroupsData(data || [])
  }

  useEffect(() => {
    loading
      ? Toast.loading({
          duration: 0,
          message: t`features_assets_coin_details_coin_details_510157`,
        })
      : Toast.clear()
  }, [loading])

  useEffect(() => {
    pageCommunityData()
  }, [])

  return (
    <div className={styles.scoped}>
      <NavBar
        title={t({
          id: 'modules_community_groups_index_page_server_5101267',
          values: { 0: headerData?.businessName },
        })}
        left={<Icon name="back" hasTheme className="header-back" />}
      />
      <div className="community-groups-header">
        <LazyImage
          imageType={Type.png}
          className="groups-header-image"
          src={`${oss_svg_image_domain_address}community`}
        />
        <div className="groups-header-first">
          {t({
            id: 'features_community_groups_index_5101265',
            values: { 0: headerData?.businessName },
          })}
        </div>
        <div className="groups-header-second">
          {t({
            id: 'features_community_groups_index_5101285',
            values: { 0: headerData?.businessName },
          })}
        </div>
      </div>
      <div className="community-groups-content">
        <Sticky offsetTop={46}>
          <div className={`fixed-container`}>
            <CommunityHeader data={groupsData} />
          </div>
        </Sticky>
      </div>
      <div id={'community-body'} className={`community-groups-body ${isMenuPage ? 'community-padding' : ''}`}>
        {groupsData?.length
          ? groupsData?.map((item, index) => {
              return (
                <div key={index} id={`menu${index}`} className="groups-body-item">
                  <CommunityMenu data={item} />
                </div>
              )
            })
          : !loading && <NoDataImage />}
      </div>
    </div>
  )
}
export default CommunityGroups
