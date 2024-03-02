// import { WalletCoinList } from '@/features/assets/wallet/wallet-coin-list'
import WalletHeaderCard from '@/features/assets/wallet/wallet-header-card'
import WalletTabsList from '@/features/assets/wallet/wallet-tabs-list'
import { Divider } from 'react-vant'
import { useEffect } from 'react'
import { useAssetsStore } from '@/store/assets/spot'
import { usePersonalCenterStore } from '@/store/user/personal-center'
import styles from './index.module.css'

export function Page() {
  const { fetchCoinRate } = useAssetsStore().assetsModule
  const { getFiatCurrencyData } = usePersonalCenterStore()
  useEffect(() => {
    fetchCoinRate()
    getFiatCurrencyData()
  }, [])
  return (
    <div className={styles.scoped}>
      <WalletHeaderCard />
      <WalletTabsList />
      <Divider />
      {/* <WalletCoinList /> */}
    </div>
  )
}
