"use strict";(self.webpackChunk_webdevstudios_docs=self.webpackChunk_webdevstudios_docs||[]).push([[383],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(k,s(s({ref:t},p),{},{components:r})):o.createElement(k,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5744:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),s=["components"],l={sidebar_position:1,title:"Overview"},i=void 0,c={unversionedId:"storybook/index",id:"storybook/index",title:"Overview",description:"The Next.js WordPress Starter comes with a robust Storybook setup, which makes it easy to develop and test components in isolation.",source:"@site/docs/storybook/index.md",sourceDirName:"storybook",slug:"/storybook/",permalink:"/nextjs-wordpress-starter/docs/storybook/",editUrl:"https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/canary/docs/storybook/index.md",tags:[],version:"current",lastUpdatedBy:"Greg Rickaby",lastUpdatedAt:1641478807,formattedLastUpdatedAt:"1/6/2022",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Previews",permalink:"/nextjs-wordpress-starter/docs/frontend/previews"},next:{title:"Builds",permalink:"/nextjs-wordpress-starter/docs/learn/builds"}},p=[{value:"Start Storybook",id:"start-storybook",children:[],level:2},{value:"Component Folder Structure",id:"component-folder-structure",children:[],level:2},{value:"MDX",id:"mdx",children:[],level:2},{value:"Example Story",id:"example-story",children:[],level:2},{value:"Controls",id:"controls",children:[],level:2},{value:"Storybook Configuration",id:"storybook-configuration",children:[],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Next.js WordPress Starter comes with a robust ",(0,a.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/get-started/introduction"},"Storybook")," setup, which makes it easy to develop and test components in isolation."),(0,a.kt)("h2",{id:"start-storybook"},"Start Storybook"),(0,a.kt)("p",null,"To get started, run the following command::"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm run storybook")),(0,a.kt)("p",null,"This should open a browser window at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:6006/"},"http://localhost:6006/")),(0,a.kt)("h2",{id:"component-folder-structure"},"Component Folder Structure"),(0,a.kt)("p",null,"The Next.js WordPress Starter uses Atomic Design to structure its components:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"components\n\u251c\u2500\u2500 atoms\n|  \u251c\u2500\u2500 Breadcrumbs\n|  |  \u251c\u2500\u2500 Breadcrumbs.js\n|  |  \u251c\u2500\u2500 Breadcrumbs.module.css\n|  |  \u251c\u2500\u2500 Breadcrumbs.stories.mdx\n|  |  \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 molecules\n|  \u251c\u2500\u2500 ...\n\u251c\u2500\u2500 organisms\n|  \u251c\u2500\u2500 ...\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"/atoms"),": Components that are used across multiple pages."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"/Breadcrumbs"),": The folder housing all of the Breadcrumb related files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"/Breadcrumbs.js"),": A component that displays a list of breadcrumbs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"/Breadcrumbs.module.css"),": A CSS module for the Breadcrumbs component."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"/Breadcrumbs.stories.mdx"),': The Storybook "story" for the Breadcrumbs component.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"/index.js"),": Contains the export for the Breadcrumbs component.")),(0,a.kt)("p",null,"Learn more about:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/frontend/components-overview"},"Components")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/frontend/component-css-module"},"CSS Modules")," and their use in our starter.")),(0,a.kt)("h2",{id:"mdx"},"MDX"),(0,a.kt)("p",null,"MDX is the syntax Storybook Docs uses to capture long-form Markdown documentation and stories in one file. You can also write pure documentation pages in MDX and add them to Storybook alongside your stories. ",(0,a.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/api/mdx"},"Learn more"),"."),(0,a.kt)("h2",{id:"example-story"},"Example Story"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'// components/molecules/Card/Card.stories.mdx\n\nimport {Canvas, Meta, Story} from \'@storybook/addon-docs/blocks\'\nimport Card from \'./\'\n\n<Meta title="Components/Molecules/Card" component={Card} />\n\n# Card\n\nUse this component to display a card.\n\n<Canvas>\n  <Story name="Component">\n    <Card\n      image={{\n        sourceUrl:\n          \'https://images.unsplash.com/photo-1610991149688-c1321006bcc1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1110&q=60\'\n      }}\n      meta="This is the meta"\n      title="This is the card title"\n      body="This is the card body"\n      timestamp="May 29, 2021"\n      ctaText="Click Here!"\n      ctaUrl="https://google.com"\n    />\n  </Story>\n</Canvas>\n\n')),(0,a.kt)("p",null,"The code above will output a story at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:6006/?path=/story/components-molecules-card--component"),"."),(0,a.kt)("h2",{id:"controls"},"Controls"),(0,a.kt)("p",null,"The controls story will enable ",(0,a.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/essentials/controls#gatsby-focus-wrapper"},"Storybook's controls"),". A controls story looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"## Controls\n\nPlay around with `<Button />` props in the [Canvas tab of the Controls story](?path=/story/design-system-atoms-button--controls).\n\nexport const Template = (args) => <Button {...args} />\n\n<Canvas>\n  <Story\n    name=\"Controls\"\n    args={{\n      text: 'This is a link button',\n      url: 'https://example.com',\n      urlExternal: false,\n      tag: 'button',\n      fluid: false\n    }}\n  >\n    {Template.bind({})}\n  </Story>\n</Canvas>\n")),(0,a.kt)("h2",{id:"storybook-configuration"},"Storybook Configuration"),(0,a.kt)("p",null,"The Next.js WordPress Starter follows a standard Storybook configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},".storybook\n\u251c\u2500\u2500 main.js\n\u251c\u2500\u2500 manager.js\n\u251c\u2500\u2500 preview.js\n\u2514\u2500\u2500 theme.js\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"/main.js"),": The main Storybook configuration file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"/manager.js"),": Configure Storybook features and behavior."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"/preview.js"),": Configure story rendering."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"/theme.js"),": Configure the Storybook theme.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/configure/overview"},"Learn more")," about configuring and extending Storybook."))}d.isMDXComponent=!0}}]);