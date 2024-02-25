import React from 'react';
import { Button } from 'react-vant';
import styles from './index.module.css';  // 根据你的实际情况导入样式文件

const UploadVoucherPage = () => {
  const handleReturnClick = () => {
    // 处理返回按钮点击事件
    // 可以使用 react-router-dom 进行页面跳转
  };

  const handleConfirmClick = () => {
    // 处理确认按钮点击事件
    // 具体逻辑...
  };

  const handleUploadVoucherClick = () => {
    // 处理上传凭证按钮点击事件
    // 具体逻辑...
  };

  return (
    <div className={styles.scoped}>
      <div className="upload-voucher-page">
      {/* 标题 + 返回按钮 */}
      <div className="header">
        <span className="return-button" onClick={handleReturnClick}>返回</span>
        <span className="title">确认付款</span>
      </div>

      {/* 上传凭证内容 */}
      <div className="upload-section">
        {/* 上传支付截图 */}
        <img className="payment-screenshot" src="path-to-your-screenshot" alt="支付截图" />

        {/* 提示信息 */}
        <p className="upload-prompt">如在2：39前未上传，订单将自动取消</p>
      </div>

      {/* 确认按钮 */}
      <div className="confirm-button">
        <Button type="primary" onClick={handleConfirmClick}>上传凭证后，请点击这里确定</Button>
      </div>

      {/* 温馨提示 */}
      <p className="warning">如果恶意使用凭证，您的账户将会被封停！</p>

      {/* 上传按钮 */}
      <div className="upload-button">
        <Button type="primary" onClick={handleUploadVoucherClick}>凭证</Button>
      </div>
    </div>
    </div>
  );
};

export default UploadVoucherPage;
