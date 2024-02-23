/**
 * 资产 - 提现地址列表管理
 */
import NavBar from '@/components/navbar'
import { useState, useEffect } from 'react'
import { t } from '@lingui/macro'
import { Button, Flex, SwipeCell, Toast, Dialog } from 'react-vant'
import { link } from '@/helper/link'
import { useAssetsStore } from '@/store/assets/spot'
import { postDelWithdrawAddress } from '@/apis/assets/withdraw'
import { WithdrawAddressListResp } from '@/typings/api/assets/assets'
import { onGetWithdrawAddress } from '@/helper/assets/spot'
import Icon from '@/components/icon'
import { useUpdateEffect } from 'ahooks'
import { requestWithLoading } from '@/helper/order'
import { AssetsGuideIdEnum } from '@/constants/assets/common'
import styles from './withdraw-address.module.css'
import { WithdrawAddressIntro } from './address-intro'

export function WithdrawAddress() {
  const assetsStore = useAssetsStore()
  const [showHint, setShowHint] = useState(false)
  const [addressList, setAddressList] = useState<WithdrawAddressListResp[]>([])

  /**
   * 查询提现地址列表
   */
  const onLoadList = async () => {
    const list = await requestWithLoading(onGetWithdrawAddress())

    setAddressList(list)
  }

  useEffect(() => {
    onLoadList()
  }, [])

  useUpdateEffect(() => {}, [assetsStore.showAddressGuide])

  /**
   * 提现地址 item 组件
   * @param
   * @returns
   */
  function AddressItem({
    address = '--',
    remark = '--',
    id,
    isFirst,
  }: {
    remark?: string
    id: number
    address: string
    isFirst: boolean
  }) {
    /**
     * 跳转编辑提现地址页面
     */
    const toEdit = () => {
      link(`/assets/withdraw/address/edit?address=${JSON.stringify({ address, remark, id })}`)
    }

    /**
     * 删除提现地址
     */
    const deleteAddress = async () => {
      const res = await postDelWithdrawAddress({ id })
      const { isOk, data: { isSuccess = false } = {}, message = '' } = res || {}
      if (!isOk || !isSuccess) {
        Toast(message)
        return
      }

      Toast(t`user.field.reuse_34`)
      onLoadList()
    }

    return (
      <div id={isFirst ? AssetsGuideIdEnum.assetsWithdrawAddressListCell : ''}>
        <SwipeCell
          rightAction={
            <div className="h-full">
              <Button type="primary" className="swipe-edit-btn" onClick={toEdit}>
                {t`common.edit`}
              </Button>
              <Button type="danger" className="swipe-del-btn" onClick={() => requestWithLoading(deleteAddress(), 0)}>
                {t`common.delete`}
              </Button>
            </div>
          }
        >
          <div className="address-item rv-hairline--bottom">
            <div className="address">{address}</div>
            <div className="remark">{remark}</div>
          </div>
        </SwipeCell>
      </div>
    )
  }

  return (
    <div className={styles['withdraw-address-wrapper']}>
      <NavBar
        title={t`assets.withdraw-address.title`}
        right={
          <span onClick={() => setShowHint(true)} className="edit-btn">
            {t`common.edit`}
          </span>
        }
      />
      <div className="address-list">
        {addressList.length > 0 &&
          addressList.map((item, index) => {
            return <AddressItem key={item.id} isFirst={index === 0} {...item} />
          })}
      </div>
      {addressList.length < 10 && (
        <Flex
          onClick={() => {
            link('/assets/withdraw/address/new')
          }}
          justify="center"
          align="center"
          className="address-bottom"
        >
          <Icon name="property_icon_add-address" className={'bottom-icon'} />
          <span className="ml-1">{t`assets.withdraw-address.add`}</span>
        </Flex>
      )}

      <WithdrawAddressIntro list={addressList} />

      <Dialog visible={showHint} showConfirmButton={false}>
        <div className={styles['hint-dialog-root']}>
          <span className="hint">{t`features_assets_withdraw_address_withdraw_address_510163`}</span>
          <Button
            type="primary"
            onClick={() => setShowHint(false)}
          >{t`features_assets_withdraw_address_withdraw_address_510164`}</Button>
        </div>
      </Dialog>
    </div>
  )
}
