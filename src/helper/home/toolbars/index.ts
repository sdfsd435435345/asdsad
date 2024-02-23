import { getAllTools, getAllToolsCategories } from '@/apis/home'
import { FormattedAllTools } from '@/typings/api/home/toolbars'
import { YapiGetV1HomeFunctionAllListData } from '@/typings/yapi/HomeFunctionAllV1GetApi'
import { YapiGetV1HomeFunctionTypeListData } from '@/typings/yapi/HomeFunctionTypeV1GetApi'

function formatToolsData(categories: YapiGetV1HomeFunctionTypeListData[], tools: YapiGetV1HomeFunctionAllListData[]) {
  return categories.map(each => {
    return {
      category: each.name,
      data: tools
        .filter(tool => tool.typeId === each.typeId)
        .map(tool => {
          return {
            ...tool,
            editable: true,
          }
        }),
    }
  })
}

function getFormattedAllTools(): Promise<FormattedAllTools> {
  return new Promise((resolve, reject) => {
    const allReq = Promise.all([getAllToolsCategories({}), getAllTools({})])
    allReq
      .then(allRes => {
        const catRes = allRes[0].data || []
        const toolsRes = allRes[1].data || []
        const formatted = formatToolsData(catRes, toolsRes)
        resolve(formatted)
      })
      .catch(e => reject(e))
  })
}

export { getFormattedAllTools, formatToolsData }
