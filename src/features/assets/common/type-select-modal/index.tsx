/**
 * 类型选择弹窗组件
 */
import { t } from '@lingui/macro'
import { Popup, PopupPosition } from 'react-vant'
import { AssetsRecordTypeEnum } from '@/constants/assets/common'
import { getTextFromStoreEnums } from '@/helper/store'
import { IEnums } from '@/typings/store/common'
import styles from './index.module.css'

interface TypeSelectModalProps {
  visible: boolean
  type: string | number
  typeList: any
  enums: IEnums[]
  position?: PopupPosition
  onScreen: (e: string | number) => void
  onClose: () => void
}
function TypeSelectModal(props: TypeSelectModalProps) {
  const {
    visible,
    type = AssetsRecordTypeEnum.all,
    typeList = [],
    enums = [],
    position = 'bottom',
    onScreen,
    onClose,
  } = props
  return (
    <Popup
      visible={visible}
      position={position}
      round
      safeAreaInsetBottom
      className={styles['type-select-modal-root']}
      onClose={onClose}
    >
      <div className="type-select-modal-content">
        <div className="modal-list">
          <div className="item" onClick={() => onScreen(AssetsRecordTypeEnum.all)}>
            <span
              className={type === AssetsRecordTypeEnum.all ? 'text-active' : 'text'}
            >{t`constants_market_market_list_market_module_index_5101071`}</span>
          </div>

          {typeList.map(item => {
            return (
              <div key={item.value} className="item" onClick={() => onScreen(item.value)}>
                <span className={type === item.value ? 'text-active' : 'text'}>
                  {/* {getTextFromStoreEnums(item.value, enums)} */}
                  {item.label}
                </span>
              </div>
            )
          })}
        </div>

        <div className="bottom" onClick={onClose}>{t`common.modal.cancel`}</div>
      </div>
    </Popup>
  )
}

export { TypeSelectModal }
