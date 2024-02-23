import { postV1C2cMerchantTerminateApiRequest } from '@/apis/c2c/merchant'
import Link from '@/components/link'
import { ApplicationStatusEnum } from '@/constants/c2c/merchant'
import { link } from '@/helper/link'
import { getC2cMerchantApplicationPageRoutePath, getC2cMerchantPageRoutePath } from '@/helper/route'
import { useLayoutStore } from '@/store/layout'
import { t } from '@lingui/macro'
import { Button, Card, Input, Popup, TextAreaInstance, Toast } from 'react-vant'
import { useRef, useState } from 'react'
import { validateTradeAreaKyc } from '@/helper/c2c/trade'
import { useMount } from 'ahooks'
import styles from './index.module.css'

function MerchantButtonSwitcher({ status, onclick }) {
  const [isKycValidated, setisKycValidated] = useState(false)

  useMount(async () =>
    setisKycValidated(
      await validateTradeAreaKyc(
        undefined,
        t`features_c2c_c2c_merchant_c2c_merchant_button_index_dbfxvy0b8dheo2a7-ky8x`
      )
    )
  )
  if (!status) return <div className="h-11"></div>

  if (!isKycValidated)
    return (
      <div
        onClick={() =>
          validateTradeAreaKyc(undefined, t`features_c2c_c2c_merchant_c2c_merchant_button_index_dbfxvy0b8dheo2a7-ky8x`)
        }
      >
        <Button disabled className="rounded" block type="primary">
          {t`features_c2c_c2c_merchant_c2c_merchant_button_index_mjs6_mnl7vkijgnlb2knm`}
        </Button>
      </div>
    )

  switch (status) {
    case ApplicationStatusEnum.pendingApply:
      return (
        <Button className="rounded" type="primary" block onClick={onclick}>
          {t`features_kyc_index_standards_5101191`}
        </Button>
      )
    case ApplicationStatusEnum.success:
    case ApplicationStatusEnum.disable:
      return (
        <Button className="rounded" block onClick={onclick}>
          <span className="text-text_color_01">{t`features_c2c_c2c_merchant_c2c_merchant_button_index_jkg9se6sbklfvaod4foce`}</span>
        </Button>
      )
    case ApplicationStatusEnum.pendingDelete:
      return (
        <Button className="rounded bg-sell_down_color_special_02" block type="default" onClick={onclick}>
          <span className="text-sell_down_color">{t`features_c2c_c2c_merchant_c2c_merchant_button_index_n2aac9x5tuzyoo7anvke2`}</span>
        </Button>
      )
    case ApplicationStatusEnum.blacklisted:
      return (
        <Button
          className="rounded"
          block
          type="primary"
          onClick={() =>
            Toast.info({ message: t`features_c2c_c2c_merchant_c2c_merchant_button_index_8m0of9kvjistivmka-lre` })
          }
        >
          {t`features_c2c_c2c_merchant_c2c_merchant_button_index_mjs6_mnl7vkijgnlb2knm`}
        </Button>
      )

    default:
      return (
        <Link href={getC2cMerchantApplicationPageRoutePath()}>
          <Button className="rounded" block type="primary">
            {t`features_c2c_c2c_merchant_c2c_merchant_button_index_mjs6_mnl7vkijgnlb2knm`}
          </Button>
        </Link>
      )
  }
}

function C2cMerchantButton({ status, data }) {
  const { customerJumpUrl, businessName } = useLayoutStore().layoutProps || {}
  const [visible, setvisible] = useState(false)
  const [reasonPopup, setreasonPopup] = useState(false)
  const textAreaRef = useRef<TextAreaInstance>(null)

  const hasActiveAdvert = data?.onlineAdvertCount && Number(data.onlineAdvertCount) > 0
  const hasActiveOrder = data?.processingOrderCount && Number(data.processingOrderCount) > 0

  const MerchantAlertState = {
    rejected: {
      children: (
        <Card>
          <Card.Body className="my-5">
            {hasActiveAdvert
              ? t`features_c2c_c2c_merchant_c2c_merchant_button_index_ws48f8gy-ykhqvju7wrs8`
              : t`features_c2c_c2c_merchant_c2c_merchant_button_index_xcilgepvxrzwo2fewites`}
          </Card.Body>
          <Card.Footer>
            <Button
              block
              type="primary"
              onClick={() => {
                setvisible(false)
              }}
            >
              {t`features_message_center_index_5101365`}
            </Button>
          </Card.Footer>
        </Card>
      ),
    },
    success: {
      children: (
        <Card>
          <Card.Body>
            {t`features_c2c_c2c_merchant_c2c_merchant_button_index_qyvawt_uhtqwtg-ijil1l`} {businessName}{' '}
            {t`features_c2c_c2c_merchant_c2c_merchant_button_index_0p7fdshsctbfbbpnyu4hf`} {data?.advertCount}{' '}
            {t`features_c2c_c2c_merchant_c2c_merchant_button_index_fkcrplnyzlkkjb9ih9sef`} {data?.orderCount}{' '}
            {t`features_c2c_c2c_merchant_c2c_merchant_button_index_qw4hpvq2spurmihfssze0`}
          </Card.Body>
          <Card.Footer className="flex flex-row justify-between">
            <Link href={customerJumpUrl || ''} target>
              <Button className="customer-service-btn" type="default">{t`user.safety_verification_14`}</Button>
            </Link>
            <Button
              type="primary"
              onClick={() => {
                setreasonPopup(true)
                setvisible(false)
              }}
            >
              {t`features_c2c_c2c_merchant_c2c_merchant_button_index_onwnb3wu5ceah6zdqyhyl`}
            </Button>
          </Card.Footer>
        </Card>
      ),
    },
  }

  const submitTerminateMerchant = () => {
    const reason = textAreaRef?.current?.nativeElement?.value
    if (!reason) {
      Toast.info({ message: t`features_c2c_c2c_merchant_c2c_merchant_button_index_kbqmu11d1etmwcnuwelj5` })
      return
    }
    postV1C2cMerchantTerminateApiRequest({ reason })
      .then(res => {
        if (res.isOk && res.data)
          Toast.info({ message: t`features_c2c_c2c_merchant_c2c_merchant_button_index_7tk_cexwsw24ispndoapq` })
        else Toast.info({ message: t`features_c2c_c2c_merchant_c2c_merchant_button_index_ahjuaweqkmjl2rgl37hfj` })
      })
      .catch(err => {
        Toast.info({ message: t`features_c2c_c2c_merchant_c2c_merchant_button_index_ahjuaweqkmjl2rgl37hfj` })
      })
      .finally(() => {
        setreasonPopup(false)
        link(getC2cMerchantPageRoutePath())
      })
  }

  return (
    <>
      {
        <MerchantButtonSwitcher
          status={status}
          onclick={() =>
            (status === ApplicationStatusEnum.success || status === ApplicationStatusEnum.disable) && setvisible(true)
          }
        />
      }
      <Popup
        title={t`features_c2c_c2c_merchant_c2c_merchant_button_index_jkg9se6sbklfvaod4foce`}
        visible={visible}
        className={styles['merchant-popup']}
        onClose={() => setvisible(false)}
      >
        {hasActiveAdvert || hasActiveOrder ? MerchantAlertState.rejected.children : MerchantAlertState.success.children}
      </Popup>
      <Popup
        visible={reasonPopup}
        onClose={() => setreasonPopup(false)}
        title={t`features_c2c_c2c_merchant_c2c_merchant_button_index_jkg9se6sbklfvaod4foce`}
        className={styles['merchant-popup']}
      >
        <Card>
          <Card.Body>
            <Input.TextArea
              ref={textAreaRef}
              placeholder={t`features_c2c_c2c_merchant_c2c_merchant_button_index_xdtbkawkzy8s266ankuum`}
              maxLength={300}
              showWordLimit
            />
          </Card.Body>
          <Card.Footer className="flex flex-row justify-between">
            <Button onClick={() => setreasonPopup(false)} type="default">
              {t`assets.financial-record.cancel`}
            </Button>
            <Button onClick={submitTerminateMerchant} type="primary">
              {t`common.confirm`}
            </Button>
          </Card.Footer>
        </Card>
      </Popup>
    </>
  )
}

export default C2cMerchantButton
