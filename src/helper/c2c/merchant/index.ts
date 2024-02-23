import { postV1StorageFileUploadApiRequest } from '@/apis/common'
import { ApplicationStatusEnum } from '@/constants/c2c/merchant'
import { formatNumberDecimal } from '@/helper/decimal'
import { AwsS3FolderModuleName, AwsS3FolderModuleUseCaseName } from '@/plugins/aws-s3/constants'
import { awsS3UploadFile } from '@/plugins/aws-s3/utils'
import { baseAssetsStore } from '@/store/assets/spot'
import { YapiGetV1CoinRateListCoinRateData } from '@/typings/yapi/CoinRateV1GetApi'
import { t } from '@lingui/macro'
import Decimal from 'decimal.js'

export async function uploadImageVideo(identityFileAddr, identityVideoAddr) {
  const photoBase64 = identityFileAddr?.[0]?.url
  const videoFile = identityVideoAddr?.[0]?.file

  const pImage = photoBase64 ? postV1StorageFileUploadApiRequest({ image: photoBase64 }) : Promise.resolve()
  const pVideo = videoFile
    ? awsS3UploadFile(videoFile, AwsS3FolderModuleName.c2c, AwsS3FolderModuleUseCaseName.merchant_application)
    : Promise.resolve()

  const [photoApiRes, videoApiRes] = await Promise.all([pImage, pVideo])

  return {
    identityFileAddr: photoApiRes?.data?.url,
    identityVideoAddr: videoApiRes?.url,
  }
}

export function merchantTitleSwitcher(status: ApplicationStatusEnum | undefined, businessName: string | undefined) {
  switch (status) {
    case ApplicationStatusEnum.success:
      return t({
        id: 'modules_c2c_merchant_index_page_rcsdso40hvzktnlkhfnjh',
        values: { 0: businessName },
      })
    case ApplicationStatusEnum.pendingDelete:
      return t`helper_c2c_merchant_index_8uq8nxbqohbexzzogu7jp`
    default:
      return t`modules_c2c_merchant_index_page_5101375`
  }
}

export const isAboveMinFrozeAmount = (
  frozenAmount: number,
  frozenSymbol: string,
  amount?: number,
  selectedSymbol?: string
) => {
  const coinRates = baseAssetsStore.getState().assetsModule.coinRate.coinRate as YapiGetV1CoinRateListCoinRateData[]

  amount = amount || 0
  if (selectedSymbol === frozenSymbol) {
    if (amount >= frozenAmount) {
      return { isValid: true }
    }

    return {
      isValid: false,

      errorMessage: t({
        id: 'helper_c2c_merchant_index_qydiy02wm59wvjgpz2yoq',
        values: { 0: frozenAmount, 1: frozenSymbol },
      }),
    }
  }

  const selectedCoin = coinRates.find(x => String(x.symbol).toUpperCase() === String(selectedSymbol).toUpperCase())

  const frozenCoin = coinRates.find(x => String(x.symbol).toUpperCase() === String(frozenSymbol).toUpperCase())

  if (!selectedCoin || !frozenCoin) {
    return {
      isValid: false,

      errorMessage: t`helper_c2c_merchant_index_8kxfzkzodmfv0itngb5cm`,
    }
  }

  const ratioBytargetSymbol = Number(selectedCoin.usdtRate) / Number(frozenCoin.usdtRate)

  const currentAmountByTargetSymbol = ratioBytargetSymbol * amount

  if (currentAmountByTargetSymbol >= frozenAmount) {
    return { isValid: true }
  }

  const minAmountBySelectedSymbol = frozenAmount * (1 / ratioBytargetSymbol)

  const minAmountBySelectedSymbolWithPresion = formatNumberDecimal(
    minAmountBySelectedSymbol,
    selectedCoin.coinPrecision,
    Decimal.ROUND_CEIL
  )

  return {
    isValid: false,
    minAmountBySelectedSymbolWithPresion,
    errorMessage: t({
      id: 'helper_c2c_merchant_index_qydiy02wm59wvjgpz2yoq',
      values: { 0: minAmountBySelectedSymbolWithPresion, 1: selectedSymbol },
    }),
  }
}

export const checkIsMerchant = (status: ApplicationStatusEnum | undefined) =>
  status === ApplicationStatusEnum.success || status === ApplicationStatusEnum.disable
