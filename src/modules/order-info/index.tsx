import React from 'react';
import { Button, Input, Steps } from 'react-vant';
import styles from './index.module.css';  // 根据你的实际情况导入样式文件

const OrderPage = () => {

  const handleBackClick = () => {
    // 处理返回按钮点击事件
  };

  const handleContactServiceClick = () => {
    // 处理联系客服按钮点击事件
    // 可以实现弹窗或其他交互方式
    console.log('联系客服按钮点击');
  };

  const renderStatus = () => {
    // 模拟接口返回的订单状态，根据实际接口返回数据进行替换
    const orderStatus = '待接单';

    return <span className={styles.status}>{orderStatus}</span>;
  };

  const renderOrderInfo = () => {
    // 模拟接口返回的订单信息，根据实际接口返回数据进行替换
    const orderAmount = 1005;
    const orderNumber = 20303980;
    const sellerName = '卖家张三';

    return (
      <div className='orderInfo'>
        <p>购买金额：{orderAmount} {renderStatus()}</p>
        <p>订单号：{orderNumber}</p>
        <p>卖家：{sellerName}</p>
        <p className='message'>
          您必须使用以下【陈康】的支付宝账号进行转账付款！如果使用其他账户进行转账付款，卖家将不会发货！
        </p>
      </div>
    );
  };

  return (
    <div className={styles.scoped}>
      {/* 标题 */}
      <div className='header'>
        <span className='backButton' onClick={handleBackClick}>返回</span>
        <span className='title'>订单信息</span>
        <Button type="primary" onClick={handleContactServiceClick}>联系客服</Button>
      </div>
      {/* 订单信息 */}
      {renderOrderInfo()}

      {/* 步骤进度条 */}
      <div className='progress'>
        {/* 根据订单状态渲染不同的步骤 */}
        {/* 这里可以根据实际情况，结合接口返回的订单状态，渲染对应的步骤 */}
        <Steps active={0}>
          <Steps.Item>买家下单</Steps.Item>
          <Steps.Item>商家接单</Steps.Item>
          <Steps.Item>买家提货</Steps.Item>
          <Steps.Item>交易完成</Steps.Item>
        </Steps>
      </div>
      <div style={{ margin: '16px 16px 0' }}>
        <Button round nativeType='submit' type='primary' block>
          上传凭证并确认付款
        </Button>
      </div>
      <div style={{ margin: '16px 16px 0' }}>
        <Button round nativeType='submit' type='primary' block>
          取消
        </Button>
      </div>
      {/* 买家付款信息 */}
      <div className='payment-info'>
        <div className='payment-type'>买家付款信息：支付宝</div>
        <div className='seller-collection-informatio'>
          <div className='payment-screenshot'>
            {/* 这里可以根据实际情况，展示支付截图 */}
            {/* 你可以使用图片组件或其他方式展示支付截图 */}
          </div>
          <div className='payment-details'>
            <div className='input-wrapper'>
              <div className='input-field' contentEditable='true'>支付宝类型</div>
            </div>
            <div className='input-wrapper'>
              <div className='input-field' contentEditable='true'>姓名：老王</div>
              <a href='#' className='copy-button'>复制</a>
            </div>
            <div className='input-wrapper'>
              <div className='input-field' contentEditable='true'>账号：989888</div>
              <a href='#' className='copy-button'>复制</a>
            </div>
          </div>
        </div>
      </div>
      <div className='payment-info'>
        <div className='payment-type'>卖家付款信息：支付宝</div>
        <div className='seller-collection-informatio'>
          <div className='payment-screenshot'>
            {/* 这里可以根据实际情况，展示支付截图 */}
            {/* 你可以使用图片组件或其他方式展示支付截图 */}
          </div>
          <div className='payment-details'>
            <div className='input-wrapper'>
              <div className='input-field' contentEditable='true'>支付宝类型</div>
            </div>
            <div className='input-wrapper'>
              <div className='input-field' contentEditable='true'>姓名：老6</div>
              <a href='#' className='copy-button'>复制</a>
            </div>
            <div className='input-wrapper'>
              <div className='input-field' contentEditable='true'>账号：232323</div>
              <a href='#' className='copy-button'>复制</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
