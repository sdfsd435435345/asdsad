/**
 * 发布广告单 - 选择主链类型弹窗
 */
import { t } from '@lingui/macro'
import { getMainTypeList } from '@/apis/c2c/common'
import Icon from '@/components/icon'
import { useC2CAdvertiseStore } from '@/store/c2c/advertise'
import { Button, Checkbox, Popup } from 'react-vant'
import { useEffect, useState } from 'react'
import { C2CMainTypeListResp } from '@/typings/api/c2c/common'
import { MainTypeDepositTypeEnum } from '@/constants/assets'
import { AdvertisingDirectionTypeEnum } from '@/constants/c2c/advertise'
import styles from './index.module.css'

interface MainnetSelectionModalProps {
  select: C2CMainTypeListResp[]
  visible: boolean
  onClose: () => void
  onCommit: (e: string[]) => void
}

function MainnetSelectionModal(props: MainnetSelectionModalProps) {
  const { select, visible, onClose, onCommit } = props
  const {
    postOptions: { chainAddressList },
    advertiseForm: { coin, advertDirectCd },
    updatePostOptions,
  } = useC2CAdvertiseStore()

  const onChangeSelect = () => {
    let newSelect: string[] = []
    if (select && select.length > 0) {
      select.forEach((item: C2CMainTypeListResp) => {
        newSelect = [...newSelect, item.id]
      })
    }

    return newSelect
  }
  const [selectList, setSelectList] = useState<string[]>(onChangeSelect())

  /**
   * 查询币种下主链列表
   */
  const onload = async () => {
    const res = await getMainTypeList({ coinId: coin?.id })
    const { isOk, data } = res || {}

    if (!isOk) return

    updatePostOptions({ chainAddressList: data })
  }

  useEffect(() => {
    onload()
  }, [])

  return (
    <Popup
      visible={visible}
      position="bottom"
      round
      onClose={onClose}
      className={styles['mainnet-selection-modal-root']}
      safeAreaInsetBottom
      lockScroll
      closeOnPopstate
      destroyOnClose
    >
      <div className="mainnet-selection-modal">
        <div className="modal-header">
          <span>{t`features_c2c_advertise_post_advertise_mainnet_selection_modal_index_222222222225101700`}</span>
          <Icon name="close" hasTheme className="text-xl" onClick={onClose} />
        </div>

        <div className="modal-list">
          <Checkbox.Group onChange={v => setSelectList(v)} defaultValue={selectList}>
            {chainAddressList.map((item: C2CMainTypeListResp) => {
              const isPause =
                advertDirectCd === AdvertisingDirectionTypeEnum.buy
                  ? item.isDeposit !== MainTypeDepositTypeEnum.yes
                  : item.isWithdraw !== MainTypeDepositTypeEnum.yes
              return (
                <div key={item.id} className="select-item">
                  <Checkbox
                    name={item.id}
                    key={item.id}
                    shape="square"
                    labelPosition="left"
                    iconRender={({ checked }) => {
                      return (
                        <Icon
                          name={checked ? 'login_verify_selected' : 'login_verify_unselected'}
                          hasTheme={!checked}
                          className="text-base"
                        />
                      )
                    }}
                  >
                    <div className="checkbox-info">
                      {item.mainType}
                      {isPause && <div className="disabled-tag">{t`assets.common.main-network.paused`}</div>}
                    </div>
                  </Checkbox>
                </div>
              )
            })}
          </Checkbox.Group>
        </div>

        <div className="modal-bottom">
          <Button type="primary" className="commit-btn" onClick={() => onCommit(selectList)}>
            {t`common.confirm`}
          </Button>
        </div>
      </div>
    </Popup>
  )
}

export { MainnetSelectionModal }
