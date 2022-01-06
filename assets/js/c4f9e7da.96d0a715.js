"use strict";(self.webpackChunk_webdevstudios_docs=self.webpackChunk_webdevstudios_docs||[]).push([[310],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8034:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],l={title:"Custom Post Types"},i=void 0,p={unversionedId:"learn/custom-post-types",id:"learn/custom-post-types",title:"Custom Post Types",description:"Our Next.js starter supports Custom Post Types, and includes a sample CPT (Team) as a place to get started.",source:"@site/docs/learn/custom-post-types.md",sourceDirName:"learn",slug:"/learn/custom-post-types",permalink:"/nextjs-wordpress-starter/docs/learn/custom-post-types",editUrl:"https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/canary/docs/learn/custom-post-types.md",tags:[],version:"current",lastUpdatedBy:"Greg Rickaby",lastUpdatedAt:1641478807,formattedLastUpdatedAt:"1/6/2022",frontMatter:{title:"Custom Post Types"},sidebar:"tutorialSidebar",previous:{title:"Creating Content",permalink:"/nextjs-wordpress-starter/docs/learn/creating-content"},next:{title:"Settings Page",permalink:"/nextjs-wordpress-starter/docs/learn/settings-page"}},c=[{value:"Workflow",id:"workflow",children:[],level:2}],u={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Our Next.js starter supports Custom Post Types, and includes a sample CPT (",(0,a.kt)("a",{parentName:"p",href:"https://nextjs-wordpress-starter.vercel.app/team"},"Team"),") as a place to get started."),(0,a.kt)("h2",{id:"workflow"},"Workflow"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Register a Custom Post Type"),(0,a.kt)("li",{parentName:"ol"},"Create a new folder in the ",(0,a.kt)("inlineCode",{parentName:"li"},"/pages")," directory of the Next.js WordPress Starter"),(0,a.kt)("li",{parentName:"ol"},"Name the folder to match your CPT slug (e.g, if your CPT slug was ",(0,a.kt)("inlineCode",{parentName:"li"},"products"),", name the folder ",(0,a.kt)("inlineCode",{parentName:"li"},"/products"),")"),(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes"},"catch-all route file")," named ",(0,a.kt)("inlineCode",{parentName:"li"},"[[...slug]].js")),(0,a.kt)("li",{parentName:"ol"},"Build your query inside ",(0,a.kt)("inlineCode",{parentName:"li"},"/products/[[...slug]].js]"))))}d.isMDXComponent=!0}}]);