/*
 * @Author: zhongw@corp.21cn.com 
 * @Date: 2018-06-05 10:31:01 
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-10-15 12:28:28
 */

/* eslint-disable padded-blocks */
/**
 * 同步父窗口和 iframe 的 vue-router 状态
 */

// import { setLang } from './lang'
import { iframeReady, isMobile } from './index'

window.syncPath = function (dir) {
  const router = window.vueRouter
  const isInIframe = window !== window.top
  const currentDir = router.history.current.path
  const pathParts = currentDir.split('/')
  let lang = pathParts[0]
  if (currentDir[0] === '/') {
    lang = pathParts[1]
  }
//如果不是frame内部，也不是在手机端，则更新iframe的path
  if (!isInIframe && !isMobile) {
    const iframe = document.querySelector('iframe')
    if (iframe) {
      iframeReady(iframe, () => {
        iframe.contentWindow.changePath(lang, currentDir)
      })
    }
    // setLang(lang)
  } else if (isInIframe) {
    window.top.changePath(lang, currentDir)
  }
}

window.changePath = function (lang, path = '') {
  // console.log('????',window!==window.top,window.vueRouter)
  window.vueRouter.replace(path)
}
