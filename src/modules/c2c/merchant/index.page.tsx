import { getC2cCommonSettings } from '@/apis/c2c/common'
import { getV1C2cMerchantInfoApiRequest } from '@/apis/c2c/merchant'
import Icon from '@/components/icon'
import LazyImage, { Type } from '@/components/lazy-image'
import Link from '@/components/link'
import NavBar from '@/components/navbar'
import { ApplicationStatusEnum } from '@/constants/c2c/merchant'
import { oss_svg_image_domain_address } from '@/constants/oss'
import BadgeInfoBox from '@/features/c2c/c2c-merchant/badge-info-box'
import C2cMerchantButton from '@/features/c2c/c2c-merchant/c2c-merchant-button'
import BadgeContainer from '@/features/c2c/c2c-merchant/common/badge-container'
import MerchantTitleContainer from '@/features/c2c/c2c-merchant/common/merchant-title-container'
import { checkIsMerchant, merchantTitleSwitcher } from '@/helper/c2c/merchant'
import { getC2cMerchantPageRoutePath, getC2cPostAdvPageRoutePath, getC2cTradePageRoutePath } from '@/helper/route'
import { useScaleDom } from '@/hooks/use-scale-dom'
import { useLayoutStore } from '@/store/layout'
import { YapiGetV1C2CCommonSettingData } from '@/typings/yapi/C2cCommonSettingV1GetApi'
import { YapiGetV1C2CMerchantInfoMerchantInfoData } from '@/typings/yapi/C2cMerchantInfoV1GetApi'
import { t } from '@lingui/macro'
import { useSize } from 'ahooks'
import { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'

function Page() {
  const { headerData } = useLayoutStore()
  const { businessName } = headerData || {}
  const [status, setstatus] = useState<ApplicationStatusEnum>()
  const [info, setinfo] = useState<YapiGetV1C2CMerchantInfoMerchantInfoData>()
  const [settings, setsettings] = useState<YapiGetV1C2CCommonSettingData>()

  useEffect(() => {
    const requests = Promise.all([getV1C2cMerchantInfoApiRequest({}), getC2cCommonSettings({})])
    requests.then(res => {
      const merchantInfoRes = res[0]
      const settingsRes = res[1]
      setstatus(merchantInfoRes.data?.status as unknown as ApplicationStatusEnum)
      setinfo(merchantInfoRes.data?.merchantInfo)
      setsettings(settingsRes.data)
    })
  }, [])

  const containerRef = useRef(null)
  const containerWidth = useSize(containerRef)?.width || 0
  // substract header image width
  const autoScaleRef = useScaleDom(containerWidth - 96, null)

  return (
    <div className={styles.scoped}>
      <NavBar
        title={t({
          id: 'modules_c2c_merchant_index_page_5101366',
          values: { 0: businessName },
        })}
      />
      <LazyImage
        className="merchant-header-image"
        src={`${oss_svg_image_domain_address}merchant-apply-bg`}
        imageType={Type.png}
      />
      <div ref={containerRef} className="h-32 relative px-8 z-1 flex flex-row items-center">
        <div ref={autoScaleRef} className="flex flex-col justify-start space-y-2 py-8">
          <span className="text-button_text_02 text-xl font-semibold whitespace-nowrap">
            {t`modules_c2c_merchant_index_page_5101371`} {businessName} {t`modules_c2c_merchant_index_page_5101372`}
          </span>
          <span className="text-button_text_02 text-base font-medium">{t`modules_c2c_merchant_index_page_5101373`}</span>
        </div>
        <LazyImage
          className="merchant-header-badge"
          src={`${oss_svg_image_domain_address}c2c/merchant_apply_badge`}
          imageType={Type.png}
        />
      </div>
      <div className="merchant-section">
        <div className="space-y-4 flex flex-col">
          <MerchantTitleContainer>
            {businessName} {t`modules_c2c_merchant_index_page_5101374`}
          </MerchantTitleContainer>
          <BadgeInfoBox
            badgeIcon={
              <LazyImage src={`${oss_svg_image_domain_address}c2c/merchant_exclusive_badge`} imageType={Type.png} />
            }
            styleIcon={
              <LazyImage
                src={`${oss_svg_image_domain_address}c2c/merchant_exclusive_badge_overlay`}
                imageType={Type.png}
                hasTheme
              />
            }
            title={t`modules_c2c_merchant_index_page_5101367`}
            subtitle={t`modules_c2c_merchant_index_page_5101368`}
          />
          <BadgeInfoBox
            badgeIcon={
              <LazyImage src={`${oss_svg_image_domain_address}c2c/merchant_customer_badge`} imageType={Type.png} />
            }
            styleIcon={
              <LazyImage
                src={`${oss_svg_image_domain_address}c2c/merchant_customer_badge_overlay`}
                imageType={Type.png}
                hasTheme
              />
            }
            title={t`modules_c2c_merchant_index_page_5101369`}
            subtitle={t`modules_c2c_merchant_index_page_5101370`}
          />
        </div>
        <div className="space-y-4 flex flex-col mb-8">
          <MerchantTitleContainer>{merchantTitleSwitcher(status, businessName)}</MerchantTitleContainer>
          <BadgeContainer
            badgeIcon={
              <LazyImage
                src={`${oss_svg_image_domain_address}c2c/merchant_deposit_badge_overlay`}
                imageType={Type.png}
                hasTheme
              />
            }
          >
            <div className="text-left p-4">
              <div className="flex flex-row items-center">
                {ApplicationStatusEnum.none === status ? (
                  <Icon className="text-sm mr-2" name="msg" hasTheme />
                ) : (
                  <Icon className="text-sm mr-2" name="login_password_satisfy" />
                )}
                {ApplicationStatusEnum.success === status ||
                ApplicationStatusEnum.disable === status ||
                ApplicationStatusEnum.pendingDelete === status
                  ? t`modules_c2c_merchant_index_page_f7mzdl4alzz3rn8fckfl0`
                  : t`modules_c2c_merchant_index_page_5101376`}
              </div>
              <div className="text-xl text-brand_color">
                {info?.freezeCount && info?.freezeSymbol
                  ? `${info.freezeCount || 0} ${info.freezeSymbol || '--'}`
                  : `${settings?.frozenQuantity || 0} ${settings?.symbol || '--'}`}
              </div>
              <div className="my-4 text-sm">
                {ApplicationStatusEnum.pendingDelete === status
                  ? t`modules_c2c_merchant_index_page_0hymt9tnim_snt37rntm_`
                  : t`modules_c2c_merchant_index_page_5101377`}
              </div>
              {status !== ApplicationStatusEnum.pendingDelete && (
                <div className="text-sm">
                  <Link href={checkIsMerchant(status) ? getC2cTradePageRoutePath() : 'assets/recharge'}>
                    <span className="text-brand_color">
                      {checkIsMerchant(status)
                        ? t`assets.coin.trade.go_to_trade`
                        : t`modules_c2c_merchant_index_page_5101378`}
                    </span>
                    <Icon className="text-sm" name="safety_icon_more" />
                  </Link>
                  <Link href={checkIsMerchant(status) ? getC2cPostAdvPageRoutePath() : getC2cTradePageRoutePath()}>
                    <span className="text-brand_color ml-6">
                      {checkIsMerchant(status)
                        ? t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_j8r53b89spfvpwjv_eoen`
                        : t`modules_c2c_merchant_index_page_5101379`}
                    </span>
                    <Icon className="text-sm" name="safety_icon_more" />
                  </Link>
                </div>
              )}
            </div>
          </BadgeContainer>
        </div>
        <C2cMerchantButton status={status} data={info} />
      </div>
    </div>
  )
}

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {}
  return {
    pageContext: {
      unAuthTo: `/login?redirect=${getC2cMerchantPageRoutePath()}`,
      pageProps,
      layoutParams,
      documentProps: {
        title: t`modules_c2c_merchant_form_index_page_25101380`,
      },
    },
  }
}

export { Page, onBeforeRender }
