import { WalletCoinList } from '@/features/assets/wallet/wallet-coin-list'
import WalletHeaderCard from '@/features/assets/wallet/wallet-header-card'
import WalletTabsList from '@/features/assets/wallet/wallet-tabs-list'
import { Divider } from 'react-vant'
import { useEffect, useState } from 'react'
import { useAssetsStore } from '@/store/assets/spot'
import { usePersonalCenterStore } from '@/store/user/personal-center'
import styles from './index.module.css'
import C2cFooter from '@/features/c2c/footer'
import {
  getV1PerpetualTradeParDefaultApiRequest,
  getV1MemberBaseGetContextt
} from '@/apis/market/market-list'
import { Popup, Button, Input, Form, Toast } from 'react-vant'
import { postV1GuideMemberActive } from '@/apis/server'
import { useLocation } from 'react-router-dom';
import { useUserStore } from '@/store/user'
import { setToken } from '@/helper/auth'

function Wallet() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get('token');

  const { setUserInfo, setLogin, userInfo } = useUserStore()

  const [visible, setVisible] = useState<boolean>(true)


  const getV1MemberBaseGetContextChange = async () => {
    getV1MemberBaseGetContextt({})
  }

  useEffect(() => {
    const userInfoDetial = { ...userInfo, token: token }
    setUserInfo({ ...userInfoDetial })
    setToken({ ...userInfoDetial })
    setLogin(true)
    getV1MemberBaseGetContextChange()
  }, [token])

  useEffect(async () => {
    await getV1PerpetualTradeParDefaultApiRequest({
      "merchantCode": "test01", "password": "j6vgldnn", "signature": "7RJWD6dP0VFUzsODWJh8UjNBlV678VIKXnnFvLup9m2hwoyPK2PuG1wD+jWiY42+drDUZS4zT/R+mPo3KAlgOw==", "userAccount": "member01"
    })
  }, [])

  const [form] = Form.useForm()

  const onFinish = async values => {
    console.log(values)
    const { isOk } = await postV1GuideMemberActive({ ...values })
    if (isOk) {
      setVisible(false)
      Toast.success('激活成功')
    }
  }


  console.log(token, 'tokentokentokentoken');


  return (
    <div className={styles.scoped}>
      <Popup
        visible={visible}
        closeOnClickOverlay={false}
        style={{ height: '40%' }}
        className={styles.modal}
        position='bottom'
        round
        onClose={() => setVisible(false)}
      >
        <Form
          form={form}
          onFinish={onFinish}
          footer={
            <div style={{ margin: '16px 16px 0' }}>
              <Button round nativeType='submit' type='primary' block>
                激活会员
              </Button>
            </div>
          }
        >
          <Form.Item
            rules={[{ required: true, message: '请填写用户名' }]}
            name='nickname'
            label='用户名'
          >
            <Input placeholder='请输入用户名' />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: '请填写密码' }]}
            name='payPwd'
            label='密码'
          >
            <Input placeholder='请输入密码' />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: '请填写LOGO' }]}
            name='logo'
            label='LOGO'
          >
            <Input placeholder='请输入LOGO' />
          </Form.Item>
        </Form>
      </Popup>
      <div className="overflow-hidden">
        <WalletHeaderCard />
      </div>
      <WalletTabsList />
      <Divider />
      <WalletCoinList />
      <C2cFooter />
    </div>
  )
}

export default Wallet