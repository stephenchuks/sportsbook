(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9938],{28043:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return T},default:function(){return O}});var r=t(86295),i=t(18805),o=t(88944),l=t(65074),a=t(30425),s=t(12637),u=t(82777),d=t(16960),c=t(16874),m=t(3917),v=t(41664),h=t.n(v),p=t(86003),f=t(20438),w=t(23770),x=t(67294),g=t(20886),y=t(97642),j=t.n(y),_=t(92802),b=t(85893),N=function(e){var n,t,r,i,v,y,N,Z,F,C,P,A,I,D,S,T=e.sport,O=e.playerOrTeam,L="position"in O?O:void 0,M="abbreviation"in O?O:void 0,k=null!==(n=null!==(t=null==L?void 0:null===(r=L.team)||void 0===r?void 0:r.numberFireId)&&void 0!==t?t:null==M?void 0:M.numberFireId)&&void 0!==n?n:null,E=null!==(i=null!==(v=null==L?void 0:null===(y=L.team)||void 0===y?void 0:y.name)&&void 0!==v?v:null==M?void 0:M.name)&&void 0!==i?i:void 0,X=null!==(N=null!==(Z=null==L?void 0:null===(F=L.team)||void 0===F?void 0:null===(C=F.image)||void 0===C?void 0:C.url)&&void 0!==Z?Z:null==M?void 0:null===(P=M.image)||void 0===P?void 0:P.url)&&void 0!==N?N:void 0,R=null!==(A=null!==(I=null==L?void 0:null===(D=L.team)||void 0===D?void 0:D.numberFireId)&&void 0!==I?I:null==M?void 0:M.numberFireId)&&void 0!==A?A:void 0,z=(0,a.Z)({sport:null!==(S=T.contentSport)&&void 0!==S?S:void 0,newsTypeFilter:null,positionFilter:null,teamFilter:k}),B=z.updatesData,U=z.isFetching,W=z.isLoading,Y=(0,w.i)().logAmplitudeEvent,H=(0,x.useCallback)(function(e){var n,t,r,i,o,a,s="position"in e.primaryRef?e.primaryRef:void 0,u="abbreviation"in e.primaryRef?e.primaryRef:void 0;return s?e.sport.contentSport===l.Lz.Nfl?null==s?void 0:null===(i=s.team)||void 0===i?void 0:null===(o=i.teamJerseyImage)||void 0===o?void 0:o.url:null==s?void 0:null===(a=s.image)||void 0===a?void 0:a.url:null!==(n=null==u?void 0:null===(t=u.teamJerseyImage)||void 0===t?void 0:t.url)&&void 0!==n?n:null==u?void 0:null===(r=u.image)||void 0===r?void 0:r.url},[]);return(0,b.jsxs)(s.Z,{variant:"elevation",elevation:"low",className:j().newsContainer,children:[(0,b.jsxs)("div",{className:j().headerContainer,children:[(0,b.jsxs)("h3",{children:[(0,b.jsx)(o.Z,{width:25,height:25,src:X,alt:null!=E?E:""}),"Recent ".concat(E," Player News")]}),(0,b.jsxs)(h(),{className:j().viewAll,href:"/".concat(T.slug,"/player-news?team=").concat(R),children:["View All ".concat(E," Player News")," ",(0,b.jsx)(d.Z,{})]})]}),(0,b.jsxs)("div",{className:j().listContainer,children:[U||W?(0,b.jsx)("div",{className:j().loadingContainer,children:(0,b.jsx)(u.Z,{size:"medium"})}):"",0!==B.length||U||W?"":(0,b.jsx)(p.Z,{headline:"No player news available",subtext:"Please check back later.",showCta:!1}),B.map(function(e){var n,t,r,i,o,l,a,s,u;return(0,b.jsx)("div",{children:(0,b.jsxs)("div",{className:j().feedItem,children:[(0,b.jsxs)("div",{className:j().titleAndAuthor,children:[(0,b.jsx)("p",{className:j().articleTitle,children:(0,b.jsx)(_.Z,{news:e})}),(0,b.jsxs)("p",{className:j().authorName,children:[(0,b.jsx)("a",{onClick:function(){var n,t,r,i;return Y(f.Bt,{"Link Text":null!==(n=null===(t=e.attribution)||void 0===t?void 0:t.name)&&void 0!==n?n:"","Link URL":null!==(r=null===(i=e.attribution)||void 0===i?void 0:i.link)&&void 0!==r?r:"",module:"team_player_news",Competition:e.sport.name})},target:"_blank",href:null!==(n=null===(t=e.attribution)||void 0===t?void 0:t.link)&&void 0!==n?n:void 0,rel:"noreferrer",children:null===(r=e.attribution)||void 0===r?void 0:r.name}),e.lastPublishedAt?(0,b.jsx)("time",{dateTime:e.lastPublishedAt,tw:"pl-1",suppressHydrationWarning:!0,children:" • ".concat((0,m.K8)(e.lastPublishedAt))}):""]})]}),(0,b.jsx)("div",{className:j().headShot,children:(0,b.jsx)(g.Z,{primaryImgName:e.primaryRef.name,primaryImgUrl:null!==(i=H(e))&&void 0!==i?i:"",primaryImgSize:60,secondaryImgName:null!==(o=null==L?void 0:null===(l=L.team)||void 0===l?void 0:l.name)&&void 0!==o?o:"",secondaryImgUrl:null!==(a=null==L?void 0:null===(s=L.team)||void 0===s?void 0:null===(u=s.image)||void 0===u?void 0:u.url)&&void 0!==a?a:c.x8,secondaryImgSize:30})})]})},e.id)})]})]})},Z=t(57562),F=function(e){var n,t,r,i,l,a=e.sport,c=(0,Z.Z)({sportName:a.name}),v=c.articles,f=c.isFetching,w=c.isLoading;return(0,b.jsxs)(s.Z,{variant:"elevation",elevation:"low",className:j().newsContainer,children:[(0,b.jsxs)("div",{className:j().headerContainer,children:[(0,b.jsxs)("h3",{children:[(0,b.jsx)(o.Z,{width:25,height:25,src:null!==(n=null===(t=a.logo)||void 0===t?void 0:t.url)&&void 0!==n?n:"",alt:null!==(r=a.name)&&void 0!==r?r:""}),"Recent ".concat(null!==(i=a.name)&&void 0!==i?i:""," News")]}),(0,b.jsxs)(h(),{className:j().viewAll,href:"/".concat(a.slug),children:["View All ".concat(null!==(l=a.name)&&void 0!==l?l:""," News")," ",(0,b.jsx)(d.Z,{})]})]}),(0,b.jsxs)("div",{className:j().listContainer,children:[f||w?(0,b.jsx)("div",{className:j().loadingContainer,children:(0,b.jsx)(u.Z,{size:"medium"})}):"",v&&0===v.length&&!(f||w)?(0,b.jsx)(p.Z,{headline:"No articles available",subtext:"Please check back later.",showCta:!1}):"",v?null==v?void 0:v.map(function(e){var n,t,r;return(0,b.jsx)("div",{className:j().feedList,children:(0,b.jsxs)("div",{className:j().feedItem,children:[(0,b.jsxs)("div",{className:j().titleAndAuthor,children:[(0,b.jsx)("p",{className:j().articleTitle,children:(0,b.jsx)(h(),{href:"/".concat(e.slug),children:e.title})}),(0,b.jsxs)("p",{className:j().authorName,children:[(0,b.jsx)("a",{target:"_blank",href:"".concat(null===(n=e.author.socialMedia)||void 0===n?void 0:null===(t=n[0])||void 0===t?void 0:t.url),rel:"noreferrer",children:e.author.name}),e.lastPublishedAt?(0,b.jsx)("time",{dateTime:e.lastPublishedAt,tw:"pl-1",suppressHydrationWarning:!0,children:" • ".concat((0,m.K8)(e.lastPublishedAt))}):""]})]}),(0,b.jsx)("div",{className:j().articleImageContainer,children:(0,b.jsx)(o.Z,{src:null===(r=e.thumbnailImageUrl)||void 0===r?void 0:r.url,alt:e.title,width:133,height:77})})]})},e.id)}):""]})]})},C=t(2962),P=t(63696),A=t.n(P),I=function(e){var n,t=e.shortForm,r=e.sport;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(C.PB,{title:t.title,description:null!==(n=t.seo.description)&&void 0!==n?n:t.description}),(0,b.jsxs)("div",{className:A().container,children:[(0,b.jsx)(i.Z,{origin:f.cP,TitleTag:"h1",news:t}),(0,b.jsxs)("div",{className:A().feedsContainer,children:[r.contentSport?(0,b.jsx)("div",{className:A().feedItems,children:(0,b.jsx)(F,{sport:t.sport})}):"",r.contentSport?(0,b.jsx)("div",{className:A().feedItems,children:(0,b.jsx)(N,{sport:r,playerOrTeam:t.primaryRef})}):""]})]})]})},D=t(18325),S=t(59136),T=!0,O=function(e){var n,t,i,o,l,a,s,u,d,c,m=e.shortForm,v=e.sport,h=(0,w.i)().logAmplitudeEvent;(0,D.Z)(function(){h(f.vP,{Competition:v.name,"Article Name":m.title})});var p=null!==(n=m.newsType)&&void 0!==n&&n.enum?"https://www.fanduel.com/research/".concat(m.sport.slug,"/player-news/").concat(r.z3[m.newsType.enum],"/").concat(m.slug):"";return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(C.PB,{title:m.title,description:m.description,canonical:p,openGraph:{url:p,type:"article",article:{publishedTime:null!==(t=m.firstPublishedAt)&&void 0!==t?t:new Date().toISOString()}}}),(0,b.jsx)(C.dX,{useAppDir:!1,url:p,title:null!==(i=null===(o=m.seo)||void 0===o?void 0:o.title)&&void 0!==i?i:null==m?void 0:m.title,description:null!==(l=null===(a=m.seo)||void 0===a?void 0:a.description)&&void 0!==l?l:"",datePublished:null!==(s=m.firstPublishedAt)&&void 0!==s?s:new Date().toISOString(),dateModified:null!==(u=m.lastPublishedAt)&&void 0!==u?u:void 0,images:[S.Y],authorName:[{name:m.author.name,url:null===(d=m.author.socialMedia)||void 0===d?void 0:null===(c=d[0])||void 0===c?void 0:c.url}],publisherName:"FanDuel Research",publisherLogo:S.Y,isAccessibleForFree:!0}),(0,b.jsx)(I,{shortForm:m,sport:v})]})}},3917:function(e,n,t){"use strict";t.d(n,{BL:function(){return j},BS:function(){return b},K8:function(){return w},L0:function(){return g},LW:function(){return x},Of:function(){return _},Ui:function(){return y},e1:function(){return F},eD:function(){return N},hX:function(){return C},xz:function(){return Z}});var r=t(59499),i=t(78162),o=t(35077),l=t(78926),a=t(34117),s=t(69599),u=t(23855),d=t(69690),c=t(34317);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach(function(n){(0,r.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var h={lessThanXSeconds:"{{count}}s",xSeconds:"{{count}}s",halfAMinute:"30s",lessThanXMinutes:"{{count}}m",xMinutes:"{{count}}m",aboutXHours:"{{count}}h",xHours:"{{count}}h",xDays:"{{count}}d",aboutXWeeks:"{{count}}w",xWeeks:"{{count}}w",aboutXMonths:"{{count}}mo",xMonths:"{{count}}mo",aboutXYears:"{{count}}y",xYears:"{{count}}y",overXYears:"{{count}}y",almostXYears:"{{count}}y"},p={lessThanXMinutes:"{{count}}m",xMinutes:"{{count}}m",aboutXHours:"{{count}}h",xHours:"{{count}}h",xDays:"{{count}}d",aboutXWeeks:"{{count}}w",xWeeks:"{{count}}w",aboutXMonths:"{{count}}mo",xMonths:"{{count}}mo",aboutXYears:"{{count}}y",xYears:"{{count}}y"};function f(e,n){var t="";return 1===n&&(t=p[e]),t||(t=h[e]),t.replace("{{count}}",n.toString())}var w=function(e){try{return(0,i.Z)((0,u.Z)(e),new Date,{locale:v(v({},o.Z),{},{formatDistance:f})})}catch(n){return""}},x=function(e){return(0,d.Z)((0,u.Z)(e),new Date)},g=function(e){try{return(0,l.Z)((0,u.Z)(e),"E, h:mm a")}catch(n){return c.Z.error("getFormattedDate error",{date:e,error:n}),""}},y=function(e){var n=Intl.DateTimeFormat().resolvedOptions().timeZone;try{var t=(0,u.Z)(e),r=(0,s.Z)(t,n);return(0,a.Z)(r,"EEEE, LLLL do yyyy, 'at' h:mma z",{timeZone:n})}catch(i){return c.Z.error("getFormattedDate error",{date:e,error:i}),""}},j=function(e){try{var n=new Date().toLocaleTimeString("en-us",{timeZoneName:"short"}).split(" ")[2],t=(0,u.Z)(e),r=(0,l.Z)(t,"E, h:mma");return"".concat(r.charAt(0)+r.slice(1).toLowerCase()," ").concat(n)}catch(i){return c.Z.error("getFormattedDate error",{date:e,error:i}),""}},_=function(e){try{var n=new Date().toLocaleTimeString("en-us",{timeZoneName:"short"}).split(" ")[2],t=(0,l.Z)(e,"LLL d h:mma");return"".concat(t.charAt(0)+t.slice(1).toLowerCase()," ").concat(n)}catch(r){return c.Z.error("getFormattedDate error",{date:e,error:r}),""}},b=function(e){try{return(0,l.Z)((0,u.Z)(e),"EEEE")}catch(n){return c.Z.error("getFormattedDate error",{date:e,error:n}),""}},N=function(e){try{return(0,l.Z)((0,u.Z)(e),"MM/dd")}catch(n){return c.Z.error("getFormattedDate error",{date:e,error:n}),""}},Z=function(e){try{return(0,l.Z)((0,u.Z)(e),"h:mm b")}catch(n){return c.Z.error("getFormattedDate error",{date:e,error:n}),""}},F=function(e){try{return(0,l.Z)((0,u.Z)(e),"MMMM d, yyyy")}catch(n){return c.Z.error("getFormattedDate error",{date:e,error:n}),""}},C=function(e){return(0,l.Z)(e,"MMMM d, yyyy")}},43493:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[slug]/player-news/[newsType]/[newsSlug]",function(){return t(28043)}])},63696:function(e){e.exports={container:"singlePlayerNewsContainer_container__VVN5j",feedsContainer:"singlePlayerNewsContainer_feedsContainer__Shiun",feedItems:"singlePlayerNewsContainer_feedItems__IdWoK"}},97642:function(e){e.exports={loadingContainer:"newsFeed_loadingContainer__BFeXB",newsContainer:"newsFeed_newsContainer__P0rdP",headerContainer:"newsFeed_headerContainer__mXb_d",articleImageContainer:"newsFeed_articleImageContainer__X_hd0",feedItem:"newsFeed_feedItem__U0E7S",titleAndAuthor:"newsFeed_titleAndAuthor__0zJBT",articleTitle:"newsFeed_articleTitle__Gj3Ix",authorName:"newsFeed_authorName__Rwnlg",headShot:"newsFeed_headShot__5991V",feedList:"newsFeed_feedList__zxxUR",viewAll:"newsFeed_viewAll__7U8QT"}}},function(e){e.O(0,[2355,1491,8545,2227,9503,5520,7065,9774,2888,179],function(){return e(e.s=43493)}),_N_E=e.O()}]);
//# sourceMappingURL=[newsSlug]-a9380ecd177bdafb.js.map