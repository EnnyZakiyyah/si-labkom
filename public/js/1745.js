(self.webpackChunk=self.webpackChunk||[]).push([[1745],{1745:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>O});var n=t(7294),o=t(5482),c=t(9680),a=t(1636),s=t(1329),i=t(8033),l=t(8920),u=t(5893);function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){m(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function m(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,o=!1,c=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(e){o=!0,c=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw c}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return y(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return y(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}const O=function(){var e=(0,a.qt)().props.errors,r=p((0,n.useState)(!1),2),t=r[0],b=r[1],y=p((0,n.useState)({email:"",password:"",remember:!1}),2),O=y[0],d=y[1];function j(e){var r=e.target.name,t="checkbox"===e.target.type?e.target.checked:e.target.value;d((function(e){return f(f({},e),{},m({},r,t))}))}return(0,u.jsxs)("div",{className:"flex items-center justify-center min-h-screen p-6 bg-indigo-900",children:[(0,u.jsx)(o.ZP,{title:"Labkom FMIPA UNS | Login"}),(0,u.jsxs)("div",{className:"w-full max-w-md",children:[(0,u.jsx)(s.Z,{className:"block w-full max-w-xs mx-auto text-white fill-current",height:50}),(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b(!0),c.Inertia.post(route("login"),O,{onFinish:function(){return b(!1)}})},className:"mt-8 overflow-hidden bg-white rounded-lg shadow-xl",children:[(0,u.jsxs)("div",{className:"px-10 py-12",children:[(0,u.jsx)("h1",{className:"text-3xl font-bold text-center",children:"Welcome Back!"}),(0,u.jsx)("div",{className:"w-24 mx-auto mt-6 border-b-2"}),(0,u.jsx)(l.Z,{className:"mt-10",label:"Email",name:"email",type:"email",errors:e.email,value:O.email,onChange:j}),(0,u.jsx)(l.Z,{className:"mt-6",label:"Password",name:"password",type:"password",errors:e.password,value:O.password,onChange:j}),(0,u.jsxs)("div",{className:"flex items-center",children:[(0,u.jsxs)("label",{className:"inline-flex items-center mt-4",htmlFor:"remember",children:[(0,u.jsx)("input",{name:"remember",id:"remember",className:"mr-1",type:"checkbox",checked:O.remember,onChange:j}),(0,u.jsx)("span",{className:"text-sm mt-1",children:"Remember Me"})]}),(0,u.jsx)(a.ZQ,{className:"text-sm text-blue-500 hover:text-blue-700 whitespace-no-wrap no-underline hover:underline ml-auto",href:route("password.request"),as:"a",children:"Forgot Your Password?"})]})]}),(0,u.jsx)("div",{className:"flex items-center justify-between px-10 py-4 bg-gray-100 border-t border-gray-200",children:(0,u.jsx)(i.Z,{type:"submit",loading:t,className:"btn-indigo",children:"Login"})})]})]})]})}},8033:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});t(7294);var n=t(5893);function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i=function(e){var r=e.loading,t=e.className,o=e.children,a=s(e,["loading","className","children"]);return(0,n.jsxs)("button",c(c({disabled:r,className:"focus:outline-none flex items-center ".concat(t)},a),{},{children:[r&&(0,n.jsx)("div",{className:"btn-spinner mr-2"}),o]}))}},1329:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});t(7294);var n=t(5893);function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const s=function(e){return(0,n.jsx)("img",c(c({},e),{},{src:"/img/LogoWebLabkom.png",alt:"LogoLabkom"}))}},8920:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});t(7294);var n=t(5893);function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i=function(e){var r=e.label,t=e.name,o=e.className,a=e.errors,i=void 0===a?[]:a,l=s(e,["label","name","className","errors"]);return(0,n.jsxs)("div",{className:o,children:[r&&(0,n.jsxs)("label",{className:"form-label",htmlFor:t,children:[r,":"]}),(0,n.jsx)("input",c(c({id:t,name:t},l),{},{className:"form-input ".concat(i.length?"error":""),autoComplete:"off"})),i&&(0,n.jsx)("div",{className:"form-error",children:i[0]})]})}}}]);
//# sourceMappingURL=1745.js.map?id=cd572ad00b522bfde219