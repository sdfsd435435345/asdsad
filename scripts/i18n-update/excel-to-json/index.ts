import fs from 'fs'
import XLSX from 'xlsx'
import path from 'path'
import { reduce, isEqual } from 'lodash'

export function i18nSyncFromRemote({
  excelFileDir,
  scriptDir,
  locali18nFile,
  targeSheetName,
  targeSheetLangColumnName,
}) {
  fs.readdir(excelFileDir, async (err, files) => {
    if (err) {
      console.log('Error reading directory:', err)
      return
    }

    const xlsxFiles = files.find(file => {
      const filePath = path.join(excelFileDir, file)
      const fileExtension = path.extname(filePath)
      return fileExtension === '.xlsx'
    })

    const workbook = XLSX.readFile(`${excelFileDir}/${xlsxFiles}`)

    const sheetName = workbook.SheetNames.filter(name => name === targeSheetName)

    const worksheet = workbook.Sheets[sheetName[0]]

    const jsonData = {}

    const worksheetData = XLSX?.utils?.sheet_to_json(worksheet)

    worksheetData?.forEach((element: any) => {
      jsonData[element.key as string] = element[targeSheetLangColumnName]
    })

    // const jsonContent = JSON.stringify(jsonData, null, 2)

    const localData = JSON.parse(fs.readFileSync(locali18nFile, 'utf8'))
    const remoteData = jsonData
    const remoteDataMissed: any[] = []
    const localDataTheOther = JSON.parse(
      fs.readFileSync(
        targeSheetLangColumnName === 'cn' ? 'src/locales/en-US/messages.json' : 'src/locales/zh-CN/messages.json',
        'utf8'
      )
    )

    // console.log('keys', Object.keys(remoteData))

    const diff =
      reduce(
        localData,
        function (result, value, key) {
          if (!Object.prototype.hasOwnProperty.call(remoteData, key)) {
            // console.log('🚀 ~ file: index.ts:50 ~ fs.readdir ~ key not exist in remote:', key, value, localDataTheOther[key])
            remoteDataMissed.push([
              key,
              targeSheetLangColumnName === 'cn' ? value : localDataTheOther[key],
              targeSheetLangColumnName === 'cn' ? localDataTheOther[key] : value,
            ])
            return result
          }
          const remoteValue = remoteData[key]

          if (!isEqual(value, remoteValue)) {
            result[key] = {
              local: value,
              remote: remoteValue,
            }

            // update local file
            // remote value may intentionally be empty
            localData[key] = String(remoteValue || '')
          }
          return result
        },
        {}
      ) || {}

    // update local i18n file
    fs.writeFileSync(
      locali18nFile,
      JSON.stringify(
        localData,
        function (_, value) {
          // if (typeof value === 'string') {
          //   return value.replace(/'/g, "\\'")
          // }
          return value
        },
        2
      )
    )

    // generate diff json file
    const diffJsonFileName = `${scriptDir}/compare-${targeSheetLangColumnName}.${Date.now()}.auto.json`
    fs.writeFileSync(
      diffJsonFileName,
      JSON.stringify(
        diff,
        function (_, value) {
          return value
        },
        2
      )
    )
    console.log(`比对文件: ${process.cwd()}/${diffJsonFileName}`)

    // // generate diff excel file
    // const header = ['key', 'remote', 'local'] // 表头
    // const diffdata = Object.keys(diff).map(key => {
    //   const data = diff[key]
    //   return [key, data.remote, data.local]
    // }) // 将 JSON 转换为二维数组

    // const workSheet = XLSX.utils.aoa_to_sheet([header, ...diffdata])
    // const workBook = XLSX.utils.book_new()
    // XLSX.utils.book_append_sheet(workBook, workSheet, targeSheetName)

    // const excelData = XLSX.write(workBook, { bookType: 'xlsx', type: 'buffer' })
    // fs.writeFileSync(`${scriptDir}/i18n-${targeSheetLangColumnName}-compare.xlsx`, excelData)

    // generate diff remote missing file
    const header2 = ['key', `${`cn`}-missed`, 'en-missed'] // 表头

    const workSheet2 = XLSX.utils.aoa_to_sheet([header2, ...remoteDataMissed])
    const workBook2 = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workBook2, workSheet2, targeSheetName)

    const excelData2 = XLSX.write(workBook2, { bookType: 'xlsx', type: 'buffer' })
    const missingFileName = `${scriptDir}/i18n-${targeSheetLangColumnName}-remote-missing.xlsx`
    fs.writeFileSync(missingFileName, excelData2)
    console.log(`云端缺失文件:`, `${process.cwd()}/${missingFileName}`)
    console.log(`云端缺失数目:`, remoteDataMissed.length)
  })
}
