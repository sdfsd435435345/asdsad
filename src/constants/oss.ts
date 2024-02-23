/** fastpay-h5 OSS 地址 */
export const oss_domain_address = 'https://markcoin.oss-ap-southeast-1.aliyuncs.com/fastpay-h5'

/** fastpay-h5 OSS 渐变色 svg 地址 */
export const oss_svg_image_domain_address = 'https://markcoin.oss-ap-southeast-1.aliyuncs.com/fastpay-h5/image/'

/** fastpay-h5 OSS 非渐变色 svg 地址 */
export const oss_svg_domain_address =
  'https://markcoin.oss-ap-southeast-1.aliyuncs.com/fastpay-h5/icon/iconfont_2023_11_20_11_53.js'

/** 国家国旗图片 png 地址 */
export const oss_area_code_image_domain_address = 'https://markcoin.oss-ap-southeast-1.aliyuncs.com/area_code_img/'

/** OSS fastpay-h5 图片下的模块名称 */
export enum OssImgFolderNameEnums {
  'agent' = 'agent',
}

export function getIsNotMonkeyManyMerchantMode() {
  return false
}
