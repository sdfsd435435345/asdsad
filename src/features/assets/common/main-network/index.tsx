import { ReactNode } from 'react'
import cn from 'classnames'
import { SelectActionSheet } from '@/components/select-action-sheet'
import { QuerySubCoinListSubCoinListResp } from '@/typings/api/assets/assets'
import { t } from '@lingui/macro'
import { AssetsCoinRemindSettingTypeEnum } from '@/constants/assets'
import styles from './index.module.css'

export default MainNetwork

export interface MainNetworkProps {
  pageType?: number
  /** 选中的币种信息 */
  networks: QuerySubCoinListSubCoinListResp[] | undefined
  /** 选中的主网类型 */
  value?: number | string
  onChange: (val: string) => void
  onCancel?: () => void
  type?: 'action-sheet' | 'normal'
  title?: ReactNode
  desc?: ReactNode
}

function MainNetwork({
  pageType,
  networks = [],
  value,
  onChange,
  onCancel,
  type = 'normal',
  title,
  desc,
}: MainNetworkProps) {
  // 当前主网是否可用
  const getIsAvailable = (network: QuerySubCoinListSubCoinListResp) => {
    let isAvailable = true

    if (pageType) {
      isAvailable =
        pageType === AssetsCoinRemindSettingTypeEnum.withdraw ? network.isWithdraw === 1 : network.isDeposit === 1
    }

    return isAvailable
  }

  // 主网类型点击事件
  const handleNetworkClick = (network: QuerySubCoinListSubCoinListResp) => {
    onChange(network.id)
  }

  const networkActions = networks.map(network => {
    return {
      ...network,
      value: network.id,
      subname: getIsAvailable(network) ? '' : t`assets.common.main-network.paused`,
      name: network.mainType,
    }
  })

  return type === 'normal' ? (
    <div className={styles.scoped}>
      <div className="main-Network">
        <label className="title">{t`features_assets_common_main_network_index_510101`}</label>
        <div className="network-list">
          {networks.map((item: any, index) => {
            return (
              <div
                key={index}
                className={cn('network-item', {
                  active: item.id === value,
                  disabled: !getIsAvailable(item),
                })}
                onClick={() => handleNetworkClick(item)}
              >
                {item.mainType}
                {!getIsAvailable(item) && <span className="tag">{t`assets.common.main-network.paused`}</span>}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  ) : (
    <SelectActionSheet
      triggerElement={null}
      defaultVisible
      onChange={onChange}
      onCancel={onCancel}
      title={title}
      desc={desc}
      actionSheetElement={
        <div className={styles['network-actions-root']}>
          {networkActions.map(actions => {
            return (
              <div key={actions.id} onClick={() => onChange(actions.id)} className="network-actions-item">
                <span className={`network-actions-text ${value === actions.id && 'active-text'}`}>{actions.name}</span>
                {actions.subname && <span className="pause-tag">{actions.subname}</span>}
              </div>
            )
          })}
        </div>
      }
    />
  )
}
