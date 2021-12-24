"use strict";(self.webpackChunk_webdevstudios_nextjs_wordpress_starter=self.webpackChunk_webdevstudios_nextjs_wordpress_starter||[]).push([[518],{17518:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>BlockMediaText});var react=__webpack_require__(67294),Blocks=(__webpack_require__(15218),__webpack_require__(79443)),MediaText=__webpack_require__(30346),formatFocalPoint=__webpack_require__(25741),getBlockStyles=__webpack_require__(33015),prop_types=__webpack_require__(45697),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__(85893);react.createElement;function BlockMediaText(_ref){var anchor=_ref.anchor,backgroundColorHex=_ref.backgroundColorHex,className=_ref.className,focalPoint=_ref.focalPoint,gradientHex=_ref.gradientHex,imageFill=_ref.imageFill,innerBlocks=_ref.innerBlocks,isStackedOnMobile=_ref.isStackedOnMobile,mediaAlt=_ref.mediaAlt,mediaPosition=_ref.mediaPosition,mediaUrl=_ref.mediaUrl,mediaWidth=_ref.mediaWidth,style=_ref.style,textColorHex=_ref.textColorHex,verticalAlignment=_ref.verticalAlignment,mediaTextStyle=(0,getBlockStyles.Z)({backgroundColorHex,gradientHex,textColorHex,style}),gridtemplatecolumns="left"===mediaPosition?mediaWidth+"% 1fr":"1fr "+mediaWidth+"%";mediaTextStyle.gridTemplateColumns=gridtemplatecolumns;var newFocalPoint=imageFill?(0,formatFocalPoint.Z)(focalPoint):{};return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:!!mediaUrl&&(null==innerBlocks?void 0:innerBlocks.length)&&(0,jsx_runtime.jsx)(MediaText.Z,{className,focalPoint:newFocalPoint,id:anchor,image:{url:mediaUrl,alt:mediaAlt},imageFill,mediaLeft:"left"===mediaPosition,mediaWidth,style:mediaTextStyle,stackOnMobile:isStackedOnMobile,verticalAlignment,children:(0,jsx_runtime.jsx)(Blocks.Z,{blocks:innerBlocks})})})}BlockMediaText.defaultProps={media:prop_types_default().shape({mediaPosition:"left"})},BlockMediaText.__docgenInfo={description:"Media & Text Block\n\nThe core Media & Text block from Gutenberg.\n\n@author WebDevStudios\n@param  {object}  props                    The component properties.\n@param  {string}  props.anchor             Optional anchor/id.\n@param  {string}  props.backgroundColorHex The background color\n@param  {string}  props.className          The image class name.\n@param  {object}  props.focalPoint         The focal point coordinates for the image.\n@param  {string}  props.gradientHex        The background gradient hex value.\n@param  {boolean} props.imageFill          Whether to crop image to fill.\n@param  {Array}   props.innerBlocks        The array of inner blocks to display.\n@param  {boolean} props.isStackedOnMobile  Whether to stack media and text on mobile.\n@param  {string}  props.mediaAlt           The image alt attribute.\n@param  {string}  props.mediaPosition      The image position relative to the text.\n@param  {string}  props.mediaUrl           The media URL.\n@param  {number}  props.mediaWidth         The image width.\n@param  {object}  props.style              The style attributes.\n@param  {string}  props.textColorHex       The text color hex value.\n@param  {string}  props.verticalAlignment  Vertical alignment of text.\n@return {Element}                          The Media & Text component.",methods:[],displayName:"BlockMediaText",props:{media:{defaultValue:{value:"PropTypes.shape({\n  mediaPosition: 'left'\n})",computed:!0},required:!1},anchor:{type:{name:"string"},required:!1,description:""},backgroundColorHex:{type:{name:"string"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},focalPoint:{type:{name:"shape",value:{x:{name:"string",required:!1},y:{name:"string",required:!1}}},required:!1,description:""},gradientHex:{type:{name:"string"},required:!1,description:""},imageFill:{type:{name:"bool"},required:!1,description:""},innerBlocks:{type:{name:"arrayOf",value:{name:"shape",value:{attributes:{name:"object",required:!1},name:{name:"string",required:!1}}}},required:!1,description:""},isStackedOnMobile:{type:{name:"bool"},required:!1,description:""},mediaAlt:{type:{name:"string"},required:!1,description:""},mediaPosition:{type:{name:"string"},required:!1,description:""},mediaUrl:{type:{name:"string"},required:!1,description:""},mediaWidth:{type:{name:"number"},required:!1,description:""},style:{type:{name:"object"},required:!1,description:""},textColorHex:{type:{name:"string"},required:!1,description:""},verticalAlignment:{type:{name:"string"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/blocks/Gutenberg/BlockMediaText/BlockMediaText.js"]={name:"BlockMediaText",docgenInfo:BlockMediaText.__docgenInfo,path:"components/blocks/Gutenberg/BlockMediaText/BlockMediaText.js"})},25741:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>formatFocalPoint});__webpack_require__(54678);function formatFocalPoint(focalPoint){var _parseFloat,_parseFloat2,newFocalPoint={},x=null==focalPoint?void 0:focalPoint.x,y=null==focalPoint?void 0:focalPoint.y;return x=null!==(_parseFloat=parseFloat(x&&!isNaN(x)?x:".5"))&&void 0!==_parseFloat?_parseFloat:.5,y=null!==(_parseFloat2=parseFloat(y&&!isNaN(y)?y:".5"))&&void 0!==_parseFloat2?_parseFloat2:.5,newFocalPoint.x=100*x+"%",newFocalPoint.y=100*y+"%",newFocalPoint}},33015:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getBlockStyles(_ref){var _style$color,_style$color2,_style$typography,_style$typography2,_style$color3,backgroundColorHex=_ref.backgroundColorHex,gradientHex=_ref.gradientHex,textColorHex=_ref.textColorHex,width=_ref.width,style=_ref.style,blockStyle={},background=gradientHex||(null==style||null===(_style$color=style.color)||void 0===_style$color?void 0:_style$color.gradient),backgroundcolor=backgroundColorHex||(null==style||null===(_style$color2=style.color)||void 0===_style$color2?void 0:_style$color2.background),fontsize=null==style||null===(_style$typography=style.typography)||void 0===_style$typography?void 0:_style$typography.fontSize,fontweight=null==style||null===(_style$typography2=style.typography)||void 0===_style$typography2?void 0:_style$typography2.fontWeight,textcolor=textColorHex||(null==style||null===(_style$color3=style.color)||void 0===_style$color3?void 0:_style$color3.text);return background&&(blockStyle.background=background),backgroundcolor&&(blockStyle.backgroundColor=backgroundcolor),fontsize&&(blockStyle.fontSize=fontsize),fontweight&&(blockStyle.fontWeight=fontweight),textcolor&&(blockStyle.color=textcolor),width&&(isNaN(width)?blockStyle.width=width:blockStyle.width=width+"%"),blockStyle}__webpack_require__.d(__webpack_exports__,{Z:()=>getBlockStyles})}}]);