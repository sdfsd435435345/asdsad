import WalletHeaderCard from '@/features/assets/wallet/wallet-header-card'
import WalletTabsList from '@/features/assets/wallet/wallet-tabs-list'
import { Divider, Picker, Radio } from 'react-vant'
import NavBar from '@/components/navbar'
import { useEffect, useState } from 'react'
import { useAssetsStore } from '@/store/assets/spot'
import { usePersonalCenterStore } from '@/store/user/personal-center'
import styles from './index.module.css'
import C2cFooter from '@/features/c2c/footer'
import {
  setMemberAdvAddPayment,
  setMemberAdvMyPayments,
  setMemberDelPayment,
  setMemberSetDefault
} from '@/apis/market/market-list'
import { Popup, Button, Input, Form, Toast } from 'react-vant'
import { postV1GuideMemberActive } from '@/apis/server'
import { useLocation } from 'react-router-dom';
import { useUserStore } from '@/store/user'
import { setToken } from '@/helper/auth'
import { useMount, useUnmount } from 'ahooks'
import { BrowsingHistoryO, ClosedEye, Success } from '@react-vant/icons'

function Payment() {

  const [visible, setVisible] = useState<boolean>(false)

  const [eyevisible, seteyeVisible] = useState<boolean>(false)

  const [paymentsList, setPaymentsList] = useState<any[]>([])

  const [form] = Form.useForm()

  const onFinish = async values => {
    const { isOk } = await setMemberAdvAddPayment({ ...values })
    if (isOk) {
      Toast.success('添加成功')
      setVisible(false)
    }
  }

  const setMemberAdvMyPaymentsRequest = async () => {
    const { isOk, data } = await setMemberAdvMyPayments({})
    if (isOk) {
      setPaymentsList(data)
    }
  }

  useMount(() => {
    setMemberAdvMyPaymentsRequest()
  })

  const setDefaultPay = async (id) => {
    const { isOk } = await setMemberSetDefault({ id })
    if (isOk) {
      Toast.success('修改成功')
      setMemberAdvMyPaymentsRequest()
    }
  }

  const setDeletePay = async (id) => {
    const { isOk } = await setMemberDelPayment({ id })
    if (isOk) {
      Toast.success('删除成功')
      setMemberAdvMyPaymentsRequest()
    }
  }

  const columns = [
    { text: '支付宝', value: 0 },
    { text: '微信', value: 1 },
    { text: '银行', value: 2 },
  ]


  return (
    <div className={styles.scoped}>
      <NavBar
        title={
          <div>
            <img src="" alt="" />
            <span>支付方式</span>
          </div>
        }
      />
      <Popup
        visible={visible}
        style={{ height: '60%' }}
        className={styles.modal}
        position='bottom'
        destroyOnClose
        round
        onClose={() => setVisible(false)}
      >
        <Form
          form={form}
          onFinish={onFinish}
          initialValues={{
            paymentType: 0
          }}
          footer={
            <div style={{ margin: '16px 16px 0' }}>
              <Button round nativeType='submit' type='primary' block>
                确定添加
              </Button>
            </div>
          }
        >

          <Form.Item
            rules={[{ required: true, message: '请填写账号' }]}
            name='accountNo'
            label='账号'
          >
            <Input placeholder='请输入账号' />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: '请填写支付密码' }]}
            name='payPwd'
            label='支付密码'
          >
            <Input placeholder='请输入支付密码' type={eyevisible ? 'text' : 'password'} suffix={!eyevisible ? <ClosedEye onClick={() => seteyeVisible(true)} /> : <BrowsingHistoryO onClick={() => seteyeVisible(false)} />} />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: '请填写真实姓名' }]}
            name='realName'
            label='真实姓名'
          >
            <Input placeholder='请输入真实姓名' />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: '请填写支付类型' }]}
            name='paymentType'
            label='支付类型'
          >
            <Radio.Group defaultValue="1" direction="horizontal">
              {
                columns.map(item => {
                  return <Radio name={item.value} key={item.value}>{item.text}</Radio>
                })
              }
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name='eachLimit'
            label='单笔交易金额上限'
          >
            <Input placeholder='请输入单笔交易金额上限' />
          </Form.Item>
          <Form.Item
            name='dayLimit'
            label='日交易金额上限'
          >
            <Input placeholder='请输入日交易金额上限' />
          </Form.Item>
          <Form.Item
            name='remark'
            label='备注'
          >
            <Input placeholder='请输入备注' />
          </Form.Item>

        </Form>
      </Popup>
      {
        paymentsList?.length === 0 ? <div className="h-full flex justify-center items-center">
          <div className="w-3/5">
            <Button round nativeType='submit' type='primary' block onClick={() => setVisible(true)}>
              添加支付方式
            </Button>
          </div>
        </div> :
          <>
            {
              paymentsList.map(item => {
                return <div className="mx-2 rounded-lg h-[130px] p-3 mb-3 bg-brand_color_light_bg relative" key={item.accountNo}>
                  {item.selected && <div className="absolute top-1 right-2">
                    <Success />
                  </div>}
                  <div>
                    支付账号: {item.accountNo}
                  </div>
                  <div className="inline-block mr-3 text-xs">
                    支付方式: {columns.find(items => items.value === item.paymentType)?.text}
                  </div>
                  <div className="inline-block mr-3 text-xs">
                    真实姓名: {item.realName}
                  </div>
                  {item.eachLimit && <div className="inline-block mr-2 text-xs">
                    单笔金额:  {item.eachLimit}
                  </div>}
                  {item.dayLimit && <div className="inline-block mr-3 text-xs">
                    每天最大限额: {item.dayLimit}
                  </div>}
                  <div className="inline-block mr-1 text-xs">
                    今日已使用额度: {item.todayCostAmt}
                  </div>
                  <div className="inline-block mr-1 text-xs">
                    会员ID: {item.memberId}
                  </div>
                  <div className="border border-dashed mt-1.5 mb-1"></div>
                  <span className="text-sm pr-2 text-blue-300" onClick={() => setDefaultPay(item.id)}>设为默认</span> <span className="text-sm text-blue-300" onClick={() => setDeletePay(item.id)}>删除</span>
                </div>
              })
            }

            <div className="flex justify-center items-center">
              <div className="w-3/5">
                <Button round nativeType='submit' type='primary' block onClick={() => { 
                  setVisible(true) 
                  setMemberAdvMyPaymentsRequest()
                }}>
                  添加支付方式
                </Button>
              </div>
            </div>
          </>
      }


    </div>
  )
}

export default Payment