import React, { useState, useMemo } from 'react'
import { useMount } from 'react-use'
import NavBar from '@/components/navbar'
import { Form, Button, Image, Toast, Uploader, UploaderValueItem, Flex, Dialog } from 'react-vant'
import { postUpload, basicSubmit } from '@/apis/kyc'
import { t } from '@lingui/macro'
import LazyImage from '@/components/lazy-image'
import Icon from '@/components/icon'
import { getKycData, setKycData } from '@/helper/cache'
import { link } from '@/helper/link'
import { requestWithLoading } from '@/helper/order'
import styles from './index.module.css'

export default function KycUpLoad() {
  const [form] = Form.useForm()
  const onFinish = async values => {}

  const [uploaderImage, setUploaderImage] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(true)
  const [isOver, setIsOver] = useState(false)
  const limitSize = useMemo(() => {
    const size = 5 * (1024 * 1024) // 5MB
    return size
  }, [])

  const minSize = useMemo(() => {
    const size = 10 * 1024 // 10K
    return size
  }, [])

  const handleValidateChange = () => {
    form
      .validateFields()
      .then(() => setDisabled(false))
      .catch(() => setDisabled(true))
  }

  const handleUploader = async (list: Array<UploaderValueItem>) => {
    if (list.length > 0) {
      const imageList = list.slice(-1)[0]
      const file = imageList.file as File
      const url = imageList.url as string

      if (file.size > limitSize) {
        Toast.info(t`features_user_safety_items_application_form_index_622`)
        return
      }
      if (file.size < minSize) {
        Toast.info(t`features_kyc_hold_up_index_5101354`)
        return
      }
      let name = file.name.substring(file.name.lastIndexOf('.') + 1).toLocaleLowerCase()
      if (name !== 'png' && name !== 'jpg' && name !== 'jpeg' && name !== 'PNG' && name !== 'JPG' && name !== 'JPEG') {
        Toast.info(t`features_kyc_hold_up_index_5101358`)
        return
      }

      const res = await requestWithLoading(postUpload({ image: url }))
      if (res.isOk) {
        setUploaderImage(res.data!.url)
        handleValidateChange()
        setIsOver(true)
      } else {
        setIsOver(false)
      }
    }
  }

  // 读取缓存
  const data = getKycData()

  // 提交认证
  async function submit() {
    if (!isOver) {
      return false
    }
    let attachFiles = {
      kycType: 2,
      kycAttachType: 3,
      fileName: t`features_kyc_hold_up_index_5101202`,
      filePath: uploaderImage,
      sort: 3,
    }

    if (data.certIsPermanent === '1') {
      data.certValidDateEnd = ''
    }

    let attachFile = data.attachFiles.concat(attachFiles)

    let certValidDateEnd = `${data.certValidDateEnd} 23:59:00`
    if (data.certIsPermanent === '1') {
      certValidDateEnd = ''
    }
    setIsOver(false)

    let nData = {
      country: data.area.remark,
      firstName: data.firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      birthDay: `${data.birthDay} 00:00:01`,
      certValidDateStart: `${data.certValidDateStart} 00:00:01`,
      certValidDateEnd,
      certIsPermanent: data.certIsPermanent,
      certType: data.certType,
      certNumber: data.certNumber,
      attachFiles: attachFile,
    }

    const res = await basicSubmit(nData)
    if (res.isOk) {
      link('/kyc/success?type=1')
    }
    setIsOver(true)
  }

  return (
    <div className={`kyc-stand ${styles.scoped}`}>
      <NavBar
        title={
          <div>
            <img src="" alt="" />
            <span>{t`features_kyc_up_load_index_5101120`}</span>
          </div>
        }
      />
      <div className="kyc-stand-wrap">
        <div className="title">
          {t({
            id: 'features_kyc_up_load_index_5101121',
            values: { 0: data.certTypeName },
          })}
        </div>
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item name="document_type" label={t`features_kyc_hold_up_index_5101201`} className="update">
            <Uploader onChange={handleUploader} previewImage={false}>
              <div className="update-wrap" style={{ backgroundImage: `url("${''}")` }}>
                {!uploaderImage && <Icon className="icon_bg" name="c2c/merchant_photo_verify" isRemoteUrl />}
                {!uploaderImage && <Icon className="icon" name="a-icon_upload_picture" />}
                <LazyImage src={uploaderImage} className="py-3 px-6" />
                {uploaderImage && <Icon className="icon refesh" name="icon_replace" />}
              </div>
              <div className="update-text"></div>
            </Uploader>
          </Form.Item>
        </Form>
        <Button
          nativeType="submit"
          type="primary"
          block
          className={isOver ? 'success_btn mt-4' : 'fail_btn mt-4'}
          onClick={submit}
        >
          {t`features_kyc_load_vip_index_5101170`}
        </Button>
        <div className="title mt-7 mb-6 relative pr-24">
          {t`features_kyc_hold_up_index_5101203`}
          <div
            className="text-brand_color absolute right-0 text-sm top-0"
            onClick={() => {
              Dialog.alert({
                title: t`features_kyc_hold_up_index_5101204`,
                closeable: true,
                theme: 'round-button',
                footer: <></>,
                closeIcon: <Icon name="close" hasTheme className="text-xl" />,
                message: (
                  <div className="slt">
                    <Icon className="slt_icon" name="c2c/merchant_photo_verify" isRemoteUrl />
                    <div className="text-text_color_02 text-sm mt-4">{t`features_kyc_hold_up_index_5101205`}</div>
                  </div>
                ),
              })
            }}
          >{t`features_kyc_up_load_index_5101129`}</div>
        </div>
        <div className="text-text_color_03 text-xs mb-2 pl-5 relative">
          <Icon name="login_password_satisfy" className="mr-2 absolute left-1 top-1" />
          {t`features_kyc_hold_up_index_5101206`}
        </div>
        <div className="text-text_color_03 text-xs mb-2 pl-5 relative">
          <Icon name="login_password_satisfy" className="mr-2 absolute left-1 top-1" />
          {t`features_kyc_hold_up_index_5101207`}
        </div>
        <div className="text-text_color_03 text-xs mb-2 pl-5 relative">
          <Icon name="login_password_satisfy" className="mr-2 absolute left-1 top-1" />
          {t`features_kyc_hold_up_index_5101208`}
        </div>
        <div className="text-text_color_03 text-xs mb-2 pl-5 relative">
          <Icon name="icon_fail" className="mr-2 absolute left-1 top-1" />
          {t`features_kyc_hold_up_index_5101209`}
        </div>

        <div className="text-xs text-text_color_03 mt-6">
          <Icon name="c2c_information_authentication" className="mr-1 text-lg" />
          {t`features_kyc_up_load_index_5101138`}
        </div>
      </div>
    </div>
  )
}
