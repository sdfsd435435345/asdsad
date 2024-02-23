import NavBar from '@/components/navbar'
import { useState, useEffect } from 'react'
import { Button, Dialog, Field, Form, NumberKeyboard, PasswordInput, Toast } from 'react-vant'
import { getBinds, getRechargeDefaultCoin, getUserVccInfo, setCardApply } from '@/apis/credit-card/my-card'
import Icon from '@/components/icon'
import { link } from '@/helper/link'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import { getCreditCardMycard } from '@/helper/route/credit-card'
import classnames from 'classnames'
import { t } from '@lingui/macro'
import { Icurrency } from '@/typings/api/credit-card/my-card'
import { getAssetsRechargePageRoutePath } from '@/helper/route/assets'
import { encryptAES } from '@/helper/ASE_RSA'
import PromptIcon from '@/components/prompt-icon'
import styles from './index.module.css'
import Card from '../common/card'

function OpenCrad() {
  const [password, setPassword] = useState<undefined | string>('')

  const [pwdDialogVisible, setPwdDialogVisible] = useState<boolean>(false)

  const [loading, setLoading] = useState<boolean>(false)

  const [isNumberKeyboard, setIsNumberKeyboard] = useState<boolean>(false)

  const [getAlias, setGetAlias] = useState<any>()

  const [bindsList, setBindsList] = useState([{ cardBin: '' }])

  const [currency, setCurrency] = useState<Icurrency>({
    minRechargeAmount: 0,
    coinId: 0,
    coinSymbol: '',
    balance: 0,
    fee: 0,
    icon: '',
  })
  const [vccInfo, setVccInfo] = useState<{
    openCardFee: number
    isSetPayPassword: number
  }>({
    openCardFee: 0,
    isSetPayPassword: 0,
  })
  const [amount, setAmount] = useState(0)
  const [form] = Form.useForm()
  const FormItem = Form.Item
  const fee = currency.fee * 100
  const openCardFee = vccInfo.openCardFee
  const actualArrival = amount ? amount - openCardFee - amount * currency.fee : 0
  const topupfee = amount * currency.fee
  const binRangeId = bindsList[0].cardBin // 卡 ID
  const rechargeCoinId = currency.coinId // 充值币种 ID
  const balanceAccount = Number(currency.balance).toFixed(2) // 余额
  const rechargeDefaultCoin = async () => {
    setLoading(true)

    const res = await getRechargeDefaultCoin({})
    setLoading(false)

    if (loading === false) {
      setCurrency(res.data!)
    }
  }
  const userVccInfo = async () => {
    const data = await getUserVccInfo({})
    setVccInfo(data.data!)
  }
  const binds = async () => {
    const data = await getBinds({})
    setBindsList(data.data!)
  }
  const toRecharge = () => {
    link(getAssetsRechargePageRoutePath(currency.coinId as any))
  }

  useEffect(() => {
    rechargeDefaultCoin()
    userVccInfo()
    binds()
  }, [])
  return (
    <div className={styles.scoped}>
      <NavBar title={t`features_credit_card_open_card_index_hc06mfzpbi`} left={<Icon name="back_black" />} />

      <div className="content">
        <Card isFake />
      </div>
      <Form layout="vertical" form={form}>
        <FormItem
          name="password"
          label={
            <div className="open-card-text">
              <span style={{ color: '#FF7D7D' }}>*</span>
              {t`features_credit_card_open_card_index_jiceibdr7p`}
              {Number(currency.balance) > 0 ? (
                <span className="balance-account-text">
                  {t`features_credit_card_open_card_index_xdhslxeeop`} ${balanceAccount} USDT
                </span>
              ) : (
                !loading && (
                  <span className="balance-account-text warn-text" onClick={toRecharge}>
                    {t`features_credit_card_open_card_index_sguj5has2l`}${balanceAccount} USDT
                    <Icon name="arrow_jump" />
                  </span>
                )
              )}
            </div>
          }
        >
          <Field
            required
            placeholder={t({
              id: 'features_credit_card_open_card_index_pkshtqebft',
              values: { 0: currency.minRechargeAmount },
            })}
            type="number"
            onChange={value => {
              setAmount(Number(value))
            }}
          />
        </FormItem>
        <div className="usdt-text">{t`features_credit_card_open_card_index_wazuebm838`} USDT</div>
        <FormItem name="repeatPassword" label={t`features_credit_card_open_card_index_cvger3d09q`}>
          <Field
            type={'text'}
            maxLength={10}
            placeholder={t`features_credit_card_open_card_index_t1wsp27xb1`}
            onChange={value => {
              setGetAlias(value)
            }}
          />
        </FormItem>
        <div className="tect-cs">
          <div className="text-left">{t`features_credit_card_open_card_index_4whixtyxu2`}</div>
          <div className="text-right">{t`features_credit_card_open_card_index_1kuz0ro3di`}</div>
        </div>
        <div className="line-text"></div>
        <div className="expense">
          <div className="kk-expense">
            <div className="text-left">{t`features_credit_card_open_card_index_qksqlhjb3a`}</div>
            <div className="text-right">{openCardFee.toFixed(2)} USDT</div>
          </div>
          <div className="jx-expense">
            <div className="text-left">
              {t({
                id: 'features_credit_card_open_card_index_n24ypltw8j',
                values: { 0: fee },
              })}
            </div>
            <div className="text-right">{topupfee.toFixed(2)} USDT</div>
          </div>
          <div className="dz-expense">
            <div className="text-left">{t`features_credit_card_open_card_index_jkwflpsdjc`}</div>
            <div className="text-right">{actualArrival.toFixed(2)} USDT</div>
          </div>
          <div className="mt-2 flex items-start">
            <div className="h-4 flex items-center">
              <PromptIcon className="scale-50" />
            </div>
            <span className="text-xs text-text_color_03">{t`features_credit_card_open_card_index_2qyshflnrb`}</span>
          </div>
        </div>
        {/* Number(currency.balance) > 0 */}
        {Number(currency.balance) > 0 ? (
          <div className="top-up">
            <Button
              disabled={!(amount >= currency.minRechargeAmount && getAlias && Number(balanceAccount) >= amount)}
              nativeType="submit"
              type="primary"
              onClick={() => {
                if (!vccInfo.isSetPayPassword) {
                  Toast({ message: t`features_credit_card_open_card_index_8qvaxrrt1j`, position: 'top' })
                  return
                }
                setIsNumberKeyboard(true)
                setPwdDialogVisible(true)
              }}
            >{t`features_credit_card_open_card_index_orid6uuvpt`}</Button>
          </div>
        ) : (
          <div className="balance-Insufficient">
            <Button
              nativeType="submit"
              type="primary"
              onClick={toRecharge}
            >{t`features_credit_card_open_card_index_wy6eaptcmd`}</Button>
          </div>
        )}
      </Form>

      <Dialog
        visible={!!vccInfo.isSetPayPassword && pwdDialogVisible}
        showCancelButton
        title={t`features_credit_card_open_card_index_k8h7nxzdpc`}
        className={classnames(
          password && password.length === 6 ? styles['dialog-pwd'] : styles['dialog-pwd-disabled'],
          'dialog-confirm-wrapper',
          'cancel-gray',
          'confirm-black'
        )}
        cancelButtonText={t`assets.financial-record.cancel`}
        confirmButtonText={t`common.confirm`}
        onCancel={() => {
          setPwdDialogVisible(false)
          setPassword('')
          setIsNumberKeyboard(false)
        }}
        onConfirm={
          password && password.length === 6
            ? () => {
                if (!password || password.length !== 6) {
                  return
                }
                const encipherPassword = encryptAES(password as string, true)
                setLoading(true)
                setCardApply({
                  binRangeId,
                  rechargeCoinId,
                  limitAmount: amount,
                  cardAlias: getAlias,
                  password: encipherPassword,
                })
                  .then(res => {
                    setLoading(false)
                    const { isOk } = res || {}
                    if (isOk) {
                      link(getCreditCardMycard())
                    }
                  })
                  .finally(() => {
                    setPwdDialogVisible(false)
                    setPassword('')
                    setIsNumberKeyboard(false)
                  })
              }
            : () => {
                return null
              }
        }
      >
        <PasswordInput
          value={password}
          className="pwd-Input"
          type="number"
          gutter={6}
          onChange={value => {
            setPassword(value)
          }}
        />
      </Dialog>
      <NumberKeyboard
        zIndex={9999999}
        visible={isNumberKeyboard}
        value={password}
        className={styles.customNumberKeyboard}
        onInput={key => {
          if (password?.length !== 6) {
            setPassword(prevPassword => {
              return prevPassword + key
            })
          }
        }}
        onDelete={() => setPassword(prevPassword => prevPassword?.slice(0, -1))}
      />

      <FullScreenLoading isShow={loading} mask />
    </div>
  )
}

export default OpenCrad
