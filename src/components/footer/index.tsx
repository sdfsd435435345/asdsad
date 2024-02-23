import Link from '@/components/link'
import Icon from '@/components/icon'
import { useCommonStore } from '@/store/common'
import { usePageContext } from '@/hooks/use-page-context'
import classNames from 'classnames'
import { t } from '@lingui/macro'
import styles from './index.module.css'

function Footer({ isShow }: { isShow: boolean }) {
  // const pageContext = usePageContext()
  const { isFusionMode } = useCommonStore()

  const mine = {
    title: t`features_agent_invite_operation_index_5101486`,
    icon: 'my_icon',
    routes: ['/personal-center'],
    hoverIcon: 'my_icon',
  }
  const home = {
    title: t`components_footer_index_fr6jwknjdw`,
    icon: 'wallet_icon',
    routes: ['/'],
    hoverIcon: 'wallet_icon',
  }
  const c2c = {
    title: t`features_market_market_quatation_common_market_favorites_editing_draggable_list_index_5101064`,
    icon: 'market_icon',
    routes: ['/c2c/trade'],
    hoverIcon: 'market_icon',
  }
  const card = {
    title: t`components_footer_index_pibhjeagmk`,
    icon: 'credit_card_icon',
    routes: ['/credit-card/my-card'],
    hoverIcon: 'credit_card_icon',
  }

  const tabBars = [home, c2c, mine]
  if (!isShow) {
    return null
  }
  // const pathname = pageContext.path.split('?')[0]
  // console.log(pathname,tabBars, 'pathnamepathnamepathnamepathname');
  
  return (
    <footer className={styles.scoped}>
      <div className="inner-content">
        {tabBars.map(item => {
          return (
            <div
              className={classNames('tab-bar-box', {
                'is-active': true,
              })}
              key={item.routes[0]}
            >
              <Link href={item.routes[0]}>
                <div className={'tab-bar-content'}>
                  <Icon
                    className="tab-bar-icon"
                    hasTheme={!true}
                    name={true ? item.hoverIcon : item.icon}
                  />
                  {item.title}
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
