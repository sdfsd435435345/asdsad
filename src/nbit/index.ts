import * as decimalUtils from './decimal'
import * as marketUtils from './market'
import * as fastUrlUtils from './fast-url'
import * as securityUtils from './security'
import * as envUtils from './env'
import * as vitePlugins from './vite-plugins'

/** 调整默认精度位：运算结果的最大有效位数 */

decimalUtils.setPrecision(40)
export { decimalUtils, marketUtils, fastUrlUtils, securityUtils, envUtils, vitePlugins }
