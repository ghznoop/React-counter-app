(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),s=(n(14),n(6)),l=n(5),i=n(1),u=n(2),m=n(4),d=n(3),h=function(e){var t=e.totalCounters;return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("i",{className:"fa fa-shopping-cart fa-lg m-2","aria-hidden":"true"}),r.a.createElement("span",{className:"badge badge-pill badge-info m-2",style:{width:50}},t),"Items"))},f=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).getBadgeClasses=function(){var t="badge m-2 badge-";return t+=0===e.props.counter.value?"warning":"primary"},e.formatCount=function(){var t=e.props.counter.value;return 0===t?"Zero":t},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-1"},r.a.createElement("span",{style:{fontSize:24},className:this.getBadgeClasses()},this.formatCount())),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return e.props.onIncrement(e.props.counter)}},r.a.createElement("i",{className:"fa fa-plus-circle","aria-hidden":"true"})),r.a.createElement("button",{className:"btn btn-info m-2",onClick:function(){return e.props.onDecrement(e.props.counter)},disabled:0===this.props.counter.value?"disabled":""},r.a.createElement("i",{className:"fa fa-minus-circle","aria-hidden":"true"})),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.props.onDelete(e.props.counter.id)}},r.a.createElement("i",{className:"fa fa-trash-o","aria-hidden":"true"})))))}}]),n}(a.Component),b=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onReset,n=e.onIncrement,a=e.onDelete,c=e.onDecrement,o=e.counters,s=e.onRestart;return r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-success m-2",onClick:t,disabled:0===o.length?"disabled":""},r.a.createElement("i",{className:"fa fa-refresh","aria-hidden":"true"})),r.a.createElement("button",{className:"btn btn-primary m-2",onClick:s,disabled:0!==o.length?"disabled":""},r.a.createElement("i",{className:"fa fa-recycle","aria-hidden":"true"})),o.map((function(e){return r.a.createElement(f,{key:e.id,counter:e,onIncrement:n,onDecrement:c,onDelete:a})})))}}]),n}(a.Component),p=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={counters:[{id:1,value:0},{id:2,value:0},{id:3,value:0},{id:4,value:0}]},e.handleIncrement=function(t){var n=Object(l.a)(e.state.counters),a=n.indexOf(t);n[a]=Object(s.a)({},n[a]),n[a].value++,e.setState({counters:n})},e.handleDecrement=function(t){var n=Object(l.a)(e.state.counters),a=n.indexOf(t);n[a]=Object(s.a)({},n[a]),n[a].value--,e.setState({counters:n})},e.handleReset=function(){var t=e.state.counters.map((function(e){return e.value=0,e}));e.setState({counters:t})},e.handleDelete=function(t){var n=e.state.counters.filter((function(e){return e.id!==t}));e.setState({counters:n})},e.handleRestart=function(){window.location.reload()},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,{totalCounters:this.state.counters.filter((function(e){return e.value>0})).length}),r.a.createElement("main",{className:"container"},r.a.createElement(b,{counters:this.state.counters,onReset:this.handleReset,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onRestart:this.handleRestart})))}}]),n}(a.Component);n(15),n(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.7e9970c5.chunk.js.map