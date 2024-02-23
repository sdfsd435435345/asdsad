import { Checkbox, Dialog } from 'react-vant'
import { t } from '@lingui/macro'
import Icon from '@/components/icon'

function ThirdOtcHint() {
  return (
    <div className="hint">
      <Icon name="icon_hint" className="msg-icon" />
      <span>
        {t`features_c2c_trade_third_trade_third_otc_comp_dzeouzrznj`}{' '}
        {t`features_c2c_trade_third_trade_third_otc_comp_bwaqxngaic`}{' '}
        {t`features_c2c_trade_third_trade_third_otc_comp_txyxis_wqd`}
      </span>
    </div>
  )
}

function ThirdOtcTerms({ checked, setChecked, otc }) {
  const openOtcAlert = () => {
    Dialog.alert({
      title: t`features_c2c_trade_fast_trade_confirm_modal_sgbjwctu1q`,
      className: 'dialog-confirm-wrapper confirm-black',
      message: (
        <div>
          <p className="mb-2 font-normal">
            {t`features_c2c_trade_third_trade_third_otc_comp_vrqzamzquj`}
            {otc?.name}
            {t`features_c2c_trade_third_trade_third_otc_comp_txf_krzcwn`}
            {otc?.name}
            {t`features_c2c_trade_third_trade_third_otc_comp_fyv6ks2tkp`}
            {otc?.name}
            {t`features_c2c_trade_third_trade_third_otc_comp_k0xfvppneb`}
            <a className="text-brand_color" href={otc?.serviceTermsLink}>
              {t`features_c2c_trade_third_trade_third_otc_comp__x1re0yujc`}
            </a>
            {t`user.register_05`}
            <a className="text-brand_color" href={otc?.privacyAgreementLink}>
              {t`features_c2c_trade_third_trade_third_otc_comp_ijhbiwnbkj`}
            </a>
            {t`features_trade_trade_entrust_modal_market_order_index_510131`}
          </p>
          <p className="font-normal">
            {t`features_c2c_trade_third_trade_third_otc_comp_7fb5azved9`}
            <a className="text-brand_color" href={otc?.contactInformation}>
              {t`features_c2c_trade_third_trade_third_otc_comp_foexqp7bhb`}
            </a>
            {t`features_c2c_trade_third_trade_third_otc_comp_klpx3ixhop`}
          </p>
        </div>
      ),
      confirmButtonText: t`features_trade_common_notification_index_5101066`,
    })
  }

  return (
    <>
      <Checkbox
        className="checkbox"
        shape="square"
        iconRender={({ checked }) => <Icon name={checked ? 'icon_agree' : 'icon_disagree'} />}
        checked={checked}
        onChange={val => setChecked(val)}
      >
        <span className="text-text_color_03 mr-0.5">{t`components/questionnaire/index-0`}</span>
      </Checkbox>
      <span className="text-brand_color" onClick={openOtcAlert}>
        {t`features_c2c_trade_fast_trade_confirm_modal_sgbjwctu1q`}
      </span>
    </>
  )
}

export { ThirdOtcHint, ThirdOtcTerms }
