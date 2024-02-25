// BuyCoinPage.jsx

import React, { useState } from 'react';
import { Button, Checkbox, Input } from 'react-vant';
import styles from './index.module.css'
import { log } from 'console';

enum IsSeparable {
  NotSeparable = 0,
  Separable = 1,
}
enum PaymentDeadline {
  TenMinutes = '10分钟',
  FifteenMinutes = '15分钟',
}
const BuyCoinPage = () => {
  const [isSeparable, setIsSeparable] = useState<number>(IsSeparable.Separable);
  const [sellAmount, setSellAmount] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const [minAmount, setMinAmount] = useState('');
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [showLeaveMessage, setShowLeaveMessage] = useState(false);
  const [paymentDeadline, setPaymentDeadline] = useState(PaymentDeadline.TenMinutes);

  const handlePublishAd = () => {
    // 处理发布广告逻辑
  };

  const handleIsSeparable = (value: number | string[]) => {
    // 处理发布广告逻辑
    const lastElement = value[value.length - 1];
    setIsSeparable(lastElement)
  };

  const handlePaymentDeadline = (value: number | string[]) => {
    // 处理发布广告逻辑
    const lastElement = value[value.length - 1];
    setPaymentDeadline(lastElement)
  };
  
  return (
    <div className={styles.scoped}>
      <div className="buy-coin-page-container">
        <div className="buy-coin-page">
          {/* 第一部分 - 返回按钮和标题 */}
          <div className="header">
            <span className="return-button">返回</span>
            <span className="title">{!!isSeparable ?  '创建买币广告' : '编辑买币广告'}</span>
          </div>

          {/* 第二部分 - 两个复选框 */}
          <div className="checkbox-section">
            <Checkbox.Group value={[isSeparable]} onChange={handleIsSeparable} direction='horizontal' >
              <Checkbox name={IsSeparable.Separable} shape='square'>可拆售</Checkbox>
              <Checkbox name={IsSeparable.NotSeparable} shape='square'>不拆售</Checkbox>
            </Checkbox.Group>
          </div>

          {/* 第三部分 - 根据复选框勾选处理显隐 */}
          <div className='available-sales'> 可销售额：8888</div>
          <>
            <div className="sell-amount-section">
              {/* 可销售额 */}
              <Input
                placeholder="请输入出售数量"
                value={sellAmount}
                className="sell-amount-section-input"
                suffix="cbr"
                onChange={(value) => setSellAmount(value)}
              />
            </div>
            {!!isSeparable && <div className="min-amount-section">
              {/* 最低起售 */}
              <Input
                placeholder="最低多少起售"
                value={minAmount}
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
            <span>-----------------------收款账号-------------------------</span>
            {showPaymentDetails && (
              <div>
                {/* 显示支付宝图标和账号等详细信息 */}
                {/* 例如：<img src="alipay-icon.png" alt="支付宝" /> */}
              </div>
            )}
          </div>
          <div className='leave-message' onClick={() => setShowLeaveMessage(!showLeaveMessage)}>
            <span>----------------------向买家留言------------------------</span>
            <div className='leave-message-container'>
              {/* 显示留言图标和输入框等详细信息 */}
              <div className='zhifubao-icon'>图标</div>
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
              <Button type="info">上架</Button>
            </div>
            {/* 删除按钮 */}
            {!!isSeparable && (
              <div className="delete-button">
                <Button type="danger">删除</Button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default BuyCoinPage;

