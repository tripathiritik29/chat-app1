(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),o=a.n(s),i=(a(13),a(7)),l=a(1),c=a(2),u=a(4),m=a(3),d=(a(14),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.messages;return r.a.createElement("ul",{className:"Messages-list"},t.map((function(t){return e.renderMessage(t)})))}},{key:"renderMessage",value:function(e){var t=e.member,a=e.text,n=this.props.currentMember,s=t.id===n.id?"Messages-message currentMember":"Messages-message";return r.a.createElement("li",{className:s},r.a.createElement("span",{className:"avatar",style:{backgroundColor:t.clientData.color}}),r.a.createElement("div",{className:"Message-content"},r.a.createElement("div",{className:"username"},t.clientData.username),r.a.createElement("div",{className:"text"},a)))}}]),a}(n.Component)),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={text:""},e}return Object(c.a)(a,[{key:"onChange",value:function(e){this.setState({text:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.setState({text:""}),this.props.onSendMessage(this.state.text)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Input"},r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement("input",{onChange:function(t){return e.onChange(t)},value:this.state.text,type:"text",placeholder:"Enter your message and press ENTER",autofocus:"true"}),r.a.createElement("button",null,"Send")))}}]),a}(n.Component);function g(){var e=["autumn","hidden","bitter","misty","silent","empty","dry","dark","summer","icy","delicate","quiet","white","cool","spring","winter","patient","twilight","dawn","crimson","wispy","weathered","blue","billowing","broken","cold","damp","falling","frosty","green","long","late","lingering","bold","little","morning","muddy","old","red","rough","still","small","sparkling","throbbing","shy","wandering","withered","wild","black","young","holy","solitary","fragrant","aged","snowy","proud","floral","restless","divine","polished","ancient","purple","lively","nameless"],t=["waterfall","river","breeze","moon","rain","wind","sea","morning","snow","lake","sunset","pine","shadow","leaf","dawn","glitter","forest","hill","cloud","meadow","sun","glade","bird","brook","butterfly","bush","dew","dust","field","fire","flower","firefly","feather","grass","haze","mountain","night","pond","darkness","snowflake","silence","sound","sky","shape","surf","thunder","violet","water","wildflower","wave","water","resonance","sun","wood","dream","cherry","tree","fog","frost","voice","paper","frog","smoke","star"];return e[Math.floor(Math.random()*e.length)]+t[Math.floor(Math.random()*t.length)]}var f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={messages:[],member:{username:g(),color:"#"+Math.floor(Math.random()*["#FFC0CB"]).toString(16)}},e.onSendMessage=function(t){e.drone.publish({room:"observable-room",message:t})},e.drone=new window.Scaledrone("hUykXgm4YjQatXi3",{data:e.state.member}),e.drone.on("open",(function(t){if(t)return console.error(t);var a=Object(i.a)({},e.state.member);a.id=e.drone.clientId,e.setState({member:a})})),e.drone.subscribe("observable-room").on("data",(function(t,a){var n=e.state.messages;n.push({member:a,text:t}),e.setState({messages:n})})),e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},r.a.createElement("h1",null,"My Chat App")),r.a.createElement(d,{messages:this.state.messages,currentMember:this.state.member}),r.a.createElement(h,{onSendMessage:this.onSendMessage}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.068e59c9.chunk.js.map