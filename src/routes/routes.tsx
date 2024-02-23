// 引入依赖项
import { Navigate,useRoutes } from 'react-router-dom'
import React,{ lazy } from 'react'
// import Login from '@/features/users/login'
import C2cTrade from '@/modules/c2c/trade'
import Wallet from '@/modules/wallet'


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
        }
    ])
    return routes
}
 
export default GetRouters