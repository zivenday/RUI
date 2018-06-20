/* eslint-disable semi,semi,no-multiple-empty-lines,indent,no-trailing-spaces,no-undef,spaced-comment,space-infix-ops,padded-blocks */
import Vue from 'vue'
import Router from 'vue-router'
// eslint-disable-next-line quotes
import '../utils/iframe-router'
import componentDemos from '../demo/index'
import componentDocs from '../markdown/index'
import docConfig from '../config/markdown.nav.config'
Vue.use(Router)

const registerRoute = (isExample) => {
  const routers = []
  Object.keys(docConfig).forEach((lang, index) => {
    // if (isExample) {
    //   routers.push({
    //     path: `/${lang}`,
    //     component: componentDemos['demoIndex'],
    //     meta: { lang }
    //   })
    // } else {
    //   routers.push({
    //     path: `/${lang}`,
    //     redirect: `/${lang}/intro`
    //   })
    // }
    const navs = docConfig[lang].nav || []
    navs.forEach(nav => {
      if (nav.groups) {
        nav.groups.forEach(group => {
          group.list.forEach(page => addRoute(page, lang))
        })
      } else {
        addRoute(nav, lang)
      }
    })
    function addRoute (page, lang) {
      const { path } = page
      if (path) {
        const name = lang + '/' + path.replace('/', '')
        let component
        // 如果是isExample添加demo的路由，否则doc的路由
        if (isExample) {
          // 如果该页面没有模拟demo则统一跳到demo首页
          component = page.noExample ? componentDemos['demoIndex'] : component = componentDemos[path.replace('/', '')]
        }else{
          // console.log('page',page)
          component=componentDocs[name]
        }

        routers.push({
          name,
          component: component,
          path: `/${lang}${path}`,
          meta: {
            lang,
            name: page.title
          }
        })
      }
    }
  })
  return routers
}


export default registerRoute
// [
// {
//   path: '/',
//   name: 'HelloWorld',
//   component: HelloWorld
// },
//   {
//     path: '/test',
//     name: 'test',
//     component: r => require.ensure([], () => r(require('../markdown/test.md')))
//   }
// ]
