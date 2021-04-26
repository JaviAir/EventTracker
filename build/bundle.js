var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t,e){t.appendChild(e)}function a(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function l(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let f;function d(t){f=t}const p=[],h=[],$=[],m=[],g=Promise.resolve();let b=!1;function y(t){$.push(t)}let _=!1;const x=new Set;function v(){if(!_){_=!0;do{for(let t=0;t<p.length;t+=1){const e=p[t];d(e),w(e.$$)}for(d(null),p.length=0;h.length;)h.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];x.has(e)||(x.add(e),e())}$.length=0}while(p.length);for(;m.length;)m.pop()();b=!1,_=!1,x.clear()}}function w(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const k=new Set;function E(t,e){-1===t.$$.dirty[0]&&(p.push(t),b||(b=!0,g.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(c,u,s,i,l,p,h=[-1]){const $=f;d(c);const m=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map($?$.$$.context:u.context||[]),callbacks:n(),dirty:h,skip_bound:!1};let g=!1;if(m.ctx=s?s(c,u.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return m.ctx&&l(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),g&&E(c,t)),e})):[],m.update(),g=!0,o(m.before_update),m.fragment=!!i&&i(m.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);m.fragment&&m.fragment.l(t),t.forEach(a)}else m.fragment&&m.fragment.c();u.intro&&((b=c.$$.fragment)&&b.i&&(k.delete(b),b.i(_))),function(t,n,c,u){const{fragment:a,on_mount:s,on_destroy:i,after_update:l}=t.$$;a&&a.m(n,c),u||y((()=>{const n=s.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(y)}(c,u.target,u.anchor,u.customElement),v()}var b,_;d($)}function S(e){let n,o,r,c,f,d,p;return{c(){n=s("main"),o=s("h1"),r=i("Hello "),c=i(e[0]),f=i("!"),d=i(" "),p=s("p"),p.innerHTML='Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn\n    how to build Svelte apps.',l(o,"class","svelte-1e9puaw"),l(n,"class","svelte-1e9puaw")},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e),u(n,o),u(o,r),u(o,c),u(o,f),u(n,d),u(n,p)},p(t,[e]){1&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(c,t[0])},i:t,o:t,d(t){t&&a(n)}}}function j(t,e,n){let{name:o}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),A(this,t,j,S,c,{name:0})}}({target:document.body,props:{name:"world"}})}();
