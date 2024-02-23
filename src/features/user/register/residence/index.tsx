import { useState } from 'react'
import { useMount } from 'react-use'
import { Button, Cell, Image, Toast } from 'react-vant'
import { t } from '@lingui/macro'
import Link from '@/components/link'
import { link } from '@/helper/link'
import UserSearchArea from '@/features/user/common/search-area'
import { useUserStore } from '@/store/user'
import NavBar from '@/components/navbar'
import { MemberMemberAreaType } from '@/typings/user'
import { oss_area_code_image_domain_address } from '@/constants/oss'
import {
  UserSelectAreaTypeEnum,
  // UserEnabledStateTypeEnum
} from '@/constants/user'
import { usePageContext } from '@/hooks/use-page-context'
import { getMemberAreaIp } from '@/apis/user'
import Icon from '@/components/icon'
import styles from './index.module.css'

export default function UserRegisterResidence() {
  // const [isEnble, setIsEnble] = useState<boolean>(false)
  const [area, setArea] = useState<MemberMemberAreaType>({
    codeVal: '86',
    codeKey: t`features_user_personal_center_account_security_phone_verification_index_599`,
    remark: 'CN',
  })
  const [selectArea, setSelectArea] = useState<boolean>(false)

  const store = useUserStore()
  const pageContext = usePageContext()
  const { invitationCode } = pageContext.urlParsed.search
  const hasInvitationCode = invitationCode ? `&invitationCode=${invitationCode}` : ''

  const getAreaIp = async () => {
    const res = await getMemberAreaIp({})
    if (res.isOk) {
      const { enCode, fullName, shortName } = res.data

      setArea({
        codeVal: enCode,
        codeKey: fullName,
        remark: shortName,
      })

      // res.data.enableInd === UserEnabledStateTypeEnum.unEnable ? setIsEnble(false) : setIsEnble(true)
    }
  }

  useMount(getAreaIp)

  const handleSelectArea = (v: MemberMemberAreaType) => {
    // if (v.enableInd === UserEnabledStateTypeEnum.enable) setIsEnble(true)
    setArea(v)
    setSelectArea(false)
  }

  const handleNextStep = () => {
    // if (!isEnble) {
    //   Toast.info(t`features_user_register_residence_index_510237`)
    //   return
    // }

    if (!area.codeVal) {
      Toast.info(t`features_user_register_residence_index_510237`)
      return
    }

    store.setUserTransitionDatas(area)
    link(`/register/flow?regCountry=${area?.remark}${hasInvitationCode}`)
  }

  return (
    <section className={`register ${styles.scoped}`}>
      <NavBar
        title={t`user.register.fresidence_01`}
        right={<Icon name="close" hasTheme />}
        onClickRight={() => link('/')}
      />

      <div className="register-wrap">
        {!selectArea && (
          <>
            <div className="subtitle">
              <label>{t`user.register.fresidence_02`}</label>
            </div>

            <div className="area">
              <label>{t`features_user_register_residence_index_5101093`}</label>
              <Cell
                // title={isEnble ? area?.codeKey : '-- : --'}
                title={area?.codeKey}
                size="large"
                isLink
                // icon={isEnble && <Image lazyload src={`${oss_area_code_image_domain_address}${area?.remark}.png`} />}
                icon={<Image lazyload src={`${oss_area_code_image_domain_address}${area?.remark}.png`} />}
                onClick={() => setSelectArea(true)}
              />
              <div className="tips">
                <label>
                  {t`user.register.fresidence_04`}
                  <Link href="/register" prefetch className="customize-link-style">
                    {t`user.register.fresidence_05`}
                  </Link>
                  {t`user.register.fresidence_06`}
                </label>
              </div>
            </div>

            <Button
              type="primary"
              size="large"
              // disabled={!isEnble}
              onClick={handleNextStep}
            >
              {t`user.field.reuse_23`}
            </Button>
          </>
        )}

        <UserSearchArea
          visible={selectArea}
          checkedValue={area?.codeVal}
          type={UserSelectAreaTypeEnum.area}
          placeholderText={t`features_user_register_residence_index_5101224`}
          selectArea={handleSelectArea}
          onClose={() => setSelectArea(false)}
        />
      </div>
    </section>
  )
}
