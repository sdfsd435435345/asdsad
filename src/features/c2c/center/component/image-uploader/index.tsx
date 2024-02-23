import { t } from '@lingui/macro'
import { useState } from 'react'
import Icon from '@/components/icon'
import { postUpload } from '@/apis/kyc'
import { useBoolean, useToggle, useCreation } from 'ahooks'
import { C2CFileType } from '@/constants/c2c/common'
import { C2CImageSizeEnum, C2cStatusEnum } from '@/constants/c2c/center'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import { Uploader, UploaderValueItem, Toast, ToastOptions, ToastType } from 'react-vant'
import styles from './index.module.css'

type ImageUploaderType = {
  value?: string | Array<UploaderValueItem>
  onChange: (v: string) => void
}

export default function ImageUploader(props: ImageUploaderType) {
  const { onChange, value } = props
  const [uploaderUrlShow, setUploaderUrlShow] = useState<Array<UploaderValueItem>>([])

  const [loading, { setTrue, setFalse }] = useBoolean(false)
  const [isSuccess, { toggle }] = useToggle(C2cStatusEnum.yes, C2cStatusEnum.no)

  /** 彻底清空图片上传组件* */
  const clearImage = (toastText?: string | ToastOptions, type?: ToastType) => {
    toggle()
    setUploaderUrlShow([])
    toastText && Toast[type || 'info'](toastText)
  }

  /** 删除图片* */
  const onUploaderDelete = delFun => {
    delFun()
    onChange('')
  }

  /** 图片上传* */
  const onUploaderChange = async (files: Array<UploaderValueItem>) => {
    if (files.length > 0) {
      const imageFile = files.slice(-1)[0]
      const file = imageFile.file as File
      const url = imageFile.url as string
      if (file.size > C2CImageSizeEnum.MaxSize) {
        return clearImage(t`features_user_safety_items_application_form_index_622`)
      }
      if (file.size < C2CImageSizeEnum.MinSize) {
        return clearImage(t`features_kyc_hold_up_index_5101354`)
      }
      let name = file.name.substring(file.name.lastIndexOf('.') + 1).toLocaleLowerCase()
      if (!C2CFileType.includes(name)) {
        return clearImage(t`features_kyc_load_vip_index_5101359`)
      }
      setTrue()
      const { data, isOk } = await postUpload({ image: url })
      if (!isOk && !data) {
        setFalse()
        clearImage()
        onChange && onChange('')
        return
      }
      clearImage(
        {
          message: t`features_kyc_up_load_index_5101117`,
          onClose: () => {
            setFalse()
          },
        },
        'success'
      )
      onChange && onChange(data?.url)
      setUploaderUrlShow([{ url: data?.url }])
    }
  }

  useCreation(() => {
    const newImageSrc = value || []
    const imageValue = Array.isArray(newImageSrc) ? newImageSrc : [{ url: newImageSrc }]
    toggle()
    setUploaderUrlShow(imageValue)
  }, [value])

  return (
    <div className={styles['c2c-image-uploader']}>
      <Uploader
        maxCount={1}
        key={isSuccess}
        defaultValue={uploaderUrlShow}
        onChange={onUploaderChange}
        accept=".jpg, .jpeg, .png"
        deleteRender={v => {
          return <Icon name={'icon_fail'} className="fail-icon" onClick={() => onUploaderDelete(v)} />
        }}
      >
        <Icon name={'group_add'} hasTheme className="uploader-icon" />
      </Uploader>
      <FullScreenLoading mask isShow={loading} />
    </div>
  )
}
