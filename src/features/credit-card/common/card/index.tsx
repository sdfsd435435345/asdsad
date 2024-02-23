import Icon from '@/components/icon'
import { link } from '@/helper/link'
import { getCreditCardOpenCrad, getCreditCardZfPasswod } from '@/helper/route'
import { t } from '@lingui/macro'
import React, { useEffect, useState } from 'react'
import { Dialog, Input, NumberKeyboard, PasswordInput, Toast } from 'react-vant'
import cn from 'classnames'
import { useCopyToClipboard } from 'react-use'
import { getCardDesc, getCardInfo, setcardClose, setupdateAlias } from '@/apis/credit-card/my-card'
import dayjs from 'dayjs'
import LazyImage from '@/components/lazy-image'
import { encryptAES } from '@/helper/ASE_RSA'
import styles from './index.module.css'

interface ICreditCrad {
  isApply?: boolean // 给模版卡加按钮
  isPassword?: boolean
  isFake?: boolean // 模版卡
  classNames?: string
  onDestorySuccess?: () => void
  onShowCardNoSuccess?: (info: any) => void
  onAliasUpdateSuccess?: () => void
  cardInfo?: any
  isReal?: boolean
  onDetailShow?: (show: boolean) => void
  detailOpen?: boolean
  detailInfo?: any
  // balance?: any
  // cardList?:
  cardAlias?: string // 卡别名
  meltCard?: boolean
  cardNo?: string // 卡号
  // balance?: string // 卡余额
}
function Card(props: ICreditCrad) {
  const {
    cardInfo,
    onDestorySuccess,
    onShowCardNoSuccess,
    onAliasUpdateSuccess,
    isApply,
    isPassword,
    isFake,
    classNames,
    cardAlias,
    cardNo,
  } = props

  const [currentClickDestroy, setCurrentClickDestroy] = useState<boolean>(false)
  const [currentClickShowCardNo, setCurrentClickShowCardNo] = useState<boolean>(false)

  const [aliasValue, setAliasValue] = useState<string>(cardInfo?.alias || '')

  // const [isBalanceShow, setIsBalanceShow] = useState<boolean>(true) // 余额控制
  const [isNumberKeyboard, setIsNumberKeyboard] = useState<boolean>(false)

  const [isShowCradNum, setIsShowCradNum] = useState<boolean>(false) // 卡号显示控制
  const [isDetail, setIsDetail] = useState<boolean>(false) // 详情控制
  const [password, setPassword] = useState<string>('')
  const [pwdDialogVisible, setPwdDialogVisible] = useState<boolean>(false)
  const [aliasDialogVisible, setAliasDialogVisible] = useState<boolean>(false)
  // const [isAutoFocus, setIsAutoFocus] = useState<boolean>(false)
  const [state, copyToClipboard] = useCopyToClipboard()

  useEffect(() => {
    setAliasValue(cardInfo?.cardAlias)
  }, [cardInfo?.cardAlias])
  const dateString = cardInfo?.expiryDate
  const formattedDate = dayjs(dateString).format('MM/YYYY')

  const common = (
    <>
      <div className="my-png">
        <img
          src="https://markcoin.oss-ap-southeast-1.aliyuncs.com/fastpay-h5/image/fastPay-logo.png"
          alt=""
          width="75.97px"
        />
      </div>
      <div className={cn(isFake ? 'bgimgFalse' : 'bgimgTrue')}></div>
      <div className="xp">
        <img src="https://markcoin.oss-ap-southeast-1.aliyuncs.com/fastpay-h5/image/credit-card-xp.svg" alt="" />
      </div>
    </>
  )

  if (isFake) {
    return (
      <div className={cn(styles.scoped, classNames)}>
        <div className={'card'}>
          {common}
          <div className="card-number">
            <div className=".text">522* **** **** ****</div>
          </div>
          <div className="foot-text">
            <div className="text1">
              VALID THRU
              <br />
              {'**/****'}
            </div>
            <div>
              CVC
              <br />
              {'***'}
            </div>
          </div>

          <div className={cn(isApply ? 'mast-crad1' : 'mast-crad2')}>
            <LazyImage src="https://markcoin.oss-ap-southeast-1.aliyuncs.com/fastpay-h5/image/mast.svg" alt="" />
          </div>

          {/* 没有卡，申请卡 */}
          {isApply && (
            <div
              className={'card-bottom-btn'}
              onClick={() => {
                isPassword
                  ? link(getCreditCardOpenCrad())
                  : Dialog.confirm({
                      title: <Icon name="tis" className="look-out" />,
                      message: t`features_credit_card_my_card_index_vp8dygg3ei`,
                      className: 'dialog-confirm-wrapper cancel-gray confirm-black',
                      cancelButtonText: t`assets.financial-record.cancel`,
                      confirmButtonText: t`common.confirm`,
                      onConfirm() {
                        link(getCreditCardZfPasswod())
                      },
                    })
              }}
            >
              {t`features_credit_card_my_card_index_b1l3ntl_fi`}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={cn(styles.scoped, classNames, 'card-detail-wrapper')}>
      <div
        className={'card '}
        onClick={() => {
          setIsDetail(!isDetail)
        }}
      >
        {common}
        <div className="card-number">
          <div className="cardno-text">{cardNo}</div>

          {!isShowCradNum ? (
            <Icon
              className="eyes-show"
              name="eyes_close_black"
              onClick={e => {
                // setIsAutoFocus(true)
                e.stopPropagation()
                setIsNumberKeyboard(true)
                setCurrentClickShowCardNo(true)
                setPwdDialogVisible(true)
              }}
            />
          ) : (
            <Icon
              className="eyes-show"
              name="eyes_open_black"
              onClick={e => {
                e.stopPropagation()
                // setPwdDialogVisible(true)
                getCardDesc({ cardId: cardInfo?.cardId }).then(res => {
                  onShowCardNoSuccess?.(res.data)
                  setIsShowCradNum(false)
                })
              }}
            />
          )}
        </div>
        {isShowCradNum && (
          <Icon
            name="copy_black"
            className="copy-cardNO"
            onClick={e => {
              e.stopPropagation()
              copyToClipboard(cardNo as string)
              state.error
                ? Toast({ message: t`user.secret_key_02`, position: 'top' })
                : Toast({ message: t`user.secret_key_01`, position: 'top' })
            }}
          />
        )}

        <div className="foot-text">
          <div className="text1">
            VALID THRU
            <br />
            {isShowCradNum ? formattedDate : '**/****'}
          </div>
          <div>
            CVC
            <br />
            {isShowCradNum ? cardInfo?.cardCvv.replace('********', '***') : '***'}
          </div>
        </div>
        {/* 真 亚马逊专区 */}
        <div className="prefecture">{cardAlias}</div>
        <div className="mast-crad2">
          <LazyImage src="https://markcoin.oss-ap-southeast-1.aliyuncs.com/fastpay-h5/image/mast.svg" alt="" />
        </div>
        {isDetail ? (
          <Icon
            name="arrow_down"
            className="arrow_expand-down"
            onClick={() => {
              setIsDetail(!isDetail)
            }}
          />
        ) : (
          <Icon
            name="arrow_expand"
            className="arrow_expand-down"
            onClick={() => {
              setIsDetail(!isDetail)
            }}
          />
        )}
        {/* 详情 */}
        {isDetail && (
          <div className={'card-detail'}>
            <div className="detail-content">
              <div className="content-text">
                <div className="topUp-cancel">
                  <div
                    className="topUp"
                    onClick={e => {
                      e.stopPropagation()
                      link(`/credit-card/recharges?id=${cardInfo?.cardId}`)
                    }}
                  >
                    <Icon name="credit_card_recharge_black" className="topUp-ico" />{' '}
                    {t`assets.financial-record.tabs.Deposit`}
                  </div>
                  <div
                    className="cancel"
                    onClick={e => {
                      e.stopPropagation()
                      Dialog.confirm({
                        title: <Icon name="tis" className="look-out" />,
                        message: t`features_credit_card_common_card_index_08qrsg7lyv`,
                        className: cn(
                          'dialog-confirm-wrapper',
                          'cancel-gray',
                          'confirm-black',
                          styles['pin-card-verify']
                        ),
                        cancelButtonText: t`assets.financial-record.cancel`,
                        confirmButtonText: t`common.confirm`,
                        // 确认后掉接口
                        onConfirm() {
                          setCurrentClickDestroy(true)
                          setPwdDialogVisible(true)
                          // setIsAutoFocus(true)
                          setIsNumberKeyboard(true)
                        },
                      })
                    }}
                  >
                    <Icon name="credit_card_pin_card_black" className="topUp-ico" />{' '}
                    {t`features_credit_card_common_card_index_dfrmzrpdnm`}
                  </div>
                </div>
                <div className="details-text">
                  <div className="text">
                    <div className="text-left">{t`features_credit_card_common_card_index_p0r94foir2`}</div>
                    <div className="text-right">{`$${Number(cardInfo.balance).toFixed(2)}`}</div>
                  </div>
                  <div
                    className="text"
                    onClick={e => {
                      e.stopPropagation()
                      setAliasDialogVisible(!aliasDialogVisible)
                    }}
                  >
                    <div className="text-left">{t`features_credit_card_open_card_index_cvger3d09q`}</div>
                    <div className="text-right">
                      {cardInfo.cardAlias || ''}
                      <Icon name="next_arrow_black" />
                    </div>
                  </div>
                  <div className="text">
                    <div className="text-left">{t`features_credit_card_common_card_index_biskyaidal`}</div>
                    <div className="text-right">{t`features_credit_card_open_card_index_1kuz0ro3di`}</div>
                  </div>
                  <div
                    className="text"
                    onClick={e => {
                      e.stopPropagation()
                      link(`/credit-card/trade-detail?id=${cardInfo?.cardId}`)
                    }}
                  >
                    <div className="text-left">{t`features_assets_trade_detail_index_lkvgw3iagt`}</div>
                    <div className="text-right">
                      <Icon name="next_arrow_black" />
                    </div>
                  </div>
                  <div
                    className="text"
                    onClick={e => {
                      e.stopPropagation()
                      link(`/credit-card/recharge-detail?id=${cardInfo?.cardId}`)
                    }}
                  >
                    <div className="text-left">{t`features_assets_recharge_detail_index_csqodcqxdq`}</div>
                    <div className="text-right">
                      <Icon name="next_arrow_black" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Dialog
        // confirmButtonColor={'#3E4650'}
        visible={pwdDialogVisible}
        showCancelButton
        title={t`features_credit_card_open_card_index_k8h7nxzdpc`}
        className={cn(
          'dialog-confirm-wrapper',
          'cancel-gray',
          'confirm-black',
          password && password.length === 6 ? styles['dialog-pwd'] : styles['dialog-pwd-disabled']
        )}
        cancelButtonText={t`assets.financial-record.cancel`}
        confirmButtonText={t`common.confirm`}
        onCancel={() => {
          setIsNumberKeyboard(false)
          setPwdDialogVisible(false)
          password && setPassword('')
          currentClickDestroy && setCurrentClickDestroy(false)
        }}
        onConfirm={
          password && password.length === 6
            ? () => {
                if (!password || password.length !== 6) {
                  setIsNumberKeyboard(false)
                  setPwdDialogVisible(false)
                  setPassword('')
                  return
                }

                if (currentClickDestroy) {
                  const encipherPassword = encryptAES(password as string, true)
                  setcardClose({ cardId: cardInfo?.cardId, password: encipherPassword }).then(res => {
                    onDestorySuccess?.()
                  })
                }

                if (currentClickShowCardNo) {
                  setIsNumberKeyboard(false)
                  const encipherPassword = encryptAES(password as string, true)
                  getCardInfo({ cardId: cardInfo?.cardId, password: encipherPassword }).then(res => {
                    if (res?.data === null) {
                      setCurrentClickShowCardNo(true)
                      setIsShowCradNum(false)
                    } else {
                      onShowCardNoSuccess?.(res?.data)
                      setCurrentClickShowCardNo(false)
                      setIsShowCradNum(true)
                    }
                  })
                }

                currentClickDestroy && setCurrentClickDestroy(false)
                currentClickShowCardNo && setCurrentClickShowCardNo(false)
                setPwdDialogVisible(false)
                setPassword('')
                setIsNumberKeyboard(false)
              }
            : () => {
                return null
              }
        }
      >
        <PasswordInput
          value={password}
          // autoFocus={isAutoFocus}
          className="pwd-Input"
          type="number"
          gutter={6}
          onChange={value => {
            setPassword(value)
          }}
        />
      </Dialog>
      {/* 别名弹框 */}
      <Dialog
        visible={aliasDialogVisible}
        showCancelButton
        title={t`features_credit_card_common_card_index_t0ycddlbff`}
        className={cn('dialog-confirm-wrapper', 'cancel-gray', 'confirm-black', styles['dialog-pwd'])}
        cancelButtonText={t`assets.financial-record.cancel`}
        confirmButtonText={t`common.confirm`}
        onCancel={() => {
          setAliasDialogVisible(false)
          setAliasValue(cardInfo.cardAlias)
          // setPassword('')
        }}
        onConfirm={() => {
          if (aliasValue && aliasValue !== cardInfo.cardAlias) {
            setupdateAlias({ cardId: cardInfo.cardId, cardAlias: aliasValue }).then(res => {
              const { isOk } = res || {}
              if (!isOk) return
              onAliasUpdateSuccess?.()
              setAliasDialogVisible(false)
            })
          } else {
            setAliasDialogVisible(false)
          }
        }}
      >
        <Input
          value={aliasValue}
          maxLength={10}
          placeholder={t`features_credit_card_common_card_index_bpmd8lc0rx`}
          className="alias-Input"
          onChange={value => {
            setAliasValue(value)
          }}
        />
      </Dialog>
      {/* 数字键盘弹窗 */}
      <NumberKeyboard
        zIndex={9999999}
        visible={isNumberKeyboard}
        value={password}
        className={styles.customNumberKeyboard}
        onInput={key => {
          if (password.length !== 6) {
            setPassword(prevPassword => {
              return prevPassword + key
            })
          }
        }}
        onDelete={() => setPassword(prevPassword => prevPassword?.slice(0, -1))}
        // extraKeyRender={() => {
        //   return <></>
        // }}
      />
    </div>
  )
}

export default React.memo(Card)
