"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[681],{681:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(439),a={},c=n(791),u=n(184),o=function(e){var t=e.onChange,n=(0,c.useState)(""),o=(0,r.Z)(n,2),s=o[0],i=o[1];return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===s.trim()&&alert("Please provide the movie title"),t(s),i("")},className:a.searchForm,children:[(0,u.jsx)("input",{type:"text",name:"searchQuery",value:s,autoComplete:"off",autoFocus:!0,placeholder:"Search movies ...",onChange:function(e){i(e.target.value.toLowerCase())},className:a.searchInput}),(0,u.jsx)("button",{type:"submit",className:a.searchButton,children:"Search"})]})})},s="Movies_container__sNK5N",i="Movies_title__EqSqF",f=n(87),p=n(806),v=function(){var e,t=(0,f.lr)(),n=(0,r.Z)(t,2),a=n[0],v=n[1],h=(0,c.useState)([]),l=(0,r.Z)(h,2),d=l[0],m=l[1],x=null!==(e=a.get("query"))&&void 0!==e?e:"";(0,c.useEffect)((function(){x&&(0,p.V0)(x).then(m)}),[x,a]);return(0,u.jsx)("div",{className:s,children:(0,u.jsxs)("ul",{children:[(0,u.jsx)("h1",{className:i,children:"Movie Search"}),";",(0,u.jsx)(o,{value:x,onChange:function(e){v(""!==e?{query:e}:{})}}),d.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(f.rU,{to:"/movies/".concat(e.id),children:e.title||e.name})},e.id)}))]})})}},806:function(e,t,n){n.d(t,{Df:function(){return i},TP:function(){return p},V0:function(){return f},jW:function(){return h},z0:function(){return v}});var r=n(861),a=n(311),c=n.n(a),u=n(243),o="https://api.themoviedb.org/3/",s="ac3e035161883f7175e5be9954a0068d",i=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"trending/movie/day?api_key=").concat(s));case 2:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"search/movie?api_key=").concat(s,"&query=").concat(t));case 2:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(s));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(s));case 2:return n=e.sent,r=n.data.cast,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(s));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=681.22f3ce2e.chunk.js.map