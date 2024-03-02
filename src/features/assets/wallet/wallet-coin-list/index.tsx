/**
 * 资产总览 - 币种列表
 */
import { t } from '@lingui/macro'
import { useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import { useDebounce, useUnmount } from 'ahooks'
import CommonListEmpty from '@/components/common-list/list-empty'
import { useAssetsStore } from '@/store/assets/spot'
import { link } from '@/helper/link'
import { memberMoneyLastMoneyLog } from '@/apis/kyc'
import styles from './index.module.css'
import { useNavigate } from 'react-router-dom'

const MERCHANTTYPE = {
  1: '商户人工加款',
  2: '商户人工减款',
  11: '完成申诉单加款',
  21: '卖家撤单加款',
  13: '交易完成加款',
  22: '创建卖单减款',
  3: '商户额度增加',
  4: '商户客户减少',
  31: '额度转换充币',
  32: '额度转换提币'
}

function WalletCoinList({ token }: any, ref) {
  const [fundList, setFundList] = useState<any[]>([])

  const navigate = useNavigate()

  const getMmberMoneyLastMoneyLog = async () => {
    const { isOk, data } = await memberMoneyLastMoneyLog({})
    if (isOk) {
      setFundList(data)
    }
  }

  useImperativeHandle(ref, () => ({
    getMmberMoneyLastMoneyLogs() {
      getMmberMoneyLastMoneyLog()
    },
  }))

  return (
    <div className={styles['coin-list-root']}>
      <div className="flex justify-between">
        <span className="text-lg">资金变动</span>
        <span className="text-sm" onClick={() => navigate('/fundlist')}>更多{`>>`}</span>
      </div>
      {
        fundList?.length > 0 ? <>
          <div className='flex justify-between mt-3'>
            <span className="text-sm w-[100px]">交易类型</span>
            <span className="text-sm">交易数量</span>
            <span className="text-sm">余额</span>
          </div>
          {
            fundList.map(item => {
              return <div className='flex justify-between mt-2 items-center' key={Math.random()}>
                <span className="text-sm">
                  <div>{MERCHANTTYPE[item?.moneyType]}</div>
                  <span className="text-sm text-gray-500">{item?.createTime}</span>
                </span>
                <span className="text-sm">{item?.moneySide === 0 ? '-' : '+'}{item?.transAmount}</span>
                <span className="text-sm">{item?.afterAmt}</span>
              </div>
            })
          }
        </> : <CommonListEmpty />
      }
    </div>
  )
}

export default forwardRef(WalletCoinList)
