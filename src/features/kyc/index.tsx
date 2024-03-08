import NavBar from '@/components/navbar'
import { t } from '@lingui/macro'
import { useCreation } from 'ahooks'
import { useState, useEffect, useRef } from 'react'
import { Tabs, Popup, PopupPosition, Button, Image, Form, Input, Uploader, Toast } from 'react-vant'
import { oss_area_code_image_domain_address } from '@/constants/oss'
import { MemberMemberPhoneAreaType } from '@/typings/user'
import { memberAdvMyKycInfo, memberUploadKycBase, memberUploadPayPasswordChange } from '@/apis/kyc'
import { link } from '@/helper/link'
import Icon from '@/components/icon'
import styles from './index.module.css'
import { baseUrl } from '@/helper/env'
import { baseUserStore } from '@/store/user'
import { Cross } from '@react-vant/icons'

export const upload = async (file: File) => {

}


export default function KycIndex() {  
  const [data, setData] = useState<any>('')
  const [activeTab, setActiveTab] = useState<any>('1')
  const [state, setState] = useState<PopupPosition>('')
  const onClose = () => setState('')
  const [submitInfomationVisible, setSubmitInfomationVisible] = useState<boolean>(false)
  const [form] = Form.useForm()
  const [userInfo, setUserInfos] = useState<any>('')
  const [files, setFiles] = useState<any>([])

  const [modifyPasswordVisible, setModifyPasswordVisible] = useState<boolean>(false)

  /**
   * 获取主页数据
   */
  const getUserInfo = async () => {
    const { isOk, data } = await memberAdvMyKycInfo({})
    if (isOk) {
      setUserInfos(data)
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])


  // 节点缓存
  const tabs = useCreation(() => {
    return [
      { title: '个人标准认证', id: `1`, button: '上传个人标准认证信息' },
      { title: '个人高级认证', id: '2', button: '上传个人高级认证信息' },
    ]
  }, [])


  const kycStateobj = {
    0: '基础KYC待审核',
    1: '基础KYC通过',
    2: '高级KYC待审核',
    3: '高级KYC通过',
    '-1': '基础KYC驳回',
    '-2': '高级KYC驳回'
  }

  const onFinishModifyPassword  = async values => {
    const { isOk } = await memberUploadPayPasswordChange({ ...values })
    if(isOk) {
      setModifyPasswordVisible(false)
      Toast.success('修改成功')
    }
  }

  const onFinish = async values => {
    if (activeTab === "1") {
      const { isOk } = await memberUploadKycBase({ ...values })
      if (isOk) {
        getUserInfo()
        setSubmitInfomationVisible(false)
      }
    }

    if (activeTab === "2") {
      const useStore = baseUserStore.getState()

      let tokenParams = {
        currentToken: useStore?.userInfo
          ?.token
      }
      try {
        const body = new FormData()
        body.append('files', files?.frontPhoto)
        body.append('files', files?.backPhoto)
        const resp = await fetch(`${baseUrl}/memberAdv/uploadKycAdv`, {
          method: 'POST',
          body,
          headers: {
            ...tokenParams
          },
        })
    

        const json = await resp.json()
        if(json?.code === 200) {
          setSubmitInfomationVisible(false)
        } else {
          Toast.fail(json?.message)
        }
        // return包含 url 的一个对象 例如: {url:'https://img.yzcdn.cn/vant/sand.jpg'}
        return json.image
      } catch (error) {
      }
    }


  }

  const getValuesDefault = (value) => {
    return value || '待上传'
  }

  const AvatarUploader = (props) => {
    const [tasks, setTasks] = useState<any[]>([])
    const idCountRef = useRef(0)

    useEffect(() => {
      if (props.value === undefined) return
      if (!tasks[0] || props.value !== tasks[0].url) {
        setTasks([{ url: props.value, id: idCountRef.current++ }])
      }
    }, [props.value])

    const innerChange = (items: any[]) => {

      setTasks(items)
      const currentUrl = items[0]?.url
      props.onChange?.(currentUrl)
      setFiles({ ...files, [props.id]: items[0]?.file })
    }

    return (
      <>
        {
          tasks?.length > 0 ? <div className="relative">
            <div className="top-0 right-0 absolute z-10" onClick={() => {
              setTasks([])
            }}><Cross /></div>
            <Image width='100' height='100' src={tasks[0]?.url} />
          </div> : <Uploader
            value={tasks}
            // upload={upload}
            maxCount={1}
            onChange={innerChange}
          />
        }
      </>

    )
  }

  return (
    <div className={`kyc-index ${styles.scoped}`}>
      <NavBar
        title={
          <div>
            <img src="" alt="" />
            <span>身份认证</span>
          </div>
        }
      />
      <div className="kyc-index-wrap">
        <div className="kyc-index-wrap-top">
          <div className="top">
            个人认证
            <span className="icon">
              <Icon name="c2c_authentication" className="text-2xl" />
            </span>
          </div>
          <div className="bottom">
            <span className="tag relative" onClick={() => setState('bottom')}>
              <Icon name="icon_certification_equity" className="w-5 h-5 absolute text-xl inline-block left-2 top-1" />
              当前详情
            </span>
            <span className="china_icon">
              <Button round  type='primary' block onClick={()=> setModifyPasswordVisible(true)}>
                修改密码
              </Button>
            </span>
          </div>
        </div>

        <div className="kyc-index-wrap-center">
          <Tabs
            className="tabs"
            active={activeTab}
            onClickTab={(params: any) => {
              setActiveTab(params?.name)
            }}
          >
            {tabs.map(({ title, id }) => (
              <Tabs.TabPane title={title} name={id} key={id}>
                <div className="w-full">
                  <div className="flex justify-between mb-2">
                    <span>会员ID</span> <span>{getValuesDefault(userInfo?.memberId)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>真实姓名</span> <span>{getValuesDefault(userInfo?.realName)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>身份证号码</span> <span>{getValuesDefault(userInfo?.idNumber)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>手机号码</span> <span>{getValuesDefault(userInfo?.phoneNumber)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>审核人</span> <span>{getValuesDefault(userInfo?.opUser)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>KYC审核状态</span> <span>{getValuesDefault(kycStateobj[userInfo?.kycState])}</span>
                  </div>
                  {userInfo?.idPicFront && <div className="flex justify-between mb-2">
                    <span>身份证正面照</span> <Image width='100' height='100' src={userInfo?.idPicFront} />
                  </div>}
                  {userInfo?.idPicBack && <div className="flex justify-between mb-2">
                    <span>身份证背面照</span> <Image width='100' height='100' src={userInfo?.idPicBack} />
                  </div>}
                </div>
              </Tabs.TabPane>
            ))}
          </Tabs>
        </div>
        <div className="w-full flex justify-center fixed bottom-10">
          {
            (!userInfo?.idNumber) && activeTab === '1' && <Button
              type="primary"
              className="w-4/5 mt-8 font-semibold"
              onClick={() => { setSubmitInfomationVisible(true) }}
            >上传个人标准认证信息</Button>
          }
          {
            activeTab === '2' && <Button
              type="primary"
              className="w-4/5 mt-8 font-semibold"
              onClick={() => { setSubmitInfomationVisible(true) }}
            >上传个人高级认证信息</Button>
          }
        </div>

        <Popup
          visible={modifyPasswordVisible}
          style={{ height: data.kycType === 1 ? '360px' : '420px' }}
          round
          position="bottom"
          onClose={() => { setModifyPasswordVisible(false) }}
        >
          <div className="kyc_popup px-4">
            <div className="flex flex-row items-center justify-between pt-4 mb-4">
              <span className="text-base text-text_color_01 font-semibold"></span>
              <Icon hasTheme name="close" className="close-icon text-xl" onClick={() => { setModifyPasswordVisible(false) }} />
            </div>
            <Form
              form={form}
              onFinish={onFinishModifyPassword}
              footer={
                <div style={{ marginTop: '16px' }}>
                  <Button round nativeType='submit' type='primary' block>
                    修改密码
                  </Button>
                </div>
              }
            >
              <Form.Item
                  rules={[{ required: true, message: '请填写旧密码' }]}
                  name='oldPassword'
                  label='旧密码'
                >
                  <Input placeholder='请输入旧密码' />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true, message: '请填写新密码' }]}
                  name='newPassword'
                  label='新密码'
                >
                  <Input placeholder='请输入新密码' />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true, message: '请填写新密码确认' }]}
                  name='confirmPassword'
                  label='新密码确认'
                >
                  <Input placeholder='请输入新密码确认' />
                </Form.Item>
            </Form>
          </div>
        </Popup>

        <Popup
          visible={submitInfomationVisible}
          style={{ height: data.kycType === 1 ? '360px' : '420px' }}
          round
          position="bottom"
          onClose={() => { setSubmitInfomationVisible(false) }}
        >
          <div className="kyc_popup px-4">
            <div className="flex flex-row items-center justify-between pt-4 mb-4">
              <span className="text-base text-text_color_01 font-semibold"></span>
              <Icon hasTheme name="close" className="close-icon text-xl" onClick={() => { setSubmitInfomationVisible(false) }} />
            </div>
            <Form
              form={form}
              onFinish={onFinish}
              footer={
                <div style={{ marginTop: '16px' }}>
                  <Button round nativeType='submit' type='primary' block>
                    提交信息
                  </Button>
                </div>
              }
            >
              {activeTab === '1' && <>
                <Form.Item
                  rules={[{ required: true, message: '请填写真实姓名' }]}
                  name='realName'
                  label='真实姓名'
                >
                  <Input placeholder='请输入真实姓名' />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true, message: '请填写身份证号' }]}
                  name='idNumber'
                  label='身份证号'
                >
                  <Input placeholder='请输入身份证号' />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true, message: '请填写手机号' }]}
                  name='phoneNumber'
                  label='手机号'
                >
                  <Input placeholder='请输入手机号' />
                </Form.Item>
              </>}

              {activeTab === '2' && <>
                <Form.Item
                  rules={[{ required: true, message: '请身份证正面照' }]}
                  label='身份证正面照'
                  name='frontPhoto'
                >
                  {/* 通过封装自定义表单组件，按需实现实际业务逻辑 */}
                  <AvatarUploader />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true, message: '请身份证背面照' }]}
                  label='身份证背面照'
                  name='backPhoto'
                >
                  {/* 通过封装自定义表单组件，按需实现实际业务逻辑 */}
                  <AvatarUploader />
                </Form.Item>
              </>}

            </Form>
          </div>
        </Popup>
      </div>
    </div>
  )
}
