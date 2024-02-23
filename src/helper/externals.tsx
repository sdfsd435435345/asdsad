import { oss_domain_address } from '@/constants/oss'

/** 全局库列表 (暂存在此文件，后续迁入规范文件) */
const globalLibraryList = [
  {
    /** 极验 */
    tag: 'Geetest',
    link: '/deps/geetest_v3_4_18.js',
  },
]
/** (暂存在此文件，后续迁入规范文件) */
const addGlobalLibrary = () => {
  const fragment = document.createDocumentFragment()
  globalLibraryList.forEach(item => {
    const script = document.createElement('script')
    script.src = `${oss_domain_address}${item.link}`
    fragment.appendChild(script)
  })
  document.head.appendChild(fragment)
}

export { addGlobalLibrary }
