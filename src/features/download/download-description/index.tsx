import styles from './index.module.css'

const title = () => 'title'
const description = () => 'description'

function DownloadDescription() {
  return (
    <div className={styles.scoped}>
      <span>{title()}</span>
      <span>{description()}</span>
    </div>
  )
}

export default DownloadDescription
