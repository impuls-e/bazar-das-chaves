(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+7A0":function(e,t,r){"use strict";r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),Object.defineProperty(t,"__esModule",{value:!0});var n=r("h4O3");Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var a=r("NBI0");Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})}));var o=r("uG3I");Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}))},"5NVU":function(e,t,r){},"6vc4":function(e,t,r){"use strict";r("xtjI"),r("4DPX"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi");var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.NewsArticleJsonLd=t.BlogPostJsonLd=t.ArticleJsonLd=void 0;var a=n(r("pVnL")),o=n(r("QILm")),i=n(r("lSNA")),c=n(r("q1tI")),s=r("Bcl6");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e){var t=e.url,r=e.headline,n=e.title,a=e.images,o=void 0===a?[]:a,i=e.datePublished,l=e.dateCreated,u=e.dateModified,f=void 0===u?i:u,p=e.authorType,g=void 0===p?"Person":p,m=e.authorName,b=e.description,y=e.publisherName,v=e.publisherLogo,h=e.body,O=e.overrides,j=e.keywords,P=e.speakable,S=e.defer,w=void 0!==S&&S,E=d({"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":t},headline:null!=r?r:n,image:o,datePublished:i,dateModified:f,dateCreated:l,author:{"@type":g,name:m},publisher:{"@type":"Organization",name:y,logo:{"@type":"ImageObject",url:v}},description:b,articleBody:h,speakable:P?P.map((function(e){return d({"@type":"SpeakableSpecification"},e)})):void 0,keywords:Array.isArray(j)?j.join(", "):j},O);return c.default.createElement(s.JsonLd,{defer:w,json:E})};t.ArticleJsonLd=u;t.BlogPostJsonLd=function(e){var t=e.overrides,r=e.defer,n=void 0!==r&&r,i=e.publisherLogo,s=void 0===i?"":i,l=e.publisherName,f=void 0===l?"":l,p=(0,o.default)(e,["overrides","defer","publisherLogo","publisherName"]);return c.default.createElement(u,(0,a.default)({defer:n,publisherName:s,publisherLogo:f},p,{overrides:d({},t,{"@type":"BlogPosting"})}))};t.NewsArticleJsonLd=function(e){var t=e.overrides,r=e.section,n=e.defer,i=void 0!==n&&n,s=(0,o.default)(e,["overrides","section","defer"]);return c.default.createElement(u,(0,a.default)({defer:i},s,{overrides:d({articleSection:r},t,{"@type":"NewsArticle"})}))}},"8Tu8":function(e){e.exports=JSON.parse('{"data":{"icon":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAYAAAAxFw7TAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF20lEQVQ4y31VaUxcVRS+LIqNsbbVaJqiP2ysVSgwy9vfMNDSX7aJGv1hjIlRExPtjzZq/NOk1CaSmCYusTG1adN0SUqhlrIUWURgZgrDDMxMYWCgLAPMMKyzvmUYGI537gO10XqTl/vePfd+9zvnO+c8FGpnUGb0XNMhcIk5aHOsNHNH4q3iJalFnFB+E2C9rRSkBlMsUSe2RWvF45OXuN1be+evC1mZOV4ragtDt4wIguVkcbGVK5M7BTu4zAC+Q7DWaQK1TYyoLeKy2mxKgu0QgL0ClDpTOHJT/GoLdPmGkK0xu6xHEDITsEgXdzztEAFGy0Hu4r3RNu7EQgNPDV9jnhu+Su2YvsHui9wR307cEWuhBV9oqQDMqr71G/22zPnQNT4LgVcgbkas7AnwlULaKUKkkzt9ubL4MfQ/Y6GGr5DviFNwj4A2PWRctNDl6fsCbHgEiHSzH2ytJ7uE3KVGPnu6hssK1LAoiOd4vSkHusyExPgVJh+D+sBaAbEasfIvQHmAtUPQDLFetirzDcNi7nQjsxkGHgUbGdR3jkJyvenvM/Ui8SBUzenVBlNarTOtBq7we9GKgzoC0wIoLnbSfrPkSQLSy+TKTjY7eo/Nnm6hNdWtLFrqZJDrZwpBZxlZW282EdBYnXgW+g5D/JZ4GsU9zEWImSE+QFc+Kl5xDEyYw0nkumFAAxiUKPurpux8jfAatJkBs3Yj2Uv7wM/DipM+nDFK/WxhwsmWJfpYYcXC6i+cKiAsYFA7DOFytNjOongHj8L1AgFu+b44V24yjSabTFEkj9CrSR+dnLUZCzNGxc22QLAUYBynz2QpKH3c2EIHU0FEcvA5ag+fk3YIOaleISfWzudA4iiJtdwsNK+1lgKSfPRGcpRWJrr0BcQ9F/0DzJkgYmeq433sjykXD4DVx6Dcf4UD4E1NpBahAf7AgPIYNbs+xcCymyIShnopOiOS7GbqMt8j9cY9yX4uLdm5jjOf7MuLWbj3ZStfmbQJZ6K/88funi0ioZDbRBeuKAklxqhaSIoQ9VLHtm6NuOivM0IpHmYobGfewoo7Mei6bOdmwV8G4MUhGS0DqZv3Z/YHG+g9aoewobSLD1DEZ/gQZB6kMcqmufCGBjpAf6EOMmuwWAprgxykB3lYHeAhamM/dlcb98s2XsLP7czeaDv3OYwehHgrfw55LUU7lElDAMIcrAwZ3yOgIebxzBywUc8HLMbXsfsTMG2CBQv9TmY90cOdhAkzhDs5882qgjzFIiyC3QTzTYxRYzOm/xQkFpQJaiXgNBBxUhPME1shkDxML0wKIA2wZ+V+1gJLmE0PR6oqYeXvgv8gxDr5C5sqHdSSd8JQC6scyONUYNFjLPunktJ9xgmTWO1RDlQXGwjfY961XdfvTPRyjTCDO5ON9ziv67eTzaFBHcmjuqsF2zBoCyQ5WPVTEPNRF8ODVBFR0Et7FC8j+VoNr7jrdbuifcxn6gA7D/MYzM55ZprpfBLLbk7rieExPXnRsy9mR8f136l+wwZIPCjj9PxPVfu34+TvV0fo6PlvC/Ow+x2wYoa0lwecp7+4bxmfIvVsZbVuL/sNWgsb0UA3WVcoUwY1OUVJ56pe3Z0YoXvVUTp84qOXnsVMpxWsfrCbKt3aH7Vqtb7m4HHHbj6QiR8xzHp0xNDfcWBXYtKwlJoxQtRntKvjtJwcpzeig1Rv0sek4veZxVvnC/PI5RaanIn1sGiyWWsa6NSXe1HArUOhoRISz3FH8QuSX7+cDhlhFYNi9VXsvpJ8QMMGrqrEIL2I4/kM6dwOKguDIl+T8d91GfQWE8ARe+FuaVq3os7qlRlXScVEj+7lYL+h0Hq7uEAZpRcSw1TE1VjyNGldDmPWI/8TcyNFxDjmLMyXAiWJtXk9pOYMjlTQYFkLGK1YfWvKT6/jhhLztut2EoYD/wM4M3SAzEeO5mdF/cX1qQUdrM7pYX3eCOtzFKRmKVibYSA6TFVrOSygBffDrv4JpYqIMTfMSZYAAAAASUVORK5CYII=","width":56,"height":70,"src":"/static/7b37d8c74682b6bdd911697d0f997985/2b4a6/icon.png","srcSet":"/static/7b37d8c74682b6bdd911697d0f997985/2b4a6/icon.png 1x,\\n/static/7b37d8c74682b6bdd911697d0f997985/5f25f/icon.png 1.5x,\\n/static/7b37d8c74682b6bdd911697d0f997985/b1e55/icon.png 2x"}}},"image":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAADL0lEQVQ4y42UXUhTYRjHz5bmZ1QXXUR0EWn2YVDi5tyHWFAXRV5I0UVdBH1AdBOUYV9XggTRRQhqSVEJknbVl1hZUWlmZlCb29xo0znFbWw7053tfc/O2el/zs7UbtIX/jzvnud9fzz/593GMP9ZnLRTiXTYqJEj+WLaS96bG0iv5Qp5btmj5F5ZtErsszArWvSHUavGOjpk7CD95lpc3k9eWB4AekiBvchAl4fZDJnorCqmvw2PeWt1fraW7KrRkpeWdvK8pkCBvlxBh8Stz1h16SugRvrL0Ex/VrfRAdMWGtblkDeWq1CZalmzPNCry8YNUCsZM+jQaR8drR6kX01N5JPpNvlgXqec+WhevOh0OBi32631ejxa3+SkkpuYmGAS4VuA7coMfVJ/gfgqL1O7oZ5aDc8w0y76zXhUGcmQSTkjShLD2O12xg7g0uXz+ZholGWCwZCGjbgXrBCfvhGdDmKmfdRqPKHkrLVaQZI0gij++zDosNLj8Riznz2ePwu1WGRk3ZQk5dGZzZXEX2Elf3SfiausRK7xobac7DlBEDRZy/fdLpfD6/WOoLuBKb8/V86HQqG9cmRZ9kgsNteTnjtdkAzUlRP/gVIaG16f4tMbFZAoboUOKrCxMZvB4XAE3OOuQtVuk9/vL5+dDXQC+C4cDj8C8FSMZTvj8cSTOU6qoLx0nBDalOL5dp5PNQI2CDVkgScxx2F57/V4rwPYMzM9c2kWC8DmSCQ8gXl2xNhYSzwe75+fj9RSwl0khNwTBGmNhAWrPfL9lCBoGZvNVooOo65xVzVedgeAdHp6+i544wCeiYTDN6IsexMdPozHuQ/z8/HDlJBrALYKKWFbKpVKA/gW3MXvodPpPO/GEPG1eQ1gLyzvCwQCLQCOwnIrLNcDeAfAYxzHfU8mk0OAWmC5B5bPwm4ndE6BdXc/zUKLHHZH8dKXDwaDm7L7aCSSp/xhcNxaSPm58YQULbywKGbuiqKoSSQSRWhZC62GhXzEXOSVw+m0lJdOpwvlOqwVyDVoFXLFiIVqLXfBslrcDumhMmiPuq+CtkElUCW0G9JBZvV8hbovU/c7ZN5fBO1wGb+QhBsAAAAASUVORK5CYII=","width":183,"height":150,"src":"/static/21ee8e2640318b91e9ce0dba5d0e8b5e/b4386/gelux-logo.png","srcSet":"/static/21ee8e2640318b91e9ce0dba5d0e8b5e/b4386/gelux-logo.png 1x"}}}}}')},"8VXu":function(e,t,r){},"9eSz":function(e,t,r){"use strict";r("rzGZ"),r("Dq+y"),r("8npG"),r("YbXK"),r("eMsz"),r("zTTH"),r("3nLz");var n=r("TqRt");t.__esModule=!0,t.default=void 0;var a,o=n(r("PJYZ")),i=n(r("VbXa")),c=n(r("8OQS")),s=n(r("pVnL")),l=n(r("q1tI")),d=n(r("17x9")),u=function(e){var t=(0,s.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=P([].concat(t.fluid))),t.fixed&&(t.fixed=P([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return g(t||r).src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},m=Object.create({}),b=function(e){var t=u(e),r=p(t);return m[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,h=v&&window.IntersectionObserver,O=new WeakMap;function j(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,o=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},n&&l.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:o}),l.default.createElement("source",{media:a,srcSet:r,sizes:o}))}))}function P(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function S(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function w(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function E(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,o=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(o?'sizes="'+o+'" ':"")+"/>"}var A=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(O.has(e.target)){var t=O.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),O.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),O.set(e,t)),function(){r.unobserve(e),O.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?E(e,!0):"")+E(e)})).join("")+"<img "+l+i+c+r+n+t+o+a+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},D=function(e){var t=e.src,r=e.imageVariants,n=e.generateSources,a=e.spreadProps,o=e.ariaHidden,i=l.default.createElement(k,(0,s.default)({src:t},a,{ariaHidden:o}));return r.length>1?l.default.createElement("picture",null,n(r),i):i},k=l.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,o=e.style,i=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,c.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},g,{onLoad:i,onError:d,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},o)}))}));k.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var x=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=v&&b(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&h&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||v&&(y||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,o.default)(r)),r.handleRef=r.handleRef.bind((0,o.default)(r)),r}(0,i.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=A(e,(function(){var e=b(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),r=p(t),m[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,o=void 0===a?{}:a,i=e.imgStyle,c=void 0===i?{}:i,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,b=e.fixed,y=e.backgroundColor,v=e.durationFadeIn,h=e.Tag,O=e.itemProp,P=e.loading,E=e.draggable,A=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,s.default)({opacity:A?1:0,transition:x?"opacity "+v+"ms":"none"},c),G="boolean"==typeof y?"lightgray":y,M={transitionDelay:v+"ms"},R=(0,s.default)({opacity:this.state.imgLoaded?0:1},x&&M,{},c,{},f),N={title:t,alt:this.state.isVisible?"":r,style:R,className:p,itemProp:O};if(m){var z=m,C=g(m);return l.default.createElement(h,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(C.srcSet)},l.default.createElement(h,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/C.aspectRatio+"%"}}),G&&l.default.createElement(h,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:G,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&M)}),C.base64&&l.default.createElement(D,{ariaHidden:!0,src:C.base64,spreadProps:N,imageVariants:z,generateSources:w}),C.tracedSVG&&l.default.createElement(D,{ariaHidden:!0,src:C.tracedSVG,spreadProps:N,imageVariants:z,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,j(z),l.default.createElement(k,{alt:r,title:t,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:P,draggable:E})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,s.default)({alt:r,title:t,loading:P},C,{imageVariants:z}))}}))}if(b){var q=b,B=g(b),V=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:B.width,height:B.height},o);return"inherit"===o.display&&delete V.display,l.default.createElement(h,{className:(n||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(B.srcSet)},G&&l.default.createElement(h,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:G,width:B.width,opacity:this.state.imgLoaded?0:1,height:B.height},x&&M)}),B.base64&&l.default.createElement(D,{ariaHidden:!0,src:B.base64,spreadProps:N,imageVariants:q,generateSources:w}),B.tracedSVG&&l.default.createElement(D,{ariaHidden:!0,src:B.tracedSVG,spreadProps:N,imageVariants:q,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,j(q),l.default.createElement(k,{alt:r,title:t,width:B.width,height:B.height,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:P,draggable:E})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,s.default)({alt:r,title:t,loading:P},B,{imageVariants:q}))}}))}return null},t}(l.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),G=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});x.propTypes={resolutions:I,sizes:G,fixed:d.default.oneOfType([I,d.default.arrayOf(I)]),fluid:d.default.oneOfType([G,d.default.arrayOf(G)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var M=x;t.default=M},Bcl6:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.JsonLd=void 0;var a=n(r("q1tI")),o=r("rid2");t.JsonLd=function(e){var t=e.defer,r=e.json;return a.default.createElement(o.Helmet,{defer:t},a.default.createElement("script",{type:"application/ld+json"},JSON.stringify(r,null,2)))}},HBJX:function(e,t,r){"use strict";r("xtjI"),r("4DPX"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi");var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.FAQJsonLd=void 0;var a=n(r("lSNA")),o=n(r("q1tI")),i=r("Bcl6");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.FAQJsonLd=function(e){var t,r=e.questions,n=e.overrides,s=void 0===n?{}:n,l=e.defer,d=void 0!==l&&l,u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"FAQPage",mainEntity:(t=r,t.map((function(e){var t=e.question;return{"@type":"Question",acceptedAnswer:{"@type":"Answer",text:e.answer},name:t}})))},s);return o.default.createElement(i.JsonLd,{defer:d,json:u})}},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gelux"}}}}')},Lnxd:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));r("AqHK"),r("4DPX"),r("sc67"),r("E5k/");var n=r("q1tI"),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&(r[n[a]]=e[n[a]])}return r};function s(e){return function(t){return n.createElement(l,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,r){return n.createElement(t.tag,i({key:r},t.attr),e(t.child))}))}(e.child))}}function l(e){var t=function(t){var r,a=e.size||t.size||"1em";t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className);var o=e.attr,s=e.title,l=c(e,["attr","title"]);return n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:r,style:i({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},NBI0:function(e,t,r){"use strict";r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),Object.defineProperty(t,"__esModule",{value:!0});var n=r("6vc4");Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var a=r("uTMJ");Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})}));var o=r("lAea");Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}));var i=r("jA7+");Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})}));var c=r("r+KM");Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}})}));var s=r("SKRr");Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})}));var l=r("HBJX");Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})}));var d=r("Bcl6");Object.keys(d).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}})}));var u=r("yBkl");Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})}));var f=r("ujHY");Object.keys(f).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return f[e]}})}));var p=r("ye2j");Object.keys(p).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return p[e]}})}));var g=r("krMq");Object.keys(g).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return g[e]}})}));var m=r("clPB");Object.keys(m).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return m[e]}})}))},QaKi:function(e,t,r){},RXBc:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return h}));var n=r("IRj2"),a=r("q1tI"),o=r.n(a),i=r("17x9"),c=r.n(i),s=r("Zttt"),l=r("hkyM"),d=(r("3nLz"),r("8Tu8")),u=(r("QaKi"),r("9eSz")),f=r.n(u),p=r("NIcq"),g=r("ma3e");function m(){var e=d.data;return o.a.createElement("header",{className:"container header"},o.a.createElement(f.a,{className:"logo",fixed:e.image.childImageSharp.fixed,alt:"Logo da Gelux"}),o.a.createElement("div",{className:"social-icons"},o.a.createElement("a",{href:"https://www.facebook.com/geluxeletrica/"},o.a.createElement(g.b,{color:"#fff"})),o.a.createElement("a",{href:"https://www.instagram.com/geluxeletrica/"},o.a.createElement(g.c,{color:"#fff"})),o.a.createElement("a",{href:"mailto:contato.gelux@gmail.com"},o.a.createElement(p.a,{color:"#fff"}))))}r("8VXu");var b=r("+7A0");function y(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.SocialProfileJsonLd,{type:"Person",name:"Impulse",url:"https://geluxeletrica.com.br/",sameAs:["https://www.facebook.com/geluxeletrica","https://instagram.com/geluxeletrica"]}),o.a.createElement("div",{className:"container intro"},o.a.createElement("h1",null,"Soluções Completas em Elétrica"),o.a.createElement("div",{className:"introduction"},o.a.createElement("ul",null,o.a.createElement("li",null,"Instalação e Manutenção Elétrica em Geral"),o.a.createElement("li",null,"Instalação e Manutenção em Sistemas de Iluminação"),o.a.createElement("li",null,"Projetos Elétricos e Luminotécnicos"),o.a.createElement("li",null,"Projetos e Execução de Serviços CELESC"),o.a.createElement("li",null,"Ensaios, Medições e Estudos Elétricos")),o.a.createElement("nav",null,o.a.createElement("h2",null,"Entre em Contato"),o.a.createElement("h3",null,"Florianópolis - SC"),o.a.createElement("a",{href:"https://wa.me/5548991815995"},o.a.createElement("div",{className:"whats"},o.a.createElement(g.d,null)),o.a.createElement("span",null,"(48) 99181-5995 ",o.a.createElement(g.a,null)))))))}r("5NVU");function v(){return o.a.createElement("footer",null,o.a.createElement("p",null,"Gostaria de fechar um projeto ?"),o.a.createElement("a",{href:"mailto:contato.gelux@gmail.com"},"contato.gelux@gmail.com"))}function h(){s.a.propTypes={children:c.a.node.isRequired};var e=n.data;return o.a.createElement(s.a,null,o.a.createElement(l.a,{title:"Soluções Completas em Elétrica"}),o.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),o.a.createElement(y,null),o.a.createElement(v,null))}},SKRr:function(e,t,r){"use strict";r("pJf4"),r("xtjI"),r("4DPX"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi");var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.CourseJsonLd=void 0;var a=n(r("lSNA")),o=n(r("q1tI")),i=r("Bcl6");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.CourseJsonLd=function(e){var t=e.name,r=e.courseName,n=e.description,s=e.providerName,l=e.providerUrl,d=e.overrides,u=void 0===d?{}:d,f=e.defer,p=void 0!==f&&f,g=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"Course",name:null!=t?t:r,description:n,provider:s?{"@type":"Organization",name:s,sameAs:l}:void 0},u);return o.default.createElement(i.JsonLd,{defer:p,json:g})}},alxG:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.GatsbySeo=void 0;var a=n(r("q1tI")),o=r("2+in");t.GatsbySeo=function(e){var t=e.metaTags,r=e.linkTags,n=e.canonical,i=e.description,c=e.facebook,s=e.languageAlternates,l=e.mobileAlternate,d=e.nofollow,u=e.noindex,f=e.openGraph,p=e.title,g=e.titleTemplate,m=e.twitter;return a.default.createElement(o.BaseSeo,{metaTags:t,linkTags:r,canonical:n,description:i,facebook:c,languageAlternates:s,mobileAlternate:l,nofollow:d,noindex:u,openGraph:f,title:p,titleTemplate:g,twitter:m})}},clPB:function(e,t,r){"use strict";r("xtjI"),r("4DPX"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi");var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.SpeakableJsonLd=void 0;var a=n(r("lSNA")),o=n(r("q1tI")),i=r("Bcl6");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.SpeakableJsonLd=function(e){var t=e.xpath,r=e.cssSelector,n=e.overrides,s=void 0===n?{}:n,l=e.defer,d=void 0!==l&&l;if(t&&r)throw new Error("Speakable should use either xpath or the cssSelector, not both.");var u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"SpeakableSpecification",cssSelector:r,xpath:t},s);return o.default.createElement(i.JsonLd,{defer:d,json:u})}},h4O3:function(e,t,r){"use strict";r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),Object.defineProperty(t,"__esModule",{value:!0});var n=r("2+in");Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var a=r("alxG");Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})}))},"jA7+":function(e,t,r){"use strict";r("pJf4"),r("xtjI"),r("4DPX"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi");var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.BreadcrumbJsonLd=void 0;var a=n(r("lSNA")),o=n(r("q1tI")),i=r("Bcl6");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.BreadcrumbJsonLd=function(e){var t=e.itemListElements,r=void 0===t?[]:t,n=e.overrides,s=void 0===n?{}:n,l=e.defer,d=void 0!==l&&l,u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:r.map((function(e){return{"@type":"ListItem",position:e.position,item:{"@id":e.item,name:e.name,"@type":"Thing"}}}))},s);return o.default.createElement(i.JsonLd,{defer:d,json:u})}},krMq:function(e,t,r){"use strict";r("q8oJ"),r("8npG"),r("pJf4");var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.SocialProfileJsonLd=void 0;var a=n(r("q1tI")),o=r("rid2");t.SocialProfileJsonLd=function(e){var t=e.type,r=e.name,n=e.url,i=e.sameAs,c=void 0===i?[]:i,s=e.defer,l=void 0!==s&&s,d='{\n    "@context": "http://schema.org",\n    "@type": "'.concat(t,'",\n    "name": "').concat(r,'",\n    "url": "').concat(n,'",\n    "sameAs": [\n      ').concat(c.map((function(e){return'"'.concat(e,'"')})).toString(),"\n     ]\n  }");return a.default.createElement(o.Helmet,{defer:l},a.default.createElement("script",{type:"application/ld+json"},d))}},lAea:function(e,t,r){"use strict";r("pJf4"),r("xtjI"),r("4DPX"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi");var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.BookJsonLd=void 0;var a=n(r("QILm")),o=n(r("lSNA")),i=n(r("q1tI")),c=r("Bcl6");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.BookJsonLd=function(e){var t=e.name,r=e.author,n=e.url,o=e.workExample,s=void 0===o?[]:o,d=e.id,u=e.sameAs,f=e.overrides,p=void 0===f?{}:f,g=e.defer,m=void 0!==g&&g,b=l({"@context":"https://schema.org","@type":"Book",name:t,url:n,"@id":d,sameAs:u,author:l({"@type":"Person"},r),workExample:s.map((function(e){var t,r=e.bookFormat,n=e.potentialAction,o=e.author,i=(0,a.default)(e,["bookFormat","potentialAction","author"]);return l({"@type":"Book",bookFormat:(t=r,t?"https://schema.org/".concat(t):void 0)},i,{person:l({"@type":"Person"},o),potentialAction:l({"@type":"ReadAction"},n)})}))},p);return i.default.createElement(c.JsonLd,{defer:m,json:b})}},"r+KM":function(e,t,r){"use strict";r("q8oJ"),r("8npG");var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.CorporateContactJsonLd=void 0;var a=n(r("q1tI")),o=r("rid2"),i=function(e){return Array.isArray(e)?"[".concat(e.map((function(e){return'"'.concat(e,'"')})).toString(),"]"):'"'.concat(e,'"')};t.CorporateContactJsonLd=function(e){var t=e.url,r=e.logo,n=e.contactPoint,c=e.defer,s=void 0!==c&&c,l='{\n    "@context": "https://schema.org",\n    "@type": "Organization",\n    "url": "'.concat(t,'",\n    ').concat(r?'"logo": "'.concat(r,'",'):"",'\n    "contactPoint": [').concat(function(e){return e.map((function(e){return'{\n    "@type": "ContactPoint",\n    "telephone": "'.concat(e.telephone,'",\n    "contactType": "').concat(e.contactType,'"').concat(e.areaServed?',\n    "areaServed": '.concat(i(e.areaServed)):"").concat(e.availableLanguage?',\n    "availableLanguage": '.concat(i(e.availableLanguage)):"").concat(e.contactOption?',\n    "contactOption": "'.concat(e.contactOption.toString(),'"'):"","\n    }")}))}(n).toString(),"]\n  }");return a.default.createElement(o.Helmet,{defer:s},a.default.createElement("script",{type:"application/ld+json"},l))}},uG3I:function(e,t,r){},uTMJ:function(e,t,r){"use strict";r("xtjI"),r("4DPX"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi");var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.BlogJsonLd=void 0;var a=n(r("lSNA")),o=n(r("q1tI")),i=r("Bcl6");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.BlogJsonLd=function(e){var t=e.url,r=e.headline,n=e.title,a=e.images,c=void 0===a?[]:a,l=e.datePublished,d=e.dateModified,u=void 0===d?null:d,f=e.authorName,p=e.authorType,g=void 0===p?"Person":p,m=e.keywords,b=e.description,y=e.publisherName,v=e.publisherLogo,h=e.posts,O=void 0===h?[]:h,j=e.issn,P=e.overrides,S=void 0===P?{}:P,w=e.defer,E=void 0!==w&&w,A=s({"@context":"https://schema.org","@type":"Blog",mainEntityOfPage:{"@type":"Blog","@id":t},headline:null!=r?r:n,keywords:m,issn:j,image:c,datePublished:l,dateModified:null!=u?u:l,description:b,author:f?{"@type":g,name:f}:void 0,publisher:y?{"@type":"Organization",name:y,logo:v?{"@type":"ImageObject",url:v}:void 0}:void 0,blogPost:O.map((function(e){return s({"@type":"BlogPosting"},e)}))},S);return o.default.createElement(i.JsonLd,{defer:E,json:A})}},ujHY:function(e,t,r){"use strict";r("xtjI"),r("4DPX"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi");var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.LogoJsonLd=void 0;var a=n(r("lSNA")),o=n(r("q1tI")),i=r("Bcl6");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.LogoJsonLd=function(e){var t=e.url,r=e.logo,n=e.overrides,s=void 0===n?{}:n,l=e.defer,d=void 0!==l&&l,u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"Organization",url:t,logo:r},s);return o.default.createElement(i.JsonLd,{defer:d,json:u})}},yBkl:function(e,t,r){"use strict";r("pJf4"),r("xtjI"),r("4DPX"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi");var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.LocalBusinessJsonLd=void 0;var a=n(r("lSNA")),o=n(r("QILm")),i=n(r("q1tI")),c=r("Bcl6");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={Mon:"Monday",Tues:"Tuesday",Wed:"Wednesday",Thurs:"Thursday",Fri:"Friday",Sat:"Saturday",Sun:"Sunday"},u=function(e){var t;return"http://schema.org/".concat(null!==(t=d[e])&&void 0!==t?t:e)},f=function(e){return e?Array.isArray(e)?e.map(u):u(e):void 0},p=function(e){if(e)return Array.isArray(e)?e.map((function(e){var t=e.dayOfWeek,r=(0,o.default)(e,["dayOfWeek"]);return l({"@type":"OpeningHoursSpecification",dayOfWeek:f(t)},r)})):l({"@type":"OpeningHoursSpecification"},e,{dayOfWeek:f(e.dayOfWeek)})};t.LocalBusinessJsonLd=function(e){var t=e.type,r=e.id,n=e.name,a=e.description,o=e.url,s=e.telephone,d=e.address,u=e.geo,f=e.images,g=e.openingHours,m=e.rating,b=e.priceRange,y=e.overrides,v=void 0===y?{}:y,h=e.defer,O=void 0!==h&&h,j=l({"@context":"https://schema.org","@type":t,"@id":r,name:n,description:a,url:o,telephone:s,priceRange:b,image:f,geo:l({"@type":"GeoCoordinates"},u),address:l({"@type":"PostalAddress"},d),aggregateRating:m?l({"@type":"AggregateRating"},m):void 0,openingHoursSpecification:p(g)},v);return i.default.createElement(c.JsonLd,{defer:O,json:j})}},ye2j:function(e,t,r){"use strict";r("pJf4"),r("xtjI"),r("4DPX"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi");var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.ProductJsonLd=void 0;var a=n(r("QILm")),o=n(r("lSNA")),i=n(r("q1tI")),c=r("Bcl6");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={Discontinued:"http://schema.org/Discontinued",InStock:"http://schema.org/InStock",InStoreOnly:"http://schema.org/InStoreOnly",LimitedAvailability:"http://schema.org/LimitedAvailability",OnlineOnly:"http://schema.org/OnlineOnly",OutOfStock:"http://schema.org/OutOfStock",PreOrder:"http://schema.org/PreOrder",PreSale:"http://schema.org/PreSale",SoldOut:"http://schema.org/SoldOut"},u={DamagedCondition:"http://schema.org/DamagedCondition",NewCondition:"http://schema.org/NewCondition",RefurbishedCondition:"http://schema.org/RefurbishedCondition",UsedCondition:"http://schema.org/UsedCondition"};t.ProductJsonLd=function(e){var t,r,n,o=e.name,s=e.productName,f=e.images,p=void 0===f?[]:f,g=e.description,m=e.sku,b=e.gtin12,y=e.gtin,v=e.gtin8,h=e.gtin13,O=e.gtin14,j=e.mpn,P=e.brand,S=e.reviews,w=void 0===S?[]:S,E=e.aggregateRating,A=e.offers,L=e.offersType,D=void 0===L?"Offer":L,k=e.overrides,x=void 0===k?{}:k,I=e.defer,G=void 0!==I&&I,M=l({"@context":"https://schema.org","@type":"Product",name:null!=o?o:s,image:p,sku:m,gtin:y,gtin8:v,gtin12:b,gtin13:h,gtin14:O,mpn:j,brand:P?{"@type":"Brand",name:P}:void 0,description:g,review:w.map((function(e){var t=e.reviewRating;return l({"@type":"Review"},(0,a.default)(e,["reviewRating"]),{reviewRating:l({"@type":"Rating"},t)})})),aggregateRating:E?l({"@type":"AggregateRating"},E):void 0,offers:A?l({"@type":D},A,{availability:(n=A.availability,n?d[n]:void 0),itemCondition:(r=A.itemCondition,r?u[r]:void 0),seller:A.seller?{"@type":null!==(t=A.seller.type)&&void 0!==t?t:"Organization",name:A.seller.name}:void 0}):void 0},x);return i.default.createElement(c.JsonLd,{defer:G,json:M})}}}]);
//# sourceMappingURL=component---src-pages-index-js-e0cbdc35ef4ca4a260e9.js.map