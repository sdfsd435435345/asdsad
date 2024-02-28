import Icon from '@/components/icon'
import { Button, Form, Input, Popup, Toast } from 'react-vant'
import { useCopyToClipboard } from 'react-use'
import { t } from '@lingui/macro'
import { rateFilterFutures } from '@/helper/assets/spot'
import { useAssetsStore } from '@/store/assets/spot'
import { useUserStore } from '@/store/user'
import { useEffect, useState } from 'react'
import { AssetsOverviewResp } from '@/typings/api/assets/assets'
import { requestWithLoading } from '@/helper/order'
import { memberMoneyWithdraw } from '@/apis/kyc'
import { onGetAssetsOverview } from '@/helper/assets/overview'
import styles from './index.module.css'

function WalletHeaderCard() {
  const { userInfo, isLogin } = useUserStore()
  const [state, copyToClipboard] = useCopyToClipboard()
  const handleCopy = (key: number | undefined) => {
    if (!key) return
    copyToClipboard(key.toString())
    state.error ? Toast.fail(t`user.secret_key_02`) : Toast.success(t`user.secret_key_01`)
  }

  useEffect(() => {
    isLogin && requestWithLoading(onGetAssetsOverview(), 0)
  }, [isLogin])

  const [visible, setVisible] = useState<boolean>(false)

  const [form] = Form.useForm()

  const onFinish = async values => {
    console.log(values)
    const { isOk } = await memberMoneyWithdraw({ ...values })
    if (isOk) {
      setVisible(false)
      Toast.success('激活成功')
    }
  }




  return (
    <div className={styles.scoped}>
      <div className="absolute text-sm right-4 top-4" onClick={() => setVisible(true)}>
        提币
      </div>
      <div className="text-base font-medium">
        <Icon name="default_avatar" className="mr-2 header-brand-logo" />
        <span className="text-base font-semibold">{userInfo?.nickname || t`user.personal_center_01`}</span>
      </div>
      <div>
        <label>{userInfo?.token || '-'}</label>
        <Icon className="ml-1" name="copy_black" onClick={() => handleCopy(userInfo?.token)} />
      </div>
      <div className="divider"></div>
      <div className="flex justify-between">
        <div>
          <div className="flex justify-center font-semibold">{userInfo?.balance}</div>
          <div className="flex justify-center text-sm">可售额</div>
        </div>
        <div>
          <div className="flex justify-center font-semibold">{userInfo?.freeze}</div>
          <div className="flex justify-center text-sm">冻结金额</div>
        </div>
      </div>
      <Popup
        visible={visible}
        style={{ height: '30%' }}
        className={styles.modal}
        position='bottom'
        destroyOnClose
        round
        onClose={() => setVisible(false)}
      >
        <Form
          form={form}
          onFinish={onFinish}
          footer={
            <div style={{ margin: '16px 16px 0' }}>
              <Button round nativeType='submit' type='primary' block>
                提币
              </Button>
            </div>
          }
        >
          <Form.Item
            rules={[{ required: true, message: '请填写支付密码' }]}
            name='payPwd'
            label='支付密码'
          >
            <Input placeholder='请输入支付密码'  type='password' />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: '请填写提币金额' }]}
            name='amount'
            label='提币金额'
          >
            <Input placeholder='请输入提币金额' />
          </Form.Item>
        </Form>
      </Popup>

    </div>
  )
}

export default WalletHeaderCard
