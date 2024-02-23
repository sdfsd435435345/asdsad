import { t } from '@lingui/macro'
import NavBar from '@/components/navbar'
import { useBoolean, useMount, useReactive } from 'ahooks'
import { Radio, Input, Collapse, Toast, Button } from 'react-vant'
import { createRadioIconRender } from '@/components/radio/icon-render'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import DateTimeSelect from '@/features/c2c/center/component/date-time-select'
import { C2CUserTimeSettingType, C2CSetUpReactiveType } from '@/typings/api/c2c/center'
import { C2cCenterSetUp, C2cCenterRadioStatus } from '@/constants/c2c/common'
import { getC2cPersonSetting, setC2cPersonSetting } from '@/apis/c2c/center'
import { C2CSetUpEnum } from '@/constants/c2c/center'
import ImageUploader from '@/features/c2c/center/component/image-uploader'
import styles from './index.module.css'

function C2cSetUp() {
  /** 数据对象池管理* */
  const state = useReactive<C2CSetUpReactiveType>({
    radioId: C2CSetUpEnum.none,
    radioStatus: 0,
    /** 在线状态文字* */
    onlineText: '',
    uploaderUrl: '',
    uploaderUrlShow: [],
    /** 用户设置时间信息* */
    userTimeSetting: {
      dayInWeek: '',
      startTime: '',
      endTime: '',
    },
  })

  const [loading, { setTrue, setFalse }] = useBoolean(false)

  /** 聊天窗口单选框* */
  const onHeaderRadio = (v: number) => {
    state.radioId = v
  }

  /** 状态单选框* */
  const onMainRadio = v => {
    v && (state.radioStatus = v)
    state.userTimeSetting = {
      dayInWeek: '',
      startTime: '',
      endTime: '',
    }
  }

  /** 处理获取的数据* */
  const handleSetUpList = async () => {
    setTrue()
    const { data, isOk } = await getC2cPersonSetting({})
    if (data && isOk) {
      state.radioId = data.welcomeInfoType || C2CSetUpEnum.none
      state.radioStatus = data.receiveOrderStatus || 0
      if (data.welcomeInfoType === C2CSetUpEnum.image) {
        state.uploaderUrlShow = [{ url: data.welcomeInfoMessage }]
      }
      data.welcomeInfoType === C2CSetUpEnum.text
        ? (state.onlineText = data.welcomeInfoMessage)
        : (state.uploaderUrl = data.welcomeInfoMessage)
      state.userTimeSetting = data?.receiveOrderTimeJson ? JSON.parse(data.receiveOrderTimeJson) : ''
    }
    setFalse()
  }

  /** 修改在线星期* */
  const onWeekChange = weekData => {
    const newWeekData = weekData
      ?.filter(v => v.isSelected)
      ?.map(item => item.id)
      ?.join(',')
    const weekList = {
      dayInWeek: newWeekData,
    }
    state.userTimeSetting = { ...state.userTimeSetting, ...weekList }
  }

  /** 修改时间* */
  const onTimeChange = v => {
    state.userTimeSetting = { ...state.userTimeSetting, ...v }
  }

  /** 图片上传* */
  const onUploaderChange = (files: string) => {
    state.uploaderUrl = files
  }

  /** 处理 message* */
  const handleMessage = (id: number) => {
    switch (id) {
      case C2CSetUpEnum.text:
        return state.onlineText
      case C2CSetUpEnum.image:
        return state.uploaderUrl
      default:
        return ''
    }
  }

  /** 保存* */
  const onPreData = async () => {
    if (!state.userTimeSetting?.dayInWeek && state.radioStatus === 4) {
      return Toast.info(t`components_common_date_picker_date_picker_modal_510248`)
    }
    const params = {
      welcomeInfoType: state.radioId,
      welcomeInfoMessage: handleMessage(state.radioId),
      receiveOrderStatus: state.radioStatus,
      receiveOrderTimeJson: JSON.stringify(state.userTimeSetting),
    }
    const { data, isOk } = await setC2cPersonSetting(params)
    if (data && isOk) {
      Toast.success(t`features_user_personal_center_settings_converted_currency_index_587`)
      handleSetUpList()
      history.back()
    }
  }

  useMount(() => {
    handleSetUpList()
  })

  return (
    <section className={styles['c2c-set-up']}>
      <NavBar title={t`user.pageContent.title_12`} />
      <header className="c2c-set-up-header">
        <div className="set-up-header-title">{t`features_trade_future_c2c_225101581`}</div>
        <Radio.Group
          value={state.radioId}
          direction="horizontal"
          className="set-up-header-radio"
          onChange={onHeaderRadio}
        >
          {C2cCenterSetUp()?.map(v => {
            return (
              <Radio key={v.value} name={v.value} iconRender={createRadioIconRender('header-radio-item')}>
                {v.name}
              </Radio>
            )
          })}
        </Radio.Group>
        {state.radioId === C2CSetUpEnum.text && (
          <Input.TextArea
            rows={4}
            showWordLimit
            maxLength={100}
            value={state.onlineText}
            placeholder={t`features_trade_future_c2c_225101582`}
            onChange={v => (state.onlineText = v)}
            className="set-up-header-text-area"
          />
        )}
        {state.radioId === C2CSetUpEnum.image && (
          <ImageUploader value={state.uploaderUrlShow} onChange={onUploaderChange} />
        )}
      </header>
      <main className="c2c-set-up-main">
        <div className="set-up-main-title">{t`features_trade_future_c2c_225101583`}</div>
        <Radio.Group value={state.radioStatus} className="set-up-main-radio" onChange={onMainRadio}>
          <Collapse
            onChange={onMainRadio}
            border={false}
            accordion
            initExpanded={state.radioStatus}
            key={state.radioStatus}
          >
            {C2cCenterRadioStatus()?.map(v => {
              return (
                <Collapse.Item
                  key={v.value}
                  name={v.value}
                  isLink={false}
                  border={false}
                  title={
                    <Radio name={v.value} iconRender={createRadioIconRender('main-radio-item')}>
                      {v.name}
                    </Radio>
                  }
                >
                  {v?.contair ? (
                    <div className="main-radio-collapse">{v?.contair}</div>
                  ) : (
                    <DateTimeSelect
                      data={state.userTimeSetting as C2CUserTimeSettingType}
                      onWeekChange={onWeekChange}
                      onTimeChange={onTimeChange}
                    />
                  )}
                </Collapse.Item>
              )
            })}
          </Collapse>
        </Radio.Group>
      </main>
      <footer className="c2c-set-up-footer">
        <Button type="primary" className="set-up-footer-button" onClick={onPreData}>
          <span className="text-button_text_02">{t`features_trade_future_c2c_225101584`}</span>
        </Button>
      </footer>
      <FullScreenLoading mask isShow={loading} />
    </section>
  )
}
export default C2cSetUp
