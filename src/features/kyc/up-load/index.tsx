import React, { useState, useMemo } from 'react'
import { useMount } from 'react-use'
import NavBar from '@/components/navbar'
import { Form, Button, Image, Toast, Uploader, UploaderValueItem, Flex, Dialog } from 'react-vant'
import { postUpload } from '@/apis/kyc'
import { t } from '@lingui/macro'
import LazyImage from '@/components/lazy-image'
import Icon from '@/components/icon'
import { link } from '@/helper/link'
import { getKycData, setKycData } from '@/helper/cache'
import { oss_svg_image_domain_address } from '@/constants/oss'
import { requestWithLoading } from '@/helper/order'
import styles from './index.module.css'

export default function KycUpLoad() {
  const [form] = Form.useForm()
  const onFinish = async values => {}

  const [uploaderImage, setUploaderImage] = useState<string>('')
  const [uploaderImage2, setUploaderImage2] = useState<string>('')
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

  const handleValidateChange2 = () => {
    form
      .validateFields()
      .then(() => setDisabled(false))
      .catch(() => setDisabled(true))
  }

  let image1 = ''
  let image2 = ''

  // 表单完整验证
  const inputArray = (img1, img2) => {
    if (img1 !== '' && img2 !== '') {
      setIsOver(true)
    } else {
      setIsOver(false)
    }
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
        Toast.info(t`features_kyc_load_vip_index_5101359`)
        return
      }

      const res = await requestWithLoading(postUpload({ image: url }))
      if (res.isOk) {
        Toast.info(t`features_kyc_up_load_index_5101117`)
        setUploaderImage(res.data!.url)

        handleValidateChange()
        image1 = res.data.url
        inputArray(image1, uploaderImage2)
      }
    }
  }
  const handleUploader2 = async (list: Array<UploaderValueItem>) => {
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
        Toast.info(t`features_kyc_load_vip_index_5101359`)
        return
      }

      const res1 = await requestWithLoading(postUpload({ image: url }))
      if (res1.isOk) {
        Toast.info(t`features_kyc_up_load_index_5101117`)
        setUploaderImage2(res1.data!.url)

        handleValidateChange2()
        image2 = res1.data.url
        inputArray(uploaderImage, image2)
      }
    }
  }

  // 背景图
  function bgImg(val, type) {
    if (val === 1) {
      if (type === 1) {
        return 'icon_passport_front'
      } else if (type === 2) {
        return 'icon_id_card_back'
      } else {
        return ''
      }
    } else if (val === 2) {
      if (type === 1) {
        return 'icon_driver_license_front'
      } else if (type === 2) {
        return 'icon_driver_license_subpage'
      } else {
        return ''
      }
    } else if (val === 3) {
      if (type === 1) {
        return 'icon_id_card_front'
      } else if (type === 2) {
        return 'icon_passport_subpage'
      } else {
        return ''
      }
    } else {
      return ''
    }
  }

  // 错误示例图
  function bgImg3(val, type) {
    if (val === 1) {
      if (type === 1) {
        return 'icon_passport_standard.png'
      } else if (type === 2) {
        return 'icon_passport_border_missing.png'
      } else if (type === 3) {
        return 'icon_passport_blur.png'
      } else if (type === 4) {
        return 'icon_passport_flash.png'
      } else {
        return ''
      }
    } else if (val === 2) {
      if (type === 1) {
        return 'icon_driver_license_standard.png'
      } else if (type === 2) {
        return 'icon_driver_license_border_missing.png'
      } else if (type === 3) {
        return 'icon_driver_license_photo_blur.png'
      } else if (type === 4) {
        return 'icon_driver_license_flash_strong.png'
      } else {
        return ''
      }
    } else if (val === 3) {
      if (type === 1) {
        return 'icon_id_card_standard.png'
      } else if (type === 2) {
        return 'icon_id_card_border_missing.png'
      } else if (type === 3) {
        return 'icon_id_card_photo_blur.png'
      } else if (type === 4) {
        return 'icon_id_card_flash_strong.png'
      } else {
        return ''
      }
    } else {
      return ' '
    }
  }
  function bgImg2(val, type) {
    return `${oss_svg_image_domain_address}kyc/${bgImg3(val, type)}`
  }

  // 读取缓存
  const data = getKycData()

  // 内容初始化
  const init = async () => {
    setUploaderImage(data?.attachFiles?.[0]?.filePath || '')
    setUploaderImage2(data?.attachFiles?.[1]?.filePath || '')
    if (data?.attachFiles?.[0]?.filePath && data?.attachFiles?.[1]?.filePath) {
      setIsOver(true)
    } else {
      setIsOver(false)
    }
  }
  useMount(init)

  // 下一步
  function submit() {
    if (!isOver) {
      return false
    }

    let attachFiles1 = {
      kycType: 2,
      kycAttachType: 1,
      fileName: t`features_kyc_up_load_index_5101118`,
      filePath: uploaderImage,
      sort: 1,
    }
    let attachFiles2 = {
      kycType: 2,
      kycAttachType: 2,
      fileName: t`features_kyc_up_load_index_5101119`,
      filePath: uploaderImage2,
      sort: 2,
    }
    data.attachFiles = [attachFiles1, attachFiles2]
    setKycData(data)

    link('/kyc/hold-up')
  }

  const setCertType = () => {
    return data.certType === 1 ? t`features_kyc_up_load_index_5101126` : t`features_kyc_up_load_index_5101123`
  }
  const setCertType2 = () => {
    return data.certType === 1 ? t`features_kyc_up_load_index_5101127` : t`features_kyc_up_load_index_5101128`
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
          {t`features_kyc_up_load_index_5101218`}
          {data.certTypeName}
        </div>
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item
            name="document_type"
            label={t({
              id: 'features_kyc_up_load_index_5101221',
              values: { 0: data.certTypeName, 1: setCertType() },
            })}
            className="update"
          >
            <Uploader onChange={handleUploader} previewImage={false} accept=".jpg, .jpeg, .png">
              <div className="update-wrap" style={{ backgroundImage: `url("${''}")` }}>
                {!uploaderImage && <Icon className="icon_bg" hasTheme name={bgImg(data.certType, 1)} />}
                {!uploaderImage && <Icon className="icon" name="a-icon_upload_picture" />}
                <LazyImage src={uploaderImage} className="py-3 px-6" />
                {uploaderImage && <Icon className="icon refesh" name="icon_replace" />}
              </div>
              <div className="update-text"></div>
            </Uploader>
          </Form.Item>
          <Form.Item
            name="city"
            label={t({
              id: 'features_kyc_up_load_index_5101221',
              values: { 0: data.certTypeName, 1: setCertType2() },
            })}
            className="update"
          >
            <Uploader onChange={handleUploader2} previewImage={false} accept=".jpg, .jpeg, .png">
              <div className="update-wrap" style={{ backgroundImage: `url("${''}")` }}>
                {!uploaderImage2 && <Icon className="icon_bg" hasTheme name={bgImg(data.certType, 2)} />}
                {!uploaderImage2 && <Icon className="icon" name="a-icon_upload_picture" />}
                <LazyImage src={uploaderImage2} className="py-3 px-6" />
                {uploaderImage2 && <Icon className="icon refesh" name="icon_replace" />}
              </div>
              <div className="update-text"></div>
            </Uploader>
          </Form.Item>
        </Form>
        <Button
          nativeType="submit"
          type="primary"
          block
          className={isOver ? 'success_btn' : 'fail_btn'}
          onClick={submit}
        >
          {t`user.field.reuse_23`}
        </Button>
        <div className="title mt-7 relative">
          {t`features_kyc_up_load_index_5101124`}
          <div
            className="text-brand_color absolute right-0 text-sm top-0"
            onClick={() => {
              Dialog.alert({
                title: t({
                  id: 'features_kyc_up_load_index_5101125',
                  values: { 0: data.certTypeName },
                }),
                closeable: true,
                theme: 'round-button',
                footer: <></>,
                closeIcon: <Icon name="close" hasTheme className="text-xl" />,
                message: (
                  <div className="slt">
                    <Icon className="slt_icon" hasTheme name={bgImg(data.certType, 1)} />
                    <div className="text-text_color_02 text-sm my-4">
                      {data.certType === 1
                        ? t`features_kyc_up_load_index_5101126`
                        : t`features_kyc_up_load_index_5101123`}
                    </div>
                    <Icon className="slt_icon" hasTheme name={bgImg(data.certType, 2)} />
                    <div className="text-text_color_02 text-sm mt-3">
                      {data.certType === 1
                        ? t`features_kyc_up_load_index_5101127`
                        : t`features_kyc_up_load_index_5101128`}
                    </div>
                  </div>
                ),
              })
            }}
          >
            {t`features_kyc_up_load_index_5101129`}
          </div>
        </div>
        <Flex gutter={16} className="m-0">
          <Flex.Item span={6}>
            <div className="iconBox">
              <LazyImage className="my-4" src={bgImg2(data.certType, 1)} />
            </div>
            <div className="tips_text">
              <Icon name="login_password_satisfy" />
              {t`features_kyc_up_load_index_5101130`}
            </div>
          </Flex.Item>
          <Flex.Item span={6}>
            <div className="iconBox">
              <LazyImage className="my-4" src={bgImg2(data.certType, 2)} />
            </div>
            <div className="tips_text">
              <Icon name="icon_fail" />
              {t`features_kyc_up_load_index_5101131`}
            </div>
          </Flex.Item>
          <Flex.Item span={6}>
            <div className="iconBox">
              <LazyImage className="my-4" src={bgImg2(data.certType, 3)} />
            </div>
            <div className="tips_text">
              <Icon name="icon_fail" />
              {t`features_kyc_up_load_index_5101132`}
            </div>
          </Flex.Item>
          <Flex.Item span={6}>
            <div className="iconBox">
              <LazyImage className="my-4" src={bgImg2(data.certType, 4)} />
            </div>
            <div className="tips_text">
              <Icon name="icon_fail" />
              {t`features_kyc_up_load_index_5101133`}
            </div>
          </Flex.Item>
        </Flex>

        <div className="title mt-7 mb-5">{t`features_kyc_up_load_index_5101134`}</div>

        <div className="text-text_color_03 text-xs mb-2">
          <Icon name="prompt-symbol" className="mr-2" />
          {t`features_kyc_up_load_index_5101135`}
        </div>
        <div className="text-text_color_03 text-xs mb-2">
          <Icon name="prompt-symbol" className="mr-2" />
          {t`features_kyc_up_load_index_5101136`}
        </div>
        <div className="text-text_color_03 text-xs mb-2">
          <Icon name="prompt-symbol" className="mr-2" />
          {t`features_kyc_up_load_index_5101214`} 10KB {t`features_kyc_up_load_index_5101215`}{' '}
          {t`features_kyc_up_load_index_5101216`} {t`features_kyc_up_load_index_5101217`}
        </div>

        <div className="text-xs text-text_color_03 mt-6">
          <Icon name="c2c_information_authentication" className="mr-1 text-lg" />
          {t`features_kyc_up_load_index_5101138`}
        </div>
      </div>
    </div>
  )
}
