<template>


<div  >
  <b-card no-body class="overflow-hidden" style="width: 100%; height: 250px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://picsum.photos/400/400/?image=20"  alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        
        <b-card-body v-bind:title="item.title" >
          <b-card-text >
              <form>
                 <base-input type = "number"  input-classes="form-control-sm small" placeholder="Duration"/>
                 <base-input type = "number"  input-classes="form-control-sm small" placeholder="Quantity"/>

                 <button type="button" class="btn base-button btn-primary ">Remove</button>

             </form>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
    
</template>

<script>
    export default {
    props:['item'],
        data() {
            return {
           }
        }
    }
</script>

<style >
.small{
    width: 40%;
    font-size: 9px;
}
</style>