<template>
  <b-card>
    <h5 slot="header" class="h3 mb-0">Reviews</h5>

    <comment
      v-for="review in reviews"
      :key="review.id"
      :user-image="review.user_img"
      :user-name="review.user_name"
      :text="review.text"
      :like-count="review.like_count"
      :share-count="2"
    />

    <hr />
    <b-media no-body class="align-items-center">
      <b-img
        rounded="circle"
        alt="Image placeholder"
        class="avatar avatar-lg mr-4"
        src="img/theme/team-3.jpg"
      />
      <b-media-body>
        <b-input placeholder="Write your comment" />
      </b-media-body>
    </b-media>
  </b-card>
</template>

<script>
import Comment from "@/components/Feed/Comment";
export default {
  data() {
    return {
      reviews: [
        {
          id: 1,
          user_img: "img/theme/team-1.jpg",
          user_name: "Jessica Stones",
          text:
            "Cras sit amet nibh libero nulla vel metus scelerisque ante sollicitudin. Cras purus odio vestibulum in vulputate viverra turpis.",
          like_count: 10
        },
        {
          id: 2,
          user_img: "img/theme/team-2.jpg",
          user_name: "Jessica Stones",
          text:
            "Cras sit amet nibh libero nulla vel metus scelerisque ante sollicitudin. Cras purus odio vestibulum in vulputate viverra turpis.",
          like_count: 3
        }
      ]
    };
  },
  components: {
    Comment
  }
};
</script>

<style>
.review {
  width: 40%;
}
</style>
