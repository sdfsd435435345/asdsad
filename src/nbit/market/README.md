# marketUtils

> 市场行情相关工具类

``` js
import { marketUtils } from 'nbit-utils'

```

## getColorClassByPrice

```tsx title="计算两个值相对涨跌"
/**
 * 计算两个值相对涨跌
 * @param price 当前价格
 * @param target 目标价格，可空，如果不传就是和 0 进行比较
 * @returns 'text-buy_up_color' | 'text-sell_down_color' | ''
 */
export function getColorClassByPrice(price?: number | string, target: number | string = 0): string {
  if (!price || price === '--' || (!target && target !== 0) || target === '--') {
    return ''
  }
  const _price = getSafeDecimal(price)
  const _targetPrice = getSafeDecimal(target)
  if (_price.gt(_targetPrice)) {
    return up_color_class
  } else if (_price.eq(_targetPrice)) {
    return ''
  } else {
    return down_color_class
  }
}

```
