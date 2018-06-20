import Vue from 'vue'

/** ElementUI component common definition */
export declare class RComponent extends Vue {
  /** Install component into Vue */
  static install (vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type RComponentSize = 'large' | 'medium' | 'small' | 'mini'

/** Horizontal alignment */
export type RHorizontalAlignment = 'left' | 'center' | 'right'