import React, { useEffect } from 'react';
import { Button } from 'react-vant';
import NavBar from '@/components/navbar';
import Icon from '@/components/icon';
// import { postMemberTransSoldOrderPage } from '@/apis/server'
import { useNavigate } from 'react-router-dom'

import styles from './index.module.css';  // 根据你的实际情况导入样式文件


const SellCoins = () => {

  const navigate = useNavigate()

  useEffect(()=>{
    // initQueryDada();
  },[])

  // const initQueryDada = async () =>{
  //   try {
  //     const res = await postMemberTransSoldOrderPage({
       
  //     });
  //     const { isOk, data } = res || {};

  //     // if (!isOk || !data) {
  //     //   setFinished(true);
  //     //   return;
  //     // }

  //   } catch (error) {
  //     console.error("Error while loading list:", error);
  //     // 处理错误，比如显示错误提示
  //   }
  // }

  const handleReturnClick = () => {
    // 处理返回按钮点击事件
    // 可以使用 react-router-dom 进行页面跳转
  };

  const handleSellCoinClick = () => {
    // 处理“我要卖币”按钮点击事件
    navigate('/edit-buy-coin');
  };

  // 模拟接口返回的数据
  const buyCoinStats = {
    onlineTime: 0,
    noOrderCount: 0,
    reward: 20,
    todayBoughtCoins: 888,
    todaySoldCoins: 0,
  };

  return (
    <div className={styles.scoped}>
      <div className='buy-coin-container-page'>
        <NavBar
          title='卖币'
          left={<Icon name="back" hasTheme className="header-back" />}
        />
        {/* “我要卖币”按钮 */}
        <div className='sell-coin-button'>
          <Button type='primary' onClick={handleSellCoinClick}>我要卖币</Button>
        </div>

        {/* 买币统计信息 */}
        <div className='buy-coin-stats'>
          <p>此轮累计在线时长满1小时，不接单次数小于2次</p>
          <p>最低额小于100，最高额大于1000，例如：100-1000</p>
          <p>满足以上条件，奖励{buyCoinStats.reward}元，即时到账！</p>
          <p>此轮累计在线时长：{buyCoinStats.onlineTime}分钟，不接单：{buyCoinStats.noOrderCount}次</p>
        </div>

        {/* 今日已买币与今日已卖币统计 */}
        <div className='coin-stats'>
          <div className='left-stats'>今日已买币：{buyCoinStats.todayBoughtCoins}</div>
          <div className='right-stats'>今日已卖币：{buyCoinStats.todaySoldCoins}</div>
        </div>
      </div>
    </div>
  );
};

export default SellCoins;
