import FingerprintJS from '@fingerprintjs/fingerprintjs'
import { baseUserStore } from '@/store/user'

export async function getDeviceId() {
  const fingerprint = await FingerprintJS.load().then(fp => fp.get())
  const useStore = baseUserStore.getState()
  useStore.setDeviceId(fingerprint.visitorId)
}
