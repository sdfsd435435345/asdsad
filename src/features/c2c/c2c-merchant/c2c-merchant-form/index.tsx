import { postMemberSafeVerifyEmailCheck, postMemberSafeVerifyEmailSend } from '@/apis/user'
import UserCountDown from '@/features/user/components/count-down'
import { t } from '@lingui/macro'
import { Button, FieldInstance, Form, Toast, Uploader } from 'react-vant'
import { useEffect, useRef, useState } from 'react'
import { commonFormPhoneFieldValidator } from '@/components/common-form-field/form-phone-field/validator'
import {
  EmailCodeValidator,
  EmailValidator,
  FormValidator,
  FreezeAmtValidator,
  NicknameValidator,
  ReputationValidator,
  UrgentNameValidator,
} from '@/helper/c2c/merchant/form-validators'
import { postV1C2cMerchantApplyApiRequest } from '@/apis/c2c/merchant'
import { link } from '@/helper/link'
import { getC2cMerchantApplicationSuccessPageRoutePath } from '@/helper/route'
import { uploadImageVideo } from '@/helper/c2c/merchant'
import { getC2cCommonSettings } from '@/apis/c2c/common'
import { YapiGetV1C2CCommonSettingData } from '@/typings/yapi/C2cCommonSettingV1GetApi'
import { checkValidEmailInput } from '@/helper/reg'
import { Field } from '@/components/field'
import Icon from '@/components/icon'
import FormCurrencySelectionList from './form-currency-selection-list'
import FormPhoneField from '../../../../components/common-form-field/form-phone-field'
import FormRelationship from './form-relationship'
import styles from './index.module.css'
import PhotoVerificationPopup from '../photo-verification-popup'
import FormCoinsSelection from './form-coins-selection'
import FormCountrySelection from './form-country-selection'

function C2cMerchantForm() {
  const [form] = Form.useForm()
  const [currentCoin, setcurrentCoin] = useState<{
    freezeSymbolId?: string
    freezeSymbol?: string
  }>()
  const emailInputRef = useRef<FieldInstance>(null)
  const [settings, setsettings] = useState<YapiGetV1C2CCommonSettingData>()
  const [emailValidated, setemailValidated] = useState(false)
  const [emailInputVal, setemailInputVal] = useState<string>('')

  useEffect(() => {
    getC2cCommonSettings({}).then(res => {
      setsettings(res.data)
    })
  }, [])

  const handleSendEmailValidateCode = async () => {
    const email = emailInputRef?.current?.nativeElement?.value
    if (!email) {
      Toast.info(t`features_c2c_c2c_merchant_c2c_merchant_form_index_2222225101388`)
      return false
    }
    const res = await postMemberSafeVerifyEmailSend({ email, type: 21 })
    const isTrue = (res.isOk && res.data?.isSuccess) || false
    isTrue && Toast.info(t`user.field.reuse_38`)
    return isTrue
  }

  const validateEmail = async (emailCode: string, hideSuccessToast?: boolean) => {
    const email = emailInputRef?.current?.nativeElement?.value
    if (!email) {
      Toast.info(t`features_c2c_c2c_merchant_c2c_merchant_form_index_2222225101388`)
      return false
    }

    const verifyEmailRes = await postMemberSafeVerifyEmailCheck({ verifyCode: emailCode, type: 21, email })

    if (!verifyEmailRes.isOk && !verifyEmailRes.data?.isSuccess) {
      Toast.info({
        message: t`features_c2c_c2c_merchant_c2c_merchant_form_index_j-aug9yhqteafvscglwsz`,
      })
      return false
    } else {
      !hideSuccessToast &&
        Toast.info({
          message: t`features_c2c_c2c_merchant_c2c_merchant_form_index_6hgwkrk0hojt3a6w9t5jh`,
        })
      return true
    }
  }

  const onFinish = async values => {
    try {
      Toast.loading({ message: t`features_assets_coin_details_coin_details_510157`, duration: 0 })
      let processed = {
        ...values,
        ...values.freezeAmt,
        ...currentCoin,
        ...values.addressForm,
      }
      delete processed.freezeAmt
      delete processed.addressForm

      const validated = await validateEmail(processed.emailCode, true)
      if (!validated) return

      delete processed.emailCode

      processed.legalCurrencyIds = JSON.stringify(processed.legalCurrencyIds)

      // call upload image or video api
      processed = {
        ...processed,
        ...(await uploadImageVideo(processed.identityFileAddr, processed.identityVideoAddr)),
      }

      // add prefix to phone number
      if (processed?.phone) processed.phone = `+${processed.phone}`
      if (processed?.urgentTel) processed.urgentTel = `+${processed.urgentTel}`

      const res = await postV1C2cMerchantApplyApiRequest(processed)

      if (res.isOk && res.data) {
        Toast.clear()
        link(getC2cMerchantApplicationSuccessPageRoutePath())
      } else
        Toast.info({
          message: t`features_c2c_c2c_merchant_c2c_merchant_form_index_hzmoarjf-vitnpvbh2hqk`,
        })
    } catch (err) {
      Toast.info({
        message: t`features_c2c_c2c_merchant_c2c_merchant_form_index_hzmoarjf-vitnpvbh2hqk`,
      })
    }
  }

  return (
    <div className={styles.scoped}>
      <Form
        form={form}
        onFinish={onFinish}
        footer={
          <Button className="mt-8 rounded" nativeType="submit" type="primary" block>
            {t`user.application_form_11`}
          </Button>
        }
      >
        <Form.Item
          name={'nickName'}
          layout="vertical"
          label={t`features_c2c_c2c_merchant_c2c_merchant_form_index_2222225101383`}
          rules={[
            {
              required: true,
              validator: NicknameValidator(t`features_c2c_c2c_merchant_c2c_merchant_form_index_2222225101384`),
            },
          ]}
        >
          <Field />
        </Form.Item>
        <Form.Item
          className="phone-field-form"
          name={'phone'}
          layout="vertical"
          label={t`features_c2c_c2c_merchant_c2c_merchant_form_index_2222225101385`}
          rules={[
            {
              required: true,
              message: t`features_c2c_c2c_merchant_c2c_merchant_form_index_2222225101386`,
              validator: commonFormPhoneFieldValidator,
            },
          ]}
        >
          <FormPhoneField
            popupTitle={t`features_c2c_c2c_merchant_c2c_merchant_form_index_dcpvhehmedar3hxs_vajy`}
            placeholder=""
          />
        </Form.Item>
        <Form.Item
          name={'email'}
          layout="vertical"
          label={t`features_c2c_c2c_merchant_c2c_merchant_form_index_2222225101387`}
          rules={[{ required: true, validator: EmailValidator }]}
        >
          <Field ref={emailInputRef} onChange={setemailInputVal} />
        </Form.Item>
        <Form.Item
          name={'emailCode'}
          layout="vertical"
          label={t`user.field.reuse_03`}
          rules={[
            {
              required: true,
              validator: EmailCodeValidator(t`features_c2c_c2c_merchant_c2c_merchant_form_index_2222225101389`),
            },
          ]}
        >
          <Field
            readOnly={!checkValidEmailInput(emailInputVal)}
            className="form-email-code"
            type="number"
            maxLength={6}
            onChange={async v => {
              if (v.length >= 6) {
                await validateEmail(v)
                setemailValidated(true)
              }
            }}
            // placeholder={t`user.field.reuse_20`}
            // token valid for 5 mins
            suffix={
              checkValidEmailInput(emailInputVal) ? (
                <UserCountDown
                  onSendValidateCode={handleSendEmailValidateCode}
                  triggerStop={emailValidated}
                  buttonText={t`features_c2c_c2c_merchant_c2c_merchant_form_index_vrcapaxjc7icxkutzut3f`}
                />
              ) : (
                <span className="text-text_color_02">{t`features_c2c_c2c_merchant_c2c_merchant_form_index_vrcapaxjc7icxkutzut3f`}</span>
              )
            }
          />
        </Form.Item>
        <Form.Item
          layout="vertical"
          label={t`features_trade_future_c2c_22222225101604`}
          name="legalCurrencyIds"
          rules={[
            {
              required: true,
              validator: FormValidator(' '),
            },
          ]}
        >
          <FormCurrencySelectionList />
        </Form.Item>
        <Form.Item
          name="freezeAmt"
          className="pb-0"
          layout="vertical"
          label={t`features_c2c_c2c_merchant_c2c_merchant_form_index_2222225101392`}
          rules={[
            {
              required: true,
              validator: FreezeAmtValidator({
                amount: settings?.frozenQuantity,
                symbol: settings?.symbol,
                coin: currentCoin?.freezeSymbol,
              }),
            },
          ]}
        >
          <FormCoinsSelection onCoinChange={setcurrentCoin} setting={settings} />
        </Form.Item>
        <div className="text-text_color_03 text-xs mt-2 leading-5">
          {t`features_c2c_c2c_merchant_c2c_merchant_form_index_2222225101406`}
        </div>
        <Form.Item
          name="reputationVal"
          className="pb-0"
          layout="vertical"
          label={t`features_c2c_c2c_merchant_c2c_merchant_form_index_2222225101394`}
          rules={[
            {
              required: true,
              validator: ReputationValidator(t`features_c2c_c2c_merchant_c2c_merchant_form_index_2222225101395`),
            },
          ]}
        >
          <Field type="number" suffix={<span>USD</span>} />
        </Form.Item>
        <div className="text-text_color_03 text-xs mt-2 leading-5">
          {t`features_c2c_c2c_merchant_c2c_merchant_form_index_2222225101407`}
        </div>
        <Form.Item
          name="addressForm"
          layout="vertical"
          label={t`features_c2c_c2c_merchant_c2c_merchant_form_index_bmibhhmylqtx4nlbh-v8r`}
        >
          {<FormCountrySelection />}
        </Form.Item>
        <Form.Item
          className="photo-verify-form"
          layout="horizontal"
          label={t`features_c2c_c2c_merchant_c2c_merchant_form_index_2222225101396`}
        >
          <div className="ml-auto">
            <PhotoVerificationPopup />
          </div>
        </Form.Item>
        <Form.Item name="identityFileAddr" layout="vertical">
          {/* max file size 20mb */}
          <Uploader
            maxCount={1}
            accept=".jpg, .jpeg, .png"
            maxSize={20 * 1000 * 1024}
            uploadIcon={<Icon name="c2c_upload" hasTheme />}
          />
        </Form.Item>
        <Form.Item
          className="mt-2"
          name="identityVideoAddr"
          layout="vertical"
          label={t`features_c2c_c2c_merchant_c2c_merchant_form_index_2222225101398`}
        >
          <Uploader
            maxCount={1}
            accept=".mp4, .wmv, .ogg, .mov"
            maxSize={200 * 1000 * 1024}
            uploadIcon={<Icon name="c2c_upload" hasTheme />}
          />
        </Form.Item>
        <Form.Item
          name="urgentName"
          layout="vertical"
          label={t`features_c2c_c2c_merchant_c2c_merchant_form_index_2222225101400`}
          rules={[
            {
              required: true,
              validator: UrgentNameValidator(t`features_c2c_c2c_merchant_c2c_merchant_form_index_2222225101401`),
            },
          ]}
        >
          <Field />
        </Form.Item>
        <Form.Item
          name="urgentRelation"
          layout="vertical"
          label={t`features_c2c_c2c_merchant_c2c_merchant_form_index_2222225101402`}
          rules={[
            {
              required: true,
              validator: FormValidator(t`features_c2c_c2c_merchant_c2c_merchant_form_index_2222225101403`),
            },
          ]}
        >
          <FormRelationship />
        </Form.Item>
        <Form.Item
          className="phone-field-form"
          name="urgentTel"
          layout="vertical"
          label={t`features_c2c_c2c_merchant_c2c_merchant_form_index_2222225101404`}
          rules={[
            {
              required: true,
              message: t`features_c2c_c2c_merchant_c2c_merchant_form_index_2222225101405`,
              validator: commonFormPhoneFieldValidator,
            },
          ]}
        >
          <FormPhoneField
            popupTitle={t`features_c2c_c2c_merchant_c2c_merchant_form_index_dcpvhehmedar3hxs_vajy`}
            placeholder=""
          />
        </Form.Item>
      </Form>
    </div>
  )
}

export default C2cMerchantForm
