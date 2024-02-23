import path from 'path'
import fs from 'fs'
import xlsx from 'xlsx'

const jsonString = fs.readFileSync(path.join(__dirname, '../../../src/locales/zh-CN/messages.json'), 'utf-8')
const jsonStringEn = fs.readFileSync(path.join(__dirname, '../../../src/locales/en-US/messages.json'), 'utf-8')
const json = JSON.parse(jsonString)
const jsonEn = JSON.parse(jsonStringEn)

const sheetName = 'H5' // 工作表名称
const header = ['key', 'cn', 'en'] // 表头
const data = Object.entries(json) // 将 JSON 转换为二维数组
data.forEach(item => {
  item.push(jsonEn[item[0]])
})

const workSheet = xlsx.utils.aoa_to_sheet([header, ...data])
const workBook = xlsx.utils.book_new()
xlsx.utils.book_append_sheet(workBook, workSheet, sheetName)

const excelData = xlsx.write(workBook, { bookType: 'xlsx', type: 'buffer' })
fs.writeFileSync(`dist/i18n.xlsx`, excelData)
