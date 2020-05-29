<template>
<div>
<sample-navbar/>

    <div class="container">
        <div class="row">
            <div class="col-md-6 ">
                <h1>{{product.item_name}}</h1>
                
                <div class="row">

                    <b-col sm="2" md="2" lg="2" align-v="left">
                        <img v-for="image in product.images" :key="image.id" v-on:click="changeImage(image)" :src="image.thumb_url" class="thumb-image">
                    </b-col>  

                    <b-col sm="10" md="10" lg="10" align-v="right">  
                        <img v-if="current_image !== null" v-bind:src= "current_image_url" class="block-image"><br><br>
                    </b-col>  
                </div>

                <center> <b-button variant="primary">Add to Cart</b-button>
                    <b-button variant="primary">Rent Now</b-button></center>

             </div>
            <div class="col-md-6">
               <product-details v-bind:product="product"/>
            </div>
        </div>

             <div class="row">
            <div class="col-md-6 ">
                <review/>
                </div>
            <div class="col-md-6">
               <similar-items/>
            </div>
        </div>
   
    </div>
    <sample-footer/>
</div>
</template>

<script>



import ProductDetails from './ProductDetails'
import Review from './Review'
import SimilarItems from './SimilarItems'
import SampleNavbar from '../Home/SampleNavbar'
import SampleFooter from '../Home/SampleFooter'

export default {
  
  components:
  {
      ProductDetails,
      Review,
      SimilarItems,
      SampleNavbar,
      SampleFooter
    },
  
    data(){
        return {
            current_image: null,
            product : null
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
        
        }
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