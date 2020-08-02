(this["webpackJsonpreact-ui-app"]=this["webpackJsonpreact-ui-app"]||[]).push([[0],{30:function(e,t,a){e.exports=a(59)},35:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),o=a.n(c),l=a(15),i=a(1),s=a(2),u=a(4),p=a(3),h=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("circle",{cx:this.props.loc.x,cy:this.props.loc.y,r:"10"})}}]),a}(n.Component);function m(e,t,a){return a?"C".concat(e.x,",").concat(e.y,", ").concat(t.x,",").concat(e.y," , ").concat(t.x,",").concat(t.y," "):"C".concat(e.x,",").concat(e.y,", ").concat(e.x,",").concat(t.y," , ").concat(t.x,",").concat(t.y," ")}function d(e){return"M".concat(e.x,",").concat(e.y)}var v={getPathString:m,getPenPointString:d,getEdgePath:function(e,t,a){return d(e)+m(e,t,a)},getRandomColor:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},f=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"getPath",value:function(e,t,a){return v.getEdgePath(e,t,a)}},{key:"render",value:function(){var e=this.getPath(this.props.from,this.props.to,this.props.direction);return r.a.createElement("path",{d:e,style:{stroke:"#006666",fill:"none"}})}}]),a}(n.Component),y={x:55,y:15},b={x:10,y:125},g={x:110,y:115},E={x:50,y:55},j={x:10,y:55},O={x:75,y:120},S={from:b,to:y,direction:!1},C={from:E,to:b,direction:!1},k={from:j,to:y,direction:!1},x={from:y,to:g,direction:!0},w={from:b,to:O,direction:!1},P={vertices:{User1:y,User2:b,User6:E,User3:g,User5:j,User4:O},edges:[S,C,k,x,w],movements:[[C,S,x],[S,x],[k,x],[w]]},M=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"getPath",value:function(e){for(var t=v.getPenPointString(e[0].from),a=0;a<e.length;a++){var n=e[a];t+=v.getPathString(n.from,n.to,n.direction)}return t}},{key:"render",value:function(){var e=this.getPath(this.props.edges);return r.a.createElement("circle",{r:"5",fill:this.props.ballColor},r.a.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",path:e}))}}]),a}(n.Component),R=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"getReactVertices",value:function(e){var t=[];for(var a in e)if(e.hasOwnProperty(a)){var n=e[a];t.push(r.a.createElement(h,{loc:n}))}return t}},{key:"getReactEdges",value:function(e){var t=[];return e.forEach((function(e){t.push(r.a.createElement(f,{from:e.from,to:e.to,direction:e.direction}))})),t}},{key:"getReactMovements",value:function(e){var t=[];return e.forEach((function(e){t.push(r.a.createElement(M,{edges:e,ballColor:v.getRandomColor()}))})),t}},{key:"getValues",value:function(){return{vertices:this.getReactVertices(P.vertices),edges:this.getReactEdges(P.edges),movements:this.getReactMovements(P.movements)}}},{key:"render",value:function(){var e=this.getValues();return r.a.createElement("div",null,r.a.createElement("svg",null,e.vertices,e.edges,e.movements))}}]),a}(n.Component),N=a(11),U=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),this.props.name,"  chooses ",-1===this.props.playerSelection?"":this.props.playerSelection,r.a.createElement("br",null),r.a.createElement("br",null),"Computer chooses ",-1===this.props.compSelection?"":this.props.compSelection,r.a.createElement("br",null),r.a.createElement("br",null),"Score",r.a.createElement("br",null),this.props.playerScore.runs," / ",this.props.playerScore.wicket)}}]),a}(n.Component),V=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),a}(n.Component),I={single:{score:1,display:"\u261d\ufe0f"},two:{score:2,display:"\u270c\ufe0f"},three:{score:3,display:"\ud83e\udd1f"},boundary:{score:4,display:"\ud83d\udd96"},fives:{score:5,display:"\ud83e\udd1a"},six:{score:6,display:"\ud83d\udc4d"},dot:{score:0,display:"\u270a"}},A=(a(35),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={name:"vj",playerSel:-1,compSel:-1,playerScore:{runs:0,wicket:0}},n.handleChange=n.handleChange.bind(Object(N.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){var t=Math.floor(8*Math.random()),a=this.state.playerScore.runs,n=this.state.playerScore.wicket;t===parseInt(e.target.id)?n+=1:a+=parseInt(e.target.id),this.setState({playerSel:e.target.id,compSel:t,playerScore:{runs:a,wicket:n}})}},{key:"getHands",value:function(e){var t=[];for(var a in e)if(e.hasOwnProperty(a)){var n=e[a];t.push(r.a.createElement("button",{id:n.score,className:"ems",onClick:this.handleChange},n.display))}return r.a.createElement("div",{className:"ems"},t)}},{key:"render",value:function(){var e=this.getHands(I);return r.a.createElement("div",null,this.state.playerScore.wicket<10?e:"Game over",r.a.createElement(U,{name:this.state.name,playerSelection:this.state.playerSel,compSelection:this.state.compSel,playerScore:this.state.playerScore}),r.a.createElement(V,{playerSelection:this.state.playerSel,compSelection:this.state.compSel}))}}]),a}(n.Component)),B=a(36).default,D=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={serv1:"",serv2:""},n.handleChange=n.handleChange.bind(Object(N.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){var t=this;B({method:"GET",url:"/s2"}).then((function(e){return e.data})).then((function(e){return t.setState({serv2:e})})).catch((function(e){return t.setState({serv2:"failed"})})),B({method:"POST",url:"/postData",data:{name:"vijay"}}).then((function(e){return e.data})).then((function(e){return t.setState({serv1:e})})).catch((function(e){return t.setState({serv1:"failed"})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{id:"2",onClick:this.handleChange},"try"),r.a.createElement("br",null),r.a.createElement("br",null),"jenkins :  ",this.state.serv1,r.a.createElement("br",null),"prs : ",this.state.serv2)}}]),a}(n.Component),G=a(5),H=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Vijay")}}]),a}(n.Component),J=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.rows;t++){for(var a=[],n=0;n<this.props.cols;n++)a.push(r.a.createElement("td",null,this.props.text));e.push(r.a.createElement("tr",null," ",a))}return r.a.createElement("div",null,"Page No : ",this.props.pageNo+1,r.a.createElement("table",{cellSpacing:"10",border:"2"},e))}}]),a}(n.Component),T=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={pages:1,rows:1,cols:1,content:""},n.handleChange=n.handleChange.bind(Object(N.a)(n)),n.updateState=n.updateState.bind(Object(N.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){}},{key:"updateState",value:function(e){this.setState({pages:"pages"===e.target.id?e.target.value:this.state.pages,rows:"row"===e.target.id?e.target.value:this.state.rows,cols:"col"===e.target.id?e.target.value:this.state.cols,content:"content"===e.target.id?e.target.value:this.state.content})}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.pages;t++)e.push(r.a.createElement("div",null,r.a.createElement(J,{pageNo:t,rows:this.state.rows,cols:this.state.cols,text:this.state.content}),r.a.createElement("hr",null)));return r.a.createElement("div",null,"pages : ",r.a.createElement("input",{type:"text",id:"pages",onChange:this.updateState}),r.a.createElement("br",null),"row : ",r.a.createElement("input",{type:"text",id:"row",onChange:this.updateState}),r.a.createElement("br",null),"col : ",r.a.createElement("input",{type:"text",id:"col",onChange:this.updateState}),r.a.createElement("br",null),"Content : ",r.a.createElement("input",{type:"text",id:"content",onChange:this.updateState}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),e)}}]),a}(n.Component);var F=function(){return r.a.createElement("div",{className:"App",basename:"/"},r.a.createElement(G.a,{path:"/",component:H,exact:!0}),r.a.createElement(G.a,{path:"/graph",component:R}),r.a.createElement(G.a,{path:"/cricket",component:A}),r.a.createElement(G.a,{path:"/cors",component:D}),r.a.createElement(G.a,{path:"/tables",component:T}))};o.a.render(r.a.createElement(l.a,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.3b7284d2.chunk.js.map