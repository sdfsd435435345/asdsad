/**
 * 列表空数据
 */
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import cn from 'classnames'
import styles from '../index.module.css'

interface CommonListEmptyProps {
  imageName?: string
  text?: string
  className?: string
  hidden?: boolean
}

function CommonListEmpty(props: CommonListEmptyProps) {
  return (
    <div
      className={cn(styles.scoped, {
        // 可让图片不闪烁
        hidden: props.hidden,
      })}
    >
      <div className={cn('empty', props.className || 'py-40')}>
        <Icon name={props.imageName || 'no_data_icon'} hasTheme isRemoteUrl className="img" />
        <span className="text">{props.text || '暂无数据'}</span>
      </div>
    </div>
  )
}
export default CommonListEmpty
