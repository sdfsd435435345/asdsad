import React from 'react';
import { Button } from 'react-vant';
import styles from './index.module.css';  // 根据你的实际情况导入样式文件

const BuyCoinPage = () => {
  const handleReturnClick = () => {
    // 处理返回按钮点击事件
    // 可以使用 react-router-dom 进行页面跳转
  };

  const handleSellCoinClick = () => {
    // 处理“我要卖币”按钮点击事件
    // 具体逻辑...
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
      <div className='buy-coin-page'>
        {/* 标题 + 返回按钮 */}
        <div className='header'>
          <span className='return-button' onClick={handleReturnClick}>返回</span>
          <span className='title'>买币</span>
        </div>

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

export default BuyCoinPage;
