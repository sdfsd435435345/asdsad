import React, { useState, useMemo } from 'react'
import { useMount } from 'react-use'
import NavBar from '@/components/navbar'
import { Form, Button, Image, Toast, Uploader, UploaderValueItem, Flex, Cell, Input, Dialog } from 'react-vant'
import { MemberMemberAreaType } from '@/typings/user'
import UserSearchArea from '@/features/user/common/search-area'
import { oss_area_code_image_domain_address } from '@/constants/oss'
import { UserSelectAreaTypeEnum, UserEnabledStateTypeEnum } from '@/constants/user'
import LazyImage from '@/components/lazy-image'
import { postUpload, seniorSubmit } from '@/apis/kyc'
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { getKycData, setKycData } from '@/helper/cache'
import { link } from '@/helper/link'
import styles from './index.module.css'

export default function KycUpLoad() {
  const [isEnble, setIsEnble] = useState<boolean>(false)
  const [area, setArea] = useState<MemberMemberAreaType>()
  const [selectArea, setSelectArea] = useState<boolean>(false)
  const [isOver, setIsOver] = useState(false)
  const [form] = Form.useForm()

  const [uploaderImage, setUploaderImage] = useState<string>('')
  const [uploaderImage2, setUploaderImage2] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(true)
  const [formData, setFormData] = useState({
    city: '',
    street: '',
  })

  // 删除图片
  const delImg = () => {
    setUploaderImage2('')
    Toast('已删除图片！')
  }

  // 表单完整验证
  const inputArray = (val, name) => {
    if (name) {
      formData[name] = val
    }
    if (formData.city !== '' && formData.street !== '' && uploaderImage !== '') {
      setIsOver(true)
    } else {
      setIsOver(false)
    }
  }

  // 读取缓存
  const kycData = getKycData()

  // 内容初始化
  const init = async () => {
    setIsEnble(true)
    setArea(kycData.area)
  }
  useMount(init)

  // 地区选择判断
  const handleSelectArea = async (v: MemberMemberAreaType) => {
    if (v.enableInd === UserEnabledStateTypeEnum.enable) setIsEnble(true)
    setArea(v)
    setSelectArea(false)
  }

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
        Toast.info('文件大小不得小于 10K, 请重新上传')
        return
      }
      let name = file.name.substring(file.name.lastIndexOf('.') + 1).toLocaleLowerCase()
      if (name !== 'png' && name !== 'jpg' && name !== 'jpeg' && name !== 'PNG' && name !== 'JPG' && name !== 'JPEG') {
        Toast.info('文件格式仅支持png/jpg/jpeg,请重新上传')
        return
      }

      const res = await postUpload({ image: url })
      if (res.isOk) {
        setUploaderImage(res.data!.url)
        handleValidateChange()
        inputArray(false, false)
        if (formData.city !== '' && formData.street !== '' && res.data!.url !== '') {
          setIsOver(true)
        } else {
          setIsOver(false)
        }
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
        Toast.info('文件大小不得小于 10K, 请重新上传')
        return
      }
      let name = file.name.substring(file.name.lastIndexOf('.') + 1).toLocaleLowerCase()
      if (name !== 'png' && name !== 'jpg' && name !== 'jpeg' && name !== 'PNG' && name !== 'JPG' && name !== 'JPEG') {
        Toast.info('文件格式仅支持png/jpg/jpeg,请重新上传')
        return
      }

      const res = await postUpload({ image: url })
      if (res.isOk) {
        setUploaderImage2(res.data!.url)
        handleValidateChange()
      }
    }
  }

  // 提交认证
  async function onFinish(values) {
    if (formData.city.replace(/\s+/g, '').length === 0) {
      Toast('请输入有效的城市！')
      return false
    }

    if (formData.street.replace(/\s+/g, '').length === 0) {
      Toast('请输入有效的街道地址！')
      return false
    }

    if (!isOver) {
      return false
    }
    let attachFiles1 = {
      kycType: 3,
      kycAttachType: 4,
      fileName: t`features_kyc_load_vip_index_5101167`,
      filePath: uploaderImage,
      sort: 4,
    }
    let attachFiles2 = {
      kycType: 3,
      kycAttachType: 5,
      fileName: t`features_kyc_load_vip_index_5101168`,
      filePath: uploaderImage2,
      sort: 4,
    }

    let data = {
      country: area?.remark,
      city: values.city,
      street: values.street,
      attachFiles: [attachFiles1, attachFiles2],
    }
    const res = await seniorSubmit(data)

    if (res.isOk) {
      kycData.type = 2
      setKycData(kycData)
      link('/kyc/success')
    }
    setIsOver(true)
  }

  return (
    <div className={`kyc-stand ${styles.scoped}`}>
      <NavBar
        title={
          <div>
            <img src="" alt="" />
            <span>{t`features_kyc_load_vip_index_5101169`}</span>
          </div>
        }
      />
      <div className="kyc-stand-wrap">
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          footer={
            <div>
              <Button
                nativeType="submit"
                type="primary"
                block
                className={isOver ? 'success_btn mt-4' : 'fail_btn mt-4'}
              >
                {t`features_kyc_load_vip_index_5101170`}
              </Button>
            </div>
          }
        >
          <div className="title">{t`features_kyc_load_vip_index_5101171`}</div>
          <Form.Item name="country" label={t`features_user_register_residence_index_5101093`} className="area">
            <Cell
              className="count"
              title={isEnble ? area?.codeKey : '-- : --'}
              size="large"
              isLink
              icon={isEnble && <Image lazyload src={`${oss_area_code_image_domain_address}${area?.remark}.png`} />}
              onClick={() => setSelectArea(true)}
            />
          </Form.Item>
          <Form.Item name="city" label={t`features_kyc_load_vip_index_5101163`}>
            <Input
              placeholder={t`features_kyc_load_vip_index_5101164`}
              maxLength={100}
              value={formData.city}
              onChange={v => inputArray(v, 'city')}
            />
          </Form.Item>
          <Form.Item name="street" label={t`features_kyc_load_vip_index_5101165`}>
            <Input
              maxLength={100}
              placeholder={t`features_kyc_load_vip_index_5101166`}
              value={formData.street}
              onChange={v => inputArray(v, 'street')}
            />
          </Form.Item>
          <div className="title mt-3">{t`features_kyc_load_vip_index_5101172`}</div>
          <div className="tips">{t`features_kyc_load_vip_index_5101173`}</div>
          <Form.Item name="document_type" label={t`features_kyc_load_vip_index_5101174`} className="update">
            <Uploader onChange={handleUploader} previewImage={false} accept=".jpg, .jpeg, .png">
              <div className="update-wrap" style={{ backgroundImage: `url("${''}")` }}>
                {!uploaderImage && <Icon className="icon_bg" name="icon_driver_license_subpage" />}
                {!uploaderImage && <Icon className="icon" name="a-icon_upload_picture" />}
                <LazyImage src={uploaderImage} className="py-3 px-6" />
                {uploaderImage && <Icon className="icon refesh" name="icon_replace" />}
              </div>
              <div className="update-text"></div>
            </Uploader>
          </Form.Item>
          <Form.Item name="citys" label={t`features_kyc_load_vip_index_5101175`} className="update">
            <Uploader onChange={handleUploader2} previewImage={false} accept=".jpg, .jpeg, .png">
              <div className="update-wrap" style={{ backgroundImage: `url("${''}")` }}>
                {!uploaderImage2 && <Icon className="icon_bg" name="icon_driver_license_subpage" />}
                {!uploaderImage2 && <Icon className="icon" name="a-icon_upload_picture" />}
                <LazyImage src={uploaderImage2} className="py-3 px-6" />
                {uploaderImage2 && <Icon className="icon refesh" name="icon_replace" />}
                {uploaderImage2 && <Icon className="icon del" name="del_input_box_white" onClick={delImg} />}
              </div>
              <div className="update-text"></div>
            </Uploader>
          </Form.Item>
          <div className="text-text_color_03 text-xs mb-2 pl-5 relative">
            <Icon name="prompt-symbol" className="mr-2 absolute left-1 top-1" />
            {t`features_kyc_load_vip_index_5101176`}
          </div>
          <div className="text-text_color_03 text-xs mb-2 pl-5 relative">
            <Icon name="prompt-symbol" className="mr-2 absolute left-1 top-1" />
            {t`features_kyc_load_vip_index_5101177`}
            <span className="text-brand_color">{t`features_kyc_load_vip_index_5101178`}</span>;
          </div>
          <div className="text-text_color_03 text-xs mb-2 pl-5 relative">
            <Icon name="prompt-symbol" className="mr-2 absolute left-1 top-1" />
            {t`features_kyc_load_vip_index_5101179`}
            <span className="text-brand_color">{t`features_kyc_load_vip_index_5101180`}</span>;
          </div>
          <div className="text-text_color_03 text-xs mb-2 pl-5 relative">
            <Icon name="prompt-symbol" className="mr-2 absolute left-1 top-1" />
            {t`features_kyc_load_vip_index_5101181`}
            <span className="text-brand_color">{t`features_kyc_load_vip_index_5101182`}</span>;
          </div>
          <div className="text-text_color_03 text-xs mb-2 pl-5 relative">
            <Icon name="prompt-symbol" className="mr-2 absolute left-1 top-1" />
            {t`features_kyc_load_vip_index_5101183`}
            <span className="text-brand_color">{t`features_kyc_load_vip_index_5101184`}</span>;
          </div>
          <div className="text-text_color_03 text-xs mb-2 pl-5 relative">
            <Icon name="prompt-symbol" className="mr-2 absolute left-1 top-1" />
            {t`features_kyc_up_load_index_5101137`}
          </div>
        </Form>

        <div className="text-xs text-text_color_03 mt-8">
          <Icon name="c2c_information_authentication" className="mr-1 text-lg" />
          {t`features_kyc_up_load_index_5101138`}
        </div>
      </div>
      <UserSearchArea
        visible={selectArea}
        checkedValue={area?.codeVal}
        type={UserSelectAreaTypeEnum.area}
        placeholderText={t`user.field.reuse_25`}
        selectArea={handleSelectArea as unknown as any}
        onClose={() => setSelectArea(false)}
      />
    </div>
  )
}
