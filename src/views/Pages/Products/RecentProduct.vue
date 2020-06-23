<template>
<div>
  <b-card
    :title="item.title"
    :img-src="item.image"
    img-alt="Image"
    img-top
    tag="article"
    class="mb-2"
  >
    <b-card-text>
    {{item.text}}
    </b-card-text>

  </b-card>
</div>    
</template>
<script>
export default {
    
    props: ["item"],
}
</script>
