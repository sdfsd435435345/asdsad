import Icon from '@/components/icon'
import { oss_area_code_image_domain_address } from '@/constants/oss'
import { UserSelectAreaTypeEnum } from '@/constants/user'
import UserSearchArea from '@/features/user/common/search-area'
import { FormValuesTrimDecimalPoint } from '@/features/user/utils/common'
import { MemberMemberAreaType } from '@/typings/user'
import { t } from '@lingui/macro'
import { Field, Flex, Image } from 'react-vant'
import { useState } from 'react'

type TFormPhone = {
  // For form validator to subscribe to changes
  onChange?: (v: string) => void
  popupTitle?: string
  placeholder?: string
}

function FormPhoneField({ onChange, popupTitle, placeholder = t`user.field.reuse_11` }: TFormPhone) {
  const [selectArea, setSelectArea] = useState<boolean>(false)
  const [area, setArea] = useState<MemberMemberAreaType>({
    codeVal: '86',
    codeKey: t`features_user_personal_center_account_security_phone_verification_index_599`,
    remark: 'CN',
  })
  const handleSelectArea = (v: MemberMemberAreaType) => {
    setArea(v)
    setSelectArea(false)
  }

  const onFieldChange = (value: string) => {
    onChange?.(`${area?.codeVal} ${value}`)
  }

  return (
    <>
      <Field
        formatter={FormValuesTrimDecimalPoint}
        type="number"
        prefix={
          <div className="mobile-left">
            <Flex align="center" onClick={() => setSelectArea(true)}>
              {
                <>
                  <Image lazyload src={`${oss_area_code_image_domain_address}${area?.remark}.png`} />{' '}
                  <span className="text-text_color_01">+{area?.codeVal} </span>
                </>
              }
              <Icon name="regsiter_icon_drop" hasTheme />
            </Flex>

            <div className="mobile-line" />
          </div>
        }
        onChange={onFieldChange}
        placeholder={placeholder}
      />
      <UserSearchArea
        visible={selectArea}
        checkedValue={area?.codeVal}
        type={UserSelectAreaTypeEnum.phone}
        placeholderText={t`user.field.reuse_25`}
        selectArea={handleSelectArea}
        onClose={() => setSelectArea(false)}
        navTitle={popupTitle}
      />
    </>
  )
}

export default FormPhoneField
