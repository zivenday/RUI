/*
 * @Author: zhongw@corp.21cn.com
 * @Date: 2018-06-12 15:38:26
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-06-12 18:05:33
 */

import RButton from '../packages/button/index.js'
import RLead from '../packages/lead/index.js'
import RCashBulk from '../packages/cash-bulk/index.js'
import RCashBulkGroup from '../packages/cash-bulk-group/index.js'
import RTable from '../packages/table/index.js'
import RInput from '../packages/input/index.js'
import RForm from '../packages/form/index.js'
import RFormItem from '../packages/form-item/index.js'
import MessageBox from '../packages/message/index.js'
import RButtonGroup from '../packages/button-group/index.js'
import RTag from '../packages/tag/index.js'
import RDialog from '../packages/dialog/index.js'
import RAutoComplete from '../packages/auto-complete/index.js'
import RIcon from '../packages/icon/index.js'
import RTabs from '../packages/tabs/index.js'
import RTabPane from '../packages/tab-pane/index.js'
import RRadio from '../packages/radio/index.js'
import RCheckbox from '../packages/checkbox/index.js'
import RCheckboxButton from '../packages/checkbox-button/index.js'
import RCheckboxGroup from '../packages/checkbox-group/index.js'

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
