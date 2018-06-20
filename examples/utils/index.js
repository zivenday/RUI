function iframeReady (iframe, callback) {
  const doc = iframe.contentDocument || iframe.contentWindow.document
  
  const interval = () => {
    console.log('3333',iframe.contentWindow,iframe)
    if (iframe.contentWindow.changePath) {
      callback()
    } else {
      setTimeout(() => {
        interval()
      }, 50)
    }
  }
  console.log(',,,,,,', doc.readyState)
  if (doc.readyState === 'complete') {
    interval()
  } else {
    iframe.onload = interval
  }
}

const ua = navigator.userAgent.toLowerCase()
const isMobile = /ios|iphone|ipod|ipad|android/.test(ua)

export {
  isMobile,
  iframeReady
}
