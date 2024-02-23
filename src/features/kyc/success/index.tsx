import React, { useState, useMemo } from 'react'
import { useMount } from 'react-use'
import NavBar from '@/components/navbar'
import { Form, Button, Image, Toast, Uploader, UploaderValueItem, Flex } from 'react-vant'
import LazyImage from '@/components/lazy-image'
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { link } from '@/helper/link'
import { getKycData, setKycData } from '@/helper/cache'
import styles from './index.module.css'

export default function KycSuccess() {
  const option = getKycData()

  return (
    <div className={`kyc-stand ${styles.scoped}`}>
      <NavBar
        title={
          <div>
            <img src="" alt="" />
            <span>
              {option.type === 2 ? t`features_kyc_load_vip_index_5101169` : t`features_kyc_up_load_index_5101120`}
            </span>
          </div>
        }
      />
      <div className="kyc-stand-wrap text-center">
        <LazyImage
          className="icon_bg"
          src="http://markcoin.oss-ap-southeast-1.aliyuncs.com/fastpay-h5/image/register_success_black.png"
        />
      </div>
      <div className="title">{t`features_kyc_success_index_5101140`}</div>
      <div className="text">{t`features_kyc_success_index_5101141`}</div>

      <div className="px-4">
        <Button
          nativeType="submit"
          type="primary"
          className="mt-8 font-semibold"
          block
          onClick={() => {
            // 往后回退到认证页面，避免出现循环
            history.go(option.type === 2 ? -2 : -4)
          }}
        >
          {t`features_trade_common_notification_index_5101066`}
        </Button>
      </div>
    </div>
  )
}
