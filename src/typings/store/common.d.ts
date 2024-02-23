import { YapiGetV1OpenapiComCodeGetCodeDetailListData } from "../yapi/OpenapiComCodeGetCodeDetailListV1GetApi"

export type IStoreEnum = {
  codeKey: string
  enums: IEnums[]
  /** 获取默认值函数，规避初始化时多语言未载入的问题 */
  getDefault?: () => IStoreEnum['enums']
}

export type IEnums = {
  label: string
  value: string | number
}