(self.webpackChunk=self.webpackChunk||[]).push([[9062],{9062:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>j});var n=t(7294),a=t(5482),s=t(6455),l=t.n(s),o=t(9680),i=t(1636),c=t(2567),u=t(6783),d=t(8033),h=t(8920),m=t(6526),f=t(5172),x=t(5893);function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){g(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function g(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function w(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,s=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(t.push(l.value),!r||t.length!==r);n=!0);}catch(e){a=!0,s=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw s}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return b(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}const j=function(){var e=(0,i.qt)().props,r=e.jasainstallasi,t=e.mahasiswa,s=e.software,p=e.errors,b=w((0,n.useState)(!1),2),j=b[0],y=b[1],O=w((0,n.useState)({id_mahasiswa:r.id_mahasiswa||"",laptop:r.laptop||"",kelengkapan:r.kelengkapan||"",tanggal:r.tanggal||"",id_software:r.id_software||"",jenis:r.jenis||"",keterangan:r.keterangan||"",jam_ambil:r.jam_ambil||""}),2),N=O[0],k=O[1];function z(e){var r=e.target.name,t=e.target.value;k((function(e){return v(v({},e),{},g({},r,t))}))}return(0,x.jsx)(c.Z,{children:(0,x.jsxs)("div",{children:[(0,x.jsx)(a.ZP,{title:"Labkom FMIPA UNS | Jasa Installasi | Ubah Data"}),(0,x.jsxs)("h1",{className:"mb-8 font-bold text-3xl",children:[(0,x.jsx)(i.ZQ,{href:route("JasaInstallasi.index"),className:"text-indigo-600 hover:text-indigo-700",as:"a",children:"Jasa Installasi"}),(0,x.jsx)("span",{className:"text-indigo-600 font-medium mx-2",children:"/"}),r.mahasiswa.nama_mahasiswa]}),r.deleted_at&&(0,x.jsx)(m.Z,{onRestore:function(){l().fire({title:"Apakah Kamu Yakin?",text:"Data Installasi Akan Segera Dipulihkan!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes"}).then((function(e){e.value&&o.Inertia.post(route("JasaInstallasi.restore",{"Jasa Installasi":r.id}))}))},children:"This installasi has been deleted."}),(0,x.jsx)("div",{className:"bg-white rounded shadow overflow-hidden max-w-full mb-8",children:(0,x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y(!0),o.Inertia.post(route("JasaInstallasi.update",r.id),N).then((function(){return y(!1)}))},children:[(0,x.jsxs)("div",{className:"p-8 -mr-6 -mb-8 flex flex-wrap",children:[(0,x.jsxs)(f.Z,{className:"pr-6 pb-8 w-full lg:w-1/2",label:"Mahasiswa",name:"id_mahasiswa",errors:p.id_mahasiswa,value:N.id_mahasiswa,onChange:z,children:[(0,x.jsx)("option",{value:""}),t.map((function(e){var r=e.id,t=e.nama_mahasiswa;return(0,x.jsx)("option",{value:r,children:t},r)}))]}),(0,x.jsx)(h.Z,{className:"pr-6 pb-8 w-full lg:w-1/2",label:"Laptop",name:"laptop",type:"text",errors:p.laptop,value:N.laptop,onChange:z}),(0,x.jsx)(h.Z,{className:"pr-6 pb-8 w-full lg:w-1/2",label:"Tanggal",name:"tanggal",type:"date",errors:p.tanggal,value:N.tanggal,onChange:z}),(0,x.jsxs)(f.Z,{className:"pr-6 pb-8 w-full lg:w-1/2",label:"Jenis",name:"jenis",errors:p.jenis,value:N.jenis,onChange:z,children:[(0,x.jsx)("option",{}),(0,x.jsx)("option",{value:"install",children:"Install Software"}),(0,x.jsx)("option",{value:"service",children:"Service Hardware"})]}),(0,x.jsxs)(f.Z,{className:"pr-6 pb-8 w-full lg:w-1/2",label:"Software",name:"id_software",errors:p.id_software,value:N.id_software,onChange:z,children:[(0,x.jsx)("option",{value:"-"}),s.map((function(e){var r=e.id,t=e.nama_software;return(0,x.jsx)("option",{value:r,children:t},r)}))]}),(0,x.jsx)(h.Z,{className:"pr-6 pb-8 w-full lg:w-1/2",label:"Jam Ambil",name:"jam_ambil",type:"time",errors:p.jam_ambil,value:N.jam_ambil,onChange:z}),(0,x.jsxs)("div",{className:"pr-6 pb-8 w-full lg:w-1/2",children:[(0,x.jsxs)("label",{className:"form-label",htmlFor:"kelengkapan",children:["Kelengkapan",":"]}),(0,x.jsx)("textarea",{name:"kelengkapan",id:"kelengkapan",className:"form-input ".concat(p.length?"error":""),onChange:z,autoComplete:"off",value:N.kelengkapan}),p&&(0,x.jsx)("div",{className:"form-error",children:p[0]})]}),(0,x.jsxs)("div",{className:"pr-6 pb-8 w-full lg:w-1/2",children:[(0,x.jsxs)("label",{className:"form-label",htmlFor:"keterangan",children:["Keterangan",":"]}),(0,x.jsx)("textarea",{name:"keterangan",id:"keterangan",className:"form-input ".concat(p.length?"error":""),onChange:z,autoComplete:"off",value:N.keterangan}),p&&(0,x.jsx)("div",{className:"form-error",children:p[0]})]})]}),(0,x.jsxs)("div",{className:"px-8 py-4 bg-gray-100 border-t border-gray-200 flex items-center",children:[!r.deleted_at&&(0,x.jsx)(u.Z,{onDelete:function(){l().fire({title:"Apakah Kamu Yakin?",text:"Data Installasi Akan Segera Dihapus!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes"}).then((function(e){e.value&&o.Inertia.get(route("JasaInstallasi.destroy",r.id))}))},children:"Hapus"}),(0,x.jsx)(i.ZQ,{href:route("JasaInstallasi.index"),className:"text-indigo-600 hover:text-indigo-700 ml-auto mr-6",as:"a",children:"Kembali"}),(0,x.jsx)(d.Z,{loading:j,type:"submit",className:"btn-indigo",children:"Simpan Data"})]})]})})]})})}},2567:(e,r,t)=>{"use strict";t.d(r,{Z:()=>z});var n=t(7294),a=t(5482),s=t(1636),l=t(4184),o=t.n(l),i=t(9356),c=t(5893);const u=function(e){var r=e.icon,t=e.link,n=e.text,a=route().current(t+"*"),l=o()("w-4 h-4 mr-2",{"text-white fill-current":a,"text-indigo-400 group-hover:text-white fill-current":!a}),u=o()({"text-white":a,"text-indigo-200 group-hover:text-white":!a});return(0,c.jsx)("div",{className:"mb-1",children:(0,c.jsxs)(s.ZQ,{href:route(t),className:"flex items-center group py-2",as:"a",children:[(0,c.jsx)(i.Z,{name:r,className:l}),(0,c.jsx)("div",{className:u,children:n})]})})},d=function(e){var r=e.className;return(0,c.jsxs)("div",{className:r,children:[(0,c.jsx)(u,{text:"Dashboard",link:"Dashboard",icon:"tachometer"}),(0,c.jsx)(u,{text:"Peminjaman Lab",link:"PeminjamanLab.index",icon:"desktop"}),(0,c.jsx)(u,{text:"Peminjaman Alat",link:"PeminjamanAlat.index",icon:"tools"}),(0,c.jsx)(u,{text:"Surat Bebas Labkom",link:"SuratBebasLabkom.index",icon:"file"}),(0,c.jsx)(u,{text:"Jasa Print",link:"JasaPrint.index",icon:"printer"}),(0,c.jsx)(u,{text:"Jasa Installasi",link:"JasaInstallasi.index",icon:"laptop-code"}),(0,c.jsx)("div",{className:"my-4 w-3/4"}),(0,c.jsx)(u,{text:"Laboratorium",link:"Laboratorium.index",icon:"laptop"}),(0,c.jsx)(u,{text:"Alat",link:"Alat.index",icon:"cube"}),(0,c.jsx)(u,{text:"Mahasiswa",link:"Mahasiswa.index",icon:"users"}),(0,c.jsx)(u,{text:"Prodi",link:"Prodi.index",icon:"book-reader"}),(0,c.jsx)(u,{text:"Dosen",link:"Dosen.index",icon:"users"}),(0,c.jsx)(u,{text:"Mata Kuliah",link:"MataKuliah.index",icon:"book-open"}),(0,c.jsx)(u,{text:"Software",link:"Software.index",icon:"calendar-check"}),(0,c.jsx)(u,{text:"User",link:"User.index",icon:"users"})]})};var h=t(6455),m=t.n(h);function f(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,s=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(t.push(l.value),!r||t.length!==r);n=!0);}catch(e){a=!0,s=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw s}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return x(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var p=function(){return(0,c.jsx)("svg",{className:"ml-4 mr-2 flex-shrink-0 w-4 h-4 text-white fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,c.jsx)("path",{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"})})},v=function(e){var r=e.color,t=e.onClick,n=o()("block  w-2 h-2 fill-current",{"text-red-700 group-hover:text-red-800":"red"===r,"text-green-700 group-hover:text-green-800":"green"===r});return(0,c.jsx)("button",{onClick:t,type:"button",className:"focus:outline-none group mr-2 p-2",children:(0,c.jsx)("svg",{className:n,xmlns:"http://www.w3.org/2000/svg",width:"235.908",height:"235.908",viewBox:"278.046 126.846 235.908 235.908",children:(0,c.jsx)("path",{d:"M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"})})})};const g=function(){var e=f((0,n.useState)(!0),2),r=e[0],t=e[1],a=(0,s.qt)().props,l=a.flash,o=a.errors,i=Object.keys(o).length;return(0,n.useEffect)((function(){t(!0)}),[l,o]),l.success&&m().fire({title:"".concat(l.name),text:"".concat(l.success),icon:"success"}),l.error&&m().fire({title:"".concat(l.name),text:"".concat(l.error),icon:"error"}),(0,c.jsx)("div",{children:i>0&&r&&(0,c.jsxs)("div",{className:"mb-8 flex items-center justify-between bg-red-500 rounded max-w-3xl",children:[(0,c.jsxs)("div",{className:"flex items-center",children:[(0,c.jsx)(p,{}),(0,c.jsxs)("div",{className:"py-4 text-white text-sm font-medium",children:[l.error&&l.error,1===i&&"There is one form error",i>1&&"There are ".concat(i," form errors.")]})]}),(0,c.jsx)(v,{onClick:function(){return t(!1)},color:"red"})]})})};var w=t(1329);function b(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,s=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(t.push(l.value),!r||t.length!==r);n=!0);}catch(e){a=!0,s=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw s}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return j(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}const y=function(){var e=b((0,n.useState)(!1),2),r=e[0],t=e[1];return(0,c.jsxs)("div",{className:"bg-indigo-900 md:flex-shrink-0 md:w-64 px-6 py-4 flex items-center justify-between md:justify-center",children:[(0,c.jsx)("a",{href:route("home"),className:"mt-1",children:(0,c.jsx)(w.Z,{className:"text-white fill-current",width:"135",height:"28"})}),(0,c.jsxs)("div",{className:"relative md:hidden",children:[(0,c.jsx)("svg",{onClick:function(){return t(!0)},className:"fill-current text-white w-6 h-6 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,c.jsx)("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})}),(0,c.jsxs)("div",{className:"".concat(r?"":"hidden"," absolute right-0 z-20"),children:[(0,c.jsx)(d,{className:"relative z-20 mt-2 px-8 py-4 pb-2 shadow-lg bg-indigo-800 rounded"}),(0,c.jsx)("div",{onClick:function(){t(!1)},className:"bg-black opacity-25 fixed inset-0 z-10"})]})]})]})};function O(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,s=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(t.push(l.value),!r||t.length!==r);n=!0);}catch(e){a=!0,s=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw s}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return N(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return N(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}const k=function(){var e=(0,s.qt)().props.auth,r=O((0,n.useState)(!1),2),t=r[0],a=r[1];return(0,c.jsxs)("div",{className:"flex items-center justify-between w-full p-4 text-sm bg-white border-b md:py-0 md:px-12 d:text-md",children:[(0,c.jsx)("div",{className:"mt-1 mr-4",children:e.user.name}),(0,c.jsxs)("div",{className:"relative",children:[(0,c.jsxs)("div",{className:"flex items-center cursor-pointer select-none group",onClick:function(){return a(!0)},children:[(0,c.jsxs)("div",{className:"mr-1 text-gray-800 whitespace-no-wrap group-hover:text-indigo-600 focus:text-indigo-600",children:[(0,c.jsx)("span",{children:e.user.first_name}),(0,c.jsx)("span",{className:"ml-1 hidden md:inline",children:e.user.last_name})]}),(0,c.jsx)(i.Z,{className:"w-5 h-5 text-gray-800 fill-current group-hover:text-indigo-600 focus:text-indigo-600",name:"cheveron-down"})]}),(0,c.jsxs)("div",{className:t?"":"hidden",children:[(0,c.jsxs)("div",{className:"absolute top-0 right-0 left-auto z-20 py-2 mt-8 text-sm whitespace-no-wrap bg-white rounded shadow-xl",children:[(0,c.jsx)(s.ZQ,{href:route("User.edit",e.user.id),className:"block px-6 py-2 hover:bg-indigo-600 hover:text-white",as:"a",children:"My Profile"}),(0,c.jsx)(s.ZQ,{href:route("User.index"),className:"block px-6 py-2 hover:bg-indigo-600 hover:text-white",as:"a",children:"Manage Users"}),(0,c.jsx)(s.ZQ,{href:route("logout"),className:"block px-6 py-2 hover:bg-indigo-600 hover:text-white",method:"post",as:"a",children:"Logout"})]}),(0,c.jsx)("div",{onClick:function(){a(!1)},className:"fixed inset-0 z-10 bg-black opacity-25"})]})]})]})};function z(e){var r=e.title,t=e.children;return(0,c.jsxs)("div",{children:[(0,c.jsx)(a.ZP,{titleTemplate:"%s",title:r}),(0,c.jsx)("div",{className:"flex flex-col",children:(0,c.jsxs)("div",{className:"h-screen flex flex-col",children:[(0,c.jsxs)("div",{className:"md:flex",children:[(0,c.jsx)(y,{}),(0,c.jsx)(k,{})]}),(0,c.jsxs)("div",{className:"flex flex-grow overflow-hidden bg-white",children:[(0,c.jsx)(d,{className:"bg-indigo-800 flex-shrink-0 w-64 p-8 hidden md:block overflow-y-auto"}),(0,c.jsxs)("div",{className:"w-full overflow-hidden px-4 py-8 md:p-12 overflow-y-auto",children:[(0,c.jsx)(g,{}),t]})]})]})})]})}},6783:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});t(7294);var n=t(5893);const a=function(e){var r=e.onDelete,t=e.children;return(0,n.jsx)("button",{className:"text-red-600 focus:outline-none hover:underline",tabIndex:"-1",type:"button",onClick:r,children:t})}},9356:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});t(7294);var n=t(5893);const a=function(e){var r=e.name,t=e.className;return"tachometer"===r?(0,n.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"tachometer-alt",className:t,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:(0,n.jsx)("path",{fill:"currentColor",d:"M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"})}):"book-open"===r?(0,n.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"book-open",className:t,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:(0,n.jsx)("path",{fill:"currentColor",d:"M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"})}):"book-reader"===r?(0,n.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"book-reader",className:t,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,n.jsx)("path",{fill:"currentColor",d:"M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z"})}):"bookmark"===r?(0,n.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"bookmark",className:t,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:(0,n.jsx)("path",{fill:"currentColor",d:"M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"})}):"calendar-check"===r?(0,n.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"calendar-check",className:t,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,n.jsx)("path",{fill:"currentColor",d:"M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z"})}):"cube"===r?(0,n.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"cube",className:t,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,n.jsx)("path",{fill:"currentColor",d:"M239.1 6.3l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V129.3c0-20-12.4-37.9-31.1-44.9l-208-78C262 2.2 250 2.2 239.1 6.3zM256 68.4l192 72v1.1l-192 78-192-78v-1.1l192-72zm32 356V275.5l160-65v133.9l-160 80z"})}):"desktop"===r?(0,n.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"desktop",className:t,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:(0,n.jsx)("path",{fill:"currentColor",d:"M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"})}):"file"===r?(0,n.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"file",className:t,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:(0,n.jsx)("path",{fill:"currentColor",d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"})}):"laptop-code"===r?(0,n.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"laptop-code",className:t,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:(0,n.jsx)("path",{fill:"currentColor",d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"})}):"laptop"===r?(0,n.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"laptop",className:t,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:(0,n.jsx)("path",{fill:"currentColor",d:"M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"})}):"tools"===r?(0,n.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"tools",className:t,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,n.jsx)("path",{fill:"currentColor",d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"})}):"apple"===r?(0,n.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 100 100",children:(0,n.jsxs)("g",{fillRule:"nonzero",children:[(0,n.jsx)("path",{d:"M46.173 19.967C49.927-1.838 19.797-.233 14.538.21c-.429.035-.648.4-.483.8 2.004 4.825 14.168 31.66 32.118 18.957zm13.18 1.636c1.269-.891 1.35-1.614.047-2.453l-2.657-1.71c-.94-.607-1.685-.606-2.532.129-5.094 4.42-7.336 9.18-8.211 15.24 1.597.682 3.55.79 5.265.328 1.298-4.283 3.64-8.412 8.088-11.534z"}),(0,n.jsx)("path",{d:"M88.588 67.75c9.65-27.532-13.697-45.537-35.453-32.322-1.84 1.118-4.601 1.118-6.441 0-21.757-13.215-45.105 4.79-35.454 32.321 5.302 15.123 17.06 39.95 37.295 29.995.772-.38 1.986-.38 2.758 0 20.235 9.955 31.991-14.872 37.295-29.995z"})]})}):"book"===r?(0,n.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,n.jsx)("path",{d:"M6 4H5a1 1 0 1 1 0-2h11V1a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1h-7v8l-2-2-2 2V4z"})}):"cheveron-down"===r?(0,n.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,n.jsx)("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})}):"cheveron-right"===r?(0,n.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,n.jsx)("polygon",{points:"12.95 10.707 13.657 10 8 4.343 6.586 5.757 10.828 10 6.586 14.243 8 15.657 12.95 10.707"})}):"dashboard"===r?(0,n.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,n.jsx)("path",{d:"M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"})}):"location"===r?(0,n.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,n.jsx)("path",{d:"M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"})}):"office"===r?(0,n.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 100 100",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M7 0h86v100H57.108V88.418H42.892V100H7V0zm9 64h11v15H16V64zm57 0h11v15H73V64zm-19 0h11v15H54V64zm-19 0h11v15H35V64zM16 37h11v15H16V37zm57 0h11v15H73V37zm-19 0h11v15H54V37zm-19 0h11v15H35V37zM16 11h11v15H16V11zm57 0h11v15H73V11zm-19 0h11v15H54V11zm-19 0h11v15H35V11z"})}):"printer"===r?(0,n.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,n.jsx)("path",{d:"M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2 8v2h2V8H2zm4 0v2h2V8H6z"})}):"shopping-cart"===r?(0,n.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,n.jsx)("path",{d:"M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"})}):"store-front"===r?(0,n.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,n.jsx)("path",{d:"M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"})}):"trash"===r?(0,n.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,n.jsx)("path",{d:"M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"})}):"users"===r?(0,n.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,n.jsx)("path",{d:"M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"})}):null}},8033:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});t(7294);var n=t(5893);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i=function(e){var r=e.loading,t=e.className,a=e.children,l=o(e,["loading","className","children"]);return(0,n.jsxs)("button",s(s({disabled:r,className:"focus:outline-none flex items-center ".concat(t)},l),{},{children:[r&&(0,n.jsx)("div",{className:"btn-spinner mr-2"}),a]}))}},1329:(e,r,t)=>{"use strict";t.d(r,{Z:()=>o});t(7294);var n=t(5893);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const o=function(e){return(0,n.jsx)("img",s(s({},e),{},{src:"/img/LogoWebLabkom.png",alt:"LogoLabkom"}))}},5172:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});t(7294);var n=t(5893);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i=function(e){var r=e.label,t=e.name,a=e.className,l=e.children,i=e.errors,c=void 0===i?[]:i,u=o(e,["label","name","className","children","errors"]);return(0,n.jsxs)("div",{className:a,children:[r&&(0,n.jsxs)("label",{className:"form-label",htmlFor:t,children:[r,":"]}),(0,n.jsx)("select",s(s({id:t,name:t},u),{},{className:"form-select ".concat(c.length?"error":""),children:l})),c&&(0,n.jsx)("div",{className:"form-error",children:c[0]})]})}},8920:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});t(7294);var n=t(5893);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i=function(e){var r=e.label,t=e.name,a=e.className,l=e.errors,i=void 0===l?[]:l,c=o(e,["label","name","className","errors"]);return(0,n.jsxs)("div",{className:a,children:[r&&(0,n.jsxs)("label",{className:"form-label",htmlFor:t,children:[r,":"]}),(0,n.jsx)("input",s(s({id:t,name:t},c),{},{className:"form-input ".concat(i.length?"error":""),autoComplete:"off"})),i&&(0,n.jsx)("div",{className:"form-error",children:i[0]})]})}},6526:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});t(7294);var n=t(9356),a=t(5893);const s=function(e){var r=e.onRestore,t=e.children;return(0,a.jsxs)("div",{className:"max-w-3xl mb-6 p-4 bg-yellow-400 rounded border border-yellow-500 flex items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(n.Z,{name:"trash",className:"flex-shrink-0 w-4 h-4 fill-current text-yellow-800 mr-2"}),(0,a.jsx)("div",{className:"text-yellow-800",children:t})]}),(0,a.jsx)("button",{className:"text-yellow-800 focus:outline-none text-sm hover:underline",tabIndex:"-1",type:"button",onClick:r,children:"Restore"})]})}}}]);
//# sourceMappingURL=9062.js.map?id=aec3c5b168dabdc06fe9