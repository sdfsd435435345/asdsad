import { ahookRequestSWRConfig } from '@/constants/market'
import { ApiStatusEnum } from '@/constants/market/market-list'
import { generateSWRCacheKey } from '@/helper/market/market-list'
import { useRequest } from 'ahooks'
import { useState, useEffect } from 'react'

/**
 * 统一处理 useRequest api/cache 返回结果，api request 状态，refresh 和 swr 配置
 * 支持同一接口，不同传参的 cache
 */
const useReqeustMarketHelper = ({
  apiRequest,
  setApiData,
  deps,
  onDepsChange,
  cacheKey,
  apiPreValidation,
}: {
  apiRequest: any
  setApiData: any
  // 接口传参的校验和预处理
  apiPreValidation?: any
  // 接口传参
  deps?: any[]
  onDepsChange?: () => void
  // swr cachekey
  cacheKey?: string
}) => {
  const [apiStatus, setApiStatus] = useState(ApiStatusEnum.default)

  const { runAsync, refresh } = useRequest(
    async () => {
      return new Promise((resolve, reject) => {
        return apiRequest(resolve, reject)
      })
    },
    {
      manual: true,
      ...(cacheKey && {
        cacheKey: generateSWRCacheKey(cacheKey, deps),
        ...ahookRequestSWRConfig,
      }),
    }
  )

  useEffect(() => {
    if (apiPreValidation && !apiPreValidation()) {
      setApiStatus(ApiStatusEnum.failed)
      return
    }
    // abort prev request if is apiStaus is fetching // todo, replace with other api request lib
    onDepsChange && onDepsChange()

    setApiStatus(ApiStatusEnum.fetching)

    let id
    runAsync()
      .then(data => {
        setApiData && setApiData(data)
        // 防止 race condition
        // TODO check how to avoid timmer
        id = setTimeout(() => {
          setApiStatus(ApiStatusEnum.succeed)
        }, 0)
      })
      .catch(() => {
        setApiStatus(ApiStatusEnum.failed)
      })

    return () => {
      id && clearTimeout(id)
    }
  }, [...(deps || [])])

  const refreshCallback = () => {
    if (apiPreValidation && !apiPreValidation()) {
      setApiStatus(ApiStatusEnum.failed)
      return
    }
    refresh()
  }

  return { refreshCallback, apiStatus, runAsync }
}

export default useReqeustMarketHelper
