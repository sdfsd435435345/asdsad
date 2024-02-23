import { appealC2cOrder, appealC2cOrderUpload } from '@/apis/c2c/order'
import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import { link } from '@/helper/link'
import { getC2cOrderDetailPageRoutePath } from '@/helper/route'
import { usePageContext } from '@/hooks/use-page-context'
import { AwsS3FolderModuleName, AwsS3FolderModuleUseCaseName } from '@/plugins/aws-s3/constants'
import { awsS3UploadFile } from '@/plugins/aws-s3/utils'
import { t } from '@lingui/macro'
import { Button, Uploader, UploaderValueItem } from 'react-vant'
import { useRequest, useUpdateEffect } from 'ahooks'
import { useState } from 'react'
import { useOrderDetail } from '../detail'
import { ActionsWrapper } from '../detail/common'

function C2cOrderAppealUpload() {
  const { routeParams } = usePageContext()
  const [orderDetail] = useOrderDetail(routeParams.id)
  const onCancel = () => {
    history.back()
  }
  const [pictures, setPictures] = useState<UploaderValueItem[]>([])
  const [videos, setVideos] = useState<UploaderValueItem[]>([])
  const { run, loading } = useRequest(
    async () => {
      const res = await appealC2cOrderUpload({
        id: orderDetail?.id as any,
        picture: pictures.map(item => item.url!).join(','),
        video: videos[0]?.url || '',
        attachment: '',
      })
      if (res.isOk) {
        history.back()
      }
    },
    {
      manual: true,
    }
  )
  const disabled = pictures.length === 0 && videos.length === 0
  // 点击提交时才上传资料是不行的
  const videoUpload = async (file: File) => {
    const res = await awsS3UploadFile(file, AwsS3FolderModuleName.c2c, AwsS3FolderModuleUseCaseName.appeal_files)
    const value: UploaderValueItem = {
      url: res.url,
      file,
      thumbnail: res.url,
      key: file.name + Math.random(),
    }

    return value
  }
  const videoFormatter = ['mp4', 'wmv', 'ogg', 'mov']
  const pictureFormatter = ['jpg', 'jpeg', 'png']
  const pictureUploadTip = t({
    id: 'features_c2c_order_appeal_upload_index_1y_tmufrmeqazwokioo86',
    values: {
      0: pictureFormatter.join('、'),
    },
  })
  const videoUploadTip = t({
    id: 'features_c2c_order_appeal_upload_index_qex0g4gw69jy4upota4xm',
    values: {
      0: videoFormatter.join('、'),
    },
  })
  const delRender = del => {
    return (
      <div className="del-icon" onClick={del}>
        <Icon name="icon_fail" />
      </div>
    )
  }
  const uploaderIcon = <Icon className="text-xl" name="c2c_upload" hasTheme />

  return (
    <div className="text-sm pb-36">
      <NavBar title={t`features_c2c_order_appeal_upload_index_xbgzcuf9huuibuazwpq5y`} />
      <div className="flex px-4 py-2 bg-tips_warning_bg_color">
        <Icon className="mr-2 text-xs translate-y-1" name="msg" />
        <div className="text-warning_color text-xs">
          <p>{t`features_c2c_order_appeal_upload_index_az5um809kjwrusymoil-d`}</p>
        </div>
      </div>
      <div className="mt-4 px-4">
        <div className="mb-4">
          <div className="mb-2 font-medium">{t`features_c2c_order_appeal_upload_index_ym0yvjoacyccqhntwt-ws`}</div>
          <div className="text-text_color_02 mb-3 text-xs">{pictureUploadTip}</div>
          <div className="newbit-uploader-wrapper">
            <Uploader
              upload={videoUpload}
              onChange={setPictures}
              maxCount={5}
              deleteRender={delRender}
              uploadIcon={uploaderIcon}
              accept={pictureFormatter.map(item => `.${item}`).join(',')}
              maxSize={20 * 1000 * 1024}
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="mb-2 font-medium">{t`features_c2c_order_appeal_upload_index_jcqvfxdqplig3ggziaxcz`}</div>
          <div className="text-text_color_02 mb-3 text-xs">{videoUploadTip}</div>
          <div className="newbit-uploader-wrapper">
            <Uploader
              onChange={setVideos}
              deleteRender={delRender}
              maxCount={1}
              uploadIcon={uploaderIcon}
              upload={videoUpload}
              accept={videoFormatter.map(item => `.${item}`).join(',')}
              maxSize={200 * 1000 * 1024}
            />
          </div>
        </div>
      </div>
      <ActionsWrapper>
        <Button block className="gray-button mr-4" onClick={onCancel}>
          {t`features_c2c_order_appeal_upload_index__vz-17tjf_it4megbrdv8`}
        </Button>
        <Button block type="primary" disabled={!!disabled} loading={loading} onClick={run}>
          {t`features_c2c_order_appeal_upload_index_4twhe1oqsybxuuav3ex2a`}
        </Button>
      </ActionsWrapper>
    </div>
  )
}

export default C2cOrderAppealUpload
