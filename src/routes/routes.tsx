// 引入依赖项
import { Navigate, useRoutes } from 'react-router-dom'
import React, { lazy } from 'react'
// import Login from '@/features/users/login'
import C2cTrade from '@/modules/c2c/trade'
import Wallet from '@/modules/wallet'
import CoinShop from '@/modules/coin-shop'
import OrderInfo from '@/modules/order-info'
import Purchase from '@/modules/purchase'
import UploadVoucher from '@/modules/upload-voucher'
import BuyCoinPage from '@/modules/sell-coin';  // 新添加的卖币模块
import EditBuyCoinPage from '@/modules/edit-buy-coin';  // 假设你有一个编辑买币广告的组件
import KycIndexs from '@/modules/kyc'
import C2CPayments from '@/modules/payment'
import FundList from '@/modules/fund-list'
import InstationMail from '@/modules/instation-mail'
import OrderList from '@/modules/order-list'





const GetRouters = () => {
    const routes = useRoutes([
        // 默认路由
        {
            path: '/',
            element: <Wallet />
        },
        {
            path: '/c2c-trade',
            element: <C2cTrade />
        },
        {
            path: '/coin-shop',
            element: <CoinShop />
        },
        {
            path: '/order-info',
            element: <OrderInfo />
        },
        {
            path: '/purchase',
            element: <Purchase />
        },
        {
            path: '/upload-voucher',
            element: <UploadVoucher />
        },
        {
            path: '/sell-coin',  // 卖币的路由
            element: <BuyCoinPage />
        },
        {
            path: '/edit-buy-coin',
            element: <EditBuyCoinPage />
        },
        {
            path: '/kyc',
            element: <KycIndexs />
        },
        {
            path: '/c2cpayments',
            element: <C2CPayments />
        },
        {
            path: '/fundlist',
            element: <FundList />
        },
        {
            path: '/instationmail',
            element: <InstationMail />
        },
        {
            path: '/order-list',
            element: <OrderList />
        },
    ])
    return routes
}

export default GetRouters