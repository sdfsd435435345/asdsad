import Icon from '@/components/icon'
import styles from './index.module.css'

const CustomerService = () => {
  return (
    <div className={styles.scoped}>
      <div className="customer-service-content">
        <Icon name="nav_service" hasTheme className="customer-service-icon" />
      </div>
    </div>
  )
}
export default CustomerService
