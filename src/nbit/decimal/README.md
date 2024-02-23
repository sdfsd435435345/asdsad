# decimalUtils

> 金额计算相关工具类

``` js
import { decimalUtils } from '@nbit-utils'

```

## Importing Required Libraries

```typescript
import Decimal from 'decimal.js'
import { isString, isNumber } from 'lodash'
```

## Function: setPrecision

```typescript
/**
 * 设置精度位 - 最大有效字位数
 * @param val
 */
export function setPrecision(val) {
  Decimal.set({ precision: val })
}
```

## Function: getSafeCurrency

```typescript
/**
 * 将安全金额的字符串还原回原始数字字符串，方便和后续的 decimal 计算
 * @param safeCurrency 安全金额的字符串
 * @returns 去除掉其他符号的数字字符串
 */
export function getSafeCurrency(safeCurrency: string | number | undefined | null): string | number {
  // function body
}
```

## Function: getSafeCalcMethodDecimal

```typescript
function getSafeCalcMethodDecimal(instance: Decimal): Decimal {
  // function body
}
```

## Function: getSafeDecimal

```typescript
/** 将值安全转换为 Decimal 数据 */
export function getSafeDecimal(value: Decimal.Value): Decimal {
  // function body
}
```

## Object: SafeCalcUtil

```typescript
/**
 * 添加安全的计算工具
 */
export const SafeCalcUtil = {
  // object body
}
```

## Function: formatZeroPrefix

```typescript
/**
 * 处理 '-0' '+0' 场景
 */
export function formatZeroPrefix(value: string, digits?: number) {
  // function body
}
```

## Function: removeDecimalZero

```typescript
/**
 * 去掉小数点后面多余的 0
 * @param val
 */
export const removeDecimalZero = (val: string) => {
  // function body
}
```

## Function: formatNumberDecimal

```typescript
/**
 * 数字格式化 - 按照指定小数点位输出
 * @param data    要截取的数据
 * @param digits 指定小数点位数
 * @param isRound 是否向上约 | 传入具体 Decimal.Rounding 策略
 * @param delPostZero 是否去除末尾 0
 * @returns
 */
export const formatNumberDecimal = (data: any, digits = 2, isRound?: IIsRound, delPostZero?: boolean) => {
  // function body
}
```

## Function: formatObjectNumberByKeys

```typescript
/**
 * 将对象中的某个 key 进行约小数位
 */
export function formatObjectNumberByKeys(obj, keys, offset) {
  // function body
}
```

## Function: formatCurrency

```typescript
/**
 * 资产金额格式化，三位加逗号
 * @param data         要格式化的数据
 * @param digits      保留几位小数
 * @param keepDigits 是否始终保持对应位数的小数，不足补 0
 * @returns
 */
export const formatCurrency = (data: any, digits?: number, keepDigits = true, isRound?: IIsRound) => {
  // function body
}
```

## Function: getDigits

```typescript
/**
 * 获取某个数的小数位
 */
export function getDigits(data) {
  // function body
}
```
