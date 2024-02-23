import { useState, useEffect, useMemo } from 'react'
import { Form, Field, Button, Flex, Uploader, Toast, Image, UploaderValueItem } from 'react-vant'
import { t } from '@lingui/macro'
import { link } from '@/helper/link'
import UserCountDown from '@/features/user/components/count-down'
import UserSecretKey from '@/features/user/common/secret-key'
import UserSearchArea from '@/features/user/common/search-area'
import { SafetyItemsApplicationFormRules, formatPhoneNumber } from '@/features/user/utils/validate'
import NavBar from '@/components/navbar'
import {
  postMemberSafeVerifyGenerateGoogleQrCode,
  postMemberSafeVerifyEmailSend,
  postMemberSafeVerifyPhoneSend,
  postMemberSafeVerifyReset,
  postMemberUpload,
} from '@/apis/user'
import { useUserStore } from '@/store/user'
import { MemberMemberAreaType } from '@/typings/user'
import { oss_area_code_image_domain_address } from '@/constants/oss'
import {
  UserSendValidateCodeBusinessTypeEnum,
  UserSelectAreaTypeEnum,
  UserKycTypeEnum,
  ChinaAreaCodeEnum,
} from '@/constants/user'
import Icon from '@/components/icon'
import styles from './index.module.css'

const FormItem = Form.Item

export default function UserSafetyItemsApplicationForm() {
  const [selectArea, setSelectArea] = useState<boolean>(false)
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false)
  const [uploaderImage, setUploaderImage] = useState<string>('')
  const [qrCode, setQrCode] = useState<string>('')
  const [secretKey, setSecretKey] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  // const [disabled, setDisabled] = useState<boolean>(true)
  const [area, setArea] = useState<MemberMemberAreaType>({
    codeVal: ChinaAreaCodeEnum.code,
    codeKey: t`features_user_personal_center_account_security_phone_verification_index_599`,
    remark: ChinaAreaCodeEnum.remark,
  })

  const store = useUserStore()
  const [form] = Form.useForm()

  const info = store.userTransitionDatas

  const rule = SafetyItemsApplicationFormRules()

  const limitSize = useMemo(() => {
    const size = 5 * (1024 * 1024) // 5MB
    return size
  }, [])

  // const handleValidateChange = () => {
  //   form
  //     .validateFields()
  //     .then(() => setDisabled(false))
  //     .catch(() => setDisabled(true))
  // }

  const getGoogleSecretKey = async () => {
    const res = await postMemberSafeVerifyGenerateGoogleQrCode({ account: info.account })
    if (res.isOk) {
      setQrCode(res.data!.qrPath)
      setSecretKey(res.data!.secretKey)
    }
  }

  useEffect(() => {
    if (info.resetItem?.isGoogle) {
      getGoogleSecretKey()
    }
  }, [])

  const handleSelectArea = v => {
    setArea(v)
    setSelectArea(false)
  }

  const handleSendEmailValidateCode = async () => {
    const email = form.getFieldValue('email')

    if (!email) {
      Toast.info(t`user.application_form_05`)
      return false
    }

    const res = await postMemberSafeVerifyEmailSend({
      type: UserSendValidateCodeBusinessTypeEnum.securityItemApply,
      email,
      uid: info?.userInfo?.uid,
    })

    const isTrue = (res.isOk && res.data?.isSuccess) || false
    isTrue && Toast.info(t`user.field.reuse_38`)
    return isTrue
  }

  const handleSendPhoneValidateCode = async () => {
    const phone = form.getFieldValue('mobile') || form.getFieldValue('contactPhone')

    if (!phone) {
      Toast.info(
        info.resetItem?.isMobile
          ? t`features_user_safety_items_application_form_index_621`
          : t`features_user_safety_items_application_form_index_510235`
      )
      return false
    }

    const res = await postMemberSafeVerifyPhoneSend({
      type: UserSendValidateCodeBusinessTypeEnum.securityItemApply,
      mobileCountryCode: area.codeVal,
      mobile: phone?.replace(/\s/g, ''),
      uid: info?.userInfo?.uid,
    })

    const isTrue = (res.isOk && res.data?.isSuccess) || false
    isTrue && Toast.info(t`user.field.reuse_38`)
    return isTrue
  }

  const handleUploader = async (list: Array<UploaderValueItem>) => {
    if (list.length > 0) {
      const imageList = list.slice(-1)[0]
      const file = imageList.file as File
      const url = imageList.url as string

      if (file.size > limitSize) {
        Toast.info(t`features_user_safety_items_application_form_index_622`)
        return
      }

      const res = await postMemberUpload({ image: url })
      if (res.isOk) {
        setUploaderImage(res.data!.url)
        // handleValidateChange()
      }
    }
  }

  const handleWorkOrderSubmitSuccess = async () => {
    await store.removeUserTransitionDatas()
    link('/')
  }

  const onFinish = async values => {
    setLoading(true)

    values.mobile = values.mobile?.replace(/\s/g, '')

    const options = {
      ...values,
      ...info.resetItem,
      googleSecretKey: secretKey,
      mobileCountryCode: area.codeVal,
      applyPhotoPath: uploaderImage,
      account: info.account,
      accountType: info.type,
      oldMobileCountryCode: info.mobileCountryCode,
    }

    const res = await postMemberSafeVerifyReset(options)
    res.isOk && res.data?.isSuccess && setSubmitSuccess(true)

    setLoading(false)
  }

  return (
    <section className={`application-form ${styles.scoped}`}>
      <NavBar title="" right={<Icon name="close" hasTheme />} onClickRight={() => link('/')} />

      {!submitSuccess && !selectArea && (
        <div className="application-form-wrap user-validate">
          <div className="title">
            <label>{t`user.application_form_01`}</label>
          </div>

          {info.resetItem?.isGoogle && (
            <>
              <UserSecretKey qrcode={qrCode} secretKey={secretKey} />

              <p>
                {t`user.application_form_02`}
                <label>{t`user.application_form_03`}</label>
              </p>
            </>
          )}

          <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            autoComplete="off"
            validateTrigger="onFinish"
            // onChange={handleValidateChange}
          >
            {info.resetItem?.isGoogle && (
              <FormItem name="googleVerifyCode" rules={[rule.googleKey]} validateTrigger="onFinish">
                <Field type="number" maxLength={6} placeholder={t`user.field.reuse_15`} />
              </FormItem>
            )}

            {info.resetItem?.isEmail && (
              <>
                <FormItem
                  name="email"
                  rules={[rule.email]}
                  label={t`user.application_form_04`}
                  validateTrigger="onFinish"
                >
                  <Field placeholder={t`user.application_form_05`} />
                </FormItem>

                <FormItem
                  name="emailVerifyCode"
                  rules={[rule.emailCode]}
                  label={t`user.application_form_06`}
                  validateTrigger="onFinish"
                >
                  <Field
                    type="number"
                    maxLength={6}
                    placeholder={t`user.field.reuse_20`}
                    suffix={<UserCountDown onSendValidateCode={handleSendEmailValidateCode} />}
                  />
                </FormItem>
              </>
            )}

            <FormItem
              name="mobile"
              rules={[rule.phone]}
              label={
                info.resetItem?.isMobile
                  ? t`user.application_form_07`
                  : t`features_user_safety_items_application_form_index_510236`
              }
              validateTrigger="onFinish"
            >
              <Field
                formatter={value => formatPhoneNumber(String(value), area?.codeVal)}
                prefix={
                  <Flex align="center" onClick={() => setSelectArea(true)}>
                    <Image lazyload src={`${oss_area_code_image_domain_address}${area?.remark}.png`} /> +{area?.codeVal}{' '}
                    <Icon name="regsiter_icon_drop" hasTheme />
                  </Flex>
                }
                placeholder={t`user.field.reuse_11`}
              />
            </FormItem>

            <FormItem
              name="mobileVerifyCode"
              rules={[rule.phoneCode]}
              label={t`user.field.reuse_14`}
              validateTrigger="onFinish"
            >
              <Field
                type="number"
                maxLength={6}
                placeholder={t`user.field.reuse_21`}
                suffix={<UserCountDown onSendValidateCode={handleSendPhoneValidateCode} />}
              />
            </FormItem>

            {info?.kycType !== UserKycTypeEnum.notCertified && (
              <>
                <FormItem style={{ marginTop: 0, flexDirection: 'inherit' }}>
                  <div className="update-image">
                    <FormItem className="sample" style={{ flexDirection: 'inherit' }}>
                      <Icon name="login_form_example" hasTheme />
                    </FormItem>

                    <FormItem
                      name="applyPhotoPath"
                      rules={[rule.photo]}
                      className="update"
                      style={{ flexDirection: 'inherit' }}
                      validateTrigger="onFinish"
                    >
                      <Uploader onChange={handleUploader} previewImage={false}>
                        <div className="update-wrap" style={{ backgroundImage: `url("${uploaderImage || ''}")` }}>
                          <Icon name="login_form_certificates" hasTheme />
                        </div>
                        <div className="update-text">
                          {uploaderImage ? (
                            <label>{t`user.application_form_15`}</label>
                          ) : (
                            <label>{t`user.application_form_14`}</label>
                          )}
                        </div>
                      </Uploader>
                    </FormItem>
                  </div>
                </FormItem>

                <div className="tips">
                  <div className="describe">
                    <Icon name="prompt-symbol" />
                    <p>{t`user.application_form_08`}</p>
                  </div>
                  <div className="describe">
                    <Icon name="prompt-symbol" />
                    <p>{t`user.application_form_09`}</p>
                  </div>
                  <div className="describe">
                    <Icon name="prompt-symbol" />
                    <p>{t`user.application_form_10`}</p>
                  </div>
                </div>
              </>
            )}

            <FormItem>
              <Button
                loading={loading}
                size="large"
                type="primary"
                nativeType="submit"
                // disabled={disabled}
              >
                {t`user.application_form_11`}
              </Button>
            </FormItem>
          </Form>
        </div>
      )}

      <UserSearchArea
        visible={selectArea}
        checkedValue={area?.codeVal}
        type={UserSelectAreaTypeEnum.phone}
        placeholderText={t`user.field.reuse_25`}
        selectArea={handleSelectArea}
        onClose={() => setSelectArea(false)}
      />

      {submitSuccess && (
        <div className="submit-success">
          <div className="icon">
            <Icon name="register_success" hasTheme isRemoteUrl />
          </div>
          <div className="content">
            <label>{t`user.application_form_12`}</label>
          </div>
          <div className="back-home">
            <Button type="primary" onClick={handleWorkOrderSubmitSuccess}>
              {t`user.application_form_13`}
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}
