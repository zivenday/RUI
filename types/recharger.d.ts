import Vue from 'vue'
import { RComponent, RComponentSize, RHorizontalAlignment } from './component'

import { RAutocomplete } from './auto-complete'
import { RButton } from './button'
import { RButtonGroup } from './button-group'
import { RLead} from './lead'
import { RCashBulk} from './cash-bulk'
import { RCashBulkGroup} from './cash-bulk-group'
import { RDialog } from './dialog'
import { RForm } from './form'
import { RFormItem } from './form-item'
import { RInput } from './input'
import { RMessage } from './message'
import { RTag } from './tag'

export interface InstallationOptions {
  locale: any,
  i18n: any,
  size: string
}

/** The version of Rement-ui */
export const version: string

/**
 * Install all Rement-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(R)` to install.
 */
export function install (vue: typeof Vue, options: InstallationOptions): void

/** R component common definition */
export type Component = RComponent

/** Component size definition for button, input, etc */
export type ComponentSize = RComponentSize

/** Horizontal alignment */
export type HorizontalAlignment = RHorizontalAlignment

/** Show animation while loading data */
// export const Loading: RLoading

/** Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system levR passive notification. */
export const Message: RMessage

/** Button Component */
export class Button extends RButton {}

/** Button Group Component */
export class ButtonGroup extends RButtonGroup {}

/** Dialog Component */
export class Dialog extends RDialog {}

/** Form Component */
export class Form extends RForm {}

/** Form Item Component */
export class FormItem extends RFormItem {}

/** Input Component */
export class Input extends RInput {}

/** Tag Component */
export class Tag extends RTag {}

/** CashBulk Component */
export class CashBulk extends RCashBulk {}

/** CashBulkGroup Component */
export class CashBulkGroup extends RCashBulkGrop {}

/** Lead Component */
export class Lead extends RLead {}

/** AutoComplete Component */
export class AutoComplete extends RAutoComplete {}