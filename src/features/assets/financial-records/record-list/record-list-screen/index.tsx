/**
 * 财务记录 - 列表 - 筛选组件
 */
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { useAssetsStore } from '@/store/assets/spot'
import { getTextFromStoreEnums } from '@/helper/store'
import { AssetsRecordTypeEnum } from '@/constants/assets/common'
import styles from '../record.module.css'

interface RecordListScreenProps {
  showCurrency?: boolean
  showType?: boolean
  onCurrency: () => void
  onType: () => void
}

function RecordListScreen(props: RecordListScreenProps) {
  const { assetsEnums } = useAssetsStore()
  const { showCurrency = false, showType = false, onCurrency, onType } = props
  const recordModule = useAssetsStore().recordModule
  const formData: any = recordModule.assetsRecord[recordModule.activeTab]
  console.log('formData', formData)
  const typeMapName = {
    '1': '充值',
    '2': '提现',
    '3': '扣款',
  }
  return (
    <div className={styles['record-list-screen-root']}>
      {showCurrency && (
        <div className="screen-item" onClick={onCurrency}>
          <span>{t`features/assets/financial-record/record-list/record-list-screen/index-0`}：</span>
          <span>{formData?.coinId ? formData.coinName : t`assets.withdraw.form.count.withdraw-all`}</span>
          <Icon className="screen-icon" hasTheme name="regsiter_icon_drop" />
        </div>
      )}

      {showType && (
        <div className="screen-item" onClick={onType}>
          <span>{t`features/assets/financial-record/record-list/record-list-screen/index-1`}：</span>
          <span>
            {
              formData?.type === AssetsRecordTypeEnum.all
                ? t`assets.withdraw.form.count.withdraw-all`
                : typeMapName[formData?.type]
              // getTextFromStoreEnums(formData?.type, assetsEnums.financialRecordTypeEnum.enums)
            }
          </span>
          <Icon className="screen-icon" hasTheme name="regsiter_icon_drop" />
        </div>
      )}
    </div>
  )
}

export { RecordListScreen }
