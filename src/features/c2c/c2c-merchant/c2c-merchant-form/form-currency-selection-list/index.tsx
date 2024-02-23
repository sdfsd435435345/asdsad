import Icon from '@/components/icon'
import { C2CAreaListResp } from '@/typings/api/c2c/common'
import { t } from '@lingui/macro'
import { Field, Input } from 'react-vant'
import { useUpdateEffect } from 'ahooks'
import { useState } from 'react'
import FormCurrencyChecklist from '../form-currency-checklist'
import styles from './index.module.css'

type TFormCurrencySelectionList = {
  onChange?: (v: Array<number>) => void
}

export function FormCurrencySelection({ currency, onChange }) {
  return (
    <div className={styles['form-currency-selection']}>
      <div>{currency}</div>
      <Icon
        name="close"
        hasTheme
        onClick={() => onChange(prev => prev.filter(each => each.currencyName !== currency))}
      />
    </div>
  )
}

function FormCurrencySelectionList({ onChange }: TFormCurrencySelectionList) {
  const [list, setlist] = useState<C2CAreaListResp[]>([])
  useUpdateEffect(() => {
    onChange?.(
      list.map(each => {
        return each.legalCurrencyId as unknown as number
      })
    )
  }, [list])
  return (
    <Field
      readOnly
      placeholder={t`features_message_center_index_5101368`}
      className={styles['form-currency-selection-list']}
      suffix={<FormCurrencyChecklist list={list} setList={setlist} />}
    >
      {list.length > 0 &&
        list?.map((each, index) => (
          <FormCurrencySelection key={index} currency={each.currencyName} onChange={setlist} />
        ))}
    </Field>
  )
}

export default FormCurrencySelectionList
