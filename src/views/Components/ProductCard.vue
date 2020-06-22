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
        <b-col>
          <small class="text-danger"
            ><del v-if="item.offer != ''">{{
              item.original_price | currency
            }}</del></small
          >
        </b-col>
      </b-row>

      <b-card-title title-tag="h3" class="mb-3">{{ item.title }}</b-card-title>
      <b-card-text class="mb-4">{{ item.text }}</b-card-text>
      <h4 class="mb-0" v-if="item.price != ''">
        {{ item.price | currency }}/Month
      </h4>

      <div>
        <b-col lg="12" sm="12" class="text-right">
          <router-link :to="url" sm="6" lg="6" exact>
            <base-button size="sm" type="neutral">Add to Cart</base-button>
          </router-link>
        </b-col>
      </div>
      <div>
        <b-col lg="12" sm="12" class="text-right">
          <b-form-rating
            id="rating"
            sm="6"
            lg="6"
            inline
            no-border
            v-model="item.rating"
            v-if="item.rating != ''"
          ></b-form-rating>
          <router-link :to="url" sm="6" lg="6" exact>View Details</router-link>
        </b-col>
      </div>
    </b-card-body>
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
