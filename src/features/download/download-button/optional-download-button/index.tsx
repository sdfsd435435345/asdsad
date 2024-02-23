import Link from '@/components/link'
import { YapiGetV1HomeAppinfoGetListData } from '@/typings/yapi/HomeAppinfoGetListV1GetApi'
import { Button } from 'react-vant'
import { ReactNode } from 'react'
import styles from './index.module.css'

type TOptionalDownloadButton = {
  data: YapiGetV1HomeAppinfoGetListData
  Icon: ReactNode
  disabled?: boolean
}

function OptionalDownloadButton({ data, Icon, disabled }: TOptionalDownloadButton) {
  if (!data) return null
  return disabled ? (
    <Button icon={Icon} disabled className={styles.scoped}>
      <span className="flex flex-col text-left text-xs truncate text-bg_color">
        <span className="button-text">{data.description}</span>
        <span className="button-text">{data.appTypeCd}</span>
      </span>
    </Button>
  ) : (
    <Link href={data.downloadUrl} target>
      <Button icon={Icon} className={styles.scoped}>
        <span className="flex flex-col text-left text-xs truncate text-bg_color">
          <span className="button-text">{data.description}</span>
          <span className="button-text">{data.appTypeCd}</span>
        </span>
      </Button>
    </Link>
  )
}

export default OptionalDownloadButton
