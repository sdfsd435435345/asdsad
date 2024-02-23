import { t } from '@lingui/macro'

function checkIsIphone() {
  let userAgent = navigator.userAgent
  return userAgent.match(/iphone/i)
}

export { checkIsIphone }
