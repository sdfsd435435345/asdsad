
import React, { useState } from 'react';
import { Popup, Button, Input, Form, Toast, Picker } from 'react-vant'
import { useLocation } from 'react-router-dom';
import { useUserStore } from '@/store/user'
import Icon from '@/components/icon'
import styles from './index.module.css'


const columns = [
  { text: '银行', value: 0 },
  { text: '微信', value: 1 },
  { text: '支付宝', value: 2 },
]

const rowDataList = [
  { quantity: 1, amount: 100, imageUrl: 'path-to-image-1.jpg', name: '张三' },
  { quantity: 2, amount: 200, imageUrl: 'path-to-image-2.jpg', name: '利四' },
  { quantity: 3, amount: 300, imageUrl: 'path-to-image-3.jpg', name: '王二娃' },
];

function CoinShop() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [value, setValue] = useState(['银行'])
  const [isPickerOpen, setPickerOpen] = useState<boolean>(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('银行');

  const token = params.get('token')

  const handlePickerToggle = () => {
    setPickerOpen(!isPickerOpen);
  };
  const handlePickerChange = (value) => {
    setSelectedPaymentMethod(value[0]);
  };

  const handlePickerCancel = () => {
    setPickerOpen(false);
  };

  const handlePickerConfirm = () => {
    setPickerOpen(false);
    // Handle any additional logic after confirming the selection
  };

  const handlePurchaseClick = (rowData) => {
    //跳转逻辑
  };

  const handleBigAmountClick = () => {
    console.log('大额 button clicked');
  };

  const handleSmallAmountClick = () => {
    console.log('小额 button clicked');
  };

  const handlePaymentMethodClick = () => {
    handlePickerToggle();
  };

  const handleNicknameClick = () => {
    console.log('昵称... button clicked');
  };

  return (
    <div className={styles.scoped}>
      <div className='coin-shop-header-title'>买币大厅</div>
      <div className='coin-shop-tab'>
        <Button type='primary' onClick={handleBigAmountClick}>
          大额
        </Button>
        <Button type='primary' onClick={handleSmallAmountClick}>
          小额
        </Button>
        <Button type='primary' onClick={handlePaymentMethodClick}>
          <div className='paymentMethodButton' >
            <span>收款方式</span>
            <div className='triangle-icon'></div>
          </div>
        </Button>
        <Button type='primary' onClick={handleNicknameClick}>
          昵称...
        </Button>
      </div>
      <div className='coin-shop-list overflow-hidden'>
        {rowDataList.map((rowData, index) => (
          <div key={index} className='recharge-personal-information'>
            <div className='user-picture'><img src={rowData.imageUrl} alt={`User ${rowData.name}`} /></div>
            <div className='recharge-information'>
              <div>
                <span><Icon name="default_avatar" /></span>
                <span>{rowData.amount}</span>
              </div>
              <div className='amount-rule'>
                {`${rowData.quantity}以上可拆售`}
              </div>
            </div>
            <div className='payment-method'>
              <span><Icon name="default_avatar" />微信</span>
              <span><Icon name="default_avatar" />支付宝</span>
            </div>
            <Button type='primary' onClick={() => handlePurchaseClick(rowData)}>购买</Button>
          </div>
        ))}
      </div>
      {isPickerOpen && <div className='pickerContainer'>
        <Picker
          title='选择收款方式'
          columns={columns}
          onConfirm={handlePickerConfirm}
          onCancel={handlePickerCancel}
          onChange={handlePickerChange}
        />
      </div>}
    </div>
  )
}

export default CoinShop