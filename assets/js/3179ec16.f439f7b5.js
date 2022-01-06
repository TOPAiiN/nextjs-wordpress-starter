"use strict";(self.webpackChunk_webdevstudios_docs=self.webpackChunk_webdevstudios_docs||[]).push([[314],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1736:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={title:"Gravity Forms"},l=void 0,p={unversionedId:"backend/gravity-forms",id:"backend/gravity-forms",title:"Gravity Forms",description:"This document will explain how to enable Gravity Forms with the Next.js WordPress Starter.",source:"@site/docs/backend/gravity-forms.md",sourceDirName:"backend",slug:"/backend/gravity-forms",permalink:"/nextjs-wordpress-starter/docs/backend/gravity-forms",editUrl:"https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/canary/docs/backend/gravity-forms.md",tags:[],version:"current",lastUpdatedBy:"Greg Rickaby",lastUpdatedAt:1641478807,formattedLastUpdatedAt:"1/6/2022",frontMatter:{title:"Gravity Forms"},sidebar:"tutorialSidebar",previous:{title:"Comments",permalink:"/nextjs-wordpress-starter/docs/backend/comments"},next:{title:"Menus",permalink:"/nextjs-wordpress-starter/docs/backend/menus"}},c=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Backend Setup",id:"backend-setup",children:[{value:"Enable the Gravity Forms REST API",id:"enable-the-gravity-forms-rest-api",children:[],level:3},{value:"Turn off error displays",id:"turn-off-error-displays",children:[],level:3},{value:"Ensure WordPress is accessible from the internet",id:"ensure-wordpress-is-accessible-from-the-internet",children:[],level:3}],level:2},{value:"Frontend Setup",id:"frontend-setup",children:[{value:"Using Gravity Forms",id:"using-gravity-forms",children:[],level:3},{value:"Submitting a Gravity Form entry",id:"submitting-a-gravity-form-entry",children:[],level:3}],level:2}],d={toc:c};function u(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document will explain how to enable Gravity Forms with the Next.js WordPress Starter."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"You will need to have the following WordPress plugins installed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.gravityforms.com/"},"Gravity Forms")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://packagist.org/packages/webdevstudios/wds-headless-gravityforms"},"WDS Headless Gravity Forms"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"These plugins should have been installed when you ran ",(0,o.kt)("inlineCode",{parentName:"p"},"composer install")," during the initial ",(0,o.kt)("a",{parentName:"p",href:"/docs/backend#step-2-install-theme-and-plugins"},"Backend Setup"),".")),(0,o.kt)("h2",{id:"backend-setup"},"Backend Setup"),(0,o.kt)("h3",{id:"enable-the-gravity-forms-rest-api"},"Enable the Gravity Forms REST API"),(0,o.kt)("p",null,"The Gravity Forms REST API must be enabled separately from the WordPress REST API."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Under "Forms", click "Settings".'),(0,o.kt)("li",{parentName:"ol"},'Click "REST API", then click the "Enable" checkbox')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot",src:r(5621).Z})),(0,o.kt)("h3",{id:"turn-off-error-displays"},"Turn off error displays"),(0,o.kt)("p",null,"The Gravity Forms plugin will throw PHP warnings under many valid circumstances. These errors do not affect the actual submission of the form, but they will cause errors in the Javascript frontend."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Turn off error displays in ",(0,o.kt)("inlineCode",{parentName:"strong"},"php.ini"),".")," If you are using Local, this can be found in ",(0,o.kt)("inlineCode",{parentName:"li"},"conf/php/php.ini.hbs")," in the site folder. Check lines 16-24 for these settings."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Turn off ",(0,o.kt)("inlineCode",{parentName:"strong"},"WP_DEBUG")," if it is enabled.")," This is in your ",(0,o.kt)("inlineCode",{parentName:"li"},"wp-config.php")," file.")),(0,o.kt)("p",null,"If you get an error involving ",(0,o.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin"),' or "The string did not match the expected pattern", then this is likely the culprit.'),(0,o.kt)("h3",{id:"ensure-wordpress-is-accessible-from-the-internet"},"Ensure WordPress is accessible from the internet"),(0,o.kt)("p",null,"The Gravity Forms submission process requires the Javascript frontend to be able to access the WordPress API directly. It will not work if WordPress is behind a firewall or otherwise restricted in access."),(0,o.kt)("h2",{id:"frontend-setup"},"Frontend Setup"),(0,o.kt)("h3",{id:"using-gravity-forms"},"Using Gravity Forms"),(0,o.kt)("p",null,"To display a Gravity Form, simply use the Gravity Form block. The Next.js starter will pull the information from GraphQL and render the form."),(0,o.kt)("p",null,"The Gravity Form block component is a simple wrapper around the ",(0,o.kt)("inlineCode",{parentName:"p"},"GravityForm")," component found in ",(0,o.kt)("inlineCode",{parentName:"p"},"components/molecules/GravityForm"),". Both are designed to work with information from GraphQL."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"GravityForm")," component itself uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"Form")," component from ",(0,o.kt)("inlineCode",{parentName:"p"},"components/molecules/form")," which uses the ",(0,o.kt)("a",{parentName:"p",href:"https://formik.org/docs/overview"},"Formik")," library. The individual fields are rendered from components in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Fields")," folder with the components being chosen in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Fields")," component itself."),(0,o.kt)("p",null,"If a field does not have a corresponding component, a message will be displayed on the frontend. Create a new component and add it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Fields")," component."),(0,o.kt)("h3",{id:"submitting-a-gravity-form-entry"},"Submitting a Gravity Form entry"),(0,o.kt)("p",null,"The process required to successfully submit a Gravity Form is a little complicated due to the potential presence of a file upload field. The process works as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"User submits the form which triggers the ",(0,o.kt)("inlineCode",{parentName:"li"},"onSubmit")," handler in ",(0,o.kt)("inlineCode",{parentName:"li"},"GravityForm"),"."),(0,o.kt)("li",{parentName:"ol"},"The component first fetches the Next.js endpoint at ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/wp/getWPUrl")," in order to get the URL of the original WordPress instance."),(0,o.kt)("li",{parentName:"ol"},"The component translates the Formik output into a ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData"},"FormData")," object."),(0,o.kt)("li",{parentName:"ol"},"The form is submitted as a ",(0,o.kt)("inlineCode",{parentName:"li"},"multipart/form-data")," request to the Gravity Forms API."),(0,o.kt)("li",{parentName:"ol"},"If there is an error, it is shown to the user using the ",(0,o.kt)("inlineCode",{parentName:"li"},"formFeedback")," state variable."),(0,o.kt)("li",{parentName:"ol"},"If the form was submitted successfully, the success message from Gravity Forms is shown. This can include rich HTML.")),(0,o.kt)("p",null,"Ideally, this should just work. Check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/backend"},"Backend Setup")," section first\nif issues arise."))}u.isMDXComponent=!0},5621:function(e,t,r){t.Z=r.p+"assets/images/screenshot-setup-gravity-forms-6405744eef12a846fc071c9ba8fa385f.png"}}]);