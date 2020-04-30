(function(t){function e(e){for(var a,r,i=e[0],c=e[1],u=e[2],d=0,f=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue-stock-trader/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"06c6":function(t,e,n){},1677:function(t,e,n){"use strict";var a=n("759c"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("4de4"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-header"),n("div",{staticClass:"container"},[n("div",{staticClass:"col-lg-12"},[n("router-view")],1)])],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Stock Trader")]),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("router-link",{staticClass:"nav-item",attrs:{to:{name:"Stocks"},"active-class":"active",tag:"li"}},[n("a",{staticClass:"nav-link"},[t._v("Stocks")])]),n("router-link",{staticClass:"nav-item",attrs:{to:{name:"Portfolio"},"active-class":"active",tag:"li"}},[n("a",{staticClass:"nav-link"},[t._v("Portfolio")])])],1),n("ul",{staticClass:"navbar-nav navbar-right"},[n("li",[n("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:t.endDay}},[t._v("End Day")])]),n("li",{staticClass:"nav-item dropdown"},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Save & Load")]),n("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[n("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:t.saveData}},[t._v("Save Data")]),n("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:t.loadData}},[t._v("Load Data")])])]),n("li",{staticClass:"m-auto text-white"},[n("strong",[t._v("Funds: "+t._s(t._f("currency")(t.funds)))])])])])],1)])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],c=(n("96cf"),n("1da1")),u=n("5530"),l=n("2f62"),d=n("bc3a"),f=n.n(d),p=n("323e"),v=n.n(p),m=f.a.create({baseURL:"https://vue-stock-trader-ced52.firebaseio.com/",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});m.interceptors.request.use((function(t){return v.a.start(),t})),m.interceptors.response.use((function(t){return v.a.done(),t}));var k={saveTradeData:function(t){return m.put("data.json",t)},loadTradeData:function(){return m.get("data.json")}},b={computed:{funds:function(){return this.$store.getters["portfolio/funds"]}},methods:Object(u["a"])({},Object(l["b"])({randomizeStocks:"stocks/randomizeStocks",fetchData:"loadData"}),{endDay:function(){this.randomizeStocks()},saveData:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={funds:t.$store.getters["portfolio/funds"],stockPortfolio:t.$store.getters["portfolio/stockPortfolio"],stocks:t.$store.getters["stocks/stocks"]},e.next=3,k.saveTradeData(n);case 3:case"end":return e.stop()}}),e)})))()},loadData:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.fetchData();case 1:case"end":return e.stop()}}),e)})))()}})},h=b,y=n("2877"),_=Object(y["a"])(h,r,i,!1,null,"add242da",null),g=_.exports,C={components:{appHeader:g},created:function(){this.$store.dispatch("stocks/initStocks")}},S=C,O=(n("5ce8"),Object(y["a"])(S,s,o,!1,null,"dfb6870c",null)),w=O.exports,q=n("8c4f"),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-5"},[n("h1",[t._v("Trade or View your Portfolio")]),n("h6",[t._v("You may Save and Load your Data")]),t._m(0),n("hr"),n("p",[t._v("Your Funds: "+t._s(t._f("currency")(t.funds)))])])},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h6",[t._v("Click on "),n("b",[t._v("End Day")]),t._v(" to begin a New Day!")])}],T={computed:{funds:function(){return this.$store.getters["portfolio/funds"]}}},j=T,D=Object(y["a"])(j,P,x,!1,null,"12a16932",null),E=D.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-5"},[n("h1",{staticClass:"mb-4"},[t._v("Portolio")]),n("div",{staticClass:"row"},t._l(t.stockPortfolio,(function(t){return n("app-stock",{key:t.id,attrs:{stock:t}})})),1)])},I=[],L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-6 col-md-4"},[n("div",{staticClass:"card mb-3"},[n("div",{staticClass:"card-header text-white bg-success"},[t._v(" "+t._s(t.stock.name)+" "),n("small",[t._v("(Price: "+t._s(t.stock.price)+" | Quality: "+t._s(t.stock.quantity)+")")])]),n("div",{staticClass:"card-body"},[n("form",{staticClass:"form-inline"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"form-control",class:{danger:t.insufficientQuantity},attrs:{type:"number",placeholder:"Quality"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=e.target.value)}}}),n("button",{staticClass:"btn btn-success m-3",attrs:{disabled:t.insufficientQuantity||t.quantity<=0||!Number.isInteger(Number(t.quantity))},on:{click:function(e){return e.preventDefault(),t.sellStock(e)}}},[t._v(" Sell ")]),n("small",{staticClass:"mt-2 text-red"},[t._v(" "+t._s(t.insufficientQuantity?"Insufficient Quantity":"")+" ")])])])])])},R=[],F={props:["stock"],data:function(){return{quantity:0}},computed:{insufficientQuantity:function(){return this.quantity>this.stock.quantity}},methods:{sellStock:function(){var t={stockId:this.stock.id,stockPrice:this.stock.price,quantity:parseInt(this.quantity)};this.$store.dispatch("portfolio/sellStock",t),this.quantity=0}}},K=F,M=(n("fa1f"),Object(y["a"])(K,L,R,!1,null,"521ef17c",null)),N=M.exports,Q={components:{appStock:N},computed:Object(l["c"])("portfolio",["stockPortfolio"])},z=Q,A=Object(y["a"])(z,$,I,!1,null,"e6182af4",null),B=A.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-5"},[n("h1",{staticClass:"mb-4"},[t._v("Stocks")]),n("div",{staticClass:"row"},t._l(t.stocks,(function(t){return n("app-stock",{key:t.id,attrs:{stock:t}})})),1)])},U=[],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-6 col-md-4"},[n("div",{staticClass:"card mb-3"},[n("div",{staticClass:"card-header text-white bg-primary"},[t._v(" "+t._s(t.stock.name)+" "),n("small",[t._v("(Price: "+t._s(t.stock.price)+")")])]),n("div",{staticClass:"card-body"},[n("form",{staticClass:"form-inline"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"form-control",class:{danger:t.insufficientFunds},attrs:{type:"number",placeholder:"Quality"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=e.target.value)}}}),n("button",{staticClass:"btn btn-primary m-3",attrs:{disabled:t.insufficientFunds||t.quantity<=0||!Number.isInteger(Number(t.quantity))},on:{click:function(e){return e.preventDefault(),t.buyStock(e)}}},[t._v(" Buy ")]),n("small",{staticClass:"mt-2 text-red"},[t._v(" "+t._s(t.insufficientFunds?"Insufficient Funds":"")+" ")])])])])])},J=[],V={props:["stock"],data:function(){return{quantity:0}},computed:{funds:function(){return this.$store.getters["portfolio/funds"]},insufficientFunds:function(){return this.quantity*this.stock.price>this.funds}},methods:{buyStock:function(){var t={stockId:this.stock.id,stockPrice:this.stock.price,quantity:parseInt(this.quantity)};this.$store.dispatch("stocks/buyStock",t),this.quantity=0}}},W=V,G=(n("1677"),Object(y["a"])(W,H,J,!1,null,"649fe396",null)),X=G.exports,Z={components:{appStock:X},computed:Object(l["c"])("stocks",["stocks"])},tt=Z,et=Object(y["a"])(tt,Y,U,!1,null,"140eb7ea",null),nt=et.exports;a["a"].use(q["a"]);var at=[{path:"/",name:"Home",component:E},{path:"/portfolio",name:"Portfolio",component:B},{path:"/stocks",name:"Stocks",component:nt}],st=new q["a"]({mode:"history",base:"/vue-stock-trader/",routes:at}),ot=st,rt=(n("4160"),n("159b"),[{id:1,name:"BMW",price:"200"},{id:2,name:"Apple",price:"100"},{id:3,name:"Twitter",price:"40"},{id:4,name:"Lexus",price:"300"}]),it={namespaced:!0,state:{stocks:[]},mutations:{SET_STOCK:function(t,e){t.stocks=e},RANDOM_STOCK:function(t){t.stocks.forEach((function(t){t.price=Math.round(t.price*(1+Math.random()-.5))}))}},actions:{buyStock:function(t,e){var n=t.commit;n("portfolio/BUY_STOCK",e,{root:!0})},initStocks:function(t){var e=t.commit;e("SET_STOCK",rt)},randomizeStocks:function(t){var e=t.commit;e("RANDOM_STOCK")}},getters:{stocks:function(t){return t.stocks}}},ct=(n("7db0"),n("c975"),n("d81d"),n("a434"),n("b0c0"),{namespaced:!0,state:{funds:1e4,stocks:[]},mutations:{BUY_STOCK:function(t,e){var n=e.stockId,a=e.quantity,s=e.stockPrice,o=t.stocks.find((function(t){return t.id==n}));o?o.quantity+=a:t.stocks.push({id:n,quantity:a}),t.funds-=s*a},SELL_STOCK:function(t,e){var n=e.stockId,a=e.quantity,s=e.stockPrice,o=t.stocks.find((function(t){return t.id==n}));o.quantity>a?o.quantity-=a:t.stocks.splice(t.stocks.indexOf(o),1),t.funds+=s*a},SET_PORTFOLIO:function(t,e){t.funds=e.funds,t.stocks=e.stockPortfolio?e.stockPortfolio:[]}},actions:{sellStock:function(t,e){var n=t.commit;n("SELL_STOCK",e)}},getters:{stockPortfolio:function(t,e,n){return t.stocks.map((function(t){var e=n["stocks"].stocks.find((function(e){return e.id==t.id}));return{id:t.id,quantity:t.quantity,name:e.name,price:e.price}}))},funds:function(t){return t.funds}}});a["a"].use(l["a"]);var ut=new l["a"].Store({modules:{stocks:it,portfolio:ct},actions:{loadData:function(t){return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,a,s,o,r,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,k.loadTradeData();case 3:a=e.sent,s=a.data,s&&(o=s.stocks,r=s.funds,i=s.stockPortfolio,c={stockPortfolio:i,funds:r},n("stocks/SET_STOCK",o),n("portfolio/SET_PORTFOLIO",c));case 6:case"end":return e.stop()}}),e)})))()}}});n("a5d8");a["a"].config.productionTip=!1,a["a"].filter("currency",(function(t){return"£"+t.toLocaleString()})),ot.beforeEach((function(t,e,n){v.a.start(),n()})),ot.afterEach((function(){v.a.done()})),new a["a"]({router:ot,store:ut,render:function(t){return t(w)}}).$mount("#app")},"5ce8":function(t,e,n){"use strict";var a=n("06c6"),s=n.n(a);s.a},"759c":function(t,e,n){},e3ed:function(t,e,n){},fa1f:function(t,e,n){"use strict";var a=n("e3ed"),s=n.n(a);s.a}});
//# sourceMappingURL=app.5290b3d7.js.map