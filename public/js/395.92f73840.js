(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[395],{4395:function(t,a,o){"use strict";o.r(a),o.d(a,{default:function(){return F}});var e=o(3396),n=o(7139);const i={class:"v-catalog"},r={class:"v-catalog__header"},c=(0,e._)("h1",{class:"v-catalog__heading"},"Catalog",-1),s=(0,e._)("i",{class:"v-catalog__icons medium material-icons"},"shopping_basket ",-1),l={class:"v-catolog__link_to_cart"},d={class:"v-catalog__quantity"},u={class:"v-catalog__wrap"};function p(t,a,o,p,_,g){const m=(0,e.up)("vForm"),v=(0,e.up)("router-link"),f=(0,e.up)("vCatalogItem");return(0,e.wg)(),(0,e.iD)("div",i,[(0,e.Wm)(m,{onCloseModal:g.toggleModal,isVisible:_.isVisible},null,8,["onCloseModal","isVisible"]),(0,e._)("div",r,[c,(0,e.Wm)(v,{to:{name:"cart"}},{default:(0,e.w5)((()=>[s,(0,e._)("div",l,[(0,e._)("p",d,(0,n.zw)(t.CART.reduce(((t,a)=>t+a.quantity),0)),1)])])),_:1}),(0,e._)("button",{onClick:a[0]||(a[0]=(...t)=>g.toggleModal&&g.toggleModal(...t)),"waves-effect":"",btn:""},"add a product")]),(0,e._)("div",u,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(t.PRODUCTS,(t=>((0,e.wg)(),(0,e.j4)(f,{key:t.article,product_data:t,onAddToCart2:g.addToCart},null,8,["product_data","onAddToCart2"])))),128))])])}const _={class:"v-catalog-item"},g=["src"],m={class:"v-catalog-item__name"},v={class:"v-catalog-item__price"},f={class:"v-catalog-item__name"},h={class:"v-catalog-item__name"};function b(t,a,i,r,c,s){return(0,e.wg)(),(0,e.iD)("div",_,[(0,e._)("img",{class:"v-catalog-item__image",src:o(990)("./"+i.product_data.image),alt:"not found"},null,8,g),(0,e._)("p",m,(0,n.zw)(i.product_data.name),1),(0,e._)("p",v,(0,n.zw)(i.product_data.price),1),(0,e._)("p",f,(0,n.zw)(i.product_data.about),1),(0,e._)("p",h,(0,n.zw)(i.product_data.category),1),(0,e._)("button",{class:"waves-effect v-catalog-item__add_to_cart_btn btn",onClick:a[0]||(a[0]=(...t)=>s.addToCart&&s.addToCart(...t))}," Add to cart ")])}var T={name:"v-catalog-item",props:{product_data:{type:Object,default(){return{}}}},data(){return{}},methods:{addToCart(){this.$emit("addToCart2",this.product_data)}}},y=o(89);const C=(0,y.Z)(T,[["render",b],["__scopeId","data-v-ef8ad102"]]);var w=C,U=o(9242);function V(t,a,o,i,r,c){return o.isVisible?((0,e.wg)(),(0,e.iD)("div",{key:0,class:"v-form",onClick:a[10]||(a[10]=(0,U.iM)(((...t)=>c.closeModal&&c.closeModal(...t)),["self"]))},[(0,e._)("form",{onSubmit:a[9]||(a[9]=(0,U.iM)((()=>{}),["prevent"])),class:"v-form__block"},[(0,e.wy)((0,e._)("input",{onInput:a[0]||(a[0]=(...t)=>c.changeValid&&c.changeValid(...t)),"onUpdate:modelValue":a[1]||(a[1]=t=>r.price=t),class:"v-form__input",type:"text",placeholder:"price"},null,544),[[U.nr,r.price]]),(0,e.wy)((0,e._)("input",{onInput:a[2]||(a[2]=(...t)=>c.changeValid&&c.changeValid(...t)),"onUpdate:modelValue":a[3]||(a[3]=t=>r.category=t),class:"v-form__input",type:"text",placeholder:"category"},null,544),[[U.nr,r.category]]),(0,e.wy)((0,e._)("input",{onInput:a[4]||(a[4]=(...t)=>c.changeValid&&c.changeValid(...t)),"onUpdate:modelValue":a[5]||(a[5]=t=>r.about=t),class:"v-form__input",type:"text",placeholder:"about"},null,544),[[U.nr,r.about]]),(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":a[6]||(a[6]=t=>r.name=t),onInput:a[7]||(a[7]=(...t)=>c.changeValid&&c.changeValid(...t)),class:"v-form__input",type:"text",placeholder:"name"},null,544),[[U.nr,r.name]]),(0,e._)("button",{class:(0,n.C_)([r.isValid?"v-form__btn-is-valid":"v-form__btn-not-is-valid","v-form__btn-is-valid"]),onClick:a[8]||(a[8]=(...t)=>c.addToCatalog&&c.addToCatalog(...t))}," Добавить ",2)],32)])):(0,e.kq)("",!0)}var O=o(65);const D="undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var M={randomUUID:D};o(3767),o(8585),o(8696);let A;const k=new Uint8Array(16);function R(){if(!A&&(A="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!A))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return A(k)}o(7658);const I=[];for(let N=0;N<256;++N)I.push((N+256).toString(16).slice(1));function S(t,a=0){return(I[t[a+0]]+I[t[a+1]]+I[t[a+2]]+I[t[a+3]]+"-"+I[t[a+4]]+I[t[a+5]]+"-"+I[t[a+6]]+I[t[a+7]]+"-"+I[t[a+8]]+I[t[a+9]]+"-"+I[t[a+10]]+I[t[a+11]]+I[t[a+12]]+I[t[a+13]]+I[t[a+14]]+I[t[a+15]]).toLowerCase()}function x(t,a,o){if(M.randomUUID&&!a&&!t)return M.randomUUID();t=t||{};const e=t.random||(t.rng||R)();if(e[6]=15&e[6]|64,e[8]=63&e[8]|128,a){o=o||0;for(let t=0;t<16;++t)a[o+t]=e[t];return a}return S(e)}var E=x,P={name:"v-form",props:{isVisible:{type:Boolean,required:!0}},data(){return{price:"",category:"",about:"",name:"",fromObj:{},isValid:!1}},watch:{},computed:{},methods:{...(0,O.OI)(["SET_CART_NEW_PRODUCT"]),closeModal(){this.$emit("closeModal")},addToCatalog(){this.fromObj={price:Number(this.price),category:this.category,about:this.about,image:"1.png",name:this.name,article:E(),available:!0,quantity:0},this.SET_CART_NEW_PRODUCT(this.fromObj)},changeValid(){this.isValid=Boolean(this.price&&this.category&&this.about&&this.name)}}};const j=(0,y.Z)(P,[["render",V]]);var q=j,L={name:"v-catalog",components:{vCatalogItem:w,vForm:q},props:{},data(){return{isVisible:!1}},computed:{...(0,O.Se)(["PRODUCTS","CART","TOTALSUM"])},methods:{...(0,O.nv)(["GET_PRODUCTS_FROM_API","ADD_TO_CART"]),...(0,O.OI)(["SET_TOTALSUM"]),addToCart(t){t.quantity+=1,this.ADD_TO_CART(t),this.SET_TOTALSUM(this.TOTALSUM+t.price)},toggleModal(){this.isVisible=!this.isVisible}},mounted(){this.GET_PRODUCTS_FROM_API()}};const z=(0,y.Z)(L,[["render",p]]);var F=z},990:function(t,a,o){var e={"./1.png":3189,"./2.png":6870,"./3.png":4102,"./4.png":1681,"./5.png":4037,"./6.png":6370};function n(t){var a=i(t);return o(a)}function i(t){if(!o.o(e,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e[t]}n.keys=function(){return Object.keys(e)},n.resolve=i,t.exports=n,n.id=990},3189:function(t,a,o){"use strict";t.exports=o.p+"img/1.d9d17897.png"},6870:function(t,a,o){"use strict";t.exports=o.p+"img/2.adff4572.png"},4102:function(t,a,o){"use strict";t.exports=o.p+"img/3.48e8c0ea.png"},1681:function(t,a,o){"use strict";t.exports=o.p+"img/4.ed4d2e2c.png"},4037:function(t,a,o){"use strict";t.exports=o.p+"img/5.3c55bdeb.png"},6370:function(t,a,o){"use strict";t.exports=o.p+"img/6.d347e93d.png"}}]);
//# sourceMappingURL=395.92f73840.js.map