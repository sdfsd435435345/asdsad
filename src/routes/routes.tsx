// 引入依赖项
import { Navigate,useRoutes } from 'react-router-dom'
import React,{ lazy } from 'react'
// import Login from '@/features/users/login'
import C2cTrade from '@/modules/c2c/trade'
import Wallet from '@/modules/wallet'
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