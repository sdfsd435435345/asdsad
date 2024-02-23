import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { useState } from 'react'
import { Popup, Radio, Cell, Loading, Toast, Button } from 'react-vant'
import { C2cOperationData } from '@/constants/c2c/common'
import styles from './index.module.css'

type OperationPopupType = {
  visible: boolean
  loading: boolean
  setVisible: (v: boolean) => void
  onChange: (v: string) => void
}

function OperationPopup(props: OperationPopupType) {
  const { visible, setVisible, onChange, loading } = props
  const [cellValue, setCellValue] = useState('')

  /** 确认* */
  const onSureChange = () => {
    if (!cellValue) {
      return Toast.info({
        message: t`features_c2c_center_component_operation_popup_index_w3k00vueqs78dkkdsisj9`,
      })
    }
    onChange && onChange(cellValue)
  }

  return (
    <Popup visible={visible} position="bottom" round>
      <div className={styles['operation-popup']}>
        <div className="operation-popup-header">
          <div className="operation-popup-header-text">{t`features_c2c_center_component_operation_popup_index_7c-z47kfm8cao33hx48hv`}</div>
          <Icon name="close" hasTheme className="operation-popup-header-icon" onClick={() => setVisible(false)} />
        </div>
        <div className="operation-popup-main">
          <Radio.Group value={cellValue}>
            <Cell.Group border={false}>
              {C2cOperationData()?.map(item => {
                return (
                  <Cell
                    clickable
                    key={item.id}
                    border={false}
                    title={item.name}
                    onClick={() => setCellValue(item.id)}
                    rightIcon={
                      <Radio
                        shape="square"
                        name={item.id}
                        iconRender={({ checked: isActive }) =>
                          isActive ? (
                            <Icon name="login_agreement_selected" className="operation-popup-icon" />
                          ) : (
                            <Icon name="login_agreement_unselected" className="operation-popup-icon" />
                          )
                        }
                      />
                    }
                  />
                )
              })}
            </Cell.Group>
          </Radio.Group>
        </div>
        <div className="operation-popup-footer">
          <div className="popup-footer-button">
            <Button
              type="primary"
              loading={loading}
              className="w-full"
              onClick={onSureChange}
            >{t`common.confirm`}</Button>
          </div>
        </div>
      </div>
    </Popup>
  )
}

export default OperationPopup
