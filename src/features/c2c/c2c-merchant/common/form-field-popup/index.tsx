import { t } from '@lingui/macro'
import { Field, Picker, Popup } from 'react-vant'
import { ComponentProps, useState } from 'react'

type TFormFieldPopup = { popupList: Array<string> } & Omit<ComponentProps<typeof Field>, 'suffix'>

function FormFieldPopup(props: TFormFieldPopup) {
  const { popupList, ...rest } = props
  const [visible, setvisible] = useState(false)
  const [suffixValue, setsuffixValue] = useState<string>()
  return (
    <>
      <Field {...rest} suffix={<span onClick={() => setvisible(true)}>{suffixValue}</span>} />
      <Popup round visible={visible} position="bottom" onClose={() => setvisible(false)}>
        <Picker
          title={t`features_c2c_c2c_merchant_common_form_field_popup_index_22225101382`}
          onConfirm={(value: string) => {
            setsuffixValue(value)
            setvisible(false)
          }}
          columns={popupList}
        />
      </Popup>
    </>
  )
}

export default FormFieldPopup
