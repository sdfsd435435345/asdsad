import { createRef, useEffect, useState } from 'react'
// import { Button, Overlay, Toast } from 'react-vant'
// import html2canvas from 'html2canvas'
import { t } from '@lingui/macro'
import NavBar from '@/components/navbar'
import { getBrowser, getOperationSystem } from '@/features/user/utils/common'
import { getMemberLocation } from '@/apis/user'
import Icon from '@/components/icon'
import styles from './index.module.css'

interface ItemListType {
  title: string
  text: string
  speed?: boolean
}

export default function UserPersonalCenterNetworkCheck() {
  const [itemList, setItemList] = useState<Array<ItemListType>>([])

  // const [visible, setVisible] = useState<boolean>(false)
  // const [imageSrc, setImageSrc] = useState<string>('')
  const generateImage = createRef<HTMLDivElement>()

  const getLocation = async () => {
    const startTime = Date.now()
    const res = await getMemberLocation({})
    if (res.isOk) {
      const endTime = Date.now()
      const system = {
        title: t`user.account_security.network_check_01`,
        text: `${getOperationSystem()} (${getBrowser()})`,
      }

      // const phoneInfo = {
      //   title: t`user.account_security.network_check_02`,
      //   text: '',
      // }

      // const appVersion = {
      //   title: t`user.account_security.network_check_03`,
      //   text: '',
      // }

      const ip = {
        title: 'IP',
        text: res.data?.ip,
      }

      const location = {
        title: t`user.account_security.network_check_04`,
        text: `${res.data?.countryName} (${res.data?.countryCode})`,
      }

      // const operator = {
      //   title: t`user.account_security.network_check_05`,
      //   text: '',
      // }

      // const webSocketSpeed = {
      //   title: t`user.account_security.network_check_06`,
      //   text: '0ms',
      //   speed: true,
      // }

      const apiSpeed = {
        title: t`user.account_security.network_check_07`,
        text: `${endTime - startTime}ms`,
        speed: true,
      }

      setItemList([system, ip, location, apiSpeed])
    }
  }

  // const handleGenerateImage = () => {
  //   setVisible(true)
  //   const el = generateImage.current as HTMLDivElement

  //   html2canvas(el)
  //     .then(c => {
  //       setImageSrc(c.toDataURL('image/png'))
  //     })
  //     .catch(err => {
  //       Toast.info(err)
  //     })
  // }

  // const saveImage = () => {
  //   const a = document.createElement('a')
  //   const event = new MouseEvent('click')
  //   a.download = 'network-check'
  //   a.href = imageSrc
  //   a.dispatchEvent(event)

  //   setVisible(false)
  // }

  useEffect(() => {
    getLocation()
  }, [])

  return (
    <div className={`network-check ${styles.scoped}`}>
      <NavBar title={t`user.personal_center_10`} />

      <div className="network-check-wrap" ref={generateImage}>
        <div className="container">
          <div className="header">
            <div className="name">
              <div className="icon">
                <Icon name="user_about_logo" />
              </div>
              <div className="text">
                {/* <label>Newbit Global</label> */}
                <label>{t`user.account_security.network_check_08`}</label>
              </div>
            </div>
            <div className="tips">
              <p>{t`user.account_security.network_check_09`}</p>
            </div>
          </div>
          <div className="main">
            {itemList.map((v, i) => (
              <div className="item" key={i}>
                <div className="item-wrap">
                  <div className="title">
                    <label>{v.title}</label>
                  </div>
                  <div className={`text ${v.speed && 'speed-color'}`}>
                    <label>{v.text}</label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="generate">
        <Button type="primary" onClick={handleGenerateImage}>
          {t`user.account_security.network_check_10`}
        </Button>
      </div>

      <Overlay visible={visible}>
        <div className="save-image">
          <div className="image-wrap">
            <img src={imageSrc} alt="" />
          </div>
          <div className="save-btn">
            <div className="btn-wrap">
              <Button type="primary" onClick={saveImage}>
                {t`user.account_security.network_check_11`}
              </Button>
              <Button onClick={() => setVisible(false)}>{t`user.field.reuse_09`}</Button>
            </div>
          </div>
        </div>
      </Overlay> */}
    </div>
  )
}
