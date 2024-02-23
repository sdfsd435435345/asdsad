import { i18nSyncFromRemote } from 'scripts/i18n-update/excel-to-json'

const excelFileDir = 'scripts/i18n-update/excel-to-json'
const scriptDir = `${excelFileDir}/cn`
const locali18nFile = `src/locales/zh-CN/messages.json`
const targeSheetName = 'H5-Fastpay' // 工作表名称
const targeSheetLangColumnName = 'cn' // 工作表名称

i18nSyncFromRemote({
  excelFileDir,
  scriptDir,
  locali18nFile,
  targeSheetName,
  targeSheetLangColumnName,
})
