import CryptoJS from 'crypto-js'

const MattsPublicKeyString = 'snra6h1yki7fvgzo'
const IVParameter = '46kd4xzguyt1xs3c'

/**
 * AES 加密
 * params: 加密参数
 * keepOriginString: 是否保留原始字符串
 * key: 16 位秘钥
 * iv：16 位秘钥向量
 * * */
export function encryptAES(
  params: string,
  keepOriginString?: boolean,
  key?: string | CryptoJS.lib.WordArray,
  iv?: CryptoJS.lib.WordArray
) {
  params = keepOriginString ? params : JSON.stringify(params)
  const data = CryptoJS.enc.Utf8.parse(params)
  key = CryptoJS.enc.Utf8.parse(MattsPublicKeyString)
  iv = CryptoJS.enc.Utf8.parse(IVParameter)

  // 后端采用 CBC/Pkcs7
  let encrypted = CryptoJS.AES.encrypt(data, key, { iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })

  return encrypted.toString()
}

/**
 * AES 解密
 * params: 加密参数
 * key: 16 位秘钥
 * iv：16 位秘钥向量
 * * */
export function decryptedAES(
  params: string | CryptoJS.lib.CipherParams,
  key?: string | CryptoJS.lib.WordArray,
  iv?: CryptoJS.lib.WordArray
) {
  key = CryptoJS.enc.Utf8.parse(MattsPublicKeyString)
  iv = CryptoJS.enc.Utf8.parse(IVParameter)

  // 后端采用 CBC/Pkcs7
  let decrypt = CryptoJS.AES.decrypt(params, key, { iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)

  return decryptedStr.toString()
}
