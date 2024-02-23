import { useEffect, useState } from 'react'
import { Swiper } from 'react-vant'
import { link } from '@/helper/link'
import { YapiGetV1BannerListData } from '@/typings/yapi/BannerListV1GetApi'
import { getBanners } from '@/apis/home'
import LazyImage from '@/components/lazy-image'
import { t } from '@lingui/macro'
import { checkIsIphone } from '@/helper/home'
import styles from './index.module.css'

export default Banner

function Banner() {
  const navigate = link
  const [banners, setbanners] = useState<YapiGetV1BannerListData[]>([])
  useEffect(() => {
    getBanners({}).then(res => {
      let processed: YapiGetV1BannerListData[] = res?.data?.list || []
      processed = processed.filter(each => each.appImage)
      setbanners(processed)
    })
  }, [])

  return (
    <div className={styles.scoped}>
      {banners.length > 0 && (
        <Swiper
          autoplay={banners.length > 0 ? 5000 : false}
          loop
          indicator={(total, current) => (
            <>
              {checkIsIphone() && (
                <span className="banner-caption">{t`features_home_components_banner_index_5101315`}</span>
              )}
              <div className="banner-indicator">
                <span className="text-button_text_01">{current + 1}</span>
                <span className="text-text_color_04">/{total}</span>
              </div>
            </>
          )}
        >
          {banners.map(banner => (
            <Swiper.Item
              key={banner.name}
              onClick={() => {
                if (banner.h5TargetUrl) navigate(banner?.h5TargetUrl, { target: true })
              }}
            >
              <LazyImage className="banner-img" src={banner.appImage || ''} alt={banner.name} />
            </Swiper.Item>
          ))}
        </Swiper>
      )}
    </div>
  )
}
