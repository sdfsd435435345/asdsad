/**
 * 生成 uuid
 * 参考自 https://github.com/tangqipeng/uuid-js/blob/master/uuid.js
 */

// eslint-disable-next-line no-bitwise
const hex = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)

const uuidGen = (prefix = 'jkgj-') => `${prefix}${hex()}${hex()}-${hex()}-${hex()}-${hex()}-${hex()}${hex()}${hex()}`

export default uuidGen
