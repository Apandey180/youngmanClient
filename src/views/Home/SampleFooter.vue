<template>
  <footer class="footer px-4 mx-2" style="background-color:#232323;">
    <b-row align-v="center" class="justify-content-lg-between">
      <b-col lg="6">
        <div class="copyright text-center text-lg-left text-muted">
          © {{year}} <a href="https://youngman.co.in" class="font-weight-bold ml-1" target="_blank">2020 Youngman India Pvt Ltd | Rights Reserved</a>
        </div>
      </b-col>
      <b-col lg="6">
        
      </b-col>
    </b-row>
  </footer>
</template>
<script>
  export default {
    data() {
      return {
        year: new Date().getFullYear()
      };
    }
  };
</script>
<style></style>
