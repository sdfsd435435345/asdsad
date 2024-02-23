import NavBar from '@/components/navbar'
import classNames from 'classnames'
import { useViewportHeight } from '@/hooks/use-viewport-height'
import { oss_svg_image_domain_address } from '@/constants/oss'
import { Button, Image } from 'react-vant'
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { useEffect, useState } from 'react'
import { useCountDown, useRequest } from 'ahooks'
import { usePageContext } from '@/hooks/use-page-context'
import { postV1OtcGetChannelsApiRequest } from '@/apis/c2c/trade'
import styles from './index.module.css'
import { DIRECTION_MAP, LOOP_DURATION, addRedirectUrl } from '../common'
import { ThirdOtcHint, ThirdOtcTerms } from '../third-otc-comp'

function ThirdTradeConfirm() {
  const windowHeight = useViewportHeight()
  const pageContext = usePageContext()
  const { cryptoAmount, cryptoCurrency, direction, fiatAmount, fiatCurrency } = pageContext?.urlParsed?.search
  const isBuy = direction === DIRECTION_MAP.buy

  const [index, setIndex] = useState<number>(0)
  const [targetDate, setTargetDate] = useState(Date.now() + LOOP_DURATION)
  const [isFirstEntry, setIsFirstEntry] = useState<boolean>(true)
  const [list, setList] = useState<any>([])
  const [checked, setChecked] = useState(false)

  const { run, loading } = useRequest(
    async () => {
      const res = await postV1OtcGetChannelsApiRequest({
        direction,
        fiatCurrency,
        cryptoCurrency,
        ...(fiatAmount ? { fiatAmount } : { cryptoAmount }),
      })
      setIsFirstEntry(false)
      setTargetDate(Date.now() + LOOP_DURATION)
      if (res.data && res?.data?.length > 0) {
        const arr = res.data.map(i => {
          const target = i?.payments?.find(item => item.isExcellent) || i?.payments[0]
          return {
            ...i,
            ...{
              fiatAmount: target?.fiatAmount,
              cryptoAmount: target?.cryptoAmount,
            },
          }
        })
        arr.sort((a, b) => +b.isExcellent - +a.isExcellent)

        setList(arr)
      } else {
        setIsFirstEntry(true)
        setTargetDate(Date.now() + 1000 * 10)
      }
    },
    {
      manual: true,
    }
  )

  const [, { seconds }] = useCountDown({
    targetDate,
    onEnd: run,
  })

  useEffect(() => {
    run()
  }, [])

  const onSelect = idx => {
    setIndex(idx)
  }

  const onSubmit = () => {
    window.location.href = addRedirectUrl(list[index].name, list[index].payUrl)
  }

  return (
    <div
      className={classNames(styles['third-trade-confirm-wrapper'], 'text-sm')}
      style={{
        height: `${windowHeight}px`,
      }}
    >
      <div>
        <NavBar hasBottomBorder={false} title={t`features_c2c_trade_fast_trade_confirm_modal_222222225101675`} />
        <div className="wrap">
          {isFirstEntry ? (
            <div className="loading-wrap">
              <Image
                lazyload
                src={`${oss_svg_image_domain_address}property_carry_icon_suspend-white.png`}
                className="image"
              />
              <div className="desc">{t`features_c2c_trade_third_trade_confirm_index_wyaqwzhiqj`}</div>
            </div>
          ) : (
            <>
              <div className="content-wrap">
                <ThirdOtcHint />
                <div className="timer-wrap">
                  {loading ? (
                    <>{t`features_c2c_trade_third_trade_confirm_index_9oszubaai6`}</>
                  ) : (
                    <>
                      {t`features_c2c_trade_third_trade_confirm_index_px1d1n3qi0`}
                      <span>{seconds}s</span>
                    </>
                  )}
                </div>

                <div className="list-wrap">
                  {list.map((i, idx) => (
                    <div key={i.name}>
                      {idx === 0 ? (
                        <div className="title">{t`features_c2c_trade_third_trade_confirm_index_xefc5k3806`}</div>
                      ) : idx === 1 ? (
                        <div className="title">{t`features_c2c_trade_third_trade_confirm_index_zajcatnnql`}</div>
                      ) : null}

                      <div
                        className={classNames('item', {
                          selected: index === idx,
                        })}
                        onClick={() => onSelect(idx)}
                      >
                        <div className="selected-icon">
                          <Icon isRemoteUrl name="c2c/contract_select" />
                        </div>
                        <div className="row1">
                          <Image lazyload src={i.logo} className="icon" />
                          <span className="name">{i.name}</span>
                          {/* <Icon name="global_hint" hasTheme className="msg-icon" /> */}
                        </div>
                        <div className="row2">
                          <div>
                            {i.cryptoAmount} {cryptoCurrency}
                          </div>
                          <div>
                            ≈ {i.fiatAmount} {fiatCurrency}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={classNames(styles['action-btn-wrapper'], {
                  'is-buy': isBuy,
                })}
              >
                <div className="terms">
                  <ThirdOtcTerms checked={checked} setChecked={setChecked} otc={list[index]} />
                </div>

                <Button
                  disabled={loading || !checked}
                  onClick={onSubmit}
                  loading={loading}
                  block
                  className={classNames('sell-or-buy-button', isBuy ? 'is-buy' : 'is-sell')}
                >
                  {isBuy ? t`features_kyc_index_standards_5101189` : t`features_kyc_index_standards_5101190`}{' '}
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ThirdTradeConfirm
