/*
 * @Description: undefined
 * @author: zhongw@corp.21cn.com
 * @Date: 2018-07-10 17:35:30
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-07-13 15:30:44
 */
'use strict'
import manager from './manager';
import context from './context';
import scrollUtils from '../utils/scroll';
import { on, off } from '../utils/event';
import Touch from '../utils/touch';
export default {
  mixins: [Touch],
  props: {
    // prevent body scroll
    lockScroll: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    show: {
      handler: function (val) {
        val ? this.openModel() : this.closeModel()
      },
      immediate: true
    }
  },
  created () {
    this._popupId = 'popup-' + manager.plusKey();
  },
  methods: {
    openModel () {
      if (this.lockScroll) {
        on(document, 'touchstart', this.touchStart);
        on(document, 'touchmove', this.onTouchMove);
        if (!context.lockCount) {
          document.body.classList.add('hidden-overflow');
        }
        context.lockCount++;
      }
      manager.open(this)
    },
    closeModel () {
      if (this.lockScroll) {
        context.lockCount--;
        off(document, 'touchstart', this.touchStart);
        off(document, 'touchmove', this.onTouchMove);
        if (!context.lockCount) {
          document.body.classList.remove('hidden-overflow');
        }
      }
      manager.close()
    },
    move () {
      if (this.getContainer) {
        this.getContainer().appendChild(this.$el);
      } else if (this.$parent) {
        this.$parent.$el.appendChild(this.$el);
      }
    },

    onTouchMove (e) {
      this.touchMove(e);
      const direction = this.deltaY > 0 ? '10' : '01';
      const el = scrollUtils.getScrollEventTarget(e.target, this.$el);
      // console.log('target',e.target)
      // console.log('target',this.$el)
      const { scrollHeight, offsetHeight, scrollTop } = el;
      let status = '11';
      // console.log('target',scrollHeight, offsetHeight, scrollTop)
      /* istanbul ignore next */
      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? '00' : '01';
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = '10';
      }

      /* istanbul ignore next */
      if (
        status !== '11' &&
        // this.direction === 'vertical' &&
        !(parseInt(status, 2) & parseInt(direction, 2))
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    },

  }
}