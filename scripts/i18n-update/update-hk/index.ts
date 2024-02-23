/* eslint-disable  */
// @ts-ignore
import OpenCC from 'opencc'
import _ from 'lodash'
import fs from 'fs'
import path from 'path'
import { getZhCNJson } from '../utils'

// 将 zh-CN 语言包 翻译为 zh-HK 语言包
const translateJson = async json => {
  const converter = new OpenCC('s2t.json')

  const result = {}
  // eslint-disable-next-line guard-for-in
  for (const key in json) {
    const value = json[key]
    if (_.isObject(value)) {
      // eslint-disable-next-line no-await-in-loop
      result[key] = await translateJson(value)
    }
    // eslint-disable-next-line no-await-in-loop
    const val = await converter.convertPromise(value)
    result[key] = val
  }

  return result
}

// 获取 zh-HK 未翻译的词条，并且将 zh-CN 翻译为 zh-HK
export const translateAssets = async () => {
  try {
    const body = getZhCNJson()
    if (_.isEmpty(body)) {
      process.exit(0)
    } else {
      const data = await translateJson(body)
      const dir = path.join(__dirname, '../../../src/locales/zh-HK')
      const filePath = path.join(__dirname, '../../../src/locales/zh-HK/messages.json')
      if (!fs.existsSync(dir)) {
        // 目录不存在，创建目录
        fs.mkdirSync(dir)
      }
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
    }
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

translateAssets()
