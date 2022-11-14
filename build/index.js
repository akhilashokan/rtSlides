!function(){"use strict";var e,t={840:function(){var e=window.wp.blocks,t=window.wp.element,n=window.wp.i18n,l=window.wp.blockEditor,r=window.wp.components,a=window.React,o=JSON.parse('{"u2":"rtslides/rtslide"}');(0,e.registerBlockType)(o.u2,{edit:function(e){let{attributes:o,setAttributes:s}=e;const i=(0,l.useBlockProps)();(0,a.useEffect)((()=>{fetch(o.link).then((e=>e.json())).then((e=>{console.log(e),s({data:e})}))}),[o.link]);const c=(0,a.useRef)();return(0,t.createElement)("div",i,(0,t.createElement)("h1",{style:{fontSize:"2rem"},title:"This heading is only visible in editor"},"rtSlides"),o.data?"":(0,t.createElement)("h2",null,"...loading"),o.data&&(0,t.createElement)("div",{className:"rt_slides"},(0,t.createElement)("div",{className:"rt_wrapper",ref:c},o.data&&o.data.map(((e,n)=>(console.log(e),(0,t.createElement)("div",{className:"rt_slide"},(0,t.createElement)("header",null,(0,t.createElement)("h2",{style:{fontSize:o.font}},e.title.rendered)),(0,t.createElement)("img",{src:e.episode_featured_image})))))),(0,t.createElement)("div",{className:"rt_navigation"},(0,t.createElement)("span",{className:"rt_nav_left",style:{borderRightColor:o.btnColor},accessKey:"left"}),(0,t.createElement)("span",{className:"rt_nav_right",style:{borderLeftColor:o.btnColor},accessKey:"right"}))),(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(r.PanelBody,{title:(0,n.__)("Data Url"),initialOpen:!0},(0,t.createElement)(r.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(r.TextControl,{label:(0,n.__)("Data url"),value:o.link,onChange:e=>{s({link:e})},help:(0,n.__)("data fetch location")}))),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(r.TextControl,{label:(0,n.__)("Font Size"),value:o.font,onChange:e=>{s({font:e})},help:(0,n.__)("content font size")}))),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)("legend",null,(0,n.__)("Button Color")),(0,t.createElement)(l.ColorPalette,{value:o.btnColor,onChange:e=>{s({btnColor:e})}}))))))},save:function(e){let{attributes:n}=e;const r=l.useBlockProps.save();return(0,t.createElement)("div",r,(0,t.createElement)("div",{className:"rt_slides"},(0,t.createElement)("div",{className:"rt_wrapper"},n.data.map(((e,l)=>(0,t.createElement)("div",{className:"rt_slide ",key:l},(0,t.createElement)("header",null,(0,t.createElement)("h2",{className:"rt_title",style:{fontSize:n.font}},(0,t.createElement)("a",{target:"_blank",rel:"noopener",href:e.link},e.title.rendered)),(0,t.createElement)("span",null,new Date(e.date).toLocaleDateString())),(0,t.createElement)("img",{className:"rt_img",src:e.episode_featured_image}))))),(0,t.createElement)("div",{className:"rt_navigation"},(0,t.createElement)("span",{className:"rt_nav_left",style:{borderRightColor:n.btnColor},accessKey:"left"}),(0,t.createElement)("span",{className:"rt_nav_right",style:{borderLeftColor:n.btnColor},accessKey:"right"}))))}})}},n={};function l(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,l),a.exports}l.m=t,e=[],l.O=function(t,n,r,a){if(!n){var o=1/0;for(m=0;m<e.length;m++){n=e[m][0],r=e[m][1],a=e[m][2];for(var s=!0,i=0;i<n.length;i++)(!1&a||o>=a)&&Object.keys(l.O).every((function(e){return l.O[e](n[i])}))?n.splice(i--,1):(s=!1,a<o&&(o=a));if(s){e.splice(m--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[n,r,a]},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};l.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,o=n[0],s=n[1],i=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(r in s)l.o(s,r)&&(l.m[r]=s[r]);if(i)var m=i(l)}for(t&&t(n);c<o.length;c++)a=o[c],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(m)},n=self.webpackChunkstarter_block=self.webpackChunkstarter_block||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=l.O(void 0,[431],(function(){return l(840)}));r=l.O(r)}();