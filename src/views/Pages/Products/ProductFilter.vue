<template>
<div>

<b-card no-body>
    <!-- Card header -->
    <b-card-header >
      <!-- Title -->
      <h5 class="h3 mb-0">Filter</h5>
    </b-card-header>
    <!-- Card body -->
    <b-card-body >
     <b-row>
            <b-col sm="12" md="12" lg="12">
            <b-form-group label="Categories">
            <b-form-checkbox-group
                v-model="categories_selected"
                :options="categories_options"
                plain
                stacked
            ></b-form-checkbox-group>
            </b-form-group>
            </b-col>
        </b-row>

        <b-row>
            <b-col sm="12" md="12" lg="12">
            <label for="range-1">No. of Person Working</label>
            <b-form-input id="range-1" type="range"></b-form-input>
            </b-col>
        </b-row>

<b-row>
            <b-col sm="12" md="12" lg="12">
            <b-form-group label="Material">
            <b-form-checkbox-group
                v-model="materials_selected"
                :options="materials_options"
                plain
                stacked
            ></b-form-checkbox-group>
            </b-form-group>
            </b-col>
        </b-row>

        <b-row>
            <b-col sm="12" md="12" lg="12">
            <b-form-group label="Additional">
            <b-form-checkbox-group
                v-model="additional_selected"
                :options="additional_options"
                plain
                stacked
            ></b-form-checkbox-group>
            </b-form-group>
            </b-col>
        </b-row>

        <b-row>
            <b-col sm="12" md="12" lg="12">
            <b-form-group label="Width">
            <b-form-checkbox-group
                v-model="width_selected"
                :options="width_options"
                plain
                stacked
            ></b-form-checkbox-group>
            </b-form-group>
            </b-col>
        </b-row>

    </b-card-body>
  </b-card>

    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    data(){
        return{
            
        };
    },
    computed: {
        categories_options() {
            return this.$store.state.products.categories_options
        },
        materials_options() {
            return this.$store.state.products.materials_options
        },
        additional_options() {
            return this.$store.state.products.additional_options
        },
        width_options() {
            return this.$store.state.products.width_options
        },

        
        categories_selected: {
           get(){
             return this.$store.state.products.categories_selected;
           },
           set(categories_selected){
             return categories_selected
           } 
        },
        materials_selected: {
            get(){
             return this.$store.state.products.materials_selected;
           },
           set(materials_selected){
             return materials_selected
           } 
        },
        additional_selected: {
            get(){
             return this.$store.state.products.additional_selected;
           },
           set(additional_selected){
             return additional_selected
           } 
        },
        width_selected: {
            get(){
             return this.$store.state.products.width_selected;
           },
           set(width_selected){
             return width_selected
           } 
        }, 
    },

    watch: {
        // TODO Gauri: watch not working https://vuejs.org/v2/api/#watch Debug to check if this is called
    categories_selected: function(newValue, oldValue) {
      console.log(`Updating categories_selected from ${oldValue} to ${newValue}`);
      this.$store.dispatch('products/getAllProducts')
    },
    materials_selected: function(newValue, oldValue) {
      console.log(`Updating materials_selected from ${oldValue} to ${newValue}`);
      this.$store.dispatch('products/getAllProducts')
    },
    additional_selected: function(newValue, oldValue) {
      console.log(`Updating additional_selected from ${oldValue} to ${newValue}`);
      this.$store.dispatch('products/getAllProducts')
    },
    width_selected: function(newValue, oldValue) {
      console.log(`Updating width_selected from ${oldValue} to ${newValue}`);
      this.$store.dispatch('products/getAllProducts')
    },
  },

  created () {
    this.$store.dispatch('products/getAllCategories');
    this.$store.dispatch('products/getAllMaterials');
    this.$store.dispatch('products/getAllAdditional');
    this.$store.dispatch('products/getAllWidth');
  }
};
</script>

<style>
    .list-style{
        list-style-type:none;
    }
    .border {
        border-style: solid;
        border-width: 5px !important;
        padding: 5% !important;
    }
</style>