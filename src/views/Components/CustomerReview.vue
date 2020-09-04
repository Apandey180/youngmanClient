<template>
<div style="padding-right: 73px">
<h3>{{review.rating}}
<b-form-rating
            id="rating"
            sm="6"
            lg="6"
            inline
            no-border
            v-model="review.rating"
            v-if="review.rating != ''"
            style="background-color:#ffffcc"

          ></b-form-rating></h3>

<p>{{review.text}}</p>
<p style="font-weight:bold">{{review.name}}</p>
</div>
</template>

<script>
export default {
  props: ["review"],
  data() {
    return {};
  },
  computed: {
    
  }
};
</script>