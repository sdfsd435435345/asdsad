import React, { useEffect, useRef } from 'react'
import { usePageContext } from '@/hooks/use-page-context'
import { getMemberGeeTestInitConfig, postMemberVerifyGeeTest } from '@/apis/user'
import { PlatformTypeEnum } from '@/constants/user'
import styles from './index.module.css'

const GeetestConfig = {
  product: 'bind',
  width: '100%',
}

interface GeetestProps {
  /** 是否展示极验组件 */
  isShow: boolean
  /** 账户 */
  account: string
  /** 操作类型 */
  operateType: number
  /** 验证通过回调函数 */
  onSuccess?(): void
  /** 验证失败回调函数 */
  onError?(): void
}
interface geetestConfigType {
  /** 验证流水号 */
  challenge: string
  /** 验证 id */
  gt: string
  /** 宕机情况下使用 */
  new_captcha: boolean
  /** 配置获取是否成功 1: 成功 2: 失败 */
  success: number
  /** 是否成功 */
  isSuccess: boolean
}

function InitGeeTest(
  account: string,
  geetest: geetestConfigType,
  pageContext: PageContext,
  onSuccess?: () => void,
  onError?: () => void,
  ref?: React.MutableRefObject<null>
) {
  ref ? (GeetestConfig.product = 'popup') : (GeetestConfig.product = 'bind')

  window.initGeetest(
    {
      challenge: geetest.challenge,
      gt: geetest.gt,
      new_captcha: geetest.new_captcha,
      success: geetest.isSuccess || geetest.success,
      offline: !geetest.isSuccess || !geetest.success,
      lang: pageContext.locale,
      ...GeetestConfig,
    },
    captcha => {
      ref
        ? captcha.appendTo(ref.current)
        : captcha.onReady(() => {
            captcha.verify()
          })

      captcha
        .onSuccess(async () => {
          const res = await postMemberVerifyGeeTest({ account, gtChallenge: geetest.challenge })
          res.isOk ? onSuccess && onSuccess() : onError && onError()
          captcha.destroy()
        })
        .onError(() => {
          onError && onError()
          captcha.destroy()
        })
        .onClose(() => {
          onError && onError()
          captcha.destroy()
        })
    }
  )
}

function Geetest({ isShow, account, operateType, onSuccess, onError }: GeetestProps) {
  const ref = useRef(null)
  const pageContext = usePageContext()

  const geeTestInit = async () => {
    const res = await getMemberGeeTestInitConfig({ account, clientType: PlatformTypeEnum.h5, operateType })
    if (res.isOk) {
      const geetest = res.data?.geeTest as geetestConfigType
      InitGeeTest(account, geetest, pageContext, onSuccess, onError)
      return
    }

    onError && onError()
  }

  useEffect(() => {
    if (isShow) {
      geeTestInit()
    }
  }, [isShow])

  return (
    <div className={`geetest ${styles.scoped}`}>
      <div className="geetest-wrap">
        <div id="captcha-box" ref={ref}></div>
      </div>
    </div>
  )
}

function useGeeTestBind() {
  const pageContext = usePageContext()

  const geeTestInit = async (account: string, operateType: number, onSuccess?: () => void, onError?: () => void) => {
    const res = await getMemberGeeTestInitConfig({ account, clientType: PlatformTypeEnum.h5, operateType })
    if (res.isOk) {
      const geetest = res.data?.geeTest as geetestConfigType
      InitGeeTest(account, geetest, pageContext, onSuccess, onError)
      return
    }

    onError && onError()
  }

  return geeTestInit
}

export { Geetest, useGeeTestBind }
