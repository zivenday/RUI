'use strict';

'use strct';

exports.__esModule = true;

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _tls = require('tls');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _vh = window.innerHeight;
var imageLazyDirective = {};
var finishLoadImage = [];
imageLazyDirective.install = function (Vue) {
  if (Vue.prototype.$isServer) return;
  Vue.directive('lazy', {
    bind: addListener
  });
};
function addListener(el, binding, vnode) {
  window.addEventListener('scroll', function () {
    checkShow(el, binding, vnode);
  });
}
function checkShow(el, binding, vnode) {
  var _elh = el.getBoundingClientRect().top;
  var _fail = vnode.data.attrs.fail;
  var _wait = vnode.data.attrs.waiting;

  if (_elh > _vh) {
    var current = finishLoadImage.find(function (e) {
      return e === binding.value;
    });
    var img = new Image();
    console.log(img.onreadystatechange);
    if (current) {
      el.src = current;
    } else {
      img.src = binding.value;
      img.onload = function () {
        setTimeout(function () {
          el.src = binding.value;
        }, 4000);
      };
    }

    if (_wait) {
      if (!img.complete) {
        el.src = _wait;
      }
    }
    if (_fail) {
      img.onerror = function () {
        el.src = _fail;
      };
    }
  }
}
exports.default = imageLazyDirective;