/*
 * @Author: zhongw@corp.21cn.com
 * @Date: 2018-06-12 15:38:26
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-06-22 15:33:33
 */
import RButton from './button/index.js'
import RLead from './lead/index.js'
import RCashBulk from './cash-bulk/index.js'
import RCashBulkGroup from './cash-bulk-group/index.js'
import RTable from './table/index.js'
import RInput from './input/index.js'
import RForm from './form/index.js'
import RFormItem from './form-item/index.js'
import MessageBox from './message/index.js'
import RButtonGroup from './button-group/index.js'
import RTag from './tag/index.js'
import RDialog from './dialog/index.js'
import RAutoComplete from './auto-complete/index.js'
import RIcon from './icon/index.js'
import RTabs from './tabs/index.js'
import RTabPane from './tab-pane/index.js'
import RRadio from './radio/index.js'
import RCheckbox from './checkbox/index.js'
import RCheckboxButton from './checkbox-button/index.js'
import RCheckboxGroup from './checkbox-group/index.js'

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
  RRadio
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
  Vue.prototype.$alert = MessageBox.alert
  Vue.prototype.$loading = MessageBox.loading
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
  MessageBox
}

export default {
  install
}
