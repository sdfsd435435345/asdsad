import React, { useEffect, useRef, useState } from 'react';
import { Button, Uploader, Image, Toast } from 'react-vant';
import styles from './index.module.css';  // 根据你的实际情况导入样式文件
import NavBar from '@/components/navbar'
import Icon from '@/components/icon'
import { Cross } from '@react-vant/icons';
import { baseUrl } from '@/helper/env';
import { baseUserStore } from '@/store/user';
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';


const UploadVoucherPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const seqNo = params.get('seqNo');
  const [tasks, setTasks] = useState<any[]>([])
  const navigate = useNavigate()

  const handleConfirmClick = async () => {
    const useStore = baseUserStore.getState()

    let tokenParams = {
      currentToken: useStore?.userInfo
        ?.token
    }
    try {
      const body = new FormData()
      body.append('file', tasks?.[0]?.file)
      body.append('seqNo', seqNo as string)
      const resp = await fetch(`${baseUrl}/memberTrans/uploadPayProf`, {
        method: 'POST',
        body,
        headers: {
          ...tokenParams
        },
      })

      const json = await resp.json()

      if (json.code === 200) {
        navigate(`/order-info?seqNo=${seqNo}`);
      } else {
        Toast(json.message)
      }
      // return包含 url 的一个对象 例如: {url:'https://img.yzcdn.cn/vant/sand.jpg'}
      return json.image
    } catch (error) {
    }
  }


  const AvatarUploader = (props) => {
    const innerChange = (items: any[]) => {
      setTasks(items)
    }


    return (
      <>
        {
          tasks?.length > 0 ? <div className="relative">
            <div className="top-0 right-0 absolute z-10" onClick={() => {
              setTasks([])
            }}><Cross /></div>
            <Image width='100' height='100' className="mb-4" src={tasks[0]?.url} />
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

  const handleUploadVoucherClick = () => {
    // 处理上传凭证按钮点击事件
    // 具体逻辑...
  };

  return (
    <div className={styles.scoped}>
      <NavBar
        title='订单信息'
        left={<Icon name="back" hasTheme className="header-back" />}
      />
      <div className="h-full flex justify-center items-center -mt-[60px]">
        <div className="upload-voucher-page">
          {/* 标题 + 返回按钮 */}


          <div className="flex justify-center">
            <AvatarUploader />
          </div>
          {/* <div className="upload-section">

        <p className="upload-prompt mt-2">如在2：39前未上传，订单将自动取消</p>
      </div> */}

          {/* 确认按钮 */}
          <div className="confirm-button">
            <Button type="primary" onClick={handleConfirmClick}>上传凭证后，请点击这里确定</Button>
          </div>

          {/* 温馨提示 */}
          <p className="warning">如果恶意使用凭证，您的账户将会被封停！</p>

          {/* 上传按钮 */}
        </div>
      </div>
    </div>
  );
};

export default UploadVoucherPage;
