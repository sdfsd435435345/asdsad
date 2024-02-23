import Icon from '@/components/icon'
import { useFuturesFavActions, useSpotFavActions } from '@/hooks/features/market/favourite'
import { useFuturesFavStore, useSpotFavStore } from '@/store/market/market-favorite'
import { t } from '@lingui/macro'
import { Cell, Checkbox, CheckboxGroupInstance, Toast } from 'react-vant'
import classNames from 'classnames'
import { useMemo, useRef, useState } from 'react'
import styles from './index.module.css'

function SpotMarketCheckboxForm({ children }) {
  const { favListSnap } = useSpotFavStore()
  const snapIds = useMemo(() => favListSnap.map(snap => snap.id), [favListSnap])
  const ref = useRef<CheckboxGroupInstance>(null)
  const [checkAll, setCheckAll] = useState<any>([])
  const { rmFavFromList } = useSpotFavActions()

  const getChecked = () => {
    if (!favListSnap) return []
    return favListSnap.filter(x => checkAll.includes(Number(x.id)))
  }
  return (
    <div className={styles.scoped}>
      <Checkbox.Group ref={ref} value={checkAll} onChange={setCheckAll}>
        {children}
      </Checkbox.Group>

      <Cell
        className="market-checkbox-footer"
        icon={
          <Checkbox
            shape="square"
            checked={checkAll.length === favListSnap.length && checkAll.length > 0}
            onClick={() =>
              setCheckAll(prev => {
                if (prev.length === snapIds.length) return []
                else return snapIds
              })
            }
          />
        }
        title={t`features/trade/future/settings/margin-coin-1`}
        rightIcon={
          <div
            className={classNames('items-center', { 'cursor-pointer': checkAll.length > 0 })}
            onClick={() => {
              if (checkAll.length === 0) return
              rmFavFromList(getChecked())
              setCheckAll([])
              Toast({
                message: t`features_market_market_quatation_common_market_favorites_editing_market_checkbox_form_index_5101062`,
              })
            }}
          >
            {checkAll.length > 0 ? (
              <>
                <Icon name="quotes_delete" className="mr-1" />
                <span className="text-brand_color">{t`common.delete`}</span>
              </>
            ) : (
              <>
                <Icon name="delete" hasTheme className="mr-1" />
                <span className="text-text_color_04">{t`common.delete`}</span>
              </>
            )}
          </div>
        }
      />
    </div>
  )
}

function FuturesMarketCheckboxForm({ children }) {
  const { favListSnap } = useFuturesFavStore()
  const snapIds = useMemo(() => favListSnap.map(snap => snap.id), [favListSnap])
  const ref = useRef<CheckboxGroupInstance>(null)
  const [checkAll, setCheckAll] = useState<any>([])
  const { rmFavFromList } = useFuturesFavActions()

  const getChecked = () => {
    if (!favListSnap) return []
    return favListSnap.filter(x => checkAll.includes(Number(x.id)))
  }
  return (
    <div className={styles.scoped}>
      <Checkbox.Group ref={ref} value={checkAll} onChange={setCheckAll}>
        {children}
      </Checkbox.Group>

      <Cell
        className="market-checkbox-footer"
        icon={
          <Checkbox
            shape="square"
            checked={checkAll.length === favListSnap.length && checkAll.length > 0}
            onClick={() =>
              setCheckAll(prev => {
                if (prev.length === snapIds.length) return []
                else return snapIds
              })
            }
          />
        }
        title={t`features/trade/future/settings/margin-coin-1`}
        rightIcon={
          <div
            className={classNames('items-center', { 'cursor-pointer': checkAll.length > 0 })}
            onClick={() => {
              if (checkAll.length === 0) return
              rmFavFromList(getChecked())
              setCheckAll([])
              Toast({
                message: t`features_market_market_quatation_common_market_favorites_editing_market_checkbox_form_index_5101062`,
              })
            }}
          >
            {checkAll.length > 0 ? (
              <>
                <Icon name="quotes_delete" className="mr-1" />
                <span className="text-brand_color">{t`common.delete`}</span>
              </>
            ) : (
              <>
                <Icon name="delete" hasTheme className="mr-1" />
                <span className="text-text_color_04">{t`common.delete`}</span>
              </>
            )}
          </div>
        }
      />
    </div>
  )
}

export { SpotMarketCheckboxForm, FuturesMarketCheckboxForm }
