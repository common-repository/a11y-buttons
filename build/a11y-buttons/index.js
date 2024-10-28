!function(){"use strict";var e,t={222:function(){var e=window.wp.blocks,t=window.wp.element,n=window.wp.i18n,o=window.wp.blockEditor,r=window.wp.components;const l=["a11y-buttons/a11y-button","core/spacer"],a=[["a11y-buttons/a11y-button",{content:(0,n.__)("Skip to content","a11y-buttons"),action:"skip-to-content"}],["a11y-buttons/a11y-button",{content:(0,n.__)("Toggle high contrast","a11y-buttons"),action:"toggle-high-contrast"}]],{SVG:i,G:u,Rect:c,Path:s}=wp.components;var p=(0,t.createElement)(i,{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24"},(0,t.createElement)(u,null,(0,t.createElement)(c,{fill:"none",height:"24",width:"24"})),(0,t.createElement)(u,null,(0,t.createElement)(s,{d:"M20.5,4c-2.61,0.7-5.67,1-8.5,1S6.11,4.7,3.5,4L3,6c1.86,0.5,4,0.83,6,1v12h2v-6h2v6h2V7c2-0.17,4.14-0.5,6-1L20.5,4z M12,4c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,4,12,4z M7,24h2v-2H7V24z M11,24h2v-2h-2V24z M15,24h2v-2h-2V24z"}))),h=JSON.parse('{"u2":"a11y-buttons/a11y-buttons"}');(0,e.registerBlockType)(h.u2,{edit:function(i){const{name:u,attributes:c,setAttributes:s}=i,p=c.layout||(t=>{const n=(0,e.getBlockSupport)(t,"__experimentalLayout");return null==n?void 0:n.default})(u),h=(0,o.useBlockProps)(),b=(0,o.useInnerBlocksProps)(h,{allowedBlocks:l,template:a,templateLock:!1,__experimentalAppenderTagName:"li",__experimentalLayout:p});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(r.PanelBody,{title:(0,n.__)("Icon display","a11y-buttons")},(0,t.createElement)(r.__experimentalToggleGroupControl,{label:(0,n.__)("Configure the icon display position","a11y-buttons"),value:c.iconDisplay,help:(0,n.__)("Decide if the buttons icon should appear aside it or never appear at all.","a11y-buttons"),onChange:e=>s({iconDisplay:e}),isBlock:!0,hideLabelFromVision:!0},(0,t.createElement)(r.__experimentalToggleGroupControlOption,{value:"left",label:(0,n.__)("Left","a11y-buttons")}),(0,t.createElement)(r.__experimentalToggleGroupControlOption,{value:"none",label:(0,n.__)("No icon","a11y-buttons")}),(0,t.createElement)(r.__experimentalToggleGroupControlOption,{value:"right",label:(0,n.__)("Right","a11y-buttons")})))),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("ul",b)))},save:function(){const e=o.useBlockProps.save(),n=o.useInnerBlocksProps.save(e);return(0,t.createElement)("ul",n)},icon:p})}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,o),l.exports}o.m=t,e=[],o.O=function(t,n,r,l){if(!n){var a=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],l=e[s][2];for(var i=!0,u=0;u<n.length;u++)(!1&l||a>=l)&&Object.keys(o.O).every((function(e){return o.O[e](n[u])}))?n.splice(u--,1):(i=!1,l<a&&(a=l));if(i){e.splice(s--,1);var c=r();void 0!==c&&(t=c)}}return t}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[n,r,l]},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={2:0,60:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,l,a=n[0],i=n[1],u=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(u)var s=u(o)}for(t&&t(n);c<a.length;c++)l=a[c],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(s)},n=self.webpackChunka11y_buttons=self.webpackChunka11y_buttons||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=o.O(void 0,[60],(function(){return o(222)}));r=o.O(r)}();