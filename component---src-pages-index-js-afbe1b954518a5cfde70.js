webpackJsonp([35783957827783],{102:function(e,t,r){!function(t,r){e.exports=r()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,a=Object.getOwnPropertyNames,n=Object.getOwnPropertySymbols,o=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,l=c&&c(Object);return function u(s,i,f){if("string"!=typeof i){if(l){var p=c(i);p&&p!==l&&u(s,p,f)}var d=a(i);n&&(d=d.concat(n(i)));for(var m=0;m<d.length;++m){var y=d[m];if(!(e[y]||t[y]||f&&f[y])){var g=o(i,y);try{r(s,y,g)}catch(e){}}}return s}return s}})},200:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var n=r(4),o=a(n),c=r(98);a(c);r(291);var l=function(e){var t=e.data;return console.log(t),o.default.createElement("div",null,t.allMarkdownRemark.edges.map(function(e){var t=e.node;return o.default.createElement("div",{key:t.frontmatter.date,className:"article-box"},o.default.createElement("h3",{className:"title"},t.frontmatter.title),o.default.createElement("p",{className:"author"},t.frontmatter.author),o.default.createElement("p",{className:"date"},t.frontmatter.date," ",t.timeToRead,"min read"),o.default.createElement("p",{className:"excerpt"},t.excerpt))}))};t.default=l;t.query="** extracted graphql fragment **"},291:function(e,t){}});
//# sourceMappingURL=component---src-pages-index-js-afbe1b954518a5cfde70.js.map