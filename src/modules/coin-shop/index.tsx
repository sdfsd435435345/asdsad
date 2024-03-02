
import React, { useCallback, useEffect, useState, useRef } from 'react';
import { Popup, Button, Input, Image, Toast, Picker } from 'react-vant'
import CommonList from '@/components/common-list/list'
import { requestWithLoading } from '@/helper/order'
import { useLocation } from 'react-router-dom';
import NavBar from '@/components/navbar'
import { useUpdateEffect } from 'ahooks'
import { useUserStore } from '@/store/user'
import Icon from '@/components/icon'
import { t } from '@lingui/macro';
import { postMemberTransSoldOrderPage } from '@/apis/server'
import { debounce } from 'lodash'
import styles from './index.module.css'
import { FireO } from '@react-vant/icons';
import { useNavigate } from 'react-router-dom'
import wx from '../../images/wx.png'
import zfb from '../../images/zfb.png'
import bank from '../../images/bank.png'


export const columns = [
  { text: '支付宝', value: 0 },
  { text: '微信', value: 1 },
  { text: '银行', value: 2 },
]



function CoinShop() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [bigAmount, setBigAmount] = useState(''); //大额
  const [smallAmount, setSmallAmount] = useState(''); //小额
  const [nickname, setNicknamet] = useState(''); //昵称
  const [isPickerOpen, setPickerOpen] = useState<boolean>(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(); //收款方式
  const [finished, setFinished] = useState(false)
  const [recordList, setRecordList] = useState<any>([])


  const requestParams = useRef({
    current: 1,
    size: 10,
    paymentType: null,
  })

  const navigate = useNavigate()
  const token = params.get('token')

  useEffect(() => {
    onLoadMore(true);
  }, []); // 初始化时加载第一页数据

  useUpdateEffect(() => {
    requestParams.current = {
      ...requestParams.current,
      current: 1,
      size: 10,
    }
    setRecordList([])
    onLoadMore(true);
  }, [bigAmount, smallAmount, nickname, selectedPaymentMethod])

  const handlePickerToggle = () => {
    setPickerOpen(!isPickerOpen);
  };
  const handlePickerChange = (paymentType) => {
    requestParams.current = {
      ...requestParams.current,
      paymentType
    }
  };

  const handlePickerCancel = () => {
    setPickerOpen(false);
  };

  const handlePickerConfirm = () => {
    setPickerOpen(false);
    setSelectedPaymentMethod(requestParams?.current?.paymentType);
  };


  const handlePurchaseClick = (rowData: any) => {
    //跳转逻辑
    navigate('/purchase', { target: true, state: rowData });
  };

  const handleBigAmountClick = debounce((value: any) => {
    console.log('大额 button clicked');
    setBigAmount(value);
  }, 500);

  const handleSmallAmountClick = debounce((value: any) => {
    console.log('小额 button clicked');
    setSmallAmount(value);
  }, 500);

  const handlePaymentMethodClick = () => {
    handlePickerToggle();
  };

  const handleNicknameClick = debounce((value: any) => {
    console.log('昵称... button clicked');
    setNicknamet(value);
  }, 500);


  const onLoadMore = async (isRefresh = false) => {
    try {
      const res = await postMemberTransSoldOrderPage({
        current: requestParams.current.current,
        size: requestParams.current.size,
        min: bigAmount,
        max: smallAmount,
        nickname: nickname,
        paymentType: selectedPaymentMethod,
      });
      const { isOk, data } = res || {};

      if (!isOk || !data) {
        setFinished(true);
        return;
      }

      requestParams.current = {
        ...requestParams.current,
        current: requestParams.current.current + 1
      }

      const newList = isRefresh ? data.records : [...recordList, ...data?.records];
      setRecordList(newList);
      if (newList.length >= +data?.total) {
        setFinished(true);
      }

    } catch (error) {
      console.error("Error while loading list:", error);
      // 处理错误，比如显示错误提示
    }
  }

  return (
    <div className={styles.scoped}>
      <NavBar
        title='买币大厅'
        left={<Icon name="back" hasTheme className="header-back" />}
      />
      <div className='coin-shop-tab'>
        <div className='coin-shop-tab-wholesale'>
          <Input placeholder='大额' className='coin-shop-tab-input' onChange={handleBigAmountClick} />
        </div>
        <div className='coin-shop-tab-petty'>
          <Input placeholder='小额' className='coin-shop-tab-input' onChange={handleSmallAmountClick} />
        </div>
        <div className='payment-method-button' onClick={handlePaymentMethodClick}>
          <span>收款方式</span>
          <div className='triangle-icon'></div>
        </div>
        <div className='coin-shop-tab-name'>
          <Input placeholder='昵称' className='coin-shop-tab-input' onChange={handleNicknameClick} />
        </div>
      </div>
      <CommonList
        finished={finished}
        onRefreshing={() => requestWithLoading(onLoadMore(true), 0)}
        onLoadMore={onLoadMore}
        finishedText={!!recordList.length ? '暂无数据' : ''}
        listChildren={<><div className='coin-shop-list overflow-hidden'>
          {recordList.map((rowData, index) => {
            return (
              <div key={index} className='recharge-personal-information'>
                <div className='user-picture'><Image src={rowData.logo} /></div>
                <div className='recharge-information'>
                  <div>
                    <span><Icon name="default_avatar" /></span>
                    <span>{rowData.transAmount}</span>
                  </div>
                  <div className='amount-rule'>
                    {`${rowData.splitMin}以上可拆售`}
                  </div>
                </div>
                <div className='payment-method'>
                  {rowData?.isWechat && <span><Image src={wx} /></span>}
                  {rowData?.isAlipay && <span><Image src={zfb} /></span>}
                  {rowData?.isBank && <span><Image src={bank} /></span>}
                </div>
                <Button type='primary' onClick={() => handlePurchaseClick(rowData)}>购买</Button>
              </div>
            );
          })}
        </div></>}
        showEmpty={recordList.length === 0}
      />
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