/* eslint-disable */
import { google } from 'googleapis'
import fs from 'fs'
import XLSX from 'xlsx'

const projectPath = `scripts/i18n-update/excel-to-json`

// Set the ID of the public Google Sheet you want to export
const spreadsheetId = '1RIq47-i_3Il51YxWPByqHhpzFvFPJ29zlbSND4c9D5M'

// 目前是公开的翻译文件，任何 google api key 都可以访问
const apiKey = 'AIzaSyAI80e5ICCFPbJp3LjDqHsxJnBbJRAx6Rk' // from Leo's google account
const exportSheets = ['H5-Fastpay']

export function exportRemoteSheetToExcel() {
  return new Promise((rev, rej) => {
    console.log('开始下载...')
    // Create a new instance of the Google Sheets API
    const sheets = google.sheets({ version: 'v4' })

    // Get the sheet data
    sheets.spreadsheets
      .get({
        spreadsheetId,
        includeGridData: true,
        key: apiKey,
      })
      .then(response => {
        // Extract the sheet data
        const sheetData = response.data
        const workBook = XLSX.utils.book_new()

        sheetData.sheets?.forEach((sheet, index) => {
          const data: any = []
          const sheetName = sheet.properties?.title || ''
          if (!exportSheets.includes(sheetName)) return

          const sheetData = sheet.data as any
          const gridData = sheetData[0].rowData || []
          gridData.forEach(row => {
            if (row.values) {
              const newRow: any = []
              // Iterate over the cells of each row
              row.values.forEach(cell => {
                // Add the cell value to the Excel content
                //   excelContent += `${cell.userEnteredValue?.stringValue || ''}\t`
                newRow.push(cell.userEnteredValue?.stringValue || '')
              })

              data.push(newRow)
            }
          })

          //   console.log("🚀 ~ file: google-sheet.ts:46 ~ sheetData.sheets?.forEach ~ data:", data[1][1])
          const workSheetNew = XLSX.utils.aoa_to_sheet(data)
          XLSX.utils.book_append_sheet(workBook, workSheetNew, `${sheetName}`)
        })

        const excelData = XLSX.write(workBook, { bookType: 'xlsx', type: 'buffer' })
        const exportFile = `${projectPath}/export.xlsx`
        fs.writeFileSync(exportFile, excelData)

        console.log('下载完成:', `${process.cwd()}/${exportFile}`)
        rev(true)
      })
      .catch(err => {
        console.error('The API returned an error:', err)
        throw err
      })
  })
}

exportRemoteSheetToExcel()
