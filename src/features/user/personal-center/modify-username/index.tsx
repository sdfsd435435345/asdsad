import { Form, Field, Button, Toast } from 'react-vant'
import UserTipsInfo from '@/features/user/common/tips-info'
import { t } from '@lingui/macro'
import { PersonalCenterModifyUsernameRules } from '@/features/user/utils/validate'
import { postMemberPersonalCenterSetNick } from '@/apis/user'
import NavBar from '@/components/navbar'
import styles from './index.module.css'

const FormItem = Form.Item

export default function UserPersonalCenterModifyUsername() {
  const [form] = Form.useForm()
  const nickName = Form.useWatch('nickName', form)

  const rules = PersonalCenterModifyUsernameRules()

  const onFinish = async values => {
    const res = await postMemberPersonalCenterSetNick(values)
    if (res.isOk && res.data?.isSuccess) {
      Toast.info(t`user.field.reuse_34`)
      window.history.back()
    }
  }

  return (
    <div className={`modify-username ${styles.scoped}`}>
      <NavBar title={t`user.pageContent.title_10`} />

      <div className="modify-username-wrap user-validate">
        <UserTipsInfo slotContent={<p>{t`user.account_security.modify_username_01`}</p>} />

        <div className="modify-username-form">
          <Form form={form} onFinish={onFinish} autoComplete="off" validateTrigger="onFinish">
            <FormItem name="nickName" rules={[rules.nickName]} validateTrigger="onFinish">
              <Field maxLength={12} placeholder={t`user.account_security.modify_username_02`} />
            </FormItem>

            <FormItem>
              <Button
                size="large"
                type="primary"
                nativeType="submit"
                disabled={!nickName}
              >{t`user.field.reuse_17`}</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
  )
}
