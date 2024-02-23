import { t } from '@lingui/macro'
import { useState, useEffect } from 'react'
import { useUpdateEffect } from 'ahooks'
import { C2CMakePaymentsType } from '@/typings/api/c2c/center'
import { C2cPaymentInput, PayMentTypeProps, paymentTypeEnum, CodeDetailType } from '@/constants/c2c/common'
import { formatBankCard, regText, regNum } from '@/helper/reg'
/** 引入组件* */
import { Form, Input, Button } from 'react-vant'
import ImageUploader from '@/features/c2c/center/component/image-uploader'
import styles from './index.module.css'

enum BankFormEnum {
  IN = 'IN',
}

type BankFormType = {
  type: CodeDetailType // 修改的收款类型
  isBank?: boolean
  payShow: boolean
  paymentUser: C2CMakePaymentsType // 修改表单传入的值
  paymentTypeData: PayMentTypeProps
  onChange: (v) => void
}

type BankFormListType = {
  name: string
  account: string
  bankOfDeposit: string
}

function BankForm(props: BankFormType) {
  /** 图片上传地址* */
  const [uploaderUrl, setUploaderUrl] = useState<string>('')
  const [currentShow, setCurrentShow] = useState<boolean>(false)
  const [bankFormData, setBankFormData] = useState<BankFormListType>()
  const [typePal, setTypePal] = useState<string>('')
  const [optionalInput, setOptionalInput] = useState<string[]>([])

  const { type, isBank, paymentUser, payShow, paymentTypeData, onChange } = props
  const [form] = Form.useForm()

  const onAddUploaderChange = async (files: string) => {
    setUploaderUrl(files)
  }

  /** 表单提交* */
  const onFinish = async formData => {
    const params = {
      ...formData,
      type: BankFormEnum.IN,
      paymentTypeCd: type?.codeVal,
      ...(uploaderUrl && { qrCodeAddr: uploaderUrl }),
    }
    onChange && onChange(params)
  }

  /** 处理修改表单* */
  const handleEditForm = () => {
    if (paymentUser) {
      const userAccount = paymentUser.account
      const account = isBank ? formatBankCard(userAccount) : userAccount
      let params = {
        account,
        name: paymentUser.name,
        bankBranch: paymentUser.bankBranch,
        bankOfDeposit: paymentUser.bankOfDeposit,
        paymentDetails: paymentUser.paymentDetails,
        qrCodeAddr: paymentUser.qrCodeAddr ? [{ url: paymentUser.qrCodeAddr }] : [],
      }
      setUploaderUrl(paymentUser.qrCodeAddr || '')
      setBankFormData(params)
    }
  }

  /** 处理银行卡号* */
  const onAccountFormChange = v => {
    form?.setFieldsValue({
      account: formatBankCard(v),
    })
  }

  const validatorNameInput = (rule, value, text?: string) => {
    if (!value) {
      return Promise.reject(text || t`features_c2c_payments_component_bank_form_index_8ytdxbaxxkxp5t4i5ce1l`)
    }
    if (value.length > 30) {
      return Promise.reject(t`features_c2c_payments_component_bank_form_index_zwsdbl4azn7ri2yrs6pnw`)
    }
    if (regText.test(value) && regNum.test(value)) {
      return Promise.reject(t`features_c2c_payments_component_bank_form_index_y3w3ab05lm`)
    }
    return Promise.resolve()
  }

  useUpdateEffect(() => {
    form?.setFieldsValue(bankFormData)
  }, [bankFormData])

  useUpdateEffect(() => {
    setTypePal(type?.codeVal)
    setCurrentShow(payShow)
    if (currentShow && !payShow && typePal !== type?.codeVal) {
      /** form 表单重置数据方法有 bug* */
      form?.resetFields()
      form?.setFieldsValue({
        name: '',
        account: '',
        bankOfDeposit: '',
        qrCodeAddr: '',
        bankBranch: '',
        paymentDetails: '',
      })
    }
  }, [payShow, type?.codeVal])

  useEffect(() => {
    handleEditForm()
  }, [paymentUser])

  useEffect(() => {
    type?.codeVal && setOptionalInput(paymentTypeData[type?.codeVal])
  }, [type?.codeVal, paymentTypeData])

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      className={styles['bank-form']}
      footer={
        <footer className="collection-account-wrap-footer">
          <Button block type="primary" className="w-full rounded" nativeType="submit">
            {t`features_trade_future_c2c_225101584`}
          </Button>
        </footer>
      }
    >
      {type?.codeVal && (
        <>
          {optionalInput?.includes(paymentTypeEnum.NAME) && (
            <Form.Item
              name="name"
              label={t`features_c2c_payments_component_bank_form_index_6avgpybnppnp2mkwstoa1`}
              rules={[
                {
                  required: true,
                  validator: (rule, text) => validatorNameInput(rule, text),
                },
              ]}
            >
              <Input placeholder={t`features_c2c_payments_component_bank_form_index_8ytdxbaxxkxp5t4i5ce1l`} />
            </Form.Item>
          )}
          {optionalInput?.includes(paymentTypeEnum.BANKACCOUNT) && (
            <Form.Item
              name="account"
              label={`${type?.codeKey}${t`features_user_common_choose_verification_method_index_510240`}`}
              rules={[
                {
                  required: true,
                  message: `${t`features_trade_future_c2c_225101582`}${
                    type?.codeKey
                  }${t`features_user_common_choose_verification_method_index_510240`}`,
                },
                ...C2cPaymentInput(),
              ]}
            >
              <Input
                placeholder={`${t`features_trade_future_c2c_225101582`}${
                  type?.codeKey
                }${t`features_user_common_choose_verification_method_index_510240`}`}
                onChange={onAccountFormChange}
              />
            </Form.Item>
          )}
          {optionalInput?.includes(paymentTypeEnum.BANKBRANCH) && (
            <Form.Item name="bankBranch" label={t`features_c2c_payments_component_bank_form_index_vo4jubw93y`}>
              <Input placeholder={t`features_c2c_payments_component_bank_form_index_gd7gfjmpaz`} />
            </Form.Item>
          )}
          {optionalInput?.includes(paymentTypeEnum.PAYMENTDETAIL) && (
            <Form.Item
              name="paymentDetails"
              label={t`features_c2c_payments_component_bank_form_index_pbeclq6c9x`}
              rules={[{ required: true, message: t`features_c2c_payments_component_bank_form_index_srepvrpvdj` }]}
            >
              <Input.TextArea
                rows={4}
                showWordLimit
                maxLength={400}
                placeholder={t`features_c2c_payments_component_bank_form_index_srepvrpvdj`}
              />
            </Form.Item>
          )}
          {optionalInput?.includes(paymentTypeEnum.BANKNAME) && (
            <Form.Item
              name="bankOfDeposit"
              label={t`features_c2c_payments_component_bank_form_index_ezxdlkhpbqe2wgtvoz_fo`}
              rules={[
                {
                  required: true,
                  validator: (rule, value) =>
                    validatorNameInput(
                      rule,
                      value,
                      t`features_c2c_payments_component_bank_form_index_dzg1718jpjahsadvaz-hy`
                    ),
                },
              ]}
            >
              <Input placeholder={t`features_c2c_payments_component_bank_form_index_dzg1718jpjahsadvaz-hy`} />
            </Form.Item>
          )}
          {optionalInput?.includes(paymentTypeEnum.QRCODE) && (
            <Form.Item
              name="qrCodeAddr"
              label={t`features_agent_agent_manage_index_5101559`}
              className="form-item-uploader"
              // rules={[
              //   {
              //     required: true,
              //     message: `${t`features_c2c_payments_component_bank_form_index_o3mwx5ymaysy0ctetbkqb`}`,
              //   },
              // ]}
            >
              <ImageUploader onChange={onAddUploaderChange} />
            </Form.Item>
          )}
        </>
      )}
    </Form>
  )
}
export default BankForm
