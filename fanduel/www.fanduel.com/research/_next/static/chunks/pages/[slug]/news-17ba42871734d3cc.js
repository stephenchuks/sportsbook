(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6377],{82777:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var n={wrapper:"Loader-module_wrapper__nbgeg",circle:"Loader-module_circle__HJPoP","splash-screen-loading-disc-animation":"Loader-module_splash-screen-loading-disc-animation__-gn3p",big:"Loader-module_big__D-5b4",medium:"Loader-module_medium__SM2s2",small:"Loader-module_small__-6fT2",alert:"Loader-module_alert__fDqHc"},r=i(85893);let o=({size:e="medium",className:t=""})=>{let i=`${n.wrapper} ${n[e]} ${t}`;return(0,r.jsxs)("div",{className:i,"data-test-id":"loader",role:"progressbar","aria-label":"Loading","aria-live":"polite","aria-busy":"true",children:[(0,r.jsx)("div",{className:n.circle}),(0,r.jsx)("div",{className:n.circle}),(0,r.jsx)("div",{className:n.circle})]})}},62495:function(e,t,i){"use strict";i.d(t,{Ns:function(){return l},YC:function(){return s},dH:function(){return c},dq:function(){return a},n:function(){return d}});var n=i(19521),r=i(22742),o=i(46487),a=n.ZP.span.withConfig({displayName:"common__CategoryContainer",componentId:"sc-1um28cy-0"})(["",""],{display:"inline-block",borderRadius:"0.125rem","--tw-bg-opacity":"1",backgroundColor:"rgb(234 240 246 / var(--tw-bg-opacity))",padding:"0.25rem",fontFamily:'"Proxima Nova Condensed", sans-serif',fontSize:"0.75rem",lineHeight:".75rem",textTransform:"uppercase",letterSpacing:"1px","--tw-text-opacity":"1",color:"rgb(31 55 91 / var(--tw-text-opacity))"});n.ZP.button.withConfig({displayName:"common__SportsTab",componentId:"sc-1um28cy-1"})(function(e){return[{paddingTop:"11px",paddingBottom:"11px","--tw-text-opacity":"1",color:"rgb(0 95 200 / var(--tw-text-opacity))"},e.active&&{borderBottomWidth:"1px","--tw-border-opacity":"1",borderColor:"rgb(0 95 200 / var(--tw-border-opacity))",fontWeight:"700"}]});var c=n.ZP.div.withConfig({displayName:"common__ScrollContain",componentId:"sc-1um28cy-2"})(function(e){var t=e.offset,i=e.offsetPixels;return[{display:"flex",flexDirection:"column",gap:"1rem",transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms","@media (min-width: 960px)":{flexDirection:"row"}},t&&"transform:translateX(-".concat(t*(void 0===i?300:i),"px)")]}),s=n.ZP.div.withConfig({displayName:"common__ScrollItem",componentId:"sc-1um28cy-3"})(function(e){return[e.isHidden&&{display:"none","@media (min-width: 960px)":{display:"block"}},{}]}),d=(0,n.ZP)(r.Z).withConfig({displayName:"common__BlueArrowDown",componentId:"sc-1um28cy-4"})(["height:5px;width:9px;"]),l=(0,n.ZP)(o.Z).withConfig({displayName:"common__BlueArrowUp",componentId:"sc-1um28cy-5"})(["height:5px;width:9px;"]);n.ZP.div.withConfig({displayName:"common__HideAtLg",componentId:"sc-1um28cy-6"})(function(){return[{display:"block","@media (min-width: 1024px)":{display:"none"}}]}),n.ZP.div.withConfig({displayName:"common__HideAtMd",componentId:"sc-1um28cy-7"})(function(){return[{display:"block","@media (min-width: 960px)":{display:"none"}}]}),n.ZP.div.withConfig({displayName:"common__HideAtSm",componentId:"sc-1um28cy-8"})(function(){return[{display:"none","@media (min-width: 960px)":{display:"block"}}]})},3629:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return f}});var n=i(19521),r=i(66553),o=i(57562),a=i(64464),c=i(48470),s=i(23770),d=i(67294),l=i(20438),m=i(52075),u=i(85893),p=n.ZP.section.withConfig({displayName:"news__ConditionalCols",componentId:"sc-at9pqr-0"})(function(e){return[e.fullWidth?{gridColumn:"span 1 / span 1",marginBottom:"1rem","@media (min-width: 960px)":{gridColumn:"span 4 / span 4"}}:{gridColumn:"span 1 / span 1",marginBottom:"1rem","@media (min-width: 960px)":{gridColumn:"span 3 / span 3"}}]}),f=!0;t.default=function(e){var t,i=e.sport,n=(0,s.i)(),f=n.setPage,_=n.logAmplitudeEvent,x=n.isActive,v=(0,o.Z)({limit:12,sportName:i.name}),w=v.articles,y=v.fetchNextPage,P=v.hasNextPage,N=v.isLoading,b=v.isFetching,C=(0,d.useRef)(""),Z=(null===(t=i.seo)||void 0===t?void 0:t.title)||i.name;return(0,d.useEffect)(function(){C.current!==Z&&x&&(C.current=Z||"",f("league_news"),_(l.aN,{Competition:i.name||""}))},[f,Z,i.name,_,x]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.Z,{sport:i,definedUrl:"".concat(m.HJ.FANDUEL_URL_RESEARCH,"/").concat(i.slug,"/news")}),(0,u.jsxs)(c.Z,{legacy:!0,children:[(0,u.jsx)(g,{children:"".concat(i.name," News")}),(0,u.jsx)(h,{children:(0,u.jsx)(p,{fullWidth:!0,children:w&&(0,u.jsx)(r.Z,{hasMore:!!P,loadMore:y,articles:w,origin:"sport_news_page",isLoading:N||b})})})]})]})};var g=(0,n.ZP)("p").withConfig({displayName:"news___StyledP",componentId:"sc-at9pqr-1"})({marginTop:"1.5rem",fontSize:"1.25rem",lineHeight:"1.75rem",fontWeight:"700"}),h=(0,n.ZP)("div").withConfig({displayName:"news___StyledDiv",componentId:"sc-at9pqr-2"})({marginTop:"1rem",marginBottom:"1rem",display:"grid",gridTemplateColumns:"repeat(1, minmax(0, 1fr))","@media (min-width: 960px)":{gridTemplateColumns:"repeat(4, minmax(0, 1fr))",gap:"1rem"}})},57562:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var n=i(29726),r=i(24139),o=i(3723),a=i(90116),c=function(e){var t=e.limit,i=void 0===t?6:t,c=e.sportName,s=e.hideDeprioritizedContent,d=void 0!==s&&s,l=(0,n.N)({placeholderData:r.Wk,queryKey:["recent-articles",i,c,d],queryFn:function(e){return(0,o.zC)({limit:i,sportName:c,hideDeprioritizedContent:d,afterCursor:e.pageParam})},getNextPageParam:function(e){var t,i,n,r;return null!==(t=e.getArticles)&&void 0!==t&&null!==(i=t.pageInfo)&&void 0!==i&&i.hasNextPage?null===(n=e.getArticles)||void 0===n?void 0:null===(r=n.pageInfo)||void 0===r?void 0:r.cursor:""},initialPageParam:""}),m=l.data,u=l.isLoading,p=l.fetchNextPage,f=l.hasNextPage,g=l.isError,h=l.isFetching,_=l.isFetchingNextPage,x=l.refetch;return{articles:m&&m.pages.reduce(function(e,t){var i,n,r=(null===(i=t.getArticles)||void 0===i?void 0:null===(n=i.articles)||void 0===n?void 0:n.map(function(e){return null==e?void 0:e.entity}))||[];return r?[].concat((0,a.Z)(e),(0,a.Z)(r.filter(function(e){return e}))):e},[]),fetchNextPage:p,hasNextPage:f,isError:g,isLoading:u,isFetching:h,isFetchingNextPage:_,refetch:x}}},29686:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[slug]/news",function(){return i(3629)}])},29726:function(e,t,i){"use strict";i.d(t,{N:function(){return c}});var n=i(72536),r=i(54948),o=class extends n.z{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:(0,r.Gm)()},t)}getOptimisticResult(e){return e.behavior=(0,r.Gm)(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){let{state:i}=e,n=super.createResult(e,t),{isFetching:o,isRefetching:a}=n,c=o&&i.fetchMeta?.fetchMore?.direction==="forward",s=o&&i.fetchMeta?.fetchMore?.direction==="backward";return{...n,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:(0,r.Qy)(t,i.data),hasPreviousPage:(0,r.ZF)(t,i.data),isFetchingNextPage:c,isFetchingPreviousPage:s,isRefetching:a&&!c&&!s}}},a=i(9301);function c(e,t){return(0,a.r)(e,o,t)}}},function(e){e.O(0,[2355,8330,9774,2888,179],function(){return e(e.s=29686)}),_N_E=e.O()}]);
//# sourceMappingURL=news-17ba42871734d3cc.js.map