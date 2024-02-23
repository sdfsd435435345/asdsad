import { Grid } from 'react-vant'
import { ToolItem } from '../tools'
import styles from './index.module.css'

function GenericToolbar(props) {
  const { title, tools } = props

  const renderGridItems = tools.map((tool, index) => <ToolItem key={`${tool.name} ${index}`} {...tool} />)
  return (
    <div className={styles.scoped}>
      <div className="text-text_color_01 mb-4">{title}</div>
      <Grid border={false}>{renderGridItems}</Grid>
    </div>
  )
}

export default GenericToolbar
