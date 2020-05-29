<template>
<div>
      <b-row align-v="center" class="py-4">
        <b-col lg="6" cols="7">
          <h6 class="h2 d-inline-block mb-0">Items</h6>
        </b-col>
      </b-row>
<!-- TODO: Covert this to grid layout -->
<div id="lists">
 
  <div >
       <b-card-group deck>
          <!-- Image-Text card -->
          <b-card no-body title="Title"  v-for="item in lists" :key="item.id">
            <!-- Card image -->
            <img class="card-img-top" :src="item.image" :alt="item.alt">
            <!-- Card body -->
            <b-card-body>
              <b-card-title class="h2 mb-0">{{item.title}}</b-card-title>
              <b-card-text class="mt-4">{{item.text}}</b-card-text>
            </b-card-body>
          </b-card>
        </b-card-group>
  </div>
 
  <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="lists"
      align="center"
    ></b-pagination>
</div>
</div>
</template>

<script>
export default {
  data () {
    return { 
      currentPage: 1,
      perPage: 4,
      items: [
        {
          id: 1,
          title: "Item Name",
          image: "img/theme/img-1-1000x900.jpg",
          alt: "Image Placeholder",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (1)"
        },
        {
          id: 2,
          title: "Item Name",
          image: "img/theme/img-1-1000x900.jpg",
          alt: "Image Placeholder",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (2)"
        },
        {
          id: 3,
          title: "Item Name",
          image: "img/theme/img-1-1000x900.jpg",
          alt: "Image Placeholder",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (3)"
        },
        {
          id: 4,
          title: "Item Name",
          image: "img/theme/img-1-1000x900.jpg",
          alt: "Image Placeholder",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (4)"
        },
        {
          id: 5,
          title: "Category Name",
          image: "img/theme/img-1-1000x900.jpg",
          alt: "Image Placeholder",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (5)"
        },
        {
          id: 6,
          title: "Category Name",
          image: "img/theme/img-1-1000x900.jpg",
          alt: "Image Placeholder",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (6)"
        },
        {
          id: 7,
          title: "Category Name",
          image: "img/theme/img-1-1000x900.jpg",
          alt: "Image Placeholder",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (7)"
        },
        {
          id: 8,
          title: "Category Name",
          image: "img/theme/img-1-1000x900.jpg",
          alt: "Image Placeholder",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (8)"
        }
      ]
    }
  },
computed: {
    lists () {
      // eslint-disable-next-line  TODO: Fix side-effect in computed property
      const list = this.items;
      // Return just page of items needed
      return list.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    },
    numPages () {
      return Math.ceil(this.items.length / this.perPage);
    },
    rows() {
        return this.items.length;
    }
  },
  methods: {
  }
}
</script>
