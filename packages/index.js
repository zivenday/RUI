/*
 * @Author: zhongw@corp.21cn.com
 * @Date: 2018-06-12 15:38:26
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-07-17 10:26:09
 */
import RButton from './button'
import RLead from './lead'
import RCashBulk from './cash-bulk'
import RCashBulkGroup from './cash-bulk-group'
import RTable from './table'
import RInput from './input'
import RForm from './form'
import RFormItem from './form-item'
import MessageBox from './message'
import RButtonGroup from './button-group'
import RTag from './tag'
import RDialog from './dialog'
import RAutoComplete from './auto-complete'
import RIcon from './icon'
import RTabs from './tabs'
import RTabPane from './tab-pane'
import RRadio from './radio'
import RCheckbox from './checkbox'
import RCheckboxButton from './checkbox-button'
import RCheckboxGroup from './checkbox-group'
import Lazyload from './lazyload'
import RCarousel from './carousel'
import RCarouselItem from './carousel-item'
import RPageNavbar from './page-navbar'
import RPayBottombar from './pay-bottombar'
import RCountBar from './count-bar'
import NoticeBox from './notice'
import RAddressGrounp from './address-group'
import RAddress from './address'
import RBottomPop from './bottom-pop'
import RSimpleSku from './simple-sku'
import RRegionChoose from './region-choose'
import RProduct from './product'
import RSkuCard from './sku-card'

const components = [
  RButton,
  RButtonGroup,
  RLead,
  RCashBulk,
  RCashBulkGroup,
  RTable,
  RInput,
  RForm,
  RFormItem,
  RTag,
  RDialog,
  RAutoComplete,
  RIcon,
  RTabs,
  RTabPane,
  RCheckbox,
  RCheckboxButton,
  RCheckboxGroup,
  RRadio,
  RCarousel,
  RCarouselItem,
  RPageNavbar,
  RPayBottombar,
  RCountBar,
  RAddress,
  RAddressGrounp,
  RBottomPop,
  RSimpleSku,
  RRegionChoose,
  RProduct,
  RSkuCard
  // RCollapseTransition
]

const install = function (Vue, opts = {}) {
  // if (install.installed)
  window.onload = function () {
    require('viewport-units-buggyfill').init({ hacks: window.viewportUnitsBuggyfillHacks })
  }
  components.map(component => {
    Vue.component(component.name, component)
  })
  Vue.use(Lazyload)
  Vue.prototype.$alert = MessageBox.alert
  Vue.prototype.$confirm = MessageBox.confirm
  Vue.prototype.$loading = MessageBox.loading
  Vue.prototype.$notice = NoticeBox.notice
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  RButton,
  RLead,
  RCashBulk,
  RCashBulkGroup,
  RTable,
  RInput,
  RForm,
  RFormItem,
  RTag,
  RDialog,
  RIcon,
  RTabs,
  RTabPane,
  RRadio,
  RCheckbox,
  RCheckboxButton,
  RCheckboxGroup,
  Lazyload,
  RCarousel,
  RCarouselItem,
  MessageBox,
  RPageNavbar,
  RPayBottombar,
  RCountBar,
  NoticeBox,
  RAddress,
  RAddressGrounp,
  RBottomPop,
  RSimpleSku,
  RRegionChoose,
  RProduct,
  RSkuCard
}

export default {
  install
}
