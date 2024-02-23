/**
 * 发布广告 - 确认页面
 */
import { t } from '@lingui/macro'
import { useState } from 'react'
import { useUpdateEffect } from 'ahooks'
import { Button, Input, Popup, Toast } from 'react-vant'
import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import { AdvertisingDirectionTypeEnum, getValidDaysList, getValidDaysTypeName } from '@/constants/c2c/advertise'
import { link } from '@/helper/link'
import { useC2CAdvertiseStore } from '@/store/c2c/advertise'
import { getTextFromStoreEnums } from '@/helper/store'
import { postAdvertAdd } from '@/apis/c2c/advertise'
import { requestWithLoading } from '@/helper/order'
import { IAdvertisePaymentList } from '@/typings/api/c2c/advertise/post-advertise'
import { SelectModal } from '../../common/select-modal'
import { RemarkHintModal } from '../remark-hint-modal'
import { PaymentForm } from '../payment-form'
import styles from './index.module.css'

interface PostAdvertiseConfirmProps {
  visible: boolean
  onClose: () => void
}

function PostAdvertiseConfirm(props: PostAdvertiseConfirmProps) {
  const { visible, onClose } = props || {}
  const {
    advertiseForm: {
      currency,
      coin,
      advertDirectCd,
      validDays,
      completedOrderCount,
      certificationLevelCd,
      remark,
      payments,
      minAmount,
      maxAmount,
      price,
      quantity,
      isSecondError,
    },
    advertiseEnums,
    advertiseForm,
    updateAdvertiseForm,
  } = useC2CAdvertiseStore()
  const [selectVisible, setSelectVisible] = useState(false) // 是否展示下拉选项弹窗
  const [selectProps, setSelectProps] = useState<any>({
    typeList: [],
  }) // 下拉选项弹窗数据
  const [remarkVisible, setRemarkVisible] = useState(false) // 是否展示备注提示弹窗
  const validDaysList = getValidDaysList()

  /**
   * 广告有效期
   */
  const onSetValidDaysProps = () => {
    setSelectProps({
      type: validDays,
      typeList: validDaysList,
      onClose: () => setSelectVisible(false),
      onCommit: e => {
        updateAdvertiseForm({ validDays: e })
        setSelectVisible(false)
      },
      getLabel: (e: string) => getValidDaysTypeName(e),
    })

    setSelectVisible(true)
  }

  /**
   * 认证等级
   */
  const onSetCertificationLevelProps = () => {
    setSelectProps({
      type: certificationLevelCd,
      typeList: advertiseEnums.certificationLevelEnum.enums,
      enums: advertiseEnums.certificationLevelEnum.enums,
      onClose: () => setSelectVisible(false),
      onCommit: e => {
        updateAdvertiseForm({ certificationLevelCd: e })
        setSelectVisible(false)
      },
    })

    setSelectVisible(true)
  }

  /**
   * 发布广告
   */
  const onCommit = async () => {
    const res = await requestWithLoading(
      postAdvertAdd({
        ...advertiseForm,
        areaId: currency?.legalCurrencyId,
        coinId: coin?.id,
        minAmount: +minAmount,
        maxAmount: +maxAmount,
        price: +price,
        completedOrderCount: +completedOrderCount,
        quantity: +quantity,
        minPriceRemind: Number(advertiseForm.priceVolatilityLow),
        maxPriceRemind: Number(advertiseForm.priceVolatilityHigh),
        isPriceRemind: advertiseForm.priceVolatilityEnabled ? 1 : 0,
      }),
      0
    )
    const { isOk, data, message = '' } = res || {}

    if (!isOk || !data) {
      Toast.info(message)
      return
    }
    link('/c2c/post/adv/result', {
      overwriteLastHistoryEntry: true,
    })
  }

  useUpdateEffect(() => {
    if (!completedOrderCount || !payments || payments.length === 0 || !certificationLevelCd) {
      updateAdvertiseForm({ isSecondError: true })
      return
    }

    if (advertDirectCd === AdvertisingDirectionTypeEnum.sell) {
      const paymentArr =
        payments.filter((item: IAdvertisePaymentList) => {
          return !item.type || !item.account
        }) || ([] as IAdvertisePaymentList[])

      if (paymentArr.length > 0) {
        updateAdvertiseForm({ isSecondError: true })
        return
      }
    }

    updateAdvertiseForm({ isSecondError: false })
  }, [advertiseForm])

  return (
    <Popup
      visible={visible}
      onClose={onClose}
      className={styles['post-advertise-confirm-root']}
      overlay={false}
      destroyOnClose
      closeOnPopstate
      safeAreaInsetBottom
    >
      <NavBar title={t`features_c2c_advertise_post_advertise_index_222222225101676`} onClickLeft={onClose} />

      <div className="page-content">
        <div className="content-info">
          <div className="form-item">
            <span className="form-label">{t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_jomtvodwq7p3aehfiu6-4`}</span>
            <div className="select-item" onClick={onSetValidDaysProps}>
              {validDays ? (
                <span>{getValidDaysTypeName(validDays)}</span>
              ) : (
                <span className="placeholder">{t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_hb5-_fdb2sjk2iajl2wxb`}</span>
              )}
              <Icon name="regsiter_icon_drop" hasTheme className="drop-icon" />
            </div>
          </div>

          <div className="form-item">
            <span className="form-label">{t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_zqnjxev750jsaafwbnm8o`}</span>
            <div className="select-item">
              <Input
                type="number"
                placeholder={t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_qrv3yp-rmgshd4ycm1dyr`}
                value={completedOrderCount}
                onChange={(val: string) => updateAdvertiseForm({ completedOrderCount: val.replace(/[^\d]/g, '') })}
              />
              <span>{t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_imgdxoyyjju3lxz_m8k6d`}</span>
            </div>
          </div>

          <div className="form-item">
            <span className="form-label">{t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_xfepqthhaq85sypne38uh`}</span>
            <div className="select-item" onClick={onSetCertificationLevelProps}>
              {certificationLevelCd ? (
                <span>{getTextFromStoreEnums(certificationLevelCd, advertiseEnums.certificationLevelEnum.enums)}</span>
              ) : (
                <span className="placeholder">{t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_aucxzgph8ewvfxjrvrgn8`}</span>
              )}
              <Icon name="regsiter_icon_drop" hasTheme className="drop-icon" />
            </div>
          </div>

          <PaymentForm />
        </div>

        <div className="form-item form-item-line">
          <div className="form-label px-4">
            <span>{t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_4ouee0zpdlz7t43ziuahl`}</span>
            <span className="add-new-btn" onClick={() => setRemarkVisible(true)}>
              {t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_9c9dlrflzkiw9fgs4qhmg`}
            </span>
          </div>
          <div className="px-4">
            <Input.TextArea
              placeholder={t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_en7drnqfeveqd4ggae2yc`}
              maxLength={50}
              showWordLimit
              className="remark-input"
              value={remark}
              onChange={(val: string) => updateAdvertiseForm({ remark: val })}
            />
          </div>
        </div>
      </div>

      <div className="page-bottom">
        <Button className="next-button" type="primary" onClick={onCommit} disabled={isSecondError}>
          {t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_j8r53b89spfvpwjv_eoen`}
        </Button>
      </div>

      {selectVisible && <SelectModal visible={selectVisible} {...selectProps} />}

      {remarkVisible && <RemarkHintModal visible={remarkVisible} onClose={() => setRemarkVisible(false)} />}
    </Popup>
  )
}

export { PostAdvertiseConfirm }
