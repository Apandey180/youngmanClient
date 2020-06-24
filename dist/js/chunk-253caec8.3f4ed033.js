(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-253caec8"],{"1b68":function(t,e,r){"use strict";var s=r("e81b"),o=r.n(s);o.a},bbf8:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("base-header",{staticClass:"pb-6",staticStyle:{"background-color":"#ffe411 !important"}},[r("b-row",{staticClass:"py-4",attrs:{"align-v":"right"}})],1),r("b-container",{staticClass:"mt--6",attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{"align-v":"left",sm:"12",md:"3",lg:"3"}},[r("product-filter")],1),r("b-col",{attrs:{sm:"12",md:"9",lg:"9"}},[r("sort"),r("b-row",t._l(t.lists,(function(t){return r("b-col",{key:t.id,attrs:{sm:"12",md:"4",lg:"4"}},[r("product-card",{attrs:{item:t}})],1)})),1),r("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"aria-controls":"lists",align:"center"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1),r("b-row",[r("recently-searched")],1),r("router-view")],1)],1)},o=[],c=(r("f559"),r("6b54"),r("7c76")),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-card",{attrs:{"no-body":""}},[r("b-card-header",[r("h5",{staticClass:"h3 mb-0"},[t._v("Filter")])]),r("b-card-body",[r("b-row",[r("b-col",{attrs:{sm:"12",md:"12",lg:"12"}},[r("b-form-group",{attrs:{label:"Categories"}},[r("b-form-checkbox-group",{attrs:{options:t.categories_options,plain:"",stacked:""},model:{value:t.categories_selected,callback:function(e){t.categories_selected=e},expression:"categories_selected"}})],1)],1)],1),r("b-row",[r("b-col",{attrs:{sm:"12",md:"12",lg:"12"}},[r("label",{attrs:{for:"range-1"}},[t._v("No. of Person Working")]),r("b-form-input",{attrs:{id:"range-1",type:"range"}})],1)],1),r("b-row",[r("b-col",{attrs:{sm:"12",md:"12",lg:"12"}},[r("b-form-group",{attrs:{label:"Material"}},[r("b-form-checkbox-group",{attrs:{options:t.materials_options,plain:"",stacked:""},model:{value:t.materials_selected,callback:function(e){t.materials_selected=e},expression:"materials_selected"}})],1)],1)],1),r("b-row",[r("b-col",{attrs:{sm:"12",md:"12",lg:"12"}},[r("b-form-group",{attrs:{label:"Additional"}},[r("b-form-checkbox-group",{attrs:{options:t.additional_options,plain:"",stacked:""},model:{value:t.additional_selected,callback:function(e){t.additional_selected=e},expression:"additional_selected"}})],1)],1)],1),r("b-row",[r("b-col",{attrs:{sm:"12",md:"12",lg:"12"}},[r("b-form-group",{attrs:{label:"Width"}},[r("b-form-checkbox-group",{attrs:{options:t.width_options,plain:"",stacked:""},model:{value:t.width_selected,callback:function(e){t.width_selected=e},expression:"width_selected"}})],1)],1)],1)],1)],1)],1)},a=[],i={data:function(){return{}},computed:{categories_options:function(){return this.$store.state.products.categories_options},materials_options:function(){return this.$store.state.products.materials_options},additional_options:function(){return this.$store.state.products.additional_options},width_options:function(){return this.$store.state.products.width_options},categories_selected:{get:function(){return this.$store.state.products.categories_selected},set:function(t){return t}},materials_selected:{get:function(){return this.$store.state.products.materials_selected},set:function(t){return t}},additional_selected:{get:function(){return this.$store.state.products.additional_selected},set:function(t){return t}},width_selected:{get:function(){return this.$store.state.products.width_selected},set:function(t){return t}}},watch:{categories_selected:function(t,e){console.log("Updating categories_selected from ".concat(e," to ").concat(t)),this.$store.dispatch("products/getAllProducts")},materials_selected:function(t,e){console.log("Updating materials_selected from ".concat(e," to ").concat(t)),this.$store.dispatch("products/getAllProducts")},additional_selected:function(t,e){console.log("Updating additional_selected from ".concat(e," to ").concat(t)),this.$store.dispatch("products/getAllProducts")},width_selected:function(t,e){console.log("Updating width_selected from ".concat(e," to ").concat(t)),this.$store.dispatch("products/getAllProducts")}},created:function(){this.$store.dispatch("products/getAllCategories"),this.$store.dispatch("products/getAllMaterials"),this.$store.dispatch("products/getAllAdditional"),this.$store.dispatch("products/getAllWidth")}},l=i,d=(r("1b68"),r("2877")),u=Object(d["a"])(l,n,a,!1,null,null,null),p=u.exports,b=r("9b7c"),g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-content"},[r("b-container",{attrs:{"align-v":"center"}},[r("b-row",[r("b-col",{attrs:{lg:"12"}},[r("h2",{staticClass:"d-inline-block mb-0"},[t._v("Recently Searched Products")])])],1),r("b-row",t._l(t.recent_products,(function(t){return r("b-col",{key:t.id,attrs:{sm:"6",md:"3",lg:"3"}},[r("recent-product",{attrs:{item:t}})],1)})),1)],1)],1)},h=[],f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-card",{staticClass:"mb-2",attrs:{title:t.item.title,"img-src":t.item.image,"img-alt":"Image","img-top":"",tag:"article"}},[r("b-card-text",[t._v("\n    "+t._s(t.item.text)+"\n    ")])],1)],1)},m=[],_={props:["item"]},P=_,w=Object(d["a"])(P,f,m,!1,null,null,null),v=w.exports,y={components:{ProductCard:b["a"],RecentProduct:v},data:function(){return{currentPage:1,perPage:6}},computed:{recent_products:function(){return this.$store.state.products.recent_products}},methods:{},created:function(){this.$store.dispatch("products/getRecentProducts")}},k=y,$=Object(d["a"])(k,g,h,!1,null,null,null),x=$.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{display:"flex","justify-content":"left"}},[r("button",{staticClass:"btn btn-link text-black",attrs:{type:"button"}},[t._v("Sort By")]),r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:t.sortByPopularity}},[t._v("Popularity")]),r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:t.sortByPrice}},[t._v("Price low to High")]),r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:t.sortByDate}},[t._v("Newest First")])])},C=[],S={methods:{sortByPopularity:function(){this.$store.dispatch("products/getAllProducts",{sort_by:"RATING"})},sortByPrice:function(){this.$store.dispatch("products/getAllProducts",{sort_by:"PRICE"})},sortByDate:function(){this.$store.dispatch("products/getAllProducts",{sort_by:"CREATED_AT"})}}},E=S,B=Object(d["a"])(E,A,C,!1,null,null,null),R=B.exports,j={components:{FadeTransition:c["b"],ProductFilter:p,ProductCard:b["a"],RecentlySearched:x,Sort:R},data:function(){return{currentPage:1,perPage:6}},computed:{lists:function(){var t=this.products;return t.slice((this.currentPage-1)*this.perPage,this.currentPage*this.perPage)},numPages:function(){return Math.ceil(this.products.length/this.perPage)},rows:function(){return this.products.length},products:function(){return this.$store.state.products.all}},created:function(){this.$store.dispatch("products/getAllProducts")},methods:{initScrollbar:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=document.body.classList,e=navigator.platform.startsWith("Win");e?(initScrollbar("scrollbar-inner"),t.add("perfect-scrollbar-on")):t.add("perfect-scrollbar-off")}))}},O=j,W=Object(d["a"])(O,s,o,!1,null,null,null);e["default"]=W.exports},e81b:function(t,e,r){}}]);
//# sourceMappingURL=chunk-253caec8.3f4ed033.js.map