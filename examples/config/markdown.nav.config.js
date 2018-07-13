/*
 * @Author: zhongw@corp.21cn.com 
 * @Date: 2018-06-28 17:41:03 
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-07-02 15:57:49
 */
/* eslint-disable */
module.exports = {
  'zh-CN': {
    header: {
      logo: {
        image: 'https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png',
        title: 'Vant',
        href: 'http://www.youzanyun.com/zanui'
      },
      nav: {
        lang: {
          text: 'En',
          from: 'zh-CN',
          to: 'en-US'
        },
        github: 'https://github.com/youzan/vant'
      }
    },
    nav: [
      {
        name: '开发指南',
        groups: [
          {
            list: [
              {
                path: '/index',
                title: '首页',
                noExample: true
              },
              {
                path: '/intro',
                title: '介绍',
                noExample: true
              },
              {
                path: '/quickstart',
                title: '快速上手',
                noExample: true
              }
            ]
          }
        ]
      },
      {
        name: '组件',
        showInMobile: true,
        groups: [
          {
            groupName: '测试',
            list: [
              {
                path: '/test',
                title: 'test-测试'
              }
            ]
          },
          {
            groupName: '基础组件',
            list: [
              {
                path: '/layout',
                title: 'Layout - 布局'
              }
            ]
          },
          {
            groupName: '输入与选择',
            list: [
              {
                path: '/checkbox',
                title: 'Checkbox - 复选框'
              },
              {
                path: '/inputs',
                title: 'Input - 输入框'
              },
              {
                path: '/page-navbar',
                title: 'PageNavbar - 页面切换导航栏'
              }, {
                path: '/notice',
                title: 'Notice - 通知顶栏'
              }, {
                path: '/bottom-pop',
                title: '底部弹框'
              },{
                path:'/message',
                title:'提示，对话框'
              },{
                path:'/region-choose',
                titel:'区域三级底部弹框'
              }
            ]
          },
          {
            groupName: '通知与交互',
            list: [
              {
                path: '/dialog',
                title: 'Dialog - 对话框'
              },
              {
                path: '/lazyload',
                title: 'Lazyload - 缓加载图片'
              }, {
                path: '/carousel',
                title: 'Carousel - 轮播图'
              }
            ]
          },
          // {
          //   groupName:'特殊组件',
          //   list:[

          //   ]
          // },
          {
            groupName: '业务组件',
            list: [
              {
                path: '/购物选择框',
                title: 'Buy - 购物选择框'
              }, {
                path: '/pay-bottombar',
                title: 'PayBottombar - 支付底栏'
              }, {
                path: '/count-bar',
                title: 'CountBar - 商品计数栏'
              }, {
                path: '/address',
                title: 'AddressRadio-地址选择列表'
              }, {
                path: '/simple-sku',
                title: 'SimpleSku - 商品套餐确定'
              }, {
                path: '/product',
                title: 'product - 商品展示页'
              }, {
                path: '/sku-card',
                title: 'SkuCard - 商品套餐卡片'
              }
            ]
          }
        ]
      }
    ]
  },
  'en-US': {
    header: {
      logo: {
        image: 'https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png',
        title: 'Vant',
        href: 'http://www.youzanyun.com/zanui'
      },
      nav: {
        lang: {
          text: '中文',
          from: 'en-US',
          to: 'zh-CN'
        },
        github: 'https://github.com/youzan/vant'
      }
    },
    nav: [
      {
        name: 'Essentials',
        groups: [
          {
            list: [
              {
                path: '/intro',
                title: 'Introduction',
                noExample: true
              },
              {
                path: '/quickstart',
                title: 'Quickstart',
                noExample: true
              },
              {
                path: '/changelog',
                title: 'Changelog',
                noExample: true
              },
              {
                path: '/built-in-style',
                title: 'Built-in style'
              },
              {
                path: '/theme',
                title: 'Custom Theme',
                noExample: true
              },
              {
                path: '/demo',
                title: 'Demo pages',
                noDocument: true,
                noExample: true
              },
              {
                path: '/i18n',
                title: 'Internationalization',
                noExample: true
              }
            ]
          }
        ]
      },
      {
        name: 'Components',
        showInMobile: true,
        groups: [
          {
            groupName: 'Basic Components',
            list: [
              {
                path: '/layout',
                title: 'Layout'
              },
              {
                path: '/badge',
                title: 'Badge'
              },
              {
                path: '/button',
                title: 'Button'
              },
              {
                path: '/cell',
                title: 'Cell'
              },
              {
                path: '/circle',
                title: 'Circle'
              },
              {
                path: '/collapse',
                title: 'Collapse'
              },
              {
                path: '/icon',
                title: 'Icon'
              },
              {
                path: '/image-preview',
                title: 'ImagePreview'
              },
              {
                path: '/lazyload',
                title: 'Lazyload'
              },
              {
                path: '/list',
                title: 'List'
              },
              {
                path: '/loading',
                title: 'Loading'
              },
              {
                path: '/nav-bar',
                title: 'NavBar'
              },
              {
                path: '/notice-bar',
                title: 'NoticeBar'
              },
              {
                path: '/pagination',
                title: 'Pagination'
              },
              {
                path: '/panel',
                title: 'Panel'
              },
              {
                path: '/popup',
                title: 'Popup'
              },
              {
                path: '/progress',
                title: 'Progress'
              },
              {
                path: '/stepper',
                title: 'Stepper'
              },
              {
                path: '/steps',
                title: 'Steps'
              },
              {
                path: '/swipe',
                title: 'Swipe'
              },
              {
                path: '/tab',
                title: 'Tab'
              },
              {
                path: '/tabbar',
                title: 'Tabbar'
              },
              {
                path: '/tag',
                title: 'Tag'
              },
              {
                path: '/waterfall',
                title: 'Waterfall'
              }
            ]
          },
          {
            groupName: 'Form Components',
            list: [
              {
                path: '/checkbox',
                title: 'Checkbox'
              },
              {
                path: '/field',
                title: 'Field'
              },
              {
                path: '/number-keyboard',
                title: 'NumberKeyboard'
              },
              {
                path: '/password-input',
                title: 'PasswordInput'
              },
              {
                path: '/radio',
                title: 'Radio'
              },
              {
                path: '/search',
                title: 'Search'
              },
              {
                path: '/switch',
                title: 'Switch'
              },
              {
                path: '/uploader',
                title: 'Uploader'
              }
            ]
          },
          {
            groupName: 'Action Components',
            list: [
              {
                path: '/actionsheet',
                title: 'Actionsheet'
              },
              {
                path: '/datetime-picker',
                title: 'DatetimePicker'
              },
              {
                path: '/dialog',
                title: 'Dialog'
              },
              {
                path: '/picker',
                title: 'Picker'
              },
              {
                path: '/pull-refresh',
                title: 'PullRefresh'
              },
              {
                path: '/toast',
                title: 'Toast'
              }
            ]
          },
          {
            groupName: 'Advanced Components',
            list: [
              {
                path: '/cell-swipe',
                title: 'CellSwipe'
              },
              {
                path: '/switch-cell',
                title: 'SwitchCell'
              },
              {
                path: '/tree-select',
                title: 'TreeSelect'
              }
            ]
          },
          {
            groupName: 'Business Components',
            list: [
              {
                path: '/address-edit',
                title: 'AddressEdit'
              },
              {
                path: '/address-list',
                title: 'AddressList'
              },
              {
                path: '/area',
                title: 'Area'
              },
              {
                path: '/card',
                title: 'Card'
              },
              {
                path: '/contact',
                title: 'Contact'
              },
              {
                path: '/coupon',
                title: 'Coupon'
              },
              {
                path: '/goods-action',
                title: 'GoodsAction'
              },
              {
                path: '/submit-bar',
                title: 'SubmitBar'
              },
              {
                path: '/sku',
                title: 'Sku'
              }
            ]
          }
        ]
      }
    ]
  }
};
