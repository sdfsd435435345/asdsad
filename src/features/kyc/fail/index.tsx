import React, { useState, useMemo, useEffect } from 'react'
import { useMount } from 'react-use'
import NavBar from '@/components/navbar'
import { Form, Button, Image, Toast, Uploader, UploaderValueItem, Flex } from 'react-vant'
import { getApprovalResult, resubmitUpdate } from '@/apis/kyc'
import LazyImage from '@/components/lazy-image'
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { getKycData, setKycData } from '@/helper/cache'
import { link } from '@/helper/link'
import styles from './index.module.css'

export default function KycFail() {
  const [data, setData] = useState<any>()
  const option = getKycData()
  /**
   * 获取认证状态数据
   */
  const getUserInfo = async () => {
    if (option.type === 2) {
      let dataA = { auditStatus: 0, isReadResult: 0, kycType: 0, kycId: '' }
      option.auditMaps.forEach(e => {
        if (e.kycType === 3) {
          dataA = e
        }
      })
      const res = await getApprovalResult({ kycId: dataA.kycId, kycType: dataA.kycType })
      if (res.isOk) {
        setData(res.data)
      }
    } else {
      let dataA = { auditStatus: 0, isReadResult: 0, kycType: 0, kycId: '' }
      option.auditMaps.forEach(e => {
        if (e.kycType === 2) {
          dataA = e
        }
      })
      const res = await getApprovalResult({ kycId: dataA.kycId, kycType: dataA.kycType })
      if (res.isOk) {
        setData(res.data)
      }
    }
  }
  useEffect(() => {
    getUserInfo()
  }, [])

  // 重新认证
  async function submit() {
    if (option.type === 2) {
      let dataA = { auditStatus: 0, isReadResult: 0, kycType: 0, kycId: '' }
      option.auditMaps.forEach(e => {
        if (e.kycType === 3) {
          dataA = e
        }
      })
      const res = await resubmitUpdate({ kycId: dataA.kycId, kycType: dataA.kycType })
      if (res.isOk) {
        link('/kyc')
      }
    } else {
      let dataA = { auditStatus: 0, isReadResult: 0, kycType: 0, kycId: '' }
      option.auditMaps.forEach(e => {
        if (e.kycType === 2) {
          dataA = e
        }
      })
      const res = await resubmitUpdate({ kycId: dataA.kycId, kycType: dataA.kycType })
      if (res.isOk) {
        link('/kyc')
      }
    }
  }
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
          src="http://markcoin.oss-ap-southeast-1.aliyuncs.com/fastpay-h5/image/success_icon.png"
        />
      </div>
      <div className="title">{t`features_kyc_fail_index_5101210`}</div>
      <div className="text">{t`features_kyc_fail_index_5101211`}</div>

      <div className="tips">
        {t({
          id: 'features_kyc_fail_index_5101212',
          values: { 0: data && data!.rejectText },
        })}
      </div>
      <div className="px-4">
        <Button nativeType="submit" type="primary" className="mt-6 font-semibold" block onClick={submit}>
          {t`features_kyc_fail_index_5101213`}
        </Button>
      </div>
    </div>
  )
}
