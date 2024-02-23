import styles from './index.module.css'

function Skeleton() {
  return (
    <div className={styles.scoped}>
      <div className="card">
        <div className="conten">
          <div className="box1">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <div className="box2"></div>
          <div className="box3"></div>
          <div className="box4"></div>
          <div className="box5"></div>
        </div>
      </div>
    </div>
  )
}

export default Skeleton
