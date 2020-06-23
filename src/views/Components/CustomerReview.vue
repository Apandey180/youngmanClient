<template>
<card>
            <b-card-title title-tag="h3" >{{review.rating}} 
                <b-form-rating
            id="rating"
            sm="6"
            lg="6"
            inline
            no-border
            v-model="review.rating"
            v-if="review.rating != ''"
          ></b-form-rating>
            </b-card-title>
            <blockquote class="blockquote mb-0">
              <p>{{review.text}}</p>
              <footer class="blockquote-footer text-danger">{{review.name}}</footer>
            </blockquote>
          </card>
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