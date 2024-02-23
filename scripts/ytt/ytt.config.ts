import { defineConfig } from 'nbit-ytt'
import path from 'path'

import { getName, deleteFilesSync } from './utils'

const targetFolder = path.resolve('src/typings/yapi')

// 删除本地所有文件 yapi 目录下的文件，和后端完全同步。默认不删除以免影响其他人的代码
deleteFilesSync(targetFolder)

console.log('输出路径：', targetFolder)

export default defineConfig([
  {
    serverUrl: 'https://yapi.nbttfc365.com/',
    typesOnly: true,
    target: 'typescript',
    reactHooks: {
      enabled: false,
    },
    outputFilePath: interfaceInfo => `${targetFolder}/${getName(interfaceInfo)}.d.ts`,
    dataKey: [],
    projects: [
      {
        // NB mapi/mobile api
        // https://yapi.admin-devops.com/project/44/setting
        token: '4c2afb0b169bcb30820766f8ece8eaca3a8604258a9473ace200031e6ef3912e',
        categories: [
          {
            id: 0,
            getRequestFunctionName(interfaceInfo, changeCase) {
              // 以接口全路径生成请求函数名
              // return changeCase.camelCase(interfaceInfo.path)

              // 若生成的请求函数名存在语法关键词报错、或想通过某个关键词触发 IDE 自动引入提示，可考虑加前缀，如：
              return changeCase.camelCase(`Yapi_${interfaceInfo.method}_${interfaceInfo.path}_api`)

              // 若生成的请求函数名有重复报错，可考虑将接口请求方式纳入生成条件，如：
              // return changeCase.camelCase(`${interfaceInfo.method}_${interfaceInfo.path}`)
            },
          },
        ],
      },
      {
        // C2C
        // https://yapi.nbttfc365.com/project/73/setting
        token: 'b0e520946972e04500a2f02841dc0d83c3bb05f30453992b94a671798865f009',
        categories: [
          {
            id: 0,
            getRequestFunctionName(interfaceInfo, changeCase) {
              // 以接口全路径生成请求函数名
              // return changeCase.camelCase(interfaceInfo.path)

              // 若生成的请求函数名存在语法关键词报错、或想通过某个关键词触发 IDE 自动引入提示，可考虑加前缀，如：
              return changeCase.camelCase(`Yapi_${interfaceInfo.method}_${interfaceInfo.path}_api`)

              // 若生成的请求函数名有重复报错，可考虑将接口请求方式纳入生成条件，如：
              // return changeCase.camelCase(`${interfaceInfo.method}_${interfaceInfo.path}`)
            },
          },
        ],
      },

      {
        // Fastpay
        // https://yapi.nbttfc365.com/project/77/setting
        token: '20af66e2d93b4814235175adfcbc68f3cdbba7407ba2cd4997399d070e56f555',
        categories: [
          {
            id: 0,
            getRequestFunctionName(interfaceInfo, changeCase) {
              // 以接口全路径生成请求函数名
              // return changeCase.camelCase(interfaceInfo.path)

              // 若生成的请求函数名存在语法关键词报错、或想通过某个关键词触发 IDE 自动引入提示，可考虑加前缀，如：
              return changeCase.camelCase(`Yapi_${interfaceInfo.method}_${interfaceInfo.path}_api`)

              // 若生成的请求函数名有重复报错，可考虑将接口请求方式纳入生成条件，如：
              // return changeCase.camelCase(`${interfaceInfo.method}_${interfaceInfo.path}`)
            },
          },
        ],
      },
      //
      // {
      //   // 存储在 yapi-old 目录下
      //   // TL 对外接口/新网关
      //   // https://yapi.admin-devops.com/project/44/setting
      //   token: 'abb6aabc3eadb2018090221f753dad15ab6d45f1fdad0017c859e693ba7f99c3',
      //   categories: [
      //     {
      //       id: 0,
      //       getRequestFunctionName(interfaceInfo, changeCase) {
      //         // 以接口全路径生成请求函数名
      //         // return changeCase.camelCase(interfaceInfo.path)

      //         // 若生成的请求函数名存在语法关键词报错、或想通过某个关键词触发 IDE 自动引入提示，可考虑加前缀，如：
      //         return changeCase.camelCase(`Yapi_${interfaceInfo.method}_${interfaceInfo.path}_api`)

      //         // 若生成的请求函数名有重复报错，可考虑将接口请求方式纳入生成条件，如：
      //         // return changeCase.camelCase(`${interfaceInfo.method}_${interfaceInfo.path}`)
      //       },
      //     },
      //   ],
      // },
    ],
  },
])
