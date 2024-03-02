import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Button, Dialog, Picker, Image, Input, Toast } from 'react-vant';
import _ from 'lodash'
import NavBar from '@/components/navbar';
import styles from './index.module.css'
import Icon from '@/components/icon';
import { postMemberAdvMyPayments, postMemberBuyOrderCreate } from '@/apis/server'
import { useNavigate } from 'react-router-dom'
import { log } from 'console';
import { useLocation } from 'react-use';
import { columns } from '../coin-shop';
import wx from '../../images/wx.png'
import zfb from '../../images/zfb.png'
import bank from '../../images/bank.png'
import { ArrowDown } from '@react-vant/icons';
import { current } from 'immer';
import { number } from '@lingui/core/cjs/formats';

interface PurchasePageProps {
  // 定义组件的属性类型
}

interface SellingInfo {
  transAmount: string;
  logo: string;
}

interface PaymentInfo {
  iconPath: string;
  account: string;
}

const PurchasePage: React.FC<PurchasePageProps> = () => {
  const location = useLocation();
  const { state, search } = location || {};
  const params = new URLSearchParams(search);
  const paymentMethodUrl = params.get('paymentMethod');
  const { seqNo, transAmount, splitMin, logo, leftAmount, isWechat, isAlipay, isBank, isSplit, payLimitTime } = (state as any).usr || {};
  // const [minutes, setMinutes] = useState<number>(15);
  // const [seconds, setSeconds] = useState<number>(0);
  const [isPickerOpen, setPickerOpen] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<number>(Number(paymentMethodUrl));
  const [memberAdvMyPayments, setMemberAdvMyPayments] = useState<any[]>([]);
  const [minAmount,setiMinValue] = useState();

  const alipay = isAlipay ? 0 : ''; //支付宝
  const wechat = isWechat ? 1 : ''; //微信
  const bank = isBank ? 2 : ''; //银行

  const currentPayment = useRef({
    paymentType: null,
  })



  const navigate = useNavigate()

  useEffect(() => {
    getMemberAdvMyPayments();
  }, [])

  const getMemberAdvMyPayments = async () => {
    try {
      const res = await postMemberAdvMyPayments({});
      const { isOk, data } = res || {};
      if (isOk || data) {
        setMemberAdvMyPayments(data);
        return;
      }
    } catch (error) {
      console.error("Error while loading list:", error);
      // 处理错误，比如显示错误提示
    }
  }

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (minutes === 0 && seconds === 0) {
  //       clearInterval(intervalId);
  //     } else {
  //       if (seconds === 0) {
  //         setMinutes((prevMinutes) => prevMinutes - 1);
  //         setSeconds(59);
  //       } else {
  //         setSeconds((prevSeconds) => prevSeconds - 1);
  //       }
  //     }
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, [minutes, seconds]);

  // const handleBackClick = () => {
  //   // 处理返回按钮点击事件
  //   // 可以使用 react-router-dom 进行页面跳转
  // };

  const handlePurchaseClick = () => {
    if (Number(minAmount) < Number(splitMin)) {
      Toast('请输入最低起售的金额');
      return;
    }
    // 处理购买按钮点击事件
    Dialog.confirm({
      title: '',
      message: <div style={{ textAlign: 'center' }}>确定下单吗</div>,
      onCancel: handleCancelOrder,
      onConfirm: handleConfirmOrder,
      className: 'dialog-confirm-wrapper cancel-gray confirm-black',
    })
  };

  const handleCancelOrder = () => {
    // 处理取消订单按钮点击事件
    // 其他逻辑...
  };

  const handleConfirmOrder = async () => {
    // 处理确认订单按钮点击事件
    try {
      const { isOk, data } = await postMemberBuyOrderCreate({
        seqNo,
        paymentId: paymentMethod,
        transAmount: isSplit ? minAmount : null,
      });
      if (isOk) {
        navigate(`/order-info?seqNo=${data?.seqNo}`);
      }
    } catch (error) {
      console.error("Error while loading list:", error);
      // 处理错误，比如显示错误提示
    }
  };



  const handlePickerCancel = () => {
    setPickerOpen(false);
  };

  const handlePickerConfirm = () => {
    setPickerOpen(false);
    setPaymentMethod(currentPayment.current.paymentType);
  };

  const handlePickerChange = (value) => {
    currentPayment.current.paymentType = value;
  };

  const handlePickerToggle = () => {
    setPickerOpen(!isPickerOpen);
  };

  const handlePaymentMethodClick = () => {
    handlePickerToggle();
  };
  const allPaymentMethods = useMemo(() => {
    const communicationPaymentMethods = _.compact(memberAdvMyPayments.map(item => {
      if ([alipay, wechat, bank].includes(item.paymentType)) {
        return columns.find(ele => ele.value === item.paymentType);
      }
    }));
    return communicationPaymentMethods;
  }, [alipay, wechat, bank, memberAdvMyPayments]);

  const currentPaymentName = columns.find(ele => String(paymentMethod) === String(ele?.value))?.text || '' //当前支付方式名称

  return (
    <div className={styles.scoped}>
      <div className="purchase-page">
        <NavBar
          title='购买页面'
          left={<Icon name="back" hasTheme className="header-back" />}
        />

        {/* 购买内容 */}
        <div className="content">
          <div className="selling-info">
            <p>单笔出售：{transAmount} <img src={logo} alt="图标" /></p>
            <p>
              卖家接单后，买家
              <span style={{ color: 'red' }}>
                {payLimitTime || '15分钟'}
              </span>
              内完成付款
            </p>
            <p>请选择付款账号：</p>
            <p>
              此支付宝付款额度，{!isSplit ? <span>单笔${transAmount}元</span> : <span>今日剩余${leftAmount}元</span>
              }
            </p>
          </div>
          <div className="payment-info" onClick={handlePaymentMethodClick} >
            <div className='payment-method'>
              当前支付方式为：<span className="text-blue-400" style={{ width: '100px' }}>{currentPaymentName}</span> <ArrowDown />；
            </div>
          </div>
          {!!isSplit && <div className="min-amount-section">
            {/* 最低起售 */}
            <Input
              placeholder="最低多少起售"
              className='min-amount-section-input'
              type="number"
              value={minAmount}
              onChange={(value) => {
                if (Number(leftAmount) >= Number(value) ) {
                  setiMinValue(value);
                }
              }}
            />
          </div>}
          <div className="reminder">
            <p>温馨提示：</p>
            <p className="red-text">付款额度是风控系统自动评估设定的，请你保持良好的交易习惯，额度将会自动提升</p>
          </div>
        </div>

        {/* 底部按钮 */}
        <div className="footer">
          <Button type="primary" onClick={handlePurchaseClick}>购买</Button>
        </div>
        {isPickerOpen && <div className='pickerContainer'>
          <Picker
            title='选择收款方式'
            columns={allPaymentMethods}
            onConfirm={handlePickerConfirm}
            onCancel={handlePickerCancel}
            onChange={handlePickerChange}
          />
        </div>}
      </div>
    </div>
  );
};

export default PurchasePage;
