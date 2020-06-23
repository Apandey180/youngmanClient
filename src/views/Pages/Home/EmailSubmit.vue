<template>

<b-container class="bv-example-row oval-container oval shadow">
  <b-row class="d-flex align-items-center justify-content-center">
    <b-col class="align-self-center">    
      <b-form-input class="btn-outline-secondary oval"  placeholder="Enter email for News & Updates"></b-form-input>
    </b-col>
    <b-col>
      <button type="submit" class="btn btn-success oval float-right">Submit</button>
    </b-col>
  </b-row>
</b-container>

<!-- <div class="input-group mb-3 oval shadow">
  <input type="text" class="form-control oval" placeholder="Enter your Email" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <input type="submit" class="btn btn-outline-secondary oval" value="Search">
  </div>
</div> -->



</template>

<style scoped>
.oval{
  border-radius: 50px 50px 50px 50px;
  outline: none;
  border: 0px solid;
}

input:focus{
  outline: none !important;
}

.oval-container{
  background-color: transparent;
  color: white;
  width: 40%;
}
</style>