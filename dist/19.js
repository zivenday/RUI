(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"53jB":function(e,a){},jE0B:function(e,a,i){"use strict";i.r(a);var t={data:function(){return{dynamicValidateForm:{domains:[{value:""}],email:""}}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){})},addDomain:function(){this.dynamicValidateForm.domains.push({value:"",key:Date.now()})},removeDomain:function(e){var a=this.dynamicValidateForm.domains.indexOf(e);-1!==a&&this.dynamicValidateForm.domains.splice(a,1)},resetForm:function(e){this.$refs[e].resetFields()}}},n=(i("sS0C"),i("KHd+")),r=Object(n.a)(t,function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",[i("p"),e._v(" "),i("r-lead",[e._v("表单：")]),e._v(" "),i("r-form",{ref:"dynamicValidateForm",attrs:{model:e.dynamicValidateForm,"label-width":40}},[i("r-form-item",{attrs:{prop:"email",label:"邮箱",rules:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur,change"}]}},[i("r-input",{attrs:{inputSize:"small"},model:{value:e.dynamicValidateForm.email,callback:function(a){e.$set(e.dynamicValidateForm,"email",a)},expression:"dynamicValidateForm.email"}})],1),e._v(" "),e._l(e.dynamicValidateForm.domains,function(a,t){return i("r-form-item",{key:a.key,attrs:{label:"域名"+t,prop:"domains."+t+".value",rules:{required:!0,message:"域名不能为空",trigger:"blur"}},scopedSlots:e._u([{key:"default",fn:function(t){return[i("r-input",{attrs:{inputSize:"small"},model:{value:a.value,callback:function(i){e.$set(a,"value",i)},expression:"domain.value"}}),e._v(" "),i("r-button",{attrs:{size:"small"},on:{click:function(i){i.preventDefault(),e.removeDomain(a)}}},[e._v("删除")])]}}])})}),e._v(" "),i("r-form-item",[i("r-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){e.submitForm("dynamicValidateForm")}}},[e._v("提交")]),e._v(" "),i("r-button",{attrs:{size:"small"},on:{click:e.addDomain}},[e._v("新增域名")])],1)],2),e._v(" "),i("p")],1)},[],!1,null,"effb45da",null);a.default=r.exports},sS0C:function(e,a,i){"use strict";var t=i("53jB");i.n(t).a}}]);
//# sourceMappingURL=19.js.map