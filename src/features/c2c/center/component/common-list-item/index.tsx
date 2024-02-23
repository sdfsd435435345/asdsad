import { C2CCenterAssetsType } from '@/typings/api/c2c/center'
import { DressingPopupDefault } from '@/features/c2c/center'
import NoDataImage from '@/components/no-data-image'
import C2cListItem from './item'
import styles from './index.module.css'

type CommonListItemType = {
  useId: string
  searchLoading: boolean
  filterAdvertisement: DressingPopupDefault
  data: Array<C2CCenterAssetsType>
}

export default function CommonListItem({ data, searchLoading, useId }: CommonListItemType) {
  return (
    <div className={styles['common-list-item']}>
      {data?.length
        ? data.map(v => {
            return <C2cListItem key={v?.advertId} data={v} useId={useId} />
          })
        : !searchLoading && <NoDataImage className="mt-16 text-sm" />}
    </div>
  )
}
