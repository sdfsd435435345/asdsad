import Icon from '@/components/icon'
import { t } from '@lingui/macro'
import { Field, Picker, Popup } from 'react-vant'
import { useState } from 'react'
import styles from './index.module.css'

type TFormRelationship = {
  onChange?: (v: string) => void
}

const pickerCol = () => [
  t`features_c2c_c2c_merchant_c2c_merchant_form_form_relationship_index_itlhgryxu84vo7gwn8cwn`,
  t`features_c2c_c2c_merchant_c2c_merchant_form_form_relationship_index_xpq65a__b9fenrrxlt4wv`,
  t`features_c2c_c2c_merchant_c2c_merchant_form_form_relationship_index_7j5oap_aqjo1zwuw38zrw`,
  t`assets.financial-record.tabs.other`,
]

function FormRelationship({ onChange }: TFormRelationship) {
  const [fieldVal, setfieldVal] = useState()
  const [visible, setvisible] = useState(false)
  return (
    <>
      <Field
        readOnly
        value={fieldVal}
        suffix={<Icon onClick={() => setvisible(true)} name="regsiter_icon_drop" hasTheme />}
      />
      <Popup round visible={visible} position="bottom">
        <Picker
          className={styles['form-relationship-picker']}
          // onConfirm={v => {
          //   setfieldVal(v)
          //   setvisible(false)
          // }}
          onCancel={() => setvisible(false)}
          columns={pickerCol()}
          onChange={v => {
            setfieldVal(v)
            setvisible(false)
            onChange && onChange(v)
          }}
          showToolbar={false}
        />
        <div
          onClick={() => setvisible(false)}
          className="py-5 bg-bg_color text-center border-t-4 border-line_color_02 text-text_color_02"
        >
          {t`assets.financial-record.cancel`}
        </div>
      </Popup>
    </>
  )
}

export default FormRelationship
