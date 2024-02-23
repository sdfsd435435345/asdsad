import produce from 'immer'
import Axios from 'axios'
import { baseLayoutStore } from '@/store/layout'
import { gitCommitId } from './env'
import { extractMetaData } from './layout/metadata'

/**
 * 两个对象列表的左连接
 * @param arr1 主列表
 * @param key1 主列表对象的 key
 * @param arr2 补充列表
 * @param key2 补充列表对象的 key
 * @param isInnerJoin 当不存在补充列表时，是否从 arr1 中去除，默认不去除
 * @param keepPrevKeys 需要保存的更新之前的 key 对应的值，默认保存 last 的值
 * @returns merged
 * @example
 * leftJoinByKey([{id: 1, symbol: 'btc'}], 'id', [{name: 1, value: 3}, {name: 1, value: 3}], 'name') => [{id: 1, symbol: 'btc', value: 3}]
 */
export const leftJoinByKey = <T>({
  arr1,
  key1,
  arr2,
  key2,
  isInnerJoin = false,
  keepPrevKeys = ['last'],
}: {
  arr1?: any[]
  key1: string
  arr2?: any[]
  key2: string
  isInnerJoin?: boolean
  keepPrevKeys?: string[]
}): T[] => {
  if (!arr1) return []
  const merged = [...arr1]
  if (!arr2 || arr2.length === 0 || arr1.length === 0) return merged
  if (!Object.keys(arr1[0]).find(x => key1) || !Object.keys(arr2[0]).find(x => key2)) return merged

  // 将 arr2 中的值取出作为 key
  const arr2KeyObj = arr2.reduce((acc, cur) => {
    acc[cur[key2]] = cur
    return acc
  }, {})

  const updated = produce(merged, draft => {
    draft.forEach(item => {
      // 如果是 inner join, 只留下相交的 item
      if (isInnerJoin && (!Object.keys(item).find(x => x === key1) || !arr2KeyObj[item[key1]])) {
        item[key1] = null
        return
      }

      // 如果当前对象不存在 key1, 直接返回
      if (!Object.keys(item).find(x => x === key1)) return
      // 取出 key1 在 obj1 中的值，在 map 中寻找
      const obj2 = arr2KeyObj[item[key1]]

      if (!obj2) return

      // 直接覆盖 obj1 中的值，除了 key1 或者 key2 以免值被覆盖
      Object.keys(obj2).forEach(key => {
        if (key === key1 || key === key2) return
        const prev = item[key]
        item[key] = obj2[key]

        // 以 `${key}Prev` 格式保存之前的值
        if (keepPrevKeys?.includes(key)) {
          item[`${key}Prev`] = prev
        }
      })
    })
  })

  const resolved = isInnerJoin ? updated.filter(x => !!x[key1]) : updated

  // console.debug('merged', resolved)
  // console.debug('berfore arr1', arr1)
  // console.debug('before arr2', arr2)
  return resolved
}

export const arraySplitToChunks = (arr: any[], chunkSize: number) => {
  if (chunkSize <= 0) return [arr]

  const res: any[] = []

  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, chunkSize * (i + 1))
    res.push(chunk)
  }

  return res
}

// 生成独一无二的值
export function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0
    let v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const isFalsyExcludeZero = val => {
  if (val === 0) return false
  return !val
}

export const isAbsoluteUrl = (urlString?: string) => {
  const isAbsolute = /^([a-z]+:\/\/|\/\/)/i
  return isAbsolute.test(urlString!)
}

/**
 * 转换图片 url 为 base64
 */
const toBase64 = img => {
  const canvas = document.createElement('canvas') // 创建一个 canvas 元素
  canvas.width = img.width // 把当前 url 对应的图片的宽度赋予 canvas
  canvas.height = img.height // 把当前 url 对应的图片的高度赋予 canvas
  let ctx = canvas.getContext('2d')
  ctx?.drawImage(img, 0, 0, canvas.width, canvas.height) // 在画布上一比一的画出 img
  const base64 = canvas.toDataURL('image/png') // 调用 canvas 的 toDataURL 获取.jpg 的 base64 数据
  return base64
}

export const getImageUrlBase64 = (url, set) => {
  const img = new Image()
  img.crossOrigin = 'anonymous' // 处理跨域，后端也要设置跨域处理才行
  img.src = url
  img.setAttribute('background', 'transparent')
  img.onload = () => {
    set(toBase64(img))
  }
}

export function logGitCommitId() {
  // eslint-disable-next-line no-console
  console.log(`version: ${gitCommitId}`)
}

/**
  @params downloadUrl 是下载地址
  @params name 下载文件名
 */
export const download = async (downloadUrl: string, name: string) => {
  const res = await Axios.get(downloadUrl, {
    responseType: 'blob',
  }).catch(() => {
    window.open(downloadUrl)
  })
  if (res?.status === 200) {
    const url = window.URL.createObjectURL(res.data)
    const link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    link.setAttribute('download', name)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    return true
  } else {
    return false
  }
}

export function awaitTime(ms: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({})
    }, ms)
  })
}

export function getBusinessName() {
  const { layoutProps } = baseLayoutStore.getState()
  const metaData = extractMetaData(layoutProps)
  return metaData.businessName
}
