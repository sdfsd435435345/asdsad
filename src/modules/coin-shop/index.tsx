
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
import { postMemberTransSoldOrderPage, postMemberAdvMyPayments } from '@/apis/server'
import { debounce } from 'lodash'
import styles from './index.module.css'
import { FireO } from '@react-vant/icons';
import { useNavigate } from 'react-router-dom'
import wx from '../../images/wx.png'
import zfb from '../../images/zfb.png'
import bank from '../../images/bank.png'
import _ from 'lodash';


export const columns = [
  { text: '全部', value: '' },
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
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(''); //收款方式
  const [finished, setFinished] = useState(false)
  const [recordList, setRecordList] = useState<any>([])
  const [memberAdvMyPayments, setMemberAdvMyPayments] = useState<any>([])


  const requestParams = useRef({
    current: 1,
    size: 10,
    paymentType: null,
  })

  const navigate = useNavigate()
  const token = params.get('token')

  useEffect(() => {
    getMemberAdvMyPayments();
  }, []); // 初始化时加载第一页数据

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

  useUpdateEffect(() => {
    requestParams.current = {
      ...requestParams.current,
      current: 1,
      size: 10,
    }
    setRecordList([])
    onLoadMore(3);
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
    requestParams.current.paymentType = ''
  };

  const handlePickerConfirm = () => {
    setPickerOpen(false);
    setSelectedPaymentMethod(requestParams?.current?.paymentType);
  };


  const handlePurchaseClick = (rowData: any) => {
    const { isWechat, isAlipay, isBank } = rowData || {};

    const alipay = isAlipay ? 0 : ''; //支付宝
    const wechat = isWechat ? 1 : ''; //微信
    const bank = isBank ? 2 : ''; //银行

    const allPaymentMethods = () => {
      const communicationPaymentMethods = _.compact(memberAdvMyPayments.map(item => {
        if ([alipay, wechat, bank].includes(item.paymentType)) {
          return columns.find(ele => ele.value === item.paymentType);
        }
      }));
      return communicationPaymentMethods;
    }
    if (!allPaymentMethods()?.length) {
      Toast('您暂无卖家的支付方式,请绑定后再尝试');
      return;
    }
    //跳转逻辑
    navigate(`/purchase?paymentMethod=${allPaymentMethods()?.[0]?.value}`, { target: true, state: rowData });
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
    console.log(isRefresh, 'isRefresh', requestParams.current, 'requestParams.current');
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

  const currentPaymentName = columns.find(ele => String(selectedPaymentMethod) === String(ele?.value))?.text || '全部';


  return (
    <div className={styles.scoped}>
      <NavBar
        title='买币大厅'
        left={<Icon name="back" hasTheme className="header-back" />}
      />
      <div className='coin-shop-tab'>
        <div className='coin-shop-tab-wholesale'>
          <Input placeholder='大额' type='number' className='coin-shop-tab-input' onChange={handleBigAmountClick} />
        </div>
        <div className='coin-shop-tab-petty'>
          <Input placeholder='小额' type='number'  className='coin-shop-tab-input' onChange={handleSmallAmountClick} />
        </div>
        <div className='payment-method-button' onClick={handlePaymentMethodClick}>
          <span>{currentPaymentName}</span>
          <div className='triangle-icon'></div>
        </div>
        <div className='coin-shop-tab-name'>
          <Input placeholder='昵称' className='coin-shop-tab-input' onChange={handleNicknameClick} />
        </div>
      </div>
      <CommonList
        finished={finished}
        onRefreshing={() => requestWithLoading(onLoadMore(1), 0)}
        onLoadMore={onLoadMore}
        finishedText={!!recordList.length ? '暂无数据' : ''}
        listChildren={<><div className='coin-shop-list overflow-hidden'>
          {recordList.map((rowData, index) => {
            return (
              <div key={index} className='recharge-personal-information px-2'>
                <div className="w-2/5 flex items-center">
                  <div className='user-picture'><Image src={rowData.logo} /></div>
                  <div className='recharge-information w-3/5 ml-[10px]'>
                    <div>
                      <span><Icon name="default_avatar" /></span>
                      <span>{rowData.transAmount}</span>
                    </div>
                    <div className='amount-rule'>
                      {rowData.splitMin ? `${rowData.splitMin}以上可拆售` : '不可拆售'}
                    </div>
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
          defaultValue={''}
          placeholder=''
        />
      </div>}
    </div>
  )
}

export default CoinShop