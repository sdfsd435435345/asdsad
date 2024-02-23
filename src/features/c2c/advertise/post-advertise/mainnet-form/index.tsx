/**
 * 发布广告单 - 主链/充币地址
 */
import { t } from '@lingui/macro'
import { Input, Toast } from 'react-vant'
import Icon from '@/components/icon'
import { MainTypeMemoTypeEnum } from '@/constants/assets'
import { AdvertisingDirectionTypeEnum } from '@/constants/c2c/advertise'
import { AreaTransactionTypeEnum } from '@/constants/c2c/common'
import { useC2CAdvertiseStore } from '@/store/c2c/advertise'
import { C2CMainTypeListResp } from '@/typings/api/c2c/common'
import { onCheckStr } from '@/helper/reg'
import { postWithdrawAddressVerify } from '@/apis/assets/withdraw'

interface MainnetFormProps {
  onSelect: () => void
}

function MainnetForm(props: MainnetFormProps) {
  const {
    advertiseForm: { coin, advertDirectCd, dealTypeCd, chainAddress },
    updateAdvertiseForm,
  } = useC2CAdvertiseStore()
  const { onSelect } = props || {}

  const onChangeChainAddress = (params: C2CMainTypeListResp) => {
    const newList = chainAddress.map((item: C2CMainTypeListResp) => {
      if (params.id === item.id) {
        item = { ...item, ...params }
      }

      return item
    })

    updateAdvertiseForm({ chainAddress: newList })
  }

  /**
   * 校验充币地址是否填写正确
   */
  const onCheckDepositAddress = async (params: C2CMainTypeListResp) => {
    if (
      dealTypeCd === AreaTransactionTypeEnum.inside ||
      advertDirectCd === AdvertisingDirectionTypeEnum.sell ||
      !params?.address ||
      !onCheckStr(params?.address)
    )
      return

    const res = await postWithdrawAddressVerify({
      symbol: params?.symbol,
      address: params?.address,
    })

    const { isOk, data } = res || {}
    if (!isOk || !data) return

    if (!data?.isSuccess) {
      Toast.info(
        t({
          id: 'features_c2c_advertise_post_advertise_mainnet_form_index_gssgliw0ffyxeceveu8gt',
          values: { 0: params?.mainType },
        })
      )
    }
    onChangeChainAddress({ ...params, addressError: !data?.isSuccess })
  }

  return (
    <>
      {dealTypeCd === AreaTransactionTypeEnum.outside && (
        <div className="form-item">
          <span className="form-label">{t`features_c2c_trade_trade_form_22225101640`}</span>
          <div
            className="chain-address"
            onClick={() => {
              if (!coin?.id) {
                Toast.info(t`features_c2c_advertise_post_advertise_index_222222225101678`)
                return
              }
              onSelect()
            }}
          >
            {chainAddress.length === 0 ? (
              <span className="chain-placeholder">{t`features_c2c_advertise_post_advertise_index_222222225101684`}</span>
            ) : (
              <div className="chain-list">
                {chainAddress.map((chainItem, index: number) => {
                  return (
                    <div key={index} className="chain-item">
                      <span>{chainItem?.mainType}</span>
                      <Icon
                        name="close"
                        hasTheme
                        className="chain-close"
                        onClick={e => {
                          e.stopPropagation()
                          let newChain = [...chainAddress]
                          newChain.splice(index, 1)
                          updateAdvertiseForm({ chainAddress: newChain })
                        }}
                      />
                    </div>
                  )
                })}
              </div>
            )}

            <Icon name="regsiter_icon_drop" hasTheme className="drop-icon mt-4" />
          </div>
        </div>
      )}

      {dealTypeCd === AreaTransactionTypeEnum.outside &&
        advertDirectCd === AdvertisingDirectionTypeEnum.buy &&
        chainAddress.length > 0 && (
          <div className="form-item">
            <span className="form-label">{t`features_c2c_advertise_post_advertise_index_222222225101685`}</span>
            {chainAddress.map((depositItem: C2CMainTypeListResp, index: number) => {
              return (
                <div className="deposit-item" key={index}>
                  <span className="deposit-title">{depositItem?.mainType}</span>
                  <Input
                    placeholder={t`features_c2c_advertise_post_advertise_index_222222225101672`}
                    className="deposit-input"
                    onChange={(val: string) =>
                      onChangeChainAddress({ ...depositItem, address: val, addressError: true })
                    }
                    onBlur={() => onCheckDepositAddress(depositItem)}
                  />
                  {depositItem?.isUseMemo === MainTypeMemoTypeEnum.yes && (
                    <Input
                      placeholder={t`features_c2c_advertise_post_advertise_index_222222225101673`}
                      className="deposit-input"
                      onChange={(val: string) => onChangeChainAddress({ ...depositItem, memo: val })}
                    />
                  )}
                </div>
              )
            })}
          </div>
        )}
    </>
  )
}

export { MainnetForm }
