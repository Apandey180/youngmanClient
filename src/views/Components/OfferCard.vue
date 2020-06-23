<template>
  <b-card
    no-body
    :img-src="item.image"
    img-height="300"
    img-width="300"
    width="300"
    img-top
    alt="Image placeholder"
  >
    <!-- Card image -->

    <!-- Card body -->
    <b-card-body>
      <b-row class="img-offer">
        <b-col>
          <h5 v-if="item.offer != ''" class="text-danger">{{ item.offer }}</h5>
        </b-col>
        
      </b-row>

      <b-card-title title-tag="h3" class="mb-3">{{ item.title }}</b-card-title>
      <b-card-text class="mb-4">{{ item.text }}</b-card-text>
      

      <div>
        <b-col lg="12" sm="12" class="text-right">
          
        </b-col>
      </div>
      <div>
        <b-col lg="12" sm="12" class="text-right">
         
        </b-col>
      </div>
    </b-card-body>

    <b-card-footer>
        <b-row>
          <b-col lg="8">
          <h5 v-if="item.price != ''"><del v-if="item.offer != ''">{{item.original_price | currency}}</del>  {{ item.price | currency }}/Month</h5>
          </b-col>
          <b-col lg="4">
            <h5 class="text-danger">Save {{
              (item.original_price - item.price) | currency}}
              </h5>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
          <h5>{{item.inventory}} Pieces left</h5>
          </b-col>
        </b-row>
    </b-card-footer>
  </b-card>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {};
  },
  computed: {
    url() {
      return "/products/" + this.item.id;
    }
  }
};
</script>
