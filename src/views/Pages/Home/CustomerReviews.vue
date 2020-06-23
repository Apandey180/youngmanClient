<template>
  <div>
    <b-col>
      <b-row v-if="reviews" align-v="center" class="py-4">
        <b-col lg="6" cols="7">
          <h6 class="h2 d-inline-block mb-0">Reviews</h6>
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
    //reviews() {
    //    return this.$store.state.home.offers
    //},
    reviews() {
      return [
        {
          id: 1,
          rating: 3.5,
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          name: "Henry FOrd"
        },
        {
          id: 2.0,
          rating: 4.5,
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          name: "Henry FOrd"
        },
        {
          id: 3,
          rating: 2,
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          name: "Henry FOrd"
        },
        {
          id: 4,
          rating: 3,
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          name: "Henry FOrd"
        }
      ];
    }
  },
  created() {
    //this.$store.dispatch('home/getOffers');
  }
};
</script>
