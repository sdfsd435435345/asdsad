/**
 * Common validator fn for Form.Item rules - check input exists or not
 * @param _
 * @param value
 * @returns
 */
export function commonFormPhoneFieldValidator(_, value: string) {
  if (value) return Promise.resolve()
  return Promise.reject(new Error('手机号不能为空！'))
}
