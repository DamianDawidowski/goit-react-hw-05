"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{168:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(861),a=n(439),c=n(311),u=n.n(c),s=n(791),i=n(689),o=n(806),p="Reviews_item__DJKij",f="Reviews_author__CqYAZ",v="Reviews_review__sHbuN",h=n(184),l=function(){var e=(0,i.UO)().movieId,t=(0,s.useState)([]),n=(0,a.Z)(t,2),c=n[0],l=n[1],d=(0,s.useState)(null),w=(0,a.Z)(d,2),m=w[0],_=w[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.jW)(e);case 3:n=t.sent,l(n.results),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Something went wrong with fetching reviews on movie page",t.t0),_(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,h.jsxs)("div",{children:[c.length>0?(0,h.jsx)("ul",{className:v,children:c.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,h.jsxs)("li",{className:p,children:[(0,h.jsxs)("h3",{className:f,children:["Author: ",n," "]}),(0,h.jsx)("p",{children:r})]},t)}))}):(0,h.jsx)("p",{children:"There are no reviews for this movie"}),m&&(0,h.jsx)("h2",{children:"The service is currently unavailable. Please try again later."})]})}},806:function(e,t,n){n.d(t,{Df:function(){return o},TP:function(){return f},V0:function(){return p},jW:function(){return h},z0:function(){return v}});var r=n(861),a=n(311),c=n.n(a),u=n(243),s="https://api.themoviedb.org/3/",i="ac3e035161883f7175e5be9954a0068d",o=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"trending/movie/day?api_key=").concat(i));case 2:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"search/movie?api_key=").concat(i,"&query=").concat(t));case 2:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(i));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(i));case 2:return n=e.sent,r=n.data.cast,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=168.d7e5c7a3.chunk.js.map