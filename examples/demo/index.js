/* eslint-disable semi,space-before-function-paren */
// This file is auto gererated by build/bin/build-entry.js
// import './common';

// import progress from 'nprogress';

// function asyncWrapper(component) {
//   return function(r) {
//     // progress.start();
//     component(r).then(() => {
//       // progress.done();
//     }).catch(() => {
//       // progress.done();
//     });
//   };
// }

// function componentWrapper(component, name) {
//   component = component.default;
//   component.name = name;
//   return component;
// }
const helloword = () => import('./pages/HelloWorld.vue')
const test = () => import('./pages/test.vue')
const demoIndex = () => import('./pages/index.vue')
const inputs = () => import('./pages/inputs.vue')
export default {
  'helloword': helloword,
  'demoIndex': demoIndex,
  'inputs': inputs,
  'test': test
};
