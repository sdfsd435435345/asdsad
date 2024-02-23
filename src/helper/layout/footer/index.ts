import { TlayoutProps } from '@/typings/api/layout'
import {
  YapiGetV1HomeColumnGetListChildColumnsListColumnsDatasData,
  YapiGetV1HomeColumnGetListColumnsDatasData,
} from '@/typings/yapi/HomeColumnGetListV1GetApi'
import { pick } from 'lodash'

const settings = 'common_settings'

function extractFooterData(layoutProps?: TlayoutProps) {
  if (layoutProps) {
    const footer = pick(layoutProps, ['groupConfigDatas', 'columnsDatas', 'webCopyright', 'businessName'])
    footer.columnsDatas = recursiveFilter(footer.columnsDatas!, col => col.isApp === 1).filter(
      col => col.homeColumnCd !== settings
    )
    return footer
  }
}

function recursiveFilter(columnsDatas: YapiGetV1HomeColumnGetListColumnsDatasData[], filterFn: any) {
  if (!columnsDatas) return []
  const output: YapiGetV1HomeColumnGetListColumnsDatasData[] = []
  columnsDatas.forEach(col => {
    col.childColumns = recursiveFilter(
      col.childColumns as unknown as YapiGetV1HomeColumnGetListColumnsDatasData[],
      filterFn
    ) as unknown as YapiGetV1HomeColumnGetListChildColumnsListColumnsDatasData[]
    if (filterFn(col)) output.push(col)
  })
  return output
}

function recursiveColumnMap(columnsDatas: YapiGetV1HomeColumnGetListColumnsDatasData[]) {
  let mapped = {}

  function recursiveSearch(columns: YapiGetV1HomeColumnGetListColumnsDatasData[]) {
    if (!columns || columns.length === 0) return
    columns.forEach(col => {
      recursiveSearch(col.childColumns as unknown as YapiGetV1HomeColumnGetListColumnsDatasData[])
      if (col.homeColumnCd) mapped[col.homeColumnCd] = col
    })
  }

  recursiveSearch(columnsDatas)

  return mapped
}

export { extractFooterData, recursiveColumnMap }
