import React, { useState, useRef } from 'react';
import { Button, Checkbox, Input, Toast, Divider } from 'react-vant';
import { postMemberTransSoldOrderCreate } from '@/apis/server'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '@/store/user'



import NavBar from '@/components/navbar';
import styles from './index.module.css';
import { log } from 'console';
import Icon from '@/components/icon';

enum IsSeparable {
  NotSeparable = 0,
  Separable = 1,
}
enum PaymentDeadline {
  TenMinutes = '10分钟',
  FifteenMinutes = '15分钟',
}

enum PaymentMethods {
  Alipay = 'alipay',
  Wechat = 'wechat',
  Bank = 'bank',
}

const SellCoinsPage = () => {
  const [isSeparable, setIsSeparable] = useState<number>(IsSeparable.Separable);
  const [sellAmount, setSellAmount] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const [minAmount, setMinAmount] = useState('');
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [showLeaveMessage, setShowLeaveMessage] = useState(false);
  const [paymentDeadline, setPaymentDeadline] = useState(PaymentDeadline.TenMinutes);
  const [cellCheck, setCellCheck] = useState<PaymentMethods[]>([PaymentMethods.Alipay])//收款账号方式


  const navigate = useNavigate();


  const { userInfo } = useUserStore()
  const { balance } = userInfo || {}

  const handleIsSeparable = (value: number | string[]) => {
    const lastElement = value[value.length - 1];
    setIsSeparable(lastElement)
  };

  const handlePaymentDeadline = (value: number | string[]) => {
    const lastElement = value[value.length - 1];
    setPaymentDeadline(lastElement)
  };


  const onSubmit = async () => {
    try {
      const { isOk } = await postMemberTransSoldOrderCreate({
        isSplit: !!isSeparable,
        transAmount: sellAmount,
        splitMin: !!isSeparable ? minAmount : null,
        paymentLimitTime: 5,
        isAlipay: cellCheck.includes(PaymentMethods.Alipay),
        isWechat: cellCheck.includes(PaymentMethods.Wechat),
        isBank: cellCheck.includes(PaymentMethods.Bank),
      });
      if (isOk) {
        Toast.success('创建成功')
        navigate('/order-info?', { target: true, state: rowData });
      }

    } catch (error) {
      console.error("Error while loading list:", error);
      // 处理错误，比如显示错误提示
    }
  }

  // const handleDeleteItem = () => {
  //   // 实现删除逻辑
  // };

  return (
    <div className={styles.scoped}>
      <div className="buy-coin-page-container">
        <div className="buy-coin-page">
          <NavBar
            // title={!!isSeparable ? '创建卖币广告' : '编辑卖币广告'}
            title='创建卖币广告'
            left={<Icon name="back" hasTheme className="header-back" />}
          />
          <div className='buy-coin-page-content'>

            {/* 第二部分 - 两个复选框 */}
            <div className="checkbox-section">
              <Checkbox.Group value={[isSeparable]} onChange={handleIsSeparable} direction='horizontal' >
                <Checkbox name={IsSeparable.Separable} shape='square'>可拆售</Checkbox>
                <Checkbox name={IsSeparable.NotSeparable} shape='square'>不拆售</Checkbox>
              </Checkbox.Group>
            </div>

            {/* 第三部分 - 根据复选框勾选处理显隐 */}
            <div className='available-sales'> 可销售额：{balance}</div>
            <>
              <div className="sell-amount-section">
                {/* 可销售额 */}
                <Input
                  placeholder="请输入出售数量"
                  value={sellAmount}
                  className="sell-amount-section-input"
                  suffix="cbr"
                  type='number'
                  onChange={(value) => setSellAmount(value)}
                />
              </div>
              {!!isSeparable && <div className="min-amount-section">
                {/* 最低起售 */}
                <Input
                  placeholder="最低多少起售"
                  value={minAmount}
                  type='number'
                  className='min-amount-section-input'
                  onChange={(value) => setMinAmount(value)}
                />
              </div>}
            </>
            {/* 第四部分 - 限期内付款复选框 */}
            <div className="payment-deadline-container" >
              <div className="payment-deadline-label">限制买家期限内付款：</div>
              <div className="payment-deadline-options">
                <Checkbox.Group value={[paymentDeadline]} onChange={handlePaymentDeadline} direction='horizontal'>
                  <Checkbox name={PaymentDeadline.TenMinutes} shape='square'>10分钟</Checkbox>
                  <Checkbox name={PaymentDeadline.FifteenMinutes} shape='square'>15分钟</Checkbox>
                </Checkbox.Group>
              </div>

            </div>

            {/* 第四部分 - 收款账号和向买家留言 */}
            <div className='payment-details' onClick={() => setShowPaymentDetails(!showPaymentDetails)}>
              <Divider dashed >收款账号</Divider>
              {/* 第四部分 - 收款账号复选框 */}
              <div className="payment-account-container">
                <div className="payment-account-label">选择收款账号：</div>
                <div className="payment-account-label-checkbox">
                  <Checkbox.Group
                    value={cellCheck}
                    onChange={setCellCheck}
                    direction='horizontal'
                  >
                    <Checkbox name={PaymentMethods.Alipay} shape='square'>
                      支付宝
                    </Checkbox>
                    <Checkbox name={PaymentMethods.Wechat} shape='square'>
                      微信
                    </Checkbox>
                    <Checkbox name={PaymentMethods.Bank} shape='square'>
                      银行卡
                    </Checkbox>
                  </Checkbox.Group>
                </div>
              </div>
            </div>
            <div className='leave-message' onClick={() => setShowLeaveMessage(!showLeaveMessage)}>
              <Divider dashed >向买家留言</Divider>
              <div className='leave-message-container'>
                {/* 显示留言图标和输入框等详细信息 */}
                <div className='zhifubao-icon'>留言</div>
                <div className='suffix-input'>
                  <Input
                    placeholder="需要向买家留言 ，如无可不填"
                    value={sellPrice}
                    className="leave-message-suffix-input"
                    onChange={(value) => setSellPrice(value)}
                  />
                </div>
              </div>
            </div>
            <div className="button-container" >
              <div className="listing-button">
                <Button type="info" onClick={onSubmit}>上架</Button>
              </div>
              {/* 删除按钮 */}
              {/* {!isSeparable && (
                <div className="delete-button">
                  <Button type="danger" onClick={handleDeleteItem}>删除</Button>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellCoinsPage;

