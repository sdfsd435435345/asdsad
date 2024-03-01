
import React, { useEffect, useState } from 'react';
import { Popup, Button, Input, Form, Toast, Picker } from 'react-vant'
import CommonList from '@/components/common-list/list'
import { requestWithLoading } from '@/helper/order'
import { useLocation } from 'react-router-dom';
import NavBar from '@/components/navbar'
import { useUserStore } from '@/store/user'
import Icon from '@/components/icon'
import styles from './index.module.css'
import { t } from '@lingui/macro';

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
  const [finished, setFinished] = useState(false)
  const [recordList, setRecordList] = useState<any>([])
  const [pageNum, setPageNum] = useState(1)
  const [pageSize, setPageSize] = useState(10); // 每页显示数量



  const token = params.get('token')

  useEffect(() => {
    onLoadMore(true);
  }, []); // 初始化时加载第一页数据

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

  const mockApiCall = (isRefresh) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // 模拟数据
        const start = (pageNum - 1) * pageSize;
        const end = start + pageSize;
        const newData = Array.from({ length: 30 }, (_, index) => ({
          quantity: index + 1,
          amount: 100 + index * 10,
          imageUrl: `path-to-image-${index + 1}.jpg`,
          name: `用户${index + 1}`,
        })).slice(start, end);

        const mockData = {
          isOk: true,
          data: {
            total: 30,
            list: newData,
          },
        };

        resolve(mockData);
      }, 1000); // 模拟延迟1秒
    });
  };


  const onLoadMore = async (isRefresh = false) => {
    console.log(isRefresh, 'isRefresh');
    try {
      const res = await mockApiCall(isRefresh);
      const { isOk, data } = res || {};

      if (!isOk || !data) {
        setFinished(true);
        return;
      }

      const newList = isRefresh ? data.list : [...recordList, ...data?.list];
      setRecordList(newList);
      setFinished(newList.length >= +data?.total);
      setPageNum(pageNum + 1);
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
      <CommonList
        finished={finished}
        onRefreshing={() => requestWithLoading(onLoadMore(true), 0)}
        onLoadMore={onLoadMore}
        finishedText={!!recordList.length ? '暂无数据' : ''}
        listChildren={<><div className='coin-shop-tab'>
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
            <Input placeholder='昵称' className='coin-shop-tab-input' />
          </div>
        </div><div className='coin-shop-list overflow-hidden'>
            {recordList.map((rowData, index) => {
              return (
                <div key={index} className='recharge-personal-information'>
                  <div className='user-picture'><img src={rowData.imageUrl} /></div>
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