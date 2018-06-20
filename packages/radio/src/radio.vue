<template>
    <label class="r-radio" :class="[
      border && radioSize ? 'r-radio--' + radioSize : '',
      { 'is-disabled': isDisabled },
      { 'is-focus': focus },
      { 'is-bordered': border },
      { 'is-checked': model === label }
    ]" role="radio" :aria-checked="model === label" :aria-disabled="isDisabled" :tabindex="tabIndex" @keydown.space.stop.prevent="model = label">
        <span class="r-radio__input" :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }">
            <span class="r-radio__inner"></span>
            <input class="r-radio__original" :value="label" type="radio" v-model="model" @focus="focus = true" @blur="focus = false" @change="handleChange" :name="name" :disabled="isDisabled" tabindex="-1">
        </span>
        <span class="r-radio__label">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>
<script>
import Emitter from 'recharger/src/utils/mixin/emitter';

export default {
    name: 'RRadio',
    mixins: [Emitter],
    inject: {
        elFormItem: {
            default: ''
        }
    },
    componentName: 'RRadio',
    props: {
        value: {},
        label: {},
        disabled: Boolean,
        name: String,
        border: Boolean,
        size: String
    },
    data () {
        return {
            focus: false
        };
    },
    computed: {
        isGroup () {
            let parent = this.$parent;
            while (parent) {
                if (parent.$options.componentName !== 'RRadioGroup') {
                    parent = parent.$parent;
                } else {
                    this._radioGroup = parent;
                    return true;
                }
            }
            return false;
        },
        model: {
            get () {
                return this.isGroup ? this._radioGroup.value : this.value;
            },
            set (val) {
                if (this.isGroup) {
                    this.dispatch('RRadioGroup', 'input', [val]);
                } else {
                    this.$emit('input', val);
                }
            }
        },
        _elFormItemSize () {
            return (this.elFormItem || {}).elFormItemSize;
        },
        radioSize () {
            const temRadioSize = this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
            return this.isGroup
                ? this._radioGroup.radioGroupSize || temRadioSize
                : temRadioSize;
        },
        isDisabled () {
            return this.isGroup
                ? this._radioGroup.disabled || this.disabled
                : this.disabled;
        },
        tabIndex () {
            return !this.isDisabled ? (this.isGroup ? (this.model === this.label ? 0 : -1) : 0) : -1;
        }
    },

    methods: {
        handleChange () {
            this.$nextTick(() => {
                this.$emit('change', this.model);
                this.isGroup && this.dispatch('RRadioGroup', 'handleChange', this.model);
            });
        }
    }
};
</script>
