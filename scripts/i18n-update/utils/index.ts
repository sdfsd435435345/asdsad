import path from 'path'
import fs from 'fs'

export function getZhCNJson() {
  const jsonString = fs.readFileSync(path.join(__dirname, '../../../src/locales/zh-CN/messages.json'), 'utf-8')
  const _json = JSON.parse(jsonString)
  return _json
}
