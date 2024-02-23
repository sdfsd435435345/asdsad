import { t } from '@lingui/macro'
import { Toast } from 'react-vant'
/**
 * 复制功能，后面改成插件
 * @param address 复制地址
 */
const copyCoinAddress = (address, message) => {
  const createInput = document.createElement('input')
  createInput.value = address
  document.body.appendChild(createInput)
  createInput.select()
  document.execCommand('Copy')
  createInput.remove()
  Toast.info(message || t`user.secret_key_01`)
}

export { copyCoinAddress }
