<template>
  <div>
    <b-col>
      <b-row v-if="reviews" align-v="center" class="py-4">
        <b-col lg="6" cols="7">
          <h6 class="h2 d-inline-block mb-0" style="font-weight:bold">Reviews</h6>
        </b-col>
      </b-row>
      <b-row>
        <b-row>
          <b-col
            sm="1"
            md="3"
            lg="3"
            v-for="review in reviews"
            :key="review.id"
          >
            <customer-review v-bind:review="review" />
          </b-col>
        </b-row>
      </b-row>
    </b-col>
  </div>
</template>

<script>
import home from "../../../api/home";
import CustomerReview from "../../Components/CustomerReview";
export default {
  data() {
    return {};
  },
  components: {
    CustomerReview
  },
  computed: {
    reviews() {
       return this.$store.state.home.topReviews
    }
  },
  created() {
    this.$store.dispatch('home/getTopReviews');
  }
};
</script>
