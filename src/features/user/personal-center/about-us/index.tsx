import { useEffect, useState } from 'react'
import { Cell, Image } from 'react-vant'
import { link } from '@/helper/link'
import NavBar from '@/components/navbar'
import { useLayoutStore } from '@/store/layout'
import Icon from '@/components/icon'
import styles from './index.module.css'

interface ColumnDataType {
  appUrl: string
  homeColumnName: string
  homeColumnCd: string
  webUrl: string
  helpCenterId: number
  isWeb: number
  isLink: number
  isParent: number
  lanTypeCd: string
  parentId: number
  id: number
}

interface ChildColumnsType extends ColumnDataType {
  iconName: string
  link: string
}

export default function UserPersonalCenterAboutUs() {
  const [columnData, setColumnData] = useState<ColumnDataType>()
  const [linkList, setLinkList] = useState<Array<ChildColumnsType>>([])
  const { layoutProps } = useLayoutStore()

  /** 后端没有返回 icon */
  const iconList = ['user_about_policy', 'user_about_protocol', 'user_about_rate']

  const { columnsDataByCd } = useLayoutStore() || {}

  const getColumnList = async () => {
    const cacheData = columnsDataByCd?.about_us

    let childColumns: Array<ChildColumnsType> = []
    if (cacheData && cacheData?.childColumns?.length > 0) {
      cacheData.childColumns.forEach((v, i) => {
        if (v.isWeb === 1) {
          childColumns.push({
            ...v,
            iconName: iconList[i],
            link: `/support/article/${v.helpCenterId}`,
          })
        }
      })
      setLinkList(childColumns)
    }

    setColumnData(columnsDataByCd.about_us as unknown as ColumnDataType)
  }

  useEffect(() => {
    getColumnList()
  }, [columnsDataByCd])

  return (
    <div className={`about-us ${styles.scoped}`}>
      <div className="about-us-wrap">
        <NavBar title={columnData?.homeColumnName} />

        <div className="icon">
          <Image src={layoutProps?.imgWebLogo as string} width={90} height={90} />
          {/* <label>
            {t`user.about_us_01`} {store.userInfo?.version}
          </label> */}
        </div>

        <div className="about-us-item">
          {linkList.map((v, i) => (
            <Cell
              key={i}
              title={v.homeColumnName}
              // icon={<Icon name={v.iconName} hasTheme />}
              rightIcon={<Icon name="next_arrow" hasTheme />}
              onClick={() => link(v.link)}
            />
          ))}
        </div>

        <div className="introduction">
          <div className="title">
            <label>{columnData?.homeColumnName}</label>
          </div>
          <div className="text">
            <p>{layoutProps?.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
