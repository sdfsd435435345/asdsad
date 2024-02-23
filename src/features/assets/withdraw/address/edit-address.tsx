/**
 * 资产-新增/编辑提现地址
 */
import NavBar from '@/components/navbar'
import { t } from '@lingui/macro'
import { useEffect, useRef, MutableRefObject, useState } from 'react'
import { Button, Field, Form, Toast } from 'react-vant'
import { postAddWithdrawAddress } from '@/apis/assets/withdraw'
import { AssetsAddWithdrawAddressReq, WithdrawAddressListResp } from '@/typings/api/assets/assets'
import { usePageContext } from '@/hooks/use-page-context'
import { onCheckStr } from '@/helper/reg'
import { requestWithLoading } from '@/helper/order'
import styles from './withdraw-address.module.css'

export function EditAddress({ onConfirm, onBack }: { onConfirm?: (val: string) => void; onBack?: () => void }) {
  const pageContext = usePageContext()
  const [form] = Form.useForm<WithdrawAddressListResp>()
  const formRef: MutableRefObject<any> = useRef(null)
  const [addressId, setAddressId] = useState(null)

  useEffect(() => {
    const address = pageContext?.urlParsed?.search?.address

    if (address) {
      formRef.current.setFieldsValue(JSON.parse(address))
      setAddressId(JSON.parse(address).id)
    }
  }, [])

  /**
   * 确认新增/编辑地址
   * @param values
   * @returns
   */
  const onFinish = async (values: WithdrawAddressListResp) => {
    if (!values.address) {
      Toast(t`assets.withdraw-address.edit.form.address.placeholder`)
      return
    }

    if (!onCheckStr(values.address)) {
      Toast(t`features_assets_withdraw_withdraw_form_510113`)
      return
    }

    const params: AssetsAddWithdrawAddressReq = { ...values, address: values.address.trim() }
    if (addressId) params.id = addressId
    const res = await postAddWithdrawAddress(params)
    const { isOk, data } = res || {}

    if (!isOk || !data) return

    if (!data?.isSuccess) {
      Toast(data?.errMsg || '')
      return
    }

    onConfirm ? onConfirm(values.address) : history.back()
    Toast(t`features_user_personal_center_settings_converted_currency_index_587`)
  }

  return (
    <div className={styles['withdraw-address-edit']}>
      <NavBar
        title={t`assets.withdraw-address.edit.title`}
        onClickLeft={() => {
          onBack ? onBack() : history.back()
        }}
      />
      <Form
        ref={formRef}
        layout="vertical"
        form={form}
        onFinish={e => requestWithLoading(onFinish(e), 0)}
        footer={
          <div className="form-btn">
            <Button nativeType="submit" type="primary" block className="w-full">
              {t`common.confirm`}
            </Button>
          </div>
        }
      >
        <Form.Item label={t`assets.withdraw-address.edit.form.address.label`} name="address" required={false}>
          <Field placeholder={t`assets.withdraw-address.edit.form.address.placeholder`} maxLength={256} />
        </Form.Item>
        <Form.Item label={t`assets.withdraw-address.edit.form.remark.label`} name="remark" required={false}>
          <Field placeholder={t`features_assets_withdraw_address_edit_address_510162`} maxLength={10} />
        </Form.Item>
      </Form>
    </div>
  )
}
