import WalletCoinList from '@/features/assets/wallet/wallet-coin-list'
import WalletHeaderCard from '@/features/assets/wallet/wallet-header-card'
import WalletTabsList from '@/features/assets/wallet/wallet-tabs-list'
import { Divider } from 'react-vant'
import { useEffect, useState, useRef } from 'react'
import { useAssetsStore } from '@/store/assets/spot'
import { usePersonalCenterStore } from '@/store/user/personal-center'
import styles from './index.module.css'
import C2cFooter from '@/features/c2c/footer'
import {
  getV1PerpetualTradeParDefaultApiRequest,
  getV1MemberBaseGetContextt,
  getSiteMessageRunningOrderPage
} from '@/apis/market/market-list'
import { Popup, Button, Input, Form, Toast } from 'react-vant'
import { postV1GuideMemberActive } from '@/apis/server'
import { useLocation } from 'react-router-dom';
import { useUserStore } from '@/store/user'
import { setToken } from '@/helper/auth'
import { useMount, useUnmount, useRequest } from 'ahooks'

function Wallet() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get('token');

  const { setUserInfo, setLogin } = useUserStore()

  const [visible, setVisible] = useState<boolean>(false)

  const [detailToken, setDetailToken] = useState<string>('')

  const [tipVisible, setTipVisible] = useState<boolean>(false)

  const walletCoinListRef = useRef<any>()


  const getV1MemberBaseGetContextChange = async () => {
    const { isOk, data } = await getV1MemberBaseGetContextt({})
    if (isOk && data?.isActive) {
      setVisible(false)
    } else {
      setVisible(true)
    }
    if (data) {
      const userInfoDetial = { token: token, ...data }
      setUserInfo({ ...userInfoDetial } as any)
      setToken({ ...userInfoDetial })
      setDetailToken(token as string)
      walletCoinListRef.current?.getMmberMoneyLastMoneyLogs()
      run({})
    }
  }

  useEffect(() => {
    setLogin(true)
  
    const userInfoDetial = { token: token}
    setUserInfo({ ...userInfoDetial } as any)
    setToken({ ...userInfoDetial })
    getV1MemberBaseGetContextChange()
  }, [token])

  // useEffect(async () => {
  //   await getV1PerpetualTradeParDefaultApiRequest({
  //     "merchantCode": "test01", "password": "j6vgldnn", "signature": "7RJWD6dP0VFUzsODWJh8UjNBlV678VIKXnnFvLup9m2hwoyPK2PuG1wD+jWiY42+drDUZS4zT/R+mPo3KAlgOw==", "userAccount": "member01"
  //   })
  // }, [])

  const [form] = Form.useForm()

  const onFinish = async values => {
    console.log(values)
    const { isOk } = await postV1GuideMemberActive({ ...values })
    if (isOk) {
      setVisible(false)
      Toast.success('激活成功')
    }
  }



  const { data, run, cancel } = useRequest(getSiteMessageRunningOrderPage, {
    pollingInterval: 30000,
    manual: true 
  });

  useEffect(() => {
    if (data) {
      const { isOk, data: dataList } = data
      if(isOk) {
        setTipVisible(dataList?.records?.length > 0)
      }
    }
  }, [data])


  useUnmount(() => {
    cancel()
  })


  const goToPickUpTheOrder = () => {

  }

  return (
    <div className={styles.scoped}>
      <Popup destroyOnClose onClose={() => setTipVisible(false)} closeOnClickOverlay={false} className={styles.modalscoped}
      // overlay={false}
      // visible={tipVisible} 
      visible={false} 
      >
        <div style={{ padding: '20px 20px' }} className="text-center">
          买家需要购买您的C币，金额200元，是否接单
        </div>
        <div className="flex justify-center w-full">
          <div className="w-[100px] h-[40px] bg-brand_color flex justify-center items-center rounded-xl" onClick={goToPickUpTheOrder}>
            前往接单
          </div>
        </div>
      </Popup>
      <Popup
        visible={visible}
        closeOnClickOverlay={false}
        style={{ height: '40%' }}
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
      <WalletCoinList  ref={walletCoinListRef}  />
      <C2cFooter />
    </div>
  )
}

export default Wallet