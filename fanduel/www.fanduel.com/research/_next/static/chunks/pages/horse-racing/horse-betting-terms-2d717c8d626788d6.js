(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8270],{89332:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(67294),a=r(94184),o=r.n(a),i={wrapper:"Dropdown-module_wrapper__xNAW3",dropdownButton:"Dropdown-module_dropdownButton__deiEF",outlined:"Dropdown-module_outlined__qkNRx",standard:"Dropdown-module_standard__9GJo3",small:"Dropdown-module_small__84B0K",medium:"Dropdown-module_medium__lgIqL",container:"Dropdown-module_container__JPOAH",title:"Dropdown-module_title__fLsjF",content:"Dropdown-module_content__G-jrM",fieldset:"Dropdown-module_fieldset__rrmTX",icon:"Dropdown-module_icon__0eAo0",alert:"Dropdown-module_alert__nG0lq"},s=r(70257),c={label:"RadioItem-module_label__TkMKI",alert:"RadioItem-module_alert__VeQl7"},d=r(85893);let l=({label:e,selectedOption:t,setDropdownOpen:r,setSelectedOption:a,className:i,labelAdditional:s,dataTestId:l,onChange:u})=>{let h=(0,n.useRef)(null),p=e===t.label,m=()=>{a({label:e,labelAdditional:s}),u&&u()},g=e=>{"click"===e.type&&0!==e.clientX&&0!==e.clientY&&r(!1)},f=`${e} ${s?` (${s})`:""}`;return(0,d.jsxs)("label",{className:o()(c.label,i),ref:h,children:[(0,d.jsx)("input",{"data-test-id":l,role:"option","aria-selected":p,className:c.input,type:"radio",name:"radio",onChange:m,onClick:g,defaultChecked:p}),f]})},u=(e,t,r,a)=>{let o=r=>{"Escape"===r.key&&e&&t(!1)},i=e=>{r.current&&(r.current.contains(e.target)||t(!1))};return(0,n.useEffect)(()=>(e&&window.addEventListener("pointerdown",i),()=>window.removeEventListener("pointerdown",i)),[e]),(0,n.useEffect)(()=>(document.removeEventListener("keydown",o),e&&a?.current&&(a.current.focus({preventScroll:!0}),document.addEventListener("keydown",o)),()=>{document.removeEventListener("keydown",o)}),[e]),null},h=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").replace(/--+/g,"-").replace(/[&\\#,+()$~%.'":*?<>{}]/g,"").toLowerCase(),p={outlined:"outlined",standard:"standard"},m={small:"small",medium:"medium"},g=({classFieldset:e,title:t,options:r,onChange:a,selected:c=0,setSelected:g,size:f=m.small,variant:b=p.outlined})=>{let y=(0,n.useRef)(null),w=(0,n.useRef)(null),_=(0,n.useRef)(null),[v,x]=(0,n.useState)(!1);u(v,x,y,w);let k=(0,n.useCallback)(e=>{a&&a(e)},[a]),j=()=>{x(!v)},A=`${r[c].label} ${r[c].labelAdditional?` (${r[c].labelAdditional})`:""}`,C=o()(i.dropdownButton,i[b],i[f]),N=o()(i.container,i[f]),T=o()(i.fieldset,e);return(0,d.jsxs)("div",{className:i.wrapper,ref:y,"data-test-id":"dropdown",children:[(0,d.jsx)("button",{"data-test-id":"dropdown-button",className:C,onClick:j,ref:_,children:(0,d.jsxs)("div",{className:N,children:[t&&(0,d.jsx)("span",{className:i.title,children:t}),(0,d.jsxs)("div",{className:i.content,children:[(0,d.jsx)("span",{children:A}),v?(0,d.jsx)(s.Z,{iconName:"arrows.up",iconColor:"contentLink",className:i.icon}):(0,d.jsx)(s.Z,{iconName:"arrows.down",iconColor:"contentLink",className:i.icon})]})]})}),v&&(0,d.jsx)("fieldset",{className:T,ref:w,"data-test-id":"dropdown-content",style:{top:(_.current?_.current.offsetHeight:53)+8},children:r.map((e,t)=>(0,d.jsx)(l,{label:e.label,labelAdditional:e.labelAdditional,selectedOption:r[c],onChange:()=>k(t),setDropdownOpen:j,setSelectedOption:()=>g(t),dataTestId:h(e.labelAdditional?`${e.label} ${e.labelAdditional}`:`${e.label}`)},e.label))})]})}},26183:function(e,t,r){"use strict";var n=r(1561),a=r(20753),o=r.n(a),i=r(60786),s=r(85893);t.Z=function(e){var t=e.title,r=e.postTime,a=e.subTitle;return(0,s.jsxs)("div",{className:o().container,children:[r?(0,s.jsx)("div",{className:o().timeContainer,children:(0,s.jsx)(i.Z,{postTime:r})}):"",(0,s.jsx)("h1",{className:o().title,children:t}),null!=a?a:"",(0,s.jsx)(n.Z,{})]})}},60786:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(81039),a=r(39172),o=r(85893),i=function(){return(0,o.jsx)(n.Z,{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 0C3.13435 0 0 3.13435 0 7C0 10.8656 3.13435 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13435 10.8656 0 7 0ZM7 13.1765C3.59471 13.1765 0.823529 10.4053 0.823529 7C0.823529 3.59471 3.59471 0.823529 7 0.823529C10.4053 0.823529 13.1765 3.59471 13.1765 7C13.1765 10.4053 10.4053 13.1765 7 13.1765ZM7.41177 2.88235V6.77929L9.69953 8.30447C9.88894 8.43047 9.94 8.68659 9.814 8.87518C9.73412 8.99459 9.604 9.05882 9.47059 9.05882C9.39153 9.05882 9.31247 9.03659 9.24247 8.98965L6.77188 7.34259C6.65659 7.266 6.58824 7.13753 6.58824 7V2.88235C6.58824 2.65506 6.77271 2.47059 7 2.47059C7.22729 2.47059 7.41177 2.65506 7.41177 2.88235Z",fill:a.Xq})})},s=r(3917),c=r(67294),d=r(94184),l=r.n(d),u=r(71293),h=r.n(u),p=function(e){var t=e.postTime,r=(0,s.LW)(t),n=r>=60,a=r<=0,d=(0,c.useMemo)(function(){return n?(0,s.xz)(t):a?"Resulted":"".concat(r," Min Till Start")},[n,t,r]);return(0,o.jsxs)("span",{suppressHydrationWarning:!0,className:l()(h().container,r<5&&h().soon),children:[(0,o.jsx)(i,{}),(0,o.jsx)("span",{suppressHydrationWarning:!0,children:d})]})}},75840:function(e,t,r){"use strict";r.d(t,{K2:function(){return n},Ks:function(){return a},MS:function(){return i},Uk:function(){return o}});var n="https://racing.fanduel.com",a="USGSA",o={ALL:"All Tracks",US:"USA",INTERNATIONAL:"International"},i="Daily Horse Racing Predictions, Advice, Picks & Horse Profiles all throughout the Horse Racing Calendar"},79762:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return S},default:function(){return L}});var n=r(26183),a=r(67294),o=r(70257),i=r(67338),s=r.n(i),c=r(86003),d=r(85893),l=function(e){var t=e.currentTerms.sort(function(e,t){return e.term.localeCompare(t.term)});return(0,d.jsxs)("ul",{children:[t.map(function(e){return e.enabled?(0,d.jsxs)("li",{className:s().termItem,children:[(0,d.jsx)("p",{className:s().term,children:e.term}),(0,d.jsx)("p",{className:s().description,children:e.description})]},e.description):""}),0===t.length?(0,d.jsx)("div",{className:s().error,children:(0,d.jsx)(c.Z,{headline:"No Terms Available",subtext:"Please check back later.",showCta:!1})}):""]})},u=r(59499),h=r(89332);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach(function(t){(0,u.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g=[{label:"All Terms"},{label:"Wagering"},{label:"Race Conditions"},{label:"During the Race"},{label:"Horses and Horse Care"},{label:"Jockeys"}],f=function(e){var t=e.changeHandler,r=e.selected;return(0,d.jsx)("ul",{className:s().desktopFilters,children:g.map(function(e,n){return(0,d.jsx)("li",{className:r===n?s().selected:"",children:(0,d.jsx)("button",{onClick:function(){t(n)},type:"button",children:e.label})},e.label)})})},b=function(e){var t=e.changeHandler,r=e.selected,n=e.setSelected;return(0,d.jsx)("div",{className:s().mobileFilters,children:(0,d.jsx)(h.Z,{onChange:t,variant:"outlined",title:"Filter",options:g,selected:r,setSelected:n})})},y=function(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(b,m({},e)),(0,d.jsx)(f,m({},e))]})},w=function(e){var t=e.startingTerms,r=(0,a.useState)(t),n=r[0],i=r[1],c=(0,a.useState)(0),u=c[0],h=c[1],p=(0,a.useState)(""),m=p[0],g=p[1],f=(0,a.useCallback)(function(e){e.preventDefault(),(0,a.startTransition)(function(){h(0),0===m.length?i(t):i(t.filter(function(e){return e.description.toLocaleUpperCase().includes(m.toLocaleUpperCase())||e.term.toLocaleUpperCase().includes(m.toLocaleUpperCase())}))})},[m,t]),b=function(){g("")},w=function(e){h(e),0===e&&i(t),e>0&&i(t.filter(function(t){return t.category===e}))};return(0,d.jsxs)("div",{className:s().container,children:[(0,d.jsx)("form",{onSubmit:f,className:s().searchBoxContainer,children:(0,d.jsxs)("div",{className:s().searchBox,children:[(0,d.jsx)(o.Z,{iconName:"icons.search",iconSize:17,iconColor:"colorBaseGreyDarken1"}),(0,d.jsx)("input",{"data-testid":"searchInput",onChange:function(e){return g(e.target.value)},value:m,type:"text",placeholder:"What are you looking for?"}),(0,d.jsx)("input",{type:"reset",value:"X",alt:"Clear the search form",onClick:function(){b(),w(u)},disabled:0===m.length}),(0,d.jsx)("button",{"data-testid":"searchButton",onClick:f,type:"button",disabled:0===m.length,children:"Search"})]})}),(0,d.jsxs)("div",{className:s().filtersAndResults,children:[(0,d.jsx)(y,{changeHandler:w,selected:u,setSelected:h}),(0,d.jsx)(l,{currentTerms:n})]})]})},_=r(1377),v=r(75840),x=r(2962),k=r(23770),j=r(18325),A=r(20438),C=r(887),N=r.n(C),T=function(e){var t=e.title,r=(0,k.i)().logAmplitudeEvent;return(0,j.Z)(function(){r(A.JA,{})}),(0,d.jsxs)("div",{className:N().container,children:[(0,d.jsx)(x.PB,{description:v.MS,title:t}),(0,d.jsx)("div",{className:N().offset,children:(0,d.jsx)(n.Z,{title:"Horse Racing Basic Terms"})}),(0,d.jsx)(w,{startingTerms:_.cE})]})},S=!0,L=function(){return(0,d.jsx)(T,{title:"Horse Racing Basic Terms"})}},18325:function(e,t,r){"use strict";var n=r(67294);t.Z=function(e){var t=(0,n.useRef)(!1);(0,n.useEffect)(function(){t.current||e(),t.current=!0},[e])}},92714:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/horse-racing/horse-betting-terms",function(){return r(79762)}])},887:function(e){e.exports={container:"container_container__6Clez",offset:"container_offset__Q4vGg"}},20753:function(e){e.exports={container:"horseRacingHeader_container__caZTJ",title:"horseRacingHeader_title__PnQ3v",timeContainer:"horseRacingHeader_timeContainer__rN343"}},71293:function(e){e.exports={container:"raceTime_container__57JN5",soon:"raceTime_soon__NijP3"}},67338:function(e){e.exports={searchBox:"termList_searchBox__Q8vrY",filtersAndResults:"termList_filtersAndResults__Rly2l",mobileFilters:"termList_mobileFilters__vx26Y",desktopFilters:"termList_desktopFilters__Lt_mb",selected:"termList_selected__PA8Sr",termItem:"termList_termItem__Wg_Co",container:"termList_container__PWJbt",term:"termList_term__bT551",description:"termList_description__8GG_7",error:"termList_error__DVSZw"}},1377:function(e){"use strict";e.exports=JSON.parse('{"cE":[{"term":"Across the Board","description":"Refers to betting on a horse to finish first, second, and third to cover any of those scenarios happening during a race","category":1,"pages":[1],"enabled":true},{"term":"Daily Double","description":"A wager on two consecutive races on the card where bettors have to pick both winners.","category":1,"pages":[2],"enabled":true},{"term":"Dead Heat","description":"Two or more horses finishing so close at the wire, that they were unable to be separated on a photo finish and deemed to have tied.","category":1,"pages":[3],"enabled":true},{"term":"Exacta","description":"A bet selecting the first and second horses in a race in the correct order. An exacta box refers to paying a little more to ensure they can finish in either order.","category":1,"pages":[4],"enabled":true},{"term":"Minus Pool","description":"A pari-mutuel pool – typically a show pool - where one horse is so heavily bet that after deductions there is not enough money left to cover the prescribed minimum on each bet.","category":1,"pages":[5],"enabled":true},{"term":"Morning Line","description":"An approximation of expected odds in a race, quoted before actual odds are determined.","category":1,"pages":[1,2],"enabled":true},{"term":"Overlay","description":"A horse going off at higher odds than his recent efforts show that he deserves.","category":1,"pages":[],"enabled":false},{"term":"Pari-Mutuel","description":"A pool style wagering system, where all money input through betting is divided among those with winning tickets (save for various deductions by the track operators).","category":1,"pages":[3,5],"enabled":true},{"term":"Scratch","description":"A horse is a scratch when injury or other necessity causes it to be withdrawn from the race.","category":1,"pages":[],"enabled":true},{"term":"Show Wager","description":"Betting on a horse to finish in the first three spots, which pays out the same whether they win or run second or third.","category":1,"pages":[],"enabled":true},{"term":"Stewards","description":"The officials watching every race at a meet to enforce the rules.","category":1,"pages":[],"enabled":true},{"term":"Superfecta","description":"A wager involving choosing the first, second, third, and fourth horses in one race in the exact order. A superfecta box involves paying more to ensure they can finish in any order in the top four spots.","category":1,"pages":[],"enabled":true},{"term":"Track Bias","description":"The term used to identify which parts of the track or running styles are producing more winners.","category":1,"pages":[],"enabled":true},{"term":"Trifecta","description":"A wager picking the first, second and third horses in the exact order. A trifecta box means paying more to ensure the horses can finish in any order in the top three spots.","category":1,"pages":[],"enabled":true},{"term":"Underlay","description":"A horse that is going off at lower odds than it deserves based on performance.","category":1,"pages":[],"enabled":true},{"term":"Allowance Race","description":"A race with non-claiming conditions set by the racing secretary. They are meant to be a step down from stakes racing.","category":2,"pages":[],"enabled":true},{"term":"Also Eligible","description":"A horse that is entered but does not draw into the body of the field due to too many entries, and thus is not permitted to start unless there are enough scratches to shrink the field size.","category":2,"pages":[],"enabled":true},{"term":"Claiming Race","description":"A race in which horses are entered for a certain price, or claiming tag, which is also their sales price. An owner can claim any horse entered for the tag before the race begins, and owns them as soon as the gates open.","category":2,"pages":[],"enabled":true},{"term":"Condition Book","description":"A list of upcoming races issued by the racing secretary, where the conditions of races to be run over the next few weeks are written.","category":2,"pages":[],"enabled":true},{"term":"Fast","description":"A dry dirt track that is typically an ideal racing surface.","category":2,"pages":[],"enabled":true},{"term":"Firm","description":"A dry turf course, equal to a ‘fast’ dirt track.","category":2,"pages":[],"enabled":true},{"term":"Furlong","description":"One furlong is an eighth of a mile.","category":2,"pages":[],"enabled":true},{"term":"Handicap","description":"A race where a handicapper has assigned weights to be carried by all runners on the basis of their past racing efforts.","category":2,"pages":[],"enabled":true},{"term":"Maiden Race","description":"A race exclusively for horses who have not previously won.","category":2,"pages":[],"enabled":true},{"term":"Main Track Only","description":"A horse entered for main track only (MTO) is one hoping the weather forecast or track conditions will move the race off the turf course and onto the main track. They are scratched the morning of the race if the conditions stay dry.","category":2,"pages":[],"enabled":true},{"term":"Turf Course","description":"A racetrack made of grass.","category":2,"pages":[],"enabled":true},{"term":"Sloppy","description":"A wet racetrack condition, typically with a firm base and water settling on top.","category":2,"pages":[],"enabled":true},{"term":"Stakes Race","description":"Stakes Races are known as better class races, with higher purses and often accompanies by trophies.","category":2,"pages":[],"enabled":true},{"term":"Starter Race","description":"An allowance race restricted to horses who have started for a certain claiming price recently.","category":2,"pages":[],"enabled":true},{"term":"State-Bred","description":"A horse bred in a particular state and thus eligible to race in restricted state-bred races. These can be anything from maiden races to stakes events.","category":2,"pages":[],"enabled":true},{"term":"Synthetic Surface","description":"A racing surface comprised of silica sand and fibers, such as recycled carpet or spandex. The mixture is then sealed with wax.","category":2,"pages":[],"enabled":true},{"term":"Yielding","description":"A rain-soaked turf condition often producing a slick or heavy course and slower finish times.","category":2,"pages":[],"enabled":true},{"term":"Bobble/Stumble","description":"A slip or a duck from a horse trying to leave the starting gates, often caused by the surface giving way under the feet. This can range from a mild misstep to a stumble down to their knees.","category":3,"pages":[],"enabled":true},{"term":"Bolt","description":"A sudden veering to the inside or outside rail, often caused by the horse spooking or shying from something.","category":3,"pages":[],"enabled":true},{"term":"Fractions","description":"The times recorded during the race; with timing starting just past the gate or when the gates open, then parroted for the quarter, half, three-quarters etc. Used as an indication of ability and speed.","category":3,"pages":[],"enabled":true},{"term":"Objection","description":"Claim of foul lodged by a jockey for perceived dangerous or illegal riding by a rival.","category":3,"pages":[],"enabled":true},{"term":"Bleeder","description":"A horse that bleeds due to a ruptured blood vessel during a race or workout. The medication Lasix can fix this problem.","category":4,"pages":[],"enabled":true},{"term":"Blinkers","description":"A hood worn on a horse’s head to limit side vision, which can improve concentration. Blinkers are added or removed to relax a horse or give it more focus.","category":4,"pages":[],"enabled":true},{"term":"Breeder","description":"The owner of a horse’s dam – or mother - at the time a horse is foaled.","category":4,"pages":[],"enabled":true},{"term":"Bullet","description":"A bullet, or bullet workout, is a workout that was clocked as the best time for a certain distance on a given day.","category":4,"pages":[],"enabled":true},{"term":"Bute","description":"Shortened word for phenylbutazone, the common non-steroidal medication legal at most racetrack.","category":4,"pages":[],"enabled":true},{"term":"Colt","description":"A male horse that is four years of age or under.","category":4,"pages":[],"enabled":true},{"term":"Filly","description":"A female horse that is four years of age or under.","category":4,"pages":[],"enabled":true},{"term":"Lasix","description":"A medication for the treatment of bleeding in horses that is legal in North America, but not all worldwide jurisdictions.","category":4,"pages":[],"enabled":true},{"term":"Mare","description":"A female horse of five years or more.","category":4,"pages":[],"enabled":true},{"term":"Paddock","description":"The area where horses gather before the race to be saddled and paraded for the public.","category":4,"pages":[],"enabled":true},{"term":"Rabbit","description":"Also known as a pacemaker; this is a horse with no expected chance of winning but is used to prompt a quick pace on the front end of the race to the benefit of a stablemate who is a closer.","category":4,"pages":[],"enabled":true},{"term":"Tack","description":"The equipment the horse wears, including saddle and bridle. A jockey typically has their own racing saddle, placed on each horse they ride just before the race.","category":4,"pages":[],"enabled":true},{"term":"Workout","description":"A workout is a timed sprint over varying distances prior to a race, meant to get a horse fit enough for competition.","category":4,"pages":[],"enabled":true},{"term":"Apprentice","description":"A new jockey who has not ridden a certain number of winners in a specified time period.","category":5,"pages":[],"enabled":true},{"term":"Bug","description":"An apprentice jockey.","category":5,"pages":[],"enabled":true},{"term":"Exercise Rider","description":"A rider built much like a jockey but is employed for exercising and working out horses in the morning.","category":5,"pages":[],"enabled":true},{"term":"Silks","description":"The colorful jacket and cap worn by a jockey which features the design of the owner.","category":5,"pages":[],"enabled":true}]}')}},function(e){e.O(0,[2355,1733,9774,2888,179],function(){return e(e.s=92714)}),_N_E=e.O()}]);
//# sourceMappingURL=horse-betting-terms-2d717c8d626788d6.js.map