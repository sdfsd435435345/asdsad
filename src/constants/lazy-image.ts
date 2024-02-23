// s3 匹配图片域名
export const replacementS3 = 'https://newbit-s3.s3.ap-southeast-1.amazonaws.com'
// s3 替换的图片域名
export const patternS3 = 'https://d1xb31o7u724wi.cloudfront.net'
// s3 图片地址后缀
export const compressionS3 = '?x-oss-process=image/format,webp'
// oss 匹配图片域名
export const replacementOss = 'https://markcoin.oss-ap-southeast-1.aliyuncs.com'
// oss 图片地址后缀
export const compressionOss = '?x-oss-process=image/auto-orient,1/quality,q_50'
// 图片类型正则判断
export const imagePatternType = /.(png|jpg|gif|jpeg|webp|svg|gif|svgz)/
