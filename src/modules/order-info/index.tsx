import { useState } from 'react';
import { Button, Input, Steps, Image, CountDown, Toast, Popup, Form, Dialog } from 'react-vant';
import { Service } from '@react-vant/icons'
import NavBar from '@/components/navbar'
import Icon from '@/components/icon'
import { useMount, useUnmount, useRequest } from 'ahooks'
import { useLocation, useNavigate } from 'react-router-dom';
import { postMemberBuyOrderDetail, postMemberCancelBuyOrder, postMemberConfirmBuyOrder, postMemberOrderAppeal, postMemberFinishBuyOrder } from '@/apis/server'
import styles from './index.module.css';  // 根据你的实际情况导入样式文件
import { useUserStore } from '@/store/user';
import dayjs from 'dayjs';
import { useCopyToClipboard } from 'react-use';


const OrderPage = () => {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const seqNo = params.get('seqNo');

  const navigate = useNavigate()

  const [visible, setVisible] = useState<boolean>(false)

  const payMentText = {
    0: "支付宝",
    1: "微信",
    2: "银行"
  }

  const buyerOrderStatus = {
    0: "待交易",
    1: "交易中",
    2: "已完成",
    3: "部分完成"
  }

  const sellerOrderStatus = {
    1: "待接单",
    2: "待付款",
    3: "待发货",
    4: "已完成"
  }

  const { userInfo } = useUserStore()

  const [buyOrderDetail, setBuyOrderDetail] = useState<any>({})
  console.log(userInfo?.id, ' userInfo?.id  userInfo?.id ');

  const userInfoRole = userInfo?.id === buyOrderDetail?.buyerId ? 'buyer' : 'seller';

  const handleContactServiceClick = () => {
    // 处理联系客服按钮点击事件
    // 可以实现弹窗或其他交互方式
    console.log('联系客服按钮点击');
  };


  const renderOrderInfo = () => {
    return (
      <div className='orderInfo'>
        <p>购买金额：{buyOrderDetail?.transAmount} {buyerOrderStatus?.[buyOrderDetail?.orderState]}</p>
        <p>订单号：{buyOrderDetail?.seqNo}</p>
        <p>卖家：{buyOrderDetail?.soldNickname}</p>
        <p className='message'>
          您必须使用以下【{buyOrderDetail?.buyerPayment?.realName}】的账号进行转账付款！如果使用其他账户进行转账付款，卖家将不会发货！
        </p>
      </div>
    );
  };


  const renderOrderInfoSell = () => {
    return (
      <div className='orderInfo'>
        <p>出售金额：{buyOrderDetail?.transAmount} {buyerOrderStatus?.[buyOrderDetail?.orderState]}</p>
        <p>订单号：{buyOrderDetail?.seqNo}</p>
        <p>买家：{buyOrderDetail?.buyerPayment?.realName}</p>
        <p>支付方式：{payMentText?.[buyOrderDetail?.buyerPayment?.paymentType]}</p>
      </div>
    );
  };




  const postMemberBuyOrderDetailRequst = async () => {
    const res = await postMemberBuyOrderDetail({ seqNo })
    if (res?.isOk) {
      setBuyOrderDetail(res?.data)
    }
    return res
  }

  const { run, cancel } = useRequest(postMemberBuyOrderDetailRequst, {
    pollingInterval: 6000,
    manual: true
  });


  useMount(() => {
    run()
  })

  useUnmount(() => {
    cancel()
  })

  const src = 'https://img.yzcdn.cn/vant/cat.jpeg'

  const getZeroTime = (timeData) => {
    return timeData < 10 ? `0${timeData}` : timeData
  }

  const getCountDown = (timeUpSecond) => {
    return <CountDown time={timeUpSecond} millisecond format="HH:mm:ss:SS">
      {(timeData) => (
        <div className="flex time time-red">
          <span className="block">{getZeroTime(timeData.hours)}</span>
          <span className="colon">:</span>
          <span className="block">{getZeroTime(timeData.minutes)}</span>
          <span className="colon">:</span>
          <span className="block">{getZeroTime(timeData.seconds)}</span>
        </div>
      )}
    </CountDown>
  }

  const [state, copyToClipboard] = useCopyToClipboard()

  /**
   * 复制
   */
  const onCopy = val => {
    if (!val) {
      return
    }
    copyToClipboard(val)
    state.error ? Toast('复制失败') : Toast('复制成功')
  }

  const getBuyOrderDetail = (text, confirmTime, state) => {
    
    if (buyOrderDetail?.orderState - state === 0) {
      return <><span  className='time-label'>{text}</span> <span> {getCountDown(Number(buyOrderDetail?.timeUpSecond) * 1000) }</span></>
    } else if (buyOrderDetail?.orderState - 1 >= state) {
      return <><span className='time-label'>{text}</span> <span className='time'>{confirmTime}</span></>
    } else {
      return text
    }
  }

  const goToUpload = () => {
    navigate(`/upload-voucher?seqNo=${seqNo}`)
  }

  const setCancelBuyer = async () => {
    const { isOk } = await postMemberCancelBuyOrder({ seqNo })
    if (isOk) {
      postMemberBuyOrderDetailRequst()
    }
  }

  const goToAccept = async () => {
    const { isOk } = await postMemberConfirmBuyOrder({ seqNo })
    if (isOk) {
      postMemberBuyOrderDetailRequst()
    }
  }


  const setApealSeller = () => {
    setVisible(true)
  }

  const [form] = Form.useForm()

  const onFinish = async values => {
    const { isOk } = await postMemberOrderAppeal({ ...values, seqNo })
    if (isOk) {
      setVisible(false)
      postMemberBuyOrderDetailRequst()
      Toast.success('申诉成功')
    }
  }

  const handleCancelOrder = () => {
    // 处理取消订单按钮点击事件
    // 其他逻辑...
  };

  const handleConfirmOrder = async () => {
    // 处理确认订单按钮点击事件
    const { isOk } = await postMemberFinishBuyOrder({ seqNo })
    if (isOk) {
      postMemberBuyOrderDetailRequst()
    }
  };

  const goToComplete = () => {
    Dialog.confirm({
      title: '',
      message: <div style={{ textAlign: 'center' }} className='p-6'>请认真核实收款账号是否到账？不能只看凭证发货！否则有可能被骗</div>,
      onCancel: handleCancelOrder,
      onConfirm: handleConfirmOrder,
      className: 'dialog-confirm-wrapper cancel-gray confirm-black confim-order-status',
    })
  }

  console.log(userInfoRole, 'userInfoRole');



  return (
    <div className={styles.scoped}>
      <NavBar
        title='订单信息'
        left={<Icon name="back" hasTheme className="header-back" />}
      // right={
      //   // <Button type="primary" onClick={handleContactServiceClick}>联系客服</Button>
      //   <Service color='#26C9A0' onClick={handleContactServiceClick} />
      // }
      />
      <Popup
        visible={visible}
        closeOnClickOverlay
        style={{ height: '25%' }}
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
                提交申诉
              </Button>
            </div>
          }
        >
          <Form.Item
            rules={[{ required: true, message: '申诉原因' }]}
            name='remark'
            label='申诉原因'
          >
            <Input placeholder='请输入申诉原因' />
          </Form.Item>
        </Form>
      </Popup>

      {userInfoRole === 'buyer' ?
        <>
          {renderOrderInfo()}
          {
            buyOrderDetail?.orderState > 0 && <div className='progress'>
              {/* 根据订单状态渲染不同的步骤 */}
              {/* 这里可以根据实际情况，结合接口返回的订单状态，渲染对应的步骤 */}
              <Steps active={buyOrderDetail?.orderState-1}>
                <Steps.Item> {getBuyOrderDetail('买家下单', buyOrderDetail?.createTime, 0)} </Steps.Item>
                <Steps.Item> {getBuyOrderDetail('卖家接单', buyOrderDetail?.confirmTime, 1)}  </Steps.Item>
                <Steps.Item> {getBuyOrderDetail('买家付款', buyOrderDetail?.paymentTime, 2)} </Steps.Item>
                <Steps.Item> {getBuyOrderDetail('卖家发货', buyOrderDetail?.finishTime, 3)}</Steps.Item>
              </Steps>
            </div>
          }
          {buyOrderDetail?.orderState === -1 && <div className="flex justify-center text-xl text-red-500">订单已撤回!</div>}
          {buyOrderDetail?.orderState === -2 && <div className="flex justify-center text-xl text-red-500">订单申诉中!</div>}
          {
            buyOrderDetail?.orderState - 1 === 1 && <> <div style={{ margin: '16px 16px 0' }}>
              <Button round nativeType='submit' type='primary' block onClick={() => goToUpload()}>
                上传凭证并确认付款
              </Button>
            </div>
              <div style={{ margin: '16px 16px 0' }}>
                <Button round type="danger" block onClick={() => { setCancelBuyer() }}>
                  取消订单
                </Button>
              </div></>
          }
          {
            buyOrderDetail?.orderState === 3 && <>
              <div style={{ margin: '16px 16px 0' }}>
                <Button round type="danger" onClick={() => { setApealSeller() }} block>
                  要申诉
                </Button>
              </div></>
          }
          {/* 买家付款信息 */}
          {
            buyOrderDetail?.orderState - 1 > 0 && <div className='payment-info'>
              <div className='payment-type'>卖家付款信息：</div>
              <div className='seller-collection-informatio'>
                <div className='payment-screenshot'>
                  <Image src={src} />
                </div>
                <div className='payment-details'>
                  <div className='input-wrapper'>
                    <div className='input-field'>{payMentText?.[buyOrderDetail?.sellerPayment?.paymentType]}</div>
                  </div>
                  <div className='input-wrapper'>
                    <div className='input-field'>姓名：{buyOrderDetail?.sellerPayment?.realName}</div>
                    <span className='copy-button' onClick={() => onCopy(buyOrderDetail?.sellerPayment?.realName)}>复制</span>
                  </div>
                  <div className='input-wrapper'>
                    <div className='input-field'>账号：{buyOrderDetail?.sellerPayment?.accountNo}</div>
                    <span className='copy-button' onClick={() => onCopy(buyOrderDetail?.sellerPayment?.accountNo)}>复制</span>
                  </div>
                </div>
              </div>
            </div>

          }

          <div className='payment-info'>
            <div className='payment-type'>买家付款信息：</div>
            <div className='seller-collection-informatio'>
              <div className='payment-screenshot'>
                <Image src={src} />
              </div>
              <div className='payment-details'>
                <div className='input-wrapper'>
                  <div className='input-field'>{payMentText?.[buyOrderDetail?.buyerPayment?.paymentType]}</div>
                </div>
                <div className='input-wrapper'>
                  <div className='input-field'>姓名：{buyOrderDetail?.buyerPayment?.realName}</div>
                  <span className='copy-button' onClick={() => onCopy(buyOrderDetail?.buyerPayment?.realName)}>复制</span>
                </div>
                <div className='input-wrapper'>
                  <div className='input-field'>账号：{buyOrderDetail?.buyerPayment?.accountNo}</div>
                  <span className='copy-button' onClick={() => onCopy(buyOrderDetail?.buyerPayment?.accountNo)}>复制</span>
                </div>
              </div>
            </div>
          </div>
        </> :
        <>
          {renderOrderInfoSell()}
          {
            buyOrderDetail?.orderState > 0 && <div className='progress'>
              {/* 根据订单状态渲染不同的步骤 */}
              {/* 这里可以根据实际情况，结合接口返回的订单状态，渲染对应的步骤 */}
              <Steps active={buyOrderDetail?.orderState-1}>
                <Steps.Item> {getBuyOrderDetail('买家下单', buyOrderDetail?.createTime, 0)} </Steps.Item>
                <Steps.Item> {getBuyOrderDetail('卖家接单', buyOrderDetail?.confirmTime, 1)}  </Steps.Item>
                <Steps.Item> {getBuyOrderDetail('买家付款', buyOrderDetail?.paymentTime, 2)} </Steps.Item>
                <Steps.Item> {getBuyOrderDetail('卖家发货', buyOrderDetail?.finishTime, 3)}</Steps.Item>
              </Steps>
            </div>
          }
          {buyOrderDetail?.orderState === -1 && <div className="flex justify-center text-xl text-red-500">订单已撤回!</div>}
          {buyOrderDetail?.orderState === -2 && <div className="flex justify-center text-xl text-red-500">订单申诉中!</div>}
          {
            buyOrderDetail?.orderState === 1 && <> <div style={{ margin: '16px 16px 0' }}>
              <Button round nativeType='submit' type='primary' block onClick={() => goToAccept()}>
                接单
              </Button>
            </div>
              <div style={{ margin: '16px 16px 0' }}>
                <Button round type="danger" block onClick={() => { setCancelBuyer() }}>
                  取消订单
                </Button>
              </div></>
          }
          {
            buyOrderDetail?.orderState === 2 && <> <div style={{ margin: '16px 16px' }}>
              <Button round nativeType='submit' className="bg-slate-600 border-0" block >
                请耐心等待买家付款
              </Button>
            </div>
            </>
          }
          {
            buyOrderDetail?.orderState === 3 && <> <div style={{ margin: '16px 16px 0' }}>
              <Button round nativeType='submit' type='primary' block onClick={() => goToComplete()}>
                已收到钱，要发货
              </Button>
            </div>
              <div style={{ margin: '16px 16px 0' }}>
                <Button round type="danger" onClick={() => { setApealSeller() }} block>
                  未收到钱，要申诉
                </Button>
              </div></>
          }
          {
            buyOrderDetail?.orderState >= 2 && <> <div className='payment-info'>
              <div className='payment-type'>卖家付款信息：</div>
              <div className='seller-collection-informatio'>
                <div className='payment-screenshot'>
                  <Image src={src} />
                </div>
                <div className='payment-details'>
                  <div className='input-wrapper'>
                    <div className='input-field'>{payMentText?.[buyOrderDetail?.sellerPayment?.paymentType]}</div>
                  </div>
                  <div className='input-wrapper'>
                    <div className='input-field'>姓名：{buyOrderDetail?.sellerPayment?.realName}</div>
                    <span className='copy-button' onClick={() => onCopy(buyOrderDetail?.sellerPayment?.realName)}>复制</span>
                  </div>
                  <div className='input-wrapper'>
                    <div className='input-field'>账号：{buyOrderDetail?.sellerPayment?.accountNo}</div>
                    <span className='copy-button' onClick={() => onCopy(buyOrderDetail?.sellerPayment?.accountNo)}>复制</span>
                  </div>
                </div>
              </div>
            </div>
              <div className='payment-info'>
                <div className='payment-type'>买家付款信息：</div>
                <div className='seller-collection-informatio'>
                  <div className='payment-screenshot'>
                    <Image src={src} />
                  </div>
                  <div className='payment-details'>
                    <div className='input-wrapper'>
                      <div className='input-field'>{payMentText?.[buyOrderDetail?.buyerPayment?.paymentType]}</div>
                    </div>
                    <div className='input-wrapper'>
                      <div className='input-field'>姓名：{buyOrderDetail?.buyerPayment?.realName}</div>
                      <span className='copy-button' onClick={() => onCopy(buyOrderDetail?.buyerPayment?.realName)}>复制</span>
                    </div>
                    <div className='input-wrapper'>
                      <div className='input-field'>账号：{buyOrderDetail?.buyerPayment?.accountNo}</div>
                      <span className='copy-button' onClick={() => onCopy(buyOrderDetail?.buyerPayment?.accountNo)}>复制</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          }


        </>
      }
    </div>
  );
};

export default OrderPage;
