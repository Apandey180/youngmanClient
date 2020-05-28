<template>
	<div alt="Image placeholder" class="card">
    <div class="img_container">
    <b-icon icon="heart" font-scale="3" class="fav_icon"></b-icon>
    <img :src="item.image"  class="card-img-top">
    <b-row class="img-offer">
        <b-col>
        <h5 v-if="item.offer != ''" class="text-danger">{{item.offer}}</h5>
        </b-col>
        <b-col>
        <small class="text-danger"><del v-if="item.offer != ''">Rs.{{item.original_price}}</del></small>
        </b-col>
    </b-row>
    </div>
    <div class="card-body">
      <p class="card-text mt-4">{{item.text}}</p>
      <h5 class="card-title h2 mb-0" v-if="item.price != ''">Rs.{{item.price}}/Month</h5>

      <b-form-rating id="rating" inline no-border v-model="item.rating" v-if="item.rating != ''"></b-form-rating>
    </div>
  </div>
</template>

<script>
export default {
  props:['item'],
  data () {
    return { 
      
    };
  },
};
</script>

<style>
.img_container { position: relative; }
.img_container img { display: block; }
.img_container .fav_icon { position: absolute; top:0; right:0; }
.img_container .img-offer { position: absolute; bottom:0; left:0; }
</style>