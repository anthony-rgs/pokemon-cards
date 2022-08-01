(function(){"use strict";var e={3886:function(e,r,a){var n=a(9242),t=a(3396);function i(e,r,a,n,i,c){const o=(0,t.up)("router-view");return(0,t.wg)(),(0,t.j4)(o)}var c={name:"App"},o=a(89);const s=(0,o.Z)(c,[["render",i]]);var d=s,u=a(678),l=a(7139);const m={id:"head"},p=(0,t._)("img",{src:"/assets/logo-pokemon.svg",alt:"Pokémon logo"},null,-1),g={id:"nav"},k={key:0,id:"count"},v={key:0,id:"loading-container"},f=(0,t._)("img",{src:"/assets/pokeball.png",alt:"pokeball"},null,-1),h=[f],b={key:1,id:"cards"};function w(e,r,a,i,c,o){const s=(0,t.up)("Card");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",m,[p,(0,t._)("div",g,[(0,t.wy)((0,t._)("input",{type:"text",placeholder:"Search a Pokémon card ...","onUpdate:modelValue":r[0]||(r[0]=e=>c.name=e),onKeyup:r[1]||(r[1]=(0,n.D2)(((...e)=>o.get&&o.get(...e)),["enter"]))},null,544),[[n.nr,c.name]]),(0,t._)("button",{onClick:r[2]||(r[2]=e=>o.get())},"Search")]),null!=c.count?((0,t.wg)(),(0,t.iD)("p",k,(0,l.zw)(c.count+" results"),1)):(0,t.kq)("",!0)]),c.isLoading?((0,t.wg)(),(0,t.iD)("div",v,h)):((0,t.wg)(),(0,t.iD)("div",b,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(c.cards,((e,r)=>((0,t.wg)(),(0,t.j4)(s,{key:r,image:e.images.small,name:e.name,number:e.number,cardInSet:e.set.printedTotal,id:e.id},null,8,["image","name","number","cardInSet","id"])))),128))]))],64)}const _={class:"cards"},y=["src"],S={id:"hidden"};function z(e,r,a,n,i,c){const o=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",_,[(0,t.Wm)(o,{to:{name:"card",params:{id:a.id}}},{default:(0,t.w5)((()=>[(0,t._)("img",{src:a.image,alt:"Pokémon card",class:"card"},null,8,y)])),_:1},8,["to"]),(0,t._)("p",null,[(0,t.Uk)((0,l.zw)(a.name)+" "+(0,l.zw)(a.number)+"-"+(0,l.zw)(a.cardInSet)+" ",1),(0,t._)("span",S,(0,l.zw)(a.id),1)])])}var L={name:"pokemon-card",props:{image:String,name:String,number:String,cardInSet:Number,id:String}};const U=(0,o.Z)(L,[["render",z]]);var j=U,D=a(6265),A=a.n(D),O={name:"home-page",components:{Card:j},data(){return{cards:null,count:null,name:null,searchQuery:null,isLoading:!1}},methods:{get(){this.searchQuery&&(this.isLoading=!0),A().get(`https://api.pokemontcg.io/v2/cards?q=name:${this.searchQuery}`).then((e=>{this.count=e.data.count,this.cards=e.data.data,this.isLoading=!1}))}},created(){this.searchQuery=this.$route.query?.search||"",this.name=this.searchQuery,this.get()},watch:{name(e){e&&this.$router.replace(`?search=${e}`),this.searchQuery=e}}};const C=(0,o.Z)(O,[["render",w]]);var I=C;const P=(0,t.Uk)(" H "),T=(0,t._)("img",{src:"/assets/pokeball.png"},null,-1),$=(0,t.Uk)(" me "),N=[P,T,$];function Q(e,r,a,n,i,c){const o=(0,t.up)("SelectedCard");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("button",{onClick:r[0]||(r[0]=r=>e.$router.go(-1))},N),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(i.informations,((e,r)=>((0,t.wg)(),(0,t.j4)(o,{key:r,name:e.name,number:e.number,cardInSet:e.set.printedTotal,image:e.images.large,block:e.set.series,set:e.set.name,rarity:e.rarity,artist:e.artist,date:e.set.releaseDate,cardmarketLink:e.cardmarket.url,cardmarketLow:e.cardmarket.prices.lowPrice,cardmarketTrend:e.cardmarket.prices.trendPrice,cardmarketAverage7:e.cardmarket.prices.avg7,cardmarketAverage30:e.cardmarket.prices.avg30},null,8,["name","number","cardInSet","image","block","set","rarity","artist","date","cardmarketLink","cardmarketLow","cardmarketTrend","cardmarketAverage7","cardmarketAverage30"])))),128))],64)}const x=e=>((0,t.dD)("data-v-5dcd62f6"),e=e(),(0,t.Cn)(),e),H={id:"selected-card"},Z={id:"left-section"},Y={id:"card"},q={id:"name"},K={class:"blue"},B=["src"],E={id:"card-informations"},F=(0,t.Uk)(" Block "),M={class:"blue"},R=(0,t.Uk)(" Set "),V={class:"blue"},W=(0,t.Uk)(" Rarity "),G={class:"blue"},J=(0,t.Uk)(" Artist "),X={class:"blue"},ee=(0,t.Uk)(" Date "),re={class:"blue"},ae={id:"right-section"},ne=["href"],te=x((()=>(0,t._)("img",{src:"/assets/cardmarket.webp",alt:"Cardmarket Logo",id:"cardmarket-logo"},null,-1))),ie=[te],ce={id:"prices"},oe=(0,t.Uk)(" Low "),se={class:"blue"},de=(0,t.Uk)(" Trend "),ue={class:"blue"},le=(0,t.Uk)(" Average 7 days "),me={class:"blue"},pe=(0,t.Uk)(" Average 30 days "),ge={class:"blue"};function ke(e,r,a,n,i,c){return(0,t.wg)(),(0,t.iD)("div",H,[(0,t._)("div",Z,[(0,t._)("div",Y,[(0,t._)("p",q,[(0,t.Uk)((0,l.zw)(a.name)+" ",1),(0,t._)("span",K,(0,l.zw)(a.number)+"-"+(0,l.zw)(a.cardInSet),1)]),(0,t._)("img",{src:a.image,alt:"Pokémon card",id:"selected-pokemon-card"},null,8,B)]),(0,t._)("div",E,[(0,t._)("p",null,[F,(0,t._)("span",M,(0,l.zw)(a.block),1)]),(0,t._)("p",null,[R,(0,t._)("span",V,(0,l.zw)(a.set),1)]),(0,t._)("p",null,[W,(0,t._)("span",G,(0,l.zw)(a.rarity),1)]),(0,t._)("p",null,[J,(0,t._)("span",X,(0,l.zw)(a.artist),1)]),(0,t._)("p",null,[ee,(0,t._)("span",re,(0,l.zw)(a.date),1)])])]),(0,t._)("div",ae,[(0,t._)("div",null,[(0,t._)("a",{href:a.cardmarketLink,target:"_blank"},ie,8,ne),(0,t._)("div",ce,[(0,t._)("p",null,[oe,(0,t._)("span",se,(0,l.zw)(a.cardmarketLow)+" €",1)]),(0,t._)("p",null,[de,(0,t._)("span",ue,(0,l.zw)(a.cardmarketTrend)+" €",1)]),(0,t._)("p",null,[le,(0,t._)("span",me,(0,l.zw)(a.cardmarketAverage7)+" €",1)]),(0,t._)("p",null,[pe,(0,t._)("span",ge,(0,l.zw)(a.cardmarketAverage30)+" €",1)])])])])])}var ve={name:"selected-pokemon-card",props:{name:String,number:String,cardInSet:Number,image:String,block:String,set:String,rarity:String,artist:String,date:String,cardmarketLink:String,cardmarketLow:Number,cardmarketTrend:Number,cardmarketAverage7:Number,cardmarketAverage30:Number}};const fe=(0,o.Z)(ve,[["render",ke],["__scopeId","data-v-5dcd62f6"]]);var he=fe,be={name:"card-page",components:{SelectedCard:he},data(){return{informations:null}},mounted(){A().get(`https://api.pokemontcg.io/v2/cards/${this.$route.params.id}`).then((e=>{this.informations=e.data}))}};const we=(0,o.Z)(be,[["render",Q]]);var _e=we;const ye=[{path:"/",component:I},{name:"card",path:"/card/:id",component:_e}],Se=(0,u.p7)({history:(0,u.PO)(),routes:ye});var ze=Se;const Le=(0,n.ri)(d);Le.use(ze),Le.mount("#app")}},r={};function a(n){var t=r[n];if(void 0!==t)return t.exports;var i=r[n]={exports:{}};return e[n](i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(r,n,t,i){if(!n){var c=1/0;for(u=0;u<e.length;u++){n=e[u][0],t=e[u][1],i=e[u][2];for(var o=!0,s=0;s<n.length;s++)(!1&i||c>=i)&&Object.keys(a.O).every((function(e){return a.O[e](n[s])}))?n.splice(s--,1):(o=!1,i<c&&(c=i));if(o){e.splice(u--,1);var d=t();void 0!==d&&(r=d)}}return r}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,t,i]}}(),function(){a.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(r,{a:r}),r}}(),function(){a.d=function(e,r){for(var n in r)a.o(r,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={143:0};a.O.j=function(r){return 0===e[r]};var r=function(r,n){var t,i,c=n[0],o=n[1],s=n[2],d=0;if(c.some((function(r){return 0!==e[r]}))){for(t in o)a.o(o,t)&&(a.m[t]=o[t]);if(s)var u=s(a)}for(r&&r(n);d<c.length;d++)i=c[d],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},n=self["webpackChunkvuejs_project"]=self["webpackChunkvuejs_project"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(3886)}));n=a.O(n)})();
//# sourceMappingURL=app.2b2ba4ec.js.map