(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{55:function(e,t,s){},56:function(e,t,s){},57:function(e,t,s){},58:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s(0),c=s.n(a),r=s(24),i=s.n(r),o=s(10),l=s(2),j=s(13),m=s.n(j),u=s(25),d=s(26),b=s(27),v=s(31),h=s(30),p=s(28),O=s.n(p);s(55);var x=function(e){var t=e.year,s=e.title,a=e.summary,c=e.poster,r=e.genres;return Object(n.jsxs)("div",{className:"movie",children:[Object(n.jsx)("img",{src:c,alt:s,title:s}),Object(n.jsxs)("div",{className:"movie__data",children:[Object(n.jsx)("h3",{className:"movie__title",children:s}),Object(n.jsx)("h5",{className:"movie__year",children:t}),Object(n.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(n.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(n.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]})]})]})},f=(s(56),function(e){Object(v.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(d.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(m.a.mark((function t(){var s,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(n.jsx)("section",{className:"container",children:t?Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(n.jsx)("div",{className:"movies",children:s.map((function(e){return Object(n.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(c.a.Component));s(57);var _=function(){return Object(n.jsxs)("div",{className:"about__container",children:[Object(n.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(n.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})};s(58);var g=function(){return Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsx)(o.b,{to:"/",children:"Home"}),Object(n.jsx)(o.b,{to:"/about",children:"About"})]})};s(67);var y=function(){return Object(n.jsxs)(o.a,{children:[Object(n.jsx)(g,{}),Object(n.jsx)(l.a,{path:"/",exact:!0,component:f}),Object(n.jsx)(l.a,{path:"/about",component:_})]})};i.a.render(Object(n.jsx)(y,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.29218009.chunk.js.map