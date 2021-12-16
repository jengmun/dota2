(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports={container:"Team_container__2UdJO",head:"Team_head__3bS4K",fadein:"Team_fadein__2BGe3",current:"Team_current__Yhxp_",former:"Team_former__1Y-E7",memberContainer:"Team_memberContainer__34G22",header:"Team_header__2JEKn",currentHeader:"Team_currentHeader__1oC5B",formerHeader:"Team_formerHeader__11X55"}},function(e,t,a){e.exports={hero:"Hero_hero__sBQoV",fadein:"Hero_fadein__1V5KD",container:"Hero_container__27Gp_",header:"Hero_header__1Sb_c",headerContainer:"Hero_headerContainer__3shLG",attribute:"Hero_attribute__3mtCy",avatar:"Hero_avatar__1cTTM",stats:"Hero_stats__34Krv",attr:"Hero_attr__3hVQn",attackType:"Hero_attackType__3W7IG",skills:"Hero_skills__3UVnu"}},,function(e,t,a){e.exports={nav:"Nav_nav__3cOoB",active:"Nav_active__16v1E",search:"Nav_search__29XiH"}},,,,,function(e,t,a){e.exports={table:"Teams_table__20iZ0",row:"Teams_row__mYKBS",fadein:"Teams_fadein__HxU_3",team:"Teams_team__szSgw"}},function(e,t,a){e.exports={main:"main_main__1Crrf",link:"main_link__25gri",logo:"main_logo__3ollU"}},function(e,t,a){e.exports={background:"Player_background__1PE7U",fadein:"Player_fadein__7A0xh",intermediate:"Player_intermediate__31kZa",player:"Player_player__NWaqb"}},,,,function(e,t,a){e.exports={heroes:"Heroes_heroes__2SK7j",container:"Heroes_container__3Xo5I",fadein:"Heroes_fadein__1rpAU"}},function(e,t,a){e.exports={container:"Matches_container__sP4e5",fadein:"Matches_fadein__INrOt",row:"Matches_row__J3PHL"}},,,,,,function(e,t,a){e.exports={heroImg:"HeroImg_heroImg__jk0aV",hover:"HeroImg_hover__2sf0r"}},function(e,t,a){e.exports={container:"LoadingSpinner_container__iPQoa",rotate:"LoadingSpinner_rotate__1eI4G"}},function(e,t,a){e.exports={bookmarks:"Bookmarks_bookmarks__2--D-",fadein:"Bookmarks_fadein__3DocF"}},,,,,,function(e,t,a){},,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(27),s=a.n(r),i=a(2),o=(a(39),a(28)),j=a(6),l=a.n(j),d=a(12),h=a(3),m=a(4),b=n.a.createContext(),u=a(13),O=a.n(u),x=a(0),p=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),s=Object(h.a)(r,2),o=s[0],j=s[1],l=Object(c.useContext)(b);Object(c.useEffect)((function(){if(a.length>1){var e=l.playerData.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));j(e)}else{j([])}}),[a]);var d=o.map((function(e){return Object(x.jsx)("li",{children:l.filteredTeamData.find((function(t){return t.team_id===e.team_id}))?Object(x.jsx)(i.c,{to:"/teams/".concat(e.team_id,"/").concat(e.account_id),children:e.name}):e.name})}));return Object(x.jsxs)("div",{className:O.a.search,children:[Object(x.jsx)("input",{placeholder:"Search",onChange:function(e){n(e.target.value)}}),Object(x.jsx)("ul",{children:d})]})},_=function(){return Object(x.jsxs)("nav",{className:O.a.nav,children:[Object(x.jsx)(i.c,{to:"/",children:Object(x.jsx)("img",{src:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/nav/logo.png",alt:"logo"})}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(i.c,{to:"/heroes",activeClassName:O.a.active,children:"Heroes"})}),Object(x.jsx)("li",{children:Object(x.jsx)(i.c,{to:"/teams",activeClassName:O.a.active,children:"Teams"})}),Object(x.jsx)("li",{children:Object(x.jsx)(i.c,{to:"/matches",activeClassName:O.a.active,children:"Matches"})}),Object(x.jsx)("li",{children:Object(x.jsx)(i.c,{to:"/bookmarks",activeClassName:O.a.active,children:"Watchlist"})})]}),Object(x.jsx)(p,{})]})},f=a(19),g=a.n(f),v=function(){return Object(x.jsxs)("div",{className:g.a.main,children:[Object(x.jsx)("video",{width:"100%",height:"100%",autoplay:"autoplay",muted:!0,loop:"true",children:Object(x.jsx)("source",{src:"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_02.mp4",type:"video/mp4"})}),Object(x.jsxs)("div",{className:g.a.logo,children:[Object(x.jsx)("img",{src:"https://www.nvidia.com/content/dam/en-zz/Solutions/GeForce/Pascal/esports/dota2/geforce-esports-dota2-intl-logo-297-dtm@2x.png"})," "]}),Object(x.jsx)("div",{className:g.a.link,children:Object(x.jsx)("a",{href:"https://www.dota2.com/home",target:"_blank",children:"Click To Play"})})]})},k=a(31),N=a.n(k),w=function(e){var t="";switch(e.attr){case"str":t=Object(x.jsx)("img",{src:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png",width:"32px"});break;case"agi":t=Object(x.jsx)("img",{src:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png",width:"32px"});break;case"int":t=Object(x.jsx)("img",{src:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png",width:"32px"})}return Object(x.jsx)("div",{children:Object(x.jsx)(i.c,{to:{pathname:"/heroes/".concat(e.name),state:{data:e.data}},children:Object(x.jsx)("div",{className:N.a.heroImg,style:{backgroundImage:"url(https://steamcdn-a.akamaihd.net".concat(e.image,")")},children:Object(x.jsxs)("div",{children:[t,Object(x.jsx)("h3",{children:e.name})]})})})})},y=a(24),T=a.n(y),C=a.p+"static/media/loading-spinner.0a343b8a.png",S=a(32),H=a.n(S),D=function(){return Object(x.jsxs)("div",{className:H.a.container,children:[Object(x.jsx)("h1",{children:"Loading..."}),Object(x.jsx)("img",{src:C})]})},E=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(h.a)(r,2),i=s[0],o=s[1],j=Object(c.useState)([]),m=Object(h.a)(j,2),b=m[0],u=m[1],O=Object(c.useState)(!1),p=Object(h.a)(O,2),_=p[0],f=p[1],g=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.opendota.com/api/heroStats");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c=a.sort((function(e,t){var a=e.localized_name,c=t.localized_name;return a<c?-1:a>c?1:0})),n(c),f(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){f(!0),g()}),[]),Object(c.useEffect)((function(){u(a.filter((function(e){return e.localized_name.toLowerCase().includes(i.toLowerCase())})))}),[i]);var v=""===i?a:b;return Object(x.jsx)("div",{className:T.a.heroes,children:_?Object(x.jsx)(D,{}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("input",{placeholder:"Hero Name",onChange:function(e){o(e.target.value)}}),Object(x.jsx)("div",{className:T.a.container,children:v.map((function(e){return Object(x.jsx)(w,{name:e.localized_name,image:e.img,attr:e.primary_attr,data:e})}))})]})})},I=a(26),B=a(11),L=a.n(B),M=function(){var e=Object(m.f)().state.data,t=Object(c.useContext)(b),a=Object(c.useState)([]),n=Object(h.a)(a,2),r=n[0],s=n[1],i=Object(c.useState)(),o=Object(h.a)(i,2),j=o[0],l=o[1],d="str"===e.primary_attr.toLowerCase()?{attribute:e.base_str,img:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png",attributeName:"strength"}:"agi"===e.primary_attr.toLowerCase()?{attribute:e.base_agi,img:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png",attributeName:"agility"}:{attribute:e.base_int,img:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png",attributeName:"intelligence"};return Object(c.useEffect)((function(){!function(){var a=[],c=function(c){c.startsWith(e.name.slice(14))&&(a.find((function(e){return e.dname===t.skillsData[c].dname}))||t.skillsData[c].behavior.includes("Hidden")||a.push(Object(I.a)(Object(I.a)({},t.skillsData[c]),{},{key:c})))};for(var n in t.skillsData)c(n);s(a)}()}),[t.skillsData]),Object(x.jsx)("div",{className:L.a.hero,children:Object(x.jsxs)("div",{className:L.a.container,children:[Object(x.jsxs)("div",{className:L.a.header,children:[Object(x.jsxs)("div",{className:L.a.headerContainer,children:[Object(x.jsxs)("div",{className:L.a.attribute,children:[Object(x.jsx)("img",{src:d.img,width:"30px"}),Object(x.jsx)("p",{children:d.attributeName})]}),Object(x.jsx)("h1",{children:e.localized_name}),Object(x.jsxs)("div",{className:L.a.attackType,children:[Object(x.jsx)("h4",{children:"ATTACK TYPE"}),Object(x.jsx)("p",{children:e.attack_type})]})]}),Object(x.jsx)("img",{src:"https://steamcdn-a.akamaihd.net".concat(e.img),id:L.a.avatar})]}),Object(x.jsxs)("div",{className:L.a.stats,children:[Object(x.jsxs)("ul",{id:L.a.attr,children:[Object(x.jsxs)("li",{children:[Object(x.jsx)("img",{src:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png",width:"30px"}),Object(x.jsx)("span",{children:e.base_str})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("img",{src:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png",width:"30px"}),Object(x.jsx)("span",{children:e.base_agi})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("img",{src:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png",width:"30px"}),Object(x.jsx)("span",{children:e.base_int})]}),Object(x.jsx)("h4",{children:"ATTRIBUTES"})]}),Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:["Base Attack:",Object(x.jsx)("span",{children:"\n            ".concat(e.base_attack_min+d.attribute," - \n            ").concat(e.base_attack_max+d.attribute)})]}),Object(x.jsxs)("li",{children:["Attack Rate: ",Object(x.jsx)("span",{children:e.attack_rate})]}),Object(x.jsxs)("li",{children:["Attack Range: ",Object(x.jsx)("span",{children:e.attack_range})]}),0!==e.projectile_speed&&Object(x.jsxs)("li",{children:["Projectile Speed: ",Object(x.jsx)("span",{children:e.projectile_speed})]}),Object(x.jsx)("h4",{children:"ATTACK"})]}),Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:["Base Armour:"," ",Object(x.jsx)("span",{children:Math.round(10*(e.base_armor+e.base_agi/6))/10})]}),Object(x.jsxs)("li",{children:["Magic Resistance: ",Object(x.jsxs)("span",{children:[e.base_mr,"%"]})]}),Object(x.jsx)("h4",{children:"DEFENSE"})]}),Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:["Movement Speed: ",Object(x.jsx)("span",{children:e.move_speed})]}),Object(x.jsx)("h4",{children:"MOBILITY"})]}),Object(x.jsxs)("ul",{children:[e.roles.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)("span",{children:e})})})),Object(x.jsx)("h4",{children:"ROLES"})]})]}),Object(x.jsxs)("div",{className:L.a.skills,children:[Object(x.jsx)("ul",{children:r.map((function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("li",{onClick:function(){l(e)},children:Object(x.jsx)("img",{src:"https://cdn.cloudflare.steamstatic.com".concat(e.img),onError:function(e){e.target.onError=null,e.target.src="https://i.pinimg.com/originals/27/ff/39/27ff3902c1363a776c9db6ee6f7d76d8.jpg"}})})})}))}),Object(x.jsx)("div",{children:void 0===j?0!==r.length?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:r[0].dname?r[0].dname:r[0].key.slice(e.localized_name.length)}),Object(x.jsx)("p",{children:r[0].desc})]}):"":Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:j.dname?j.dname:j.key.slice(e.localized_name.length+1).replaceAll("_"," ")}),Object(x.jsx)("p",{children:j.desc})]})})]})]})})},P=a(18),A=a.n(P),z=function(e){return Object(x.jsxs)("tr",{className:A.a.row,children:[Object(x.jsx)("td",{children:e.rank}),Object(x.jsx)("td",{className:A.a.team,children:Object(x.jsxs)(i.c,{to:"/teams/".concat(e.data.team_id),children:[null!==e.data.logo_url&&Object(x.jsx)("img",{src:e.data.logo_url,s:!0}),Object(x.jsx)("span",{children:e.data.name})]})}),Object(x.jsx)("td",{children:e.data.rating}),Object(x.jsx)("td",{children:e.data.wins}),Object(x.jsx)("td",{children:e.data.losses})]})},F=function(){var e=Object(c.useContext)(b).filteredTeamData.map((function(e,t){return Object(x.jsx)(z,{rank:t+1,data:e})}));return Object(x.jsx)("div",{className:A.a.table,children:Object(x.jsxs)("table",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Rank"}),Object(x.jsx)("th",{children:"Team"}),Object(x.jsx)("th",{children:"Rating"}),Object(x.jsx)("th",{children:"Wins"}),Object(x.jsx)("th",{children:"Losses"})]}),e]})})},K=a(34),R=a(20),G=a.n(R),V=function(e){var t=Object(c.useContext)(b),a=Object(m.f)(),n=Object(m.g)(),r=0!==t.playerData.length?t.playerData.find((function(e){return e.account_id==n.player})):"";return Object(x.jsx)(x.Fragment,{children:""!==r?Object(x.jsx)("div",{className:G.a.background,children:Object(x.jsx)("div",{className:G.a.intermediate,children:Object(x.jsxs)("div",{className:G.a.player,children:[Object(x.jsx)("img",{src:r.avatar}),Object(x.jsxs)("div",{children:[Object(x.jsx)("a",{href:r.profileurl,target:"_blank",children:r.name}),Object(x.jsxs)("h4",{children:["Current Team: ",Object(x.jsx)("br",{}),t.filteredTeamData.find((function(e){return e.team_id===r.team_id}))?Object(x.jsx)(i.b,{to:"/teams/".concat(r.team_id),children:r.team_name}):r.team_name]})]}),Object(x.jsx)("button",{onClick:function(){e.bookmarks.find((function(e){return e.route===a.pathname}))?e.setBookmarks(e.bookmarks.filter((function(e){return e.route!==a.pathname}))):e.setBookmarks([].concat(Object(K.a)(e.bookmarks),[{route:a.pathname,image:r.avatar,name:r.name}]))},children:e.bookmarks.find((function(e){return e.route===a.pathname}))?Object(x.jsx)("i",{class:"fas fa-bookmark fa-2x"}):Object(x.jsx)("i",{class:"far fa-bookmark fa-2x"})})]})})}):""})},U=a(10),Y=a.n(U),W=function(e){var t=Object(m.g)(),a=Object(c.useContext)(b),n=Object(c.useState)([]),r=Object(h.a)(n,2),s=r[0],o=r[1],j=Object(c.useState)(!1),u=Object(h.a)(j,2),O=u[0],p=u[1],_=0!==a.filteredTeamData.length?a.filteredTeamData.find((function(e){return e.team_id==t.team})):[],f=0!==a.filteredTeamData.length?a.filteredTeamData.findIndex((function(e){return e.team_id==t.team}))+1:0,g=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:c=e.sent,o(c),p(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){if(p(!0),0!==_.length){var e="https://api.opendota.com/api/teams/".concat(_.team_id,"/players");g(e)}}),[_]),Object(x.jsx)("div",{className:Y.a.container,children:O?Object(x.jsx)(D,{}):0!==a.filteredTeamData.length?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:Y.a.head,children:[Object(x.jsx)("img",{src:_.logo_url}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:Object(x.jsx)(i.c,{to:"/teams/".concat(_.team_id),children:_.name})}),Object(x.jsxs)("h3",{children:["RANK: ",f]})]})]}),Object(x.jsxs)(m.a,{exact:!0,path:"/teams/:team",children:[Object(x.jsxs)("div",{className:Y.a.members,children:[Object(x.jsxs)("div",{className:Y.a.current,children:[Object(x.jsx)("div",{className:"".concat(Y.a.currentHeader," ").concat(Y.a.header),children:Object(x.jsx)("span",{children:"Current Members"})}),Object(x.jsx)("div",{className:Y.a.memberContainer,children:Object(x.jsx)("ol",{children:s.map((function(e){return!0===e.is_current_team_member&&" "!==e.name&&""!==e.name&&null!==e.name?Object(x.jsx)("li",{children:Object(x.jsx)(i.c,{to:"/teams/".concat(_.team_id,"/").concat(e.account_id),children:e.name})}):""}))})})]}),Object(x.jsxs)("div",{className:Y.a.former,children:[Object(x.jsx)("div",{className:"".concat(Y.a.formerHeader," ").concat(Y.a.header),children:Object(x.jsx)("span",{children:"Former Members"})}),Object(x.jsx)("div",{className:Y.a.memberContainer,children:Object(x.jsx)("ol",{children:s.map((function(e){return!0!==e.is_current_team_member&&" "!==e.name&&""!==e.name&&null!==e.name?Object(x.jsx)("li",{children:Object(x.jsx)(i.c,{to:"/teams/".concat(_.team_id,"/").concat(e.account_id),children:e.name})}):""}))})})]})]})," "]}),Object(x.jsx)(m.a,{path:"/teams/:team/:player",children:Object(x.jsx)(V,{bookmarks:e.bookmarks,setBookmarks:e.setBookmarks})})]}):""})},J=a(25),Q=a.n(J),X=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),a=t[0],n=t[1],r=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.opendota.com/api/proMatches");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c=a.filter((function(e){return 0!==e.radiant_score||0!==e.dire_score})),n(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){r()}),[]);var s=a.map((function(e){return Object(x.jsxs)("tr",{className:Q.a.row,children:[Object(x.jsx)("td",{children:e.radiant_name||"Radiant"}),Object(x.jsxs)("td",{children:[Object(x.jsx)("span",{style:e.radiant_score>e.dire_score?{color:"green"}:{color:"red"},children:e.radiant_score}),":",Object(x.jsx)("span",{style:e.radiant_score<e.dire_score?{color:"green"}:{color:"red"},children:e.dire_score})]}),Object(x.jsx)("td",{children:e.dire_name||"Dire"}),Object(x.jsx)("td",{children:e.league_name})]})}));return Object(x.jsx)("div",{className:Q.a.container,children:Object(x.jsxs)("table",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Radiant"}),Object(x.jsx)("th",{children:"Score"}),Object(x.jsx)("th",{children:"Dire"}),Object(x.jsxs)("th",{children:["League",Object(x.jsx)("a",{href:"https://www.twitch.tv/directory/game/Dota%202",target:"_blank",children:Object(x.jsx)("img",{src:"https://lh4.googleusercontent.com/proxy/CgYA0EV56qeM92wmgW1O-HsDHKiVkXw4SMfVNOI3r3YZn5IqcGo9is7_9X3MVQnaq5Gc349jo8g4pvcj223n4fQlkLM=w1200-h630-p-k-no-nu"})})]})]}),s]})})},q=a(33),Z=a.n(q),$=function(e){var t=e.bookmarks.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)(i.c,{to:e.route,children:Object(x.jsx)("div",{style:{backgroundImage:"url(".concat(e.image,")")},children:Object(x.jsx)("p",{children:e.name})})})})}));return Object(x.jsxs)("div",{className:Z.a.bookmarks,children:[Object(x.jsx)("div",{children:Object(x.jsx)("h1",{children:"Players"})}),Object(x.jsx)("ul",{children:t})]})};var ee=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),s=Object(h.a)(r,2),i=s[0],j=s[1],u=Object(c.useState)([]),O=Object(h.a)(u,2),p=O[0],f=O[1],g=Object(c.useState)({}),k=Object(h.a)(g,2),N=k[0],w=k[1],y=Object(c.useState)([]),T=Object(h.a)(y,2),C=T[0],S=T[1],H=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.opendota.com/api/teams");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,c=a.filter((function(e){return""!==e.name})),n(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(d.a)(l.a.mark((function e(){var t,c,n,r,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.opendota.com/api/proPlayers");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,f(c),n=[],r=Object(o.a)(a);try{for(i=function(){var e=s.value;c.find((function(t){return t.team_id===e.team_id}))&&n.push(e)},r.s();!(s=r.n()).done;)i()}catch(l){r.e(l)}finally{r.f()}j(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://raw.githubusercontent.com/odota/dotaconstants/master/build/abilities.json");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,w(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){H(),D(),I()}),[]),Object(c.useEffect)((function(){D()}),[a]),Object(x.jsx)("div",{children:Object(x.jsxs)(b.Provider,{value:{playerData:p,filteredTeamData:i,skillsData:N},children:[Object(x.jsx)(_,{}),Object(x.jsxs)(m.c,{children:[Object(x.jsx)(m.a,{exact:!0,path:"/",component:v}),Object(x.jsx)(m.a,{exact:!0,path:"/heroes",component:E}),Object(x.jsx)(m.a,{path:"/heroes/:hero",component:M}),Object(x.jsx)(m.a,{exact:!0,path:"/teams",component:F}),Object(x.jsx)(m.a,{path:"/teams/:team",children:Object(x.jsx)(W,{bookmarks:C,setBookmarks:S})}),Object(x.jsx)(m.a,{path:"/matches",component:X}),Object(x.jsx)(m.a,{path:"/bookmarks",children:Object(x.jsx)($,{bookmarks:C})})]})]})})};s.a.render(Object(x.jsx)(i.a,{children:Object(x.jsx)(ee,{})}),document.getElementById("root"))}],[[50,1,2]]]);
//# sourceMappingURL=main.71c6adf6.chunk.js.map