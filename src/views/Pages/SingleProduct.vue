<template>
    <div>
        <base-header class="pb-6" style="background-color:#ffe411 !important">
    <b-row align-v="right" class="py-4">
    </b-row>
  </base-header>
  <b-container fluid class="mt--6">
      <b-card>

        <h2 slot="header" class="mb-0">{{product.item_name}}</h2>

        <div class="row">
            <div class="col-md-6 ">

                
                
             </div>
            <div class="col-md-6">
               <product-details v-bind:product="product"/>
            </div>
        </div>

        <small slot="footer" class="mb-0">Warranty: {{product.description}}</small>
      </b-card>

        <b-row>
        <b-col sm="12" md="6" lg="6">
            <review/>
        </b-col>
        <b-col sm="12" md="6" lg="6">
            <similar-items/>
        </b-col>
        </b-row>
   
    </b-container>
    </div>
</template>

<script>

import ProductDetails from './SingleProduct/ProductDetails'
import Review from './SingleProduct/Review'
import SimilarItems from './SingleProduct/SimilarItems'

export default {
  
  components:
  {
      ProductDetails,
      Review,
      SimilarItems
    },
  
    data(){
        return {
            current_image: null,
            product : null,
            index: 0,
        }
   },

    computed: {
        current_image_url() {
            return this.current_image.image_url;
        }
    },

    methods: {
        changeImage(image) {
           this.current_image = image;
        
        },
        clickItem(i){
        this.index = i;
        },
        rentNow() {},
        addToCart() {}
    },
        
    beforeMount(){
        let url = `/api/products/${this.$route.params.id}`;
        //this.$http.get(url).then(response => this.product = response.data)
        this.product = { 
                id: 1,
                title: "Ladder",
                item_name: "Aluminium Scaffold",
                image_url: "https://picsum.photos/600/300/?image=25",
                alt: "Image Placeholder",
                quantity_available: 30,
                description:"Nulla vitae elit libero, a pharetra augue mollis interdum. (2)",
                item_price: 4999,
                images: [{
                    id: 1,
                    thumb_url: "https://picsum.photos/600/300/?image=25",
                    image_url: "https://picsum.photos/600/300/?image=25"
                },
                {
                    id: 2,
                    thumb_url: "https://picsum.photos/600/300/?image=25",
    
                    image_url: "https://picsum.photos/600/300/?image=25"
                },
                {
                    id: 3,
                    thumb_url: "https://picsum.photos/600/300/?image=25",
                    image_url: "https://picsum.photos/600/300/?image=25"
                },
                {
                    id: 4,
                    thumb_url: "https://picsum.photos/600/300/?image=25",
                    image_url: "https://picsum.photos/600/300/?image=25"
                }]
             
            };
        this.current_image =this.product;
    }
    
}
</script>

<style scoped>
    .small-text { font-size: 18px; }
    .title { font-size: 36px; }
    .thumb-image
    {
        height: 20%;
        width: 100%;
        padding-top: 10%;
    }
    .block-image
    {
        height: 100%;
        width: 100%;
    }
</style>