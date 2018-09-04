'use strict';

exports.__esModule = true;
exports.default = {
  methods: {
    pxToview: function pxToview(val) {
      var type = Object.prototype.toString.call(val);

      var reg = new RegExp(/^(-|\+)?\d+(\.\d+)?px$/);
      if (type === '[object Undefined]') {
        return val;
      } else if (type === '[object String]' && !reg.test(val)) {
        return val;
      } else if (type === '[object Object]') {
        var o = val;
        for (var key in o) {
          o[key] = this.pxToview(o[key]);
        }
        return o;
      } else if (type === '[object Number]' || reg.test(val)) {
        var value = reg.test(val) ? val.split('px')[0] : val;
        return 100 * value / document.documentElement.clientWidth + 'vw';
      }
    }
  }
};