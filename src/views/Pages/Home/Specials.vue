<template>
    <div class="images_blk">
        <b-row>
          <b-col sm="12" md="6" v-for="item in specials" :key="item.id">
            <b-card>
              <img :src="item.image" alt="Product Image">
            </b-card>
          </b-col>
        </b-row>
      </div>
</template>

<script>
import home from '../../../api/home';
export default {
  components: {
  },
  computed: {
    specials() {
      return this.$store.state.home.specials;
    }
  },
  created () {
    this.$store.dispatch('home/getSpeciality');
  }
};
</script>