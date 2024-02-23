# securityUtils

> 安全相关工具类

```js

import { securityUtils } from'@nbit-utils'
```

## getSecurityUrl

```
/**
 * 获取安全的 url 防御 xss 攻击
 */
export function getSecurityUrl(url) {
  url = decodeURIComponent(url)
  return url.replace(/[\s<>()]*/g, '')
}
```

## getSecuritySingleMap

```
/**
 * 针对单层级对象进行 xss 防御
 */
export function getSecuritySingleMap(obj) {
  const res = {}
  Object.keys(obj).forEach(k => {
    res[k] = getSecurityUrl(obj[k])
  })
  return res as any
}

```
