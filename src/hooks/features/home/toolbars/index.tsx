import { getUserTools, updateUserTools } from '@/apis/home'
import { getFormattedAllTools } from '@/helper/home/toolbars'
import useReqeustMarketHelper from '@/hooks/features/market/common/use-request-market'
import { useHomeStore } from '@/store/home'
import { FormattedAllTools, FormattedTools } from '@/typings/api/home/toolbars'
import { useState } from 'react'

function useAllTools() {
  const [tools, settools] = useState<FormattedAllTools>([])

  const { apiStatus, refreshCallback } = useReqeustMarketHelper({
    apiRequest: (resolve, reject) => {
      getFormattedAllTools().then(res => {
        resolve(res)
      })
    },
    setApiData: settools,
  })

  return { tools, apiStatus, refreshCallback }
}

function useUserTools() {
  const [userTools, setuserTools] = useState<FormattedTools>([])
  const { hasToolsUpdated } = useHomeStore()

  const { apiStatus, refreshCallback } = useReqeustMarketHelper({
    apiRequest: (resolve, reject) => {
      getUserTools({}).then(res => {
        if (!res.isOk) reject()

        const addEditable = (res?.data || []).map(each => {
          return {
            ...each,
            editable: true,
          }
        })
        resolve(addEditable)
      })
    },
    setApiData: setuserTools,
    deps: [hasToolsUpdated],
  })

  return { userTools, apiStatus, refreshCallback }
}

function useToolActions() {
  const { updateTools, toggleMoreToolbar, updateToolbarState, ToolbarStates } = useHomeStore()
  return {
    update: (tools: FormattedTools) => {
      const ids = tools.map(tool => tool.id) as unknown as string[]
      updateUserTools({ ids }).then(() => {
        updateTools()
        updateToolbarState(ToolbarStates.Completed)
      })
    },
  }
}

export { useAllTools, useUserTools, useToolActions }
