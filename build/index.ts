import axios from 'axios'
import { EnvTypesEnum, getEnvS3Url } from '../src/constants/env'

/**
 * 动态获取不同商户、环境下的 s3 相关地址
 */
export async function getEnvUrlConfig(businessId, mode) {
 
}

/**
 * 更具环境、businessId、接口动态注入环境变量
 */
export async function injectEnvConfig(preConfig, mode, businessId = '1') {
  if (mode === 'multibuild') {
    return
  }
  
}
