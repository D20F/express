(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c7ed5"],{5367:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"code-layer"},[t._m(0),i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-text-field",{attrs:{counter:10,rules:t.nameRules,label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),i("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"success"},on:{click:t.validate}},[t._v(" Validate ")]),i("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:t.reset}},[t._v(" Reset Form ")]),i("v-btn",{attrs:{color:"warning"},on:{click:t.resetValidation}},[t._v(" Reset Validation ")])],1),i("h2",{staticClass:"h2",attrs:{id:t.point[0].id}},[i("a")]),i("CodeShow",{attrs:{list:t.code[0]},scopedSlots:t._u([{key:"content",fn:function(){return[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[i("v-text-field",{directives:[{name:"regular-phone",rawName:"v-regular-phone",value:["filled"],expression:"['filled']"}],attrs:{label:"检测手机号"},model:{value:t.filled,callback:function(e){t.filled=e},expression:"filled"}}),i("p",{directives:[{name:"copy-select",rawName:"v-copy-select"}]},[t._v(t._s(t.filled))])],1)],1)]},proxy:!0}])})],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",{staticClass:"h1"},[i("a")])}],r=i("3362"),s=[{template:"\n                \n                ",style:"",js:"        \n            ",name:"",title:""}],o=[{id:"point-1",text:"",level:1}],l={name:"",components:{},mixins:[r["a"]],data:function(){return{code:s,point:o,filled:"",valid:!0,name:"",nameRules:[function(t){return/^[1][3,4,5,7,8,9][0-9]{9}$/.test(t)||"Name is required"}],items:["Item 1","Item 2","Item 3","Item 4"]}},computed:{},created:function(){this.$store.dispatch("system/tog_catalogue",this.point)},mounted:function(){},methods:{validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}}},u=l,c=i("2877"),d=i("6544"),f=i.n(d),h=i("8336"),m=i("62ad"),v=(i("4de4"),i("7db0"),i("4160"),i("caad"),i("07ac"),i("2532"),i("159b"),i("5530")),p=i("58df"),_=i("7e2b"),b=i("3206"),w=Object(p["a"])(_["a"],Object(b["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(a){a&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))})):n.valid=i(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(v["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}),V=i("0fd9"),g=i("8654"),$=Object(c["a"])(u,n,a,!1,null,"1e6eba7e",null);e["default"]=$.exports;f()($,{VBtn:h["a"],VCol:m["a"],VForm:w,VRow:V["a"],VTextField:g["a"]})}}]);