import React, { useState } from 'react';
import { Button, Dialog } from 'react-vant';
import styles from './index.module.css'

const PurchasePage = () => {
  const handleBackClick = () => {
    // 处理返回按钮点击事件
    // 可以使用 react-router-dom 进行页面跳转
  };

  const handlePurchaseClick = () => {
    // 处理购买按钮点击事件
    Dialog.confirm({
      title: '',
      message: '确定下单吗?',
      onCancel: handleCancelOrder,
      onConfirm: handleConfirmOrder,
      className: 'dialog-confirm'
    })
  };

  const handleCancelOrder = () => {
    // 处理取消订单按钮点击事件
    // 其他逻辑...
  };

  const handleConfirmOrder = () => {
    // 处理确认订单按钮点击事件
    // 其他逻辑...
  };

  // 模拟接口返回的数据
  const sellingInfo = {
    singleSale: 1005,
    iconPath: 'path-to-icon',
    // 以下金额为接口返回
    paymentAmount: 2000,
    remainingAmount: 9112,
  };

  // 模拟接口返回的数据
  const paymentInfo = {
    iconPath: 'path-to-alipay-icon',
    account: 'alipay-account',
  };

  return (
    <div className={styles.scoped}>
      <div className="purchase-page">
        {/* 标题 + 返回按钮 */}
        <div className="header">
          <span className="back-button" onClick={handleBackClick}>返回</span>
          <span className="title">购买页面</span>
        </div>

        {/* 购买内容 */}
        <div className="content">
          <div className="selling-info">
            <p>单笔出售：{sellingInfo.singleSale} <img src={sellingInfo.iconPath} alt="图标" /></p>
            <p>卖家接单后，买家15分钟内完成付款</p>
            <p>请选择付款账号：</p>
            <p>
              此支付宝付款额度，单笔{sellingInfo.paymentAmount}元，
              今日剩余{sellingInfo.remainingAmount}元
            </p>
          </div>
          <div className="payment-info">
            <img src={paymentInfo.iconPath} alt="支付宝图标" />
            <span>{paymentInfo.account}</span>
          </div>
          <div className="reminder">
            <p>温馨提示：</p>
            <p className="red-text">付款额度是风控系统自动评估设定的，请你保持良好的交易习惯，额度将会自动提升</p>
          </div>
        </div>

        {/* 底部按钮 */}
        <div className="footer">
          <Button type="primary" onClick={handlePurchaseClick}>购买</Button>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
