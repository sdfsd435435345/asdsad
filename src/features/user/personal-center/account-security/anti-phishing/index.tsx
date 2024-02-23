import { useState } from 'react'
import { useMount } from 'react-use'
import { Field, Button, Toast } from 'react-vant'
import UserTipsInfo from '@/features/user/common/tips-info'
import { t } from '@lingui/macro'
import { getMemberBaseGetPhishingCode, getMemberBaseVerifyPhishingCode } from '@/apis/user'
import NavBar from '@/components/navbar'
import Icon from '@/components/icon'
import { useLayoutStore } from '@/store/layout'
import styles from './index.module.css'

export default function UserPersonalCenterAntiPhishing() {
  const { headerData } = useLayoutStore()
  const [code, setCode] = useState<string>('')

  const getPhishingCode = async () => {
    const res = await getMemberBaseGetPhishingCode({})
    if (res.isOk) {
      setCode(res.data!.phishingCode)
    }
  }

  useMount(() => {
    getPhishingCode()
  })

  const handleSubmit = async () => {
    const res = await getMemberBaseVerifyPhishingCode({ phishingCode: code })
    if (res.isOk) {
      res.data?.isSuccess && Toast.info(t`user.field.reuse_34`)
      window.history.back()
    }
  }

  return (
    <div className={`anti-phishing ${styles.scoped}`}>
      <NavBar title={t`user.pageContent.title_13`} />
      <UserTipsInfo slotContent={<p>{t`user.account_security.anti_phishing_01`}</p>} />

      <div className="anti-phishing-wrap">
        <div className="anti-phishing-form">
          <div className="verification">
            <div className="item">
              <label>{t`user.field.reuse_16`}</label>
              <Field
                value={code}
                onChange={setCode}
                maxLength={10}
                placeholder={t`user.account_security.anti_phishing_02`}
              />
              <p>{t`user.account_security.anti_phishing_03`}</p>
            </div>

            <div className="item">
              <div className="card">
                <div className="card-wrap">
                  <div className="header">
                    <div className="icon">
                      <Icon name="user_head_hover" />
                    </div>
                    <div className="name">
                      <label>{headerData?.businessName}</label>
                    </div>
                    <div className="code">
                      <label>
                        {t`user.field.reuse_16`}：
                        {code ? <span>{code}</span> : t`user.account_security.anti_phishing_04`}
                      </label>
                    </div>
                  </div>
                  <div className="main">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="footer">
                    <p>
                      {t`user.account_security.anti_phishing_05`} <label>{headerData?.businessName}</label>{' '}
                      {t`user.account_security.anti_phishing_06`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button type="primary" onClick={handleSubmit} disabled={!code}>{t`user.field.reuse_02`}</Button>
        </div>
      </div>
    </div>
  )
}
