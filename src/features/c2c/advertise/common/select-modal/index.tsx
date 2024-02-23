/**
 * 发布广告单 - 选择弹窗
 */
import { t } from '@lingui/macro'
import { Popup } from 'react-vant'
import { getTextFromStoreEnums } from '@/helper/store'
import { IEnums } from '@/typings/store/common'
import styles from './index.module.css'

interface SelectModalProps {
  showAll?: boolean
  allText?: string
  type: string
  typeList: any
  visible: boolean
  enums?: IEnums[]
  onClose: () => void
  onCommit: (e?: string) => void
  getLabel?: any
}

function SelectModal(props: SelectModalProps) {
  const {
    showAll,
    type,
    typeList,
    visible,
    enums,
    allText = t`constants_market_market_list_market_module_index_5101071`,
    onClose,
    onCommit,
    getLabel,
  } = props || {}

  return (
    <Popup
      visible={visible}
      position="bottom"
      round
      style={{ maxHeight: '60%' }}
      onClose={onClose}
      className={styles['select-modal-root']}
    >
      {showAll && (
        <div className="item" onClick={() => onCommit()}>
          <span className={!type ? 'text-active' : 'text'}>{allText}</span>
        </div>
      )}

      {typeList.map(item => {
        const value = item.value || item.id
        return (
          <div key={value} className="item" onClick={() => onCommit(value)}>
            <span className={type === value ? 'text-active' : 'text'}>
              {enums ? getTextFromStoreEnums(item.value, enums) : getLabel(value)}
            </span>
          </div>
        )
      })}

      <div className="bottom" onClick={onClose}>{t`common.modal.cancel`}</div>
    </Popup>
  )
}

export { SelectModal }
