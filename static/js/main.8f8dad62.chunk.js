(this["webpackJsonpvideos-search-1"]=this["webpackJsonpvideos-search-1"]||[]).push([[0],{43:function(e,s,t){},45:function(e,s,t){"use strict";t.r(s);var i=t(0),c=t(2),a=t(17),n=t.n(a),r=t(8),l=t.n(r),d=t(18),j=t(3),o=t(4),u=t(6),m=t(5),b=t(19),h="AIzaSyDbV6m6JdjMWNkDX9D2_PuWKh6naXm6NHY",v=t.n(b).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),O=function(e){Object(u.a)(t,e);var s=Object(m.a)(t);function t(){var e;Object(j.a)(this,t);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(e=s.call.apply(s,[this].concat(c))).state={term:""},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{className:"search-bar ui segment",children:Object(i.jsx)("form",{onSubmit:function(s){s.preventDefault(),e.props.onFormSubmit(e.state.term),e.setState({term:""})},className:"ui form",children:Object(i.jsxs)("div",{className:"field",children:[Object(i.jsx)("label",{children:"Video Search"}),Object(i.jsx)("input",{type:"text",value:this.state.term,onChange:function(s){e.setState({term:s.target.value})}})]})})})}}]),t}(c.Component),p=function(e){var s=e.video;return s?Object(i.jsxs)("div",{className:"ui segment",children:[Object(i.jsx)("h1",{children:s.snippet.title}),Object(i.jsx)("div",{className:"ui embed",children:Object(i.jsx)("iframe",{title:"video",src:"https://www.youtube.com/embed/"+s.id.videoId})}),Object(i.jsxs)("h3",{className:"header",children:[Object(i.jsx)("i",{className:"youtube icon",style:{userSelect:"auto"}}),s.snippet.channelTitle]}),Object(i.jsx)("div",{className:"paragraph",children:s.snippet.description})]}):Object(i.jsxs)("div",{className:"ui segment",children:[Object(i.jsxs)("h1",{children:[Object(i.jsx)("div",{className:"ui inline loader active",style:{marginRight:"10px"}})," ","Search a video to start!"]}),Object(i.jsxs)("div",{className:"ui placeholder fluid",children:[Object(i.jsx)("div",{className:"image large",style:{height:"40vh"}}),Object(i.jsxs)("div",{className:"image header",children:[Object(i.jsx)("div",{className:"line"}),Object(i.jsx)("div",{className:"line"})]}),Object(i.jsxs)("div",{className:"paragraph",children:[Object(i.jsx)("div",{className:"line"}),Object(i.jsx)("div",{className:"line"}),Object(i.jsx)("div",{className:"line"}),Object(i.jsx)("div",{className:"line"}),Object(i.jsx)("div",{className:"line"})]})]})]})},x={display:"flex",alignItems:"center",cursor:"pointer"},N=function(e){var s=e.video,t=e.onVideoSelect;return Object(i.jsxs)("div",{className:"item video-item",style:x,children:[Object(i.jsx)("img",{className:"ui small rounded image",src:s.snippet.thumbnails.medium.url,alt:""}),Object(i.jsxs)("div",{className:"content",children:[Object(i.jsxs)("a",{className:"header",onClick:function(){return t(s)},children:[s.snippet.title," ",Object(i.jsxs)("div",{className:"ui label",children:[Object(i.jsx)("i",{className:"youtube icon",style:{userSelect:"auto"}}),s.snippet.channelTitle]})]}),Object(i.jsx)("div",{className:"description",children:s.snippet.description})]})]})},f=function(e){var s,t=e.videos,c=e.onVideoSelect;return s=t.length?t.map((function(e,s){return Object(i.jsx)(N,{video:e,onVideoSelect:c},e.id.videoId)})):[1,2,3,4].map((function(e){return Object(i.jsxs)("div",{className:"ui fluid placeholder",children:[Object(i.jsxs)("div",{className:"image header",children:[Object(i.jsx)("div",{className:"line"}),Object(i.jsx)("div",{className:"line"})]}),Object(i.jsxs)("div",{className:"paragraph",children:[Object(i.jsx)("div",{className:"line"}),Object(i.jsx)("div",{className:"line"}),Object(i.jsx)("div",{className:"line"})]})]},e)})),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Other videos"}),Object(i.jsx)("div",{className:"ui relaxed divided list",children:s})]})},g=(t(43),function(e){Object(u.a)(t,e);var s=Object(m.a)(t);function t(){var e;Object(j.a)(this,t);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(e=s.call.apply(s,[this].concat(c))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var s=Object(d.a)(l.a.mark((function s(t){var i;return l.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,v.get("/search",{params:{q:t,part:"snippet",type:"video",maxResults:5,key:h}});case 2:(i=s.sent).data.items?e.setState({videos:i.data.items,selectedVideo:i.data.items[0]}):console.warn("Ooops! API call was unsuccessful");case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}(),e.onVideoSelect=function(s){e.setState({selectedVideo:s}),console.log(s)},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state,s=e.videos,t=e.selectedVideo;return Object(i.jsxs)("div",{className:"ui container",children:[Object(i.jsxs)("h1",{className:"big-title",children:[Object(i.jsx)("span",{className:"red",children:"YouTube"})," procrastinator"]}),Object(i.jsx)(O,{onFormSubmit:this.onTermSubmit}),Object(i.jsxs)("div",{className:"two-columns",children:[Object(i.jsx)("div",{children:Object(i.jsx)(p,{video:t})}),Object(i.jsx)("div",{children:Object(i.jsx)(f,{videos:s,onVideoSelect:this.onVideoSelect})})]})]})}}]),t}(c.Component));t(44);n.a.render(Object(i.jsx)(g,{}),document.querySelector("#root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.8f8dad62.chunk.js.map