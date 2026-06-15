(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:ee,getOwnPropertySymbols:te,getPrototypeOf:ne}=Object,f=globalThis,p=f.trustedTypes,re=p?p.emptyScript:``,ie=f.reactiveElementPolyfillSupport,m=(e,t)=>e,h={toAttribute(e,t){switch(t){case Boolean:e=e?re:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},g=(e,t)=>!l(e,t),_={attribute:!0,type:String,converter:h,reflect:!1,useDefault:!1,hasChanged:g};Symbol.metadata??=Symbol(`metadata`),f.litPropertyMetadata??=new WeakMap;var v=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(m(`elementProperties`)))return;let e=ne(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m(`properties`))){let e=this.properties,t=[...ee(e),...te(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?h:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?h:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??g)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};v.elementStyles=[],v.shadowRootOptions={mode:`open`},v[m(`elementProperties`)]=new Map,v[m(`finalized`)]=new Map,ie?.({ReactiveElement:v}),(f.reactiveElementVersions??=[]).push(`2.1.2`);var y=globalThis,b=e=>e,x=y.trustedTypes,S=x?x.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,C=`$lit$`,w=`lit$${Math.random().toFixed(9).slice(2)}$`,ae=`?`+w,oe=`<${ae}>`,T=document,E=()=>T.createComment(``),D=e=>e===null||typeof e!=`object`&&typeof e!=`function`,O=Array.isArray,se=e=>O(e)||typeof e?.[Symbol.iterator]==`function`,k=`[ 	
\f\r]`,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,M=/>/g,N=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),P=/'/g,F=/"/g,I=/^(?:script|style|textarea|title)$/i,L=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),R=Symbol.for(`lit-noChange`),z=Symbol.for(`lit-nothing`),B=new WeakMap,V=T.createTreeWalker(T,129);function H(e,t){if(!O(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return S===void 0?t:S.createHTML(t)}var ce=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=A;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===A?c[1]===`!--`?o=j:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=N):(I.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=N):o=M:o===N?c[0]===`>`?(o=i??A,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?N:c[3]===`"`?F:P):o===F||o===P?o=N:o===j||o===M?o=A:(o=N,i=void 0);let d=o===N&&e[t+1].startsWith(`/>`)?` `:``;a+=o===A?n+oe:l>=0?(r.push(s),n.slice(0,l)+C+n.slice(l)+w+d):n+w+(l===-2?t:d)}return[H(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},U=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ce(t,n);if(this.el=e.createElement(l,r),V.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=V.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(C)){let t=u[o++],n=i.getAttribute(e).split(w),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?ue:r[1]===`?`?de:r[1]===`@`?fe:K}),i.removeAttribute(e)}else e.startsWith(w)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(I.test(i.tagName)){let e=i.textContent.split(w),t=e.length-1;if(t>0){i.textContent=x?x.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],E()),V.nextNode(),c.push({type:2,index:++a});i.append(e[t],E())}}}else if(i.nodeType===8)if(i.data===ae)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(w,e+1))!==-1;)c.push({type:7,index:a}),e+=w.length-1}a++}}static createElement(e,t){let n=T.createElement(`template`);return n.innerHTML=e,n}};function W(e,t,n=e,r){if(t===R)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=D(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=W(e,i._$AS(e,t.values),i,r)),t}var le=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??T).importNode(t,!0);V.currentNode=r;let i=V.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new G(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new pe(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=V.nextNode(),a++)}return V.currentNode=T,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},G=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=W(this,e,t),D(e)?e===z||e==null||e===``?(this._$AH!==z&&this._$AR(),this._$AH=z):e!==this._$AH&&e!==R&&this._(e):e._$litType$===void 0?e.nodeType===void 0?se(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==z&&D(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=U.createElement(H(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new le(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=B.get(e.strings);return t===void 0&&B.set(e.strings,t=new U(e)),t}k(t){O(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(E()),this.O(E()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=b(e).nextSibling;b(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},K=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=z}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=W(this,e,t,0),a=!D(e)||e!==this._$AH&&e!==R,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=W(this,r[n+o],t,o),s===R&&(s=this._$AH[o]),a||=!D(s)||s!==this._$AH[o],s===z?e=z:e!==z&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},ue=class extends K{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===z?void 0:e}},de=class extends K{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==z)}},fe=class extends K{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=W(this,e,t,0)??z)===R)return;let n=this._$AH,r=e===z&&n!==z||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==z&&(n===z||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},pe=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}},me=y.litHtmlPolyfillSupport;me?.(U,G),(y.litHtmlVersions??=[]).push(`3.3.3`);var he=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new G(t.insertBefore(E(),e),e,void 0,n??{})}return i._$AI(e),i},q=globalThis,J=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=he(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}};J._$litElement$=!0,J.finalized=!0,q.litElementHydrateSupport?.({LitElement:J});var ge=q.litElementPolyfillSupport;ge?.({LitElement:J}),(q.litElementVersions??=[]).push(`4.2.2`);var _e=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},ve={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:g},ye=(e=ve,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function Y(e){return(t,n)=>typeof n==`object`?ye(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function X(e){return Y({...e,state:!0,attribute:!1})}var be=[`unknown`,`shadow`,`stellar`],xe=class{constructor(){this.pageCache=new Map,this.pageRequestCache=new Map,this.typeListCache=new Map,this.pokemonTypesByName=new Map,this.brokenSpriteUrlsByPokemon=new Map}async getTypes(){let e=(await(await fetch(`https://pokeapi.co/api/v2/type`)).json()).results.filter(e=>!be.includes(e.name));return await Promise.allSettled(e.map(e=>this.fetchPokemonListByType(e.name,e.url))),e.map(e=>e.name)}async getPage(e){return this.fetchPageData(e)}hydrateKnownTypes(e){return e.map(e=>this.withKnownTypes(e))}async resolveImageFallback(e){if(!e.imageUrl)return``;let t=this.brokenSpriteUrlsByPokemon.get(e.apiUrl)??new Set;t.add(e.imageUrl),this.brokenSpriteUrlsByPokemon.set(e.apiUrl,t);try{let n=await(await fetch(e.apiUrl)).json(),r=this.getBestSpriteUrl(n.sprites,[...t]);return this.updatePokemonImage(e.apiUrl,r),r}catch{return this.updatePokemonImage(e.apiUrl,``),``}}async fetchPageData(e){let t=this.getPageCacheKey(e),n=this.pageCache.get(t),r=this.pageRequestCache.get(t);if(n)return n;if(r)return r;let i=this.fetchPageList(e).then(async({items:e,total:n})=>{let r={pokemons:e.map(e=>this.createPokemonSummary(e)),total:n};return this.pageCache.set(t,r),this.pageRequestCache.delete(t),r}).catch(e=>{throw this.pageRequestCache.delete(t),e});return this.pageRequestCache.set(t,i),i}async fetchPageList({page:e,pageSize:t,filters:n}){let r=(e-1)*t;if(n.length===0){let e=await(await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${t}&offset=${r}`)).json();return{items:e.results,total:e.count}}let i=await this.fetchFilteredPokemonList(n);return{items:i.slice(r,r+t),total:i.length}}async fetchFilteredPokemonList(e){let t=await Promise.all(e.map(e=>this.fetchPokemonListByType(e))),n=new Map;return t.flat().forEach(e=>n.set(e.name,e)),[...n.values()].sort((e,t)=>this.getPokemonIdFromUrl(e.url)-this.getPokemonIdFromUrl(t.url))}async fetchPokemonListByType(e,t){let n=this.typeListCache.get(e);if(n)return n;let r=t??`https://pokeapi.co/api/v2/type/${e}`,i=await(await fetch(r)).json(),a=i.pokemon.map(e=>{let t=[...(this.pokemonTypesByName.get(e.pokemon.name)??[]).filter(e=>e.type.name!==i.name),{slot:e.slot,type:{name:i.name,url:r}}].sort((e,t)=>e.slot-t.slot);return this.pokemonTypesByName.set(e.pokemon.name,t),e.pokemon});return this.typeListCache.set(e,a),a}createPokemonSummary(e){let t=this.getPokemonIdFromUrl(e.url);return{id:t,name:e.name,imageUrl:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${t}.png`,types:this.pokemonTypesByName.get(e.name)??[],detailUrl:this.getDetailUrl(e.name),apiUrl:e.url}}getBestSpriteUrl(e,t=[]){return[e.front_default,e.other?.home?.front_default,e.other?.[`official-artwork`]?.front_default,e.other?.showdown?.front_default,e.versions?.[`generation-v`]?.[`black-white`]?.animated?.front_default].find(e=>e&&!t.includes(e))??``}updatePokemonImage(e,t){let n=n=>n.apiUrl===e?{...n,imageUrl:t}:n;this.pageCache.forEach((e,t)=>{this.pageCache.set(t,{...e,pokemons:e.pokemons.map(n)})})}withKnownTypes(e){let t=this.pokemonTypesByName.get(e.name);return t?{...e,types:t}:e}getPokemonIdFromUrl(e){return Number(e.split(`/`).filter(Boolean).at(-1)??0)}getDetailUrl(e){return`https://www.pokemon.com/us/pokedex/${e}`}getPageCacheKey({page:e,pageSize:t,filters:n}){return`${[...n].sort().join(`,`)||`all`}:${t}:${e}`}};function Z(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var Q=class extends J{constructor(...e){super(...e),this.pokemonId=0,this.name=``,this.imageUrl=``,this.pokemonTypes=[],this.detailUrl=``}handleImageError(){this.dispatchEvent(new CustomEvent(`pokemon-image-error`,{bubbles:!0,composed:!0}))}render(){return L`
    <a class="pokemon-card" href="${this.detailUrl}" target="_blank" rel="noopener noreferrer">
        <span class="pokemon-id">#${this.pokemonId}</span>
        ${this.imageUrl?L`<img class="pokemon-image" src="${this.imageUrl}" alt="${this.name}" @error=${()=>this.handleImageError()} />`:L`<div class="pokemon-image image-placeholder" aria-label=${`No image available for ${this.name}`}>?</div>`}
        <div class="more-info">
          <h2 class="pokemon-name">${this.name}</h2>
          <div class="pokemon-types">
            ${this.pokemonTypes.map(e=>L`
              <span class="pokemon-type ${e.type.name}">${e.type.name}</span>
            `)}
          </div>
        </div>
    </a>
    `}static{this.styles=o`
  :host {
      display: block;
    }

    .pokemon-card {
      display: flex;
      flex-direction: column;
      position: relative;
      border: 1px solid var(--surface-border, #ddd);
      border-radius: 8px;
      padding: 8px;
      min-height: 210px;
      box-sizing: border-box;
      background: var(--surface-background, #fff);
      text-decoration: none;
      color: var(--text-color, inherit);
      cursor: pointer;
      transition:
        background-color 180ms ease,
        border-color 180ms ease,
        transform 180ms ease,
        box-shadow 180ms ease;
    }

    .pokemon-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 24px rgb(15 23 42 / 12%);
    }

    .pokemon-card:focus-visible {
      outline: 3px solid var(--focus-ring-color, #6890f0);
      outline-offset: 3px;
    }

    .pokemon-id {
      position: absolute;
      top: 8px;
      right: 8px;
      font-size: 12px;
      color: var(--muted-text-color, #999);
    }

    .pokemon-image {
      width: 100%;
      height: 150px;
      object-fit: contain;
      flex: 0 0 150px;
    }

    .image-placeholder {
      display: grid;
      place-items: center;
      color: var(--muted-text-color, #999);
      font-size: 32px;
      font-weight: 700;
    }

    .more-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      margin-top: auto;
    }

    .pokemon-name {
      font-size: 14px;
      margin: 0;
      text-transform: capitalize;
      line-height: 1.2;
    }

    .pokemon-types {
      display: flex;
      gap: 4px;
      flex: 0 0 auto;
    }

    .pokemon-type {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      font-size: 0;
      background: #ccc;
    }

    .grass   { background: #78c850; }
    .poison  { background: #a040a0; }
    .fire    { background: #f08030; }
    .water   { background: #6890f0; }
    .normal  { background: #a8a878; }
    .flying  { background: #98d8d8; }
    .bug     { background: #a8b820; }
    .electric{ background: #f8d030; }
    .ground  { background: #e0c068; }
    .fairy   { background: #ee99ac; }
    .psychic { background: #f85888; }
    .rock    { background: #b8a038; }
    .ice     { background: #98d8d8; }
    .dragon  { background: #7038f8; }
    .ghost   { background: #705898; }
    .dark    { background: #705848; }
    .steel   { background: #b8b8d0; }
    .fighting{ background: #c03028; }
  `}};Z([Y({type:Number})],Q.prototype,`pokemonId`,void 0),Z([Y({type:String})],Q.prototype,`name`,void 0),Z([Y({type:String})],Q.prototype,`imageUrl`,void 0),Z([Y({type:Array})],Q.prototype,`pokemonTypes`,void 0),Z([Y({type:String})],Q.prototype,`detailUrl`,void 0),Q=Z([_e(`product-card`)],Q);var $=class extends J{constructor(...e){super(...e),this.headline=``,this.pokemons=[],this.activeFilters=[],this.allTypes=[],this.isLoading=!1,this.theme=`light`,this.errorMessage=``,this.currentPage=1,this.totalProducts=0,this.pageSize=12,this.hasAppliedDocumentTheme=!1,this.pokemonService=new xe,this.latestRequestId=0}connectedCallback(){super.connectedCallback(),this.applyDocumentTheme(),this.fetchTypes(),this.fetchPokemons()}disconnectedCallback(){this.restoreDocumentTheme(),super.disconnectedCallback()}async fetchPokemons(){let e=++this.latestRequestId;this.isLoading=!0,this.errorMessage=``;try{let{pokemons:t,total:n}=await this.pokemonService.getPage({page:this.currentPage,pageSize:this.itemsPerPage,filters:this.activeFilters});if(e!==this.latestRequestId)return;this.totalProducts=n,this.pokemons=t}catch{e===this.latestRequestId&&(this.errorMessage=`We could not load the products right now. Please try again later.`,this.pokemons=[],this.totalProducts=0)}finally{e===this.latestRequestId&&(this.isLoading=!1)}}async fetchTypes(){try{this.allTypes=await this.pokemonService.getTypes(),this.pokemons=this.pokemonService.hydrateKnownTypes(this.pokemons)}catch{this.allTypes=[]}}updatePokemonImage(e,t){let n=n=>n.apiUrl===e?{...n,imageUrl:t}:n;this.pokemons=this.pokemons.map(n)}async handlePokemonImageError(e){let t=await this.pokemonService.resolveImageFallback(e);this.updatePokemonImage(e.apiUrl,t)}toggleTheme(){this.theme=this.theme===`dark`?`light`:`dark`}get itemsPerPage(){return Math.max(1,this.pageSize)}get totalPages(){return Math.max(1,Math.ceil(this.totalProducts/this.itemsPerPage))}get paginatedPokemons(){return this.pokemons}toggleFilter(e){this.activeFilters.includes(e)?this.activeFilters=this.activeFilters.filter(t=>t!==e):this.activeFilters=[...this.activeFilters,e],this.currentPage=1,this.fetchPokemons()}changePage(e){let t=Math.min(Math.max(e,1),this.totalPages);this.isLoading||t===this.currentPage||(this.currentPage=t,this.fetchPokemons())}updated(e){e.has(`theme`)&&this.applyDocumentTheme(),e.has(`pageSize`)&&e.get(`pageSize`)!==void 0&&(this.currentPage=1,this.fetchPokemons())}renderPagination(){if(this.errorMessage||this.totalProducts<=this.itemsPerPage)return``;let e=this.getVisiblePages();return L`
      <nav class="pagination" aria-label="Product pagination">
        <button
          type="button"
          class="pagination-button"
          ?disabled=${this.isLoading||this.currentPage===1}
          @click=${()=>this.changePage(this.currentPage-1)}
        >
          Previous
        </button>

        <div class="pagination-pages">
          ${e.map(e=>L`
            <button
              type="button"
              class="pagination-page ${e===this.currentPage?`active`:``}"
              aria-label=${`Go to page ${e}`}
              aria-current=${e===this.currentPage?`page`:`false`}
              ?disabled=${this.isLoading||e===this.currentPage}
              @click=${()=>this.changePage(e)}
            >
              ${e}
            </button>
          `)}
        </div>

        <button
          type="button"
          class="pagination-button"
          ?disabled=${this.isLoading||this.currentPage===this.totalPages}
          @click=${()=>this.changePage(this.currentPage+1)}
        >
          Next
        </button>
      </nav>
    `}getVisiblePages(){let e=Math.min(this.currentPage,Math.max(1,this.totalPages-5+1)),t=Math.min(this.totalPages,e+5-1);return Array.from({length:t-e+1},(t,n)=>e+n)}applyDocumentTheme(){let e=document.documentElement;this.hasAppliedDocumentTheme||=(this.previousDocumentTheme=e.dataset.theme,!0),e.dataset.theme=this.theme,this.dispatchEvent(new CustomEvent(`theme-change`,{bubbles:!0,composed:!0,detail:{theme:this.theme}}))}restoreDocumentTheme(){let e=document.documentElement;!this.hasAppliedDocumentTheme||e.dataset.theme!==this.theme||(this.previousDocumentTheme?e.dataset.theme=this.previousDocumentTheme:delete e.dataset.theme)}render(){return L`
      <div class="wrapper">

        <div class="header">
          ${this.headline?L`<h1>${this.headline}</h1>`:``}
          <button
            class="theme-toggle"
            type="button"
            role="switch"
            aria-label="Toggle dark theme"
            aria-checked=${this.theme===`dark`}
            @click=${()=>this.toggleTheme()}
          >
            <span class="toggle-track">
              <span class="toggle-thumb"></span>
            </span>
            <span class="toggle-label">${this.theme===`dark`?`Dark`:`Light`}</span>
          </button>
        </div>

        <div class="layout">

          <aside class="filters">
            <strong>Filter</strong>
            <p>Type</p>
            ${this.allTypes.map(e=>L`
              <label>
                <input
                  type="checkbox"
                  @change=${()=>this.toggleFilter(e)}
                  ?checked=${this.activeFilters.includes(e)}
                />
                <span class="type-dot ${e}"></span>
                ${e}
              </label>
            `)}
          </aside>

          <section class="products" aria-live="polite">
            <div class="grid">
              ${this.isLoading?L`<p>Loading...</p>`:this.errorMessage?L`<p class="error-message">${this.errorMessage}</p>`:this.pokemons.length===0?L`<p class="error-message">No products match the selected filters.</p>`:this.paginatedPokemons.map(e=>L`
                      <product-card
                        .pokemonId=${e.id}
                        .name=${e.name}
                        .imageUrl=${e.imageUrl}
                        .pokemonTypes=${e.types}
                        .detailUrl=${e.detailUrl}
                        @pokemon-image-error=${()=>this.handlePokemonImageError(e)}
                      ></product-card>
                    `)}
            </div>

            ${this.renderPagination()}
          </section>

        </div>

      </div>
    `}static{this.styles=o`
    :host {
      display: block;
      width: min(100%, 1126px);
      min-height: 100svh;
      padding: 24px;
      box-sizing: border-box;
      background: var(--page-background, #ffffff);
      color: var(--text-color, #333);
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      transition:
        background-color 180ms ease,
        color 180ms ease;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
      gap: 16px;
    }

    h1 { font-size: 24px; margin: 0; }

    .theme-toggle {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 4px 10px 4px 4px;
      border-radius: 99px;
      border: 1px solid var(--surface-border, #ddd);
      cursor: pointer;
      background: var(--surface-background, #fff);
      color: var(--text-color, #333);
      font-size: 14px;
      font-weight: 600;
      transition:
        background-color 180ms ease,
        border-color 180ms ease,
        color 180ms ease,
        box-shadow 180ms ease;
    }

    .theme-toggle:hover {
      box-shadow: 0 8px 20px rgb(15 23 42 / 12%);
    }

    .theme-toggle:focus-visible,
    .pagination-button:focus-visible,
    .pagination-page:focus-visible,
    input:focus-visible {
      outline: 3px solid var(--focus-ring-color, #6890f0);
      outline-offset: 3px;
    }

    .toggle-track {
      width: 42px;
      height: 24px;
      border-radius: 99px;
      padding: 2px;
      box-sizing: border-box;
      background: #d8dde6;
      transition: background-color 180ms ease;
    }

    .toggle-thumb {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 0 2px 6px rgb(15 23 42 / 25%);
      transform: translateX(0);
      transition: transform 180ms ease;
    }

    :host([theme='dark']) .toggle-track {
      background: #6890f0;
    }

    :host([theme='dark']) .toggle-thumb {
      transform: translateX(18px);
    }

    .layout { display: flex; gap: 24px; }

    .products {
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: 20px;
    }

    .filters {
      min-width: 140px;
      border: 1px solid var(--surface-border, #ddd);
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      height: fit-content;
      border-radius: 8px;
      background: var(--surface-background, #fff);
      transition:
        background-color 180ms ease,
        border-color 180ms ease;
    }

    .filters p { margin: 0; font-weight: bold; }

    label {
      display: flex;
      align-items: center;
      gap: 6px;
      text-transform: capitalize;
      cursor: pointer;
    }

    input {
      accent-color: var(--focus-ring-color, #6890f0);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      align-content: start;
    }

    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      flex-wrap: wrap;
    }

    .pagination-pages {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .pagination-button,
    .pagination-page {
      min-height: 36px;
      border: 1px solid var(--surface-border, #ddd);
      border-radius: 999px;
      background: var(--surface-background, #fff);
      color: var(--text-color, #333);
      cursor: pointer;
      font: inherit;
      font-size: 14px;
      transition:
        background-color 180ms ease,
        border-color 180ms ease,
        color 180ms ease,
        transform 180ms ease;
    }

    .pagination-button {
      padding: 0 14px;
    }

    .pagination-page {
      width: 36px;
      padding: 0;
    }

    .pagination-button:hover:not(:disabled),
    .pagination-page:hover {
      transform: translateY(-1px);
      border-color: var(--focus-ring-color, #6890f0);
    }

    .pagination-page.active {
      background: var(--focus-ring-color, #6890f0);
      border-color: var(--focus-ring-color, #6890f0);
      color: #ffffff;
      font-weight: 700;
    }

    .pagination-button:disabled,
    .pagination-page:disabled {
      cursor: not-allowed;
      opacity: 0.45;
    }

    .pagination-page.active:disabled {
      opacity: 1;
    }

    .wrapper { min-height: calc(100svh - 48px); }

    .type-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      display: inline-block;
      background: #ccc;
    }

    .error-message {
      grid-column: 1 / -1;
      margin: 0;
      color: var(--muted-text-color, #7a8491);
    }

    .type-tag {
      padding: 4px 12px;
      border-radius: 99px;
      font-size: 12px;
      color: white;
      text-transform: capitalize;
    }

    @media (max-width: 760px) {
      :host {
        padding: 16px;
      }

      .header {
        align-items: flex-start;
      }

      .layout {
        flex-direction: column;
      }

      .filters {
        width: 100%;
        box-sizing: border-box;
      }

      .grid {
        grid-template-columns: repeat(auto-fit, minmax(132px, 1fr));
      }

      .pagination {
        justify-content: stretch;
      }

      .pagination-button {
        flex: 1;
      }
    }

    .grass    { background: #78c850; }
    .poison   { background: #a040a0; }
    .fire     { background: #f08030; }
    .water    { background: #6890f0; }
    .normal   { background: #a8a878; }
    .flying   { background: #98d8d8; }
    .bug      { background: #a8b820; }
    .electric { background: #f8d030; }
    .ground   { background: #e0c068; }
    .fairy    { background: #ee99ac; }
    .psychic  { background: #f85888; }
    .rock     { background: #b8a038; }
    .ice      { background: #98d8d8; }
    .dragon   { background: #7038f8; }
    .ghost    { background: #705898; }
    .dark     { background: #705848; }
    .steel    { background: #b8b8d0; }
    .fighting { background: #c03028; }
  `}};Z([Y({type:String})],$.prototype,`headline`,void 0),Z([X()],$.prototype,`pokemons`,void 0),Z([X()],$.prototype,`activeFilters`,void 0),Z([X()],$.prototype,`allTypes`,void 0),Z([X()],$.prototype,`isLoading`,void 0),Z([Y({type:String,reflect:!0})],$.prototype,`theme`,void 0),Z([X()],$.prototype,`errorMessage`,void 0),Z([X()],$.prototype,`currentPage`,void 0),Z([X()],$.prototype,`totalProducts`,void 0),Z([Y({type:Number,attribute:`page-size`})],$.prototype,`pageSize`,void 0),$=Z([_e(`product-overview`)],$);