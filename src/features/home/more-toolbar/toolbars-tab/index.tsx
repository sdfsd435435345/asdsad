import { useAllTools } from '@/hooks/features/home/toolbars'
import { Tabs } from 'react-vant'
import GenericToolbar from '../generic-toolbar'

function ToolbarsTab() {
  const { tools: allTools, apiStatus } = useAllTools()
  if (allTools.length <= 0) return null
  return (
    <Tabs ellipsis={false}>
      {allTools.map(
        (each, index) =>
          each.data.length > 0 && (
            <Tabs.TabPane key={index} title={each.category}>
              {allTools
                .slice(index)
                .map(
                  tool =>
                    tool.data.length > 0 && (
                      <GenericToolbar key={tool.category} title={tool.category} tools={tool.data} />
                    )
                )}
            </Tabs.TabPane>
          )
      )}
    </Tabs>
  )
}

export default ToolbarsTab
