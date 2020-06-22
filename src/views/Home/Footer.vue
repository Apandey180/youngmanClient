<template>
  <footer class="footer px-4 mx-2" style="background-color: #ffffff;">
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="12" md="3" lg="3">
          <center>
            <h2>EXPLORE YOUNGMAN</h2>
          </center>
          <ul>
            <li>
              <a href="#">View Our Catalogue</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Health and Safety</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            </ul>
        </b-col>
        <b-col sm="12" md="3" lg="3">
          <center>
            <h2>WHAT WE DO</h2>
            <ul>
              <li>
                <a href="#">Rent</a>
              </li>
              <li>
                <a href="#">Lease</a>
              </li>
              <li>
                <a href="#">Product Training</a>
              </li>
            </ul>
          </center>
        </b-col>
        <b-col sm="12" md="6" lg="6">
          <b-row class="logo-footer col d-flex align-items-center justify-content-center">
            <img src="img/brand/logo.png" class="col align-self-center"/>
          </b-row>
          
          <b-row> 
            <span style="font-size: 24px; color: Grey;" class="padding"><i class="fab fa-facebook-square"></i></span>
            <span style="font-size: 24px; color: Grey;" class="padding"><i class="fab fa-twitter"></i></span>
            <span style="font-size: 24px; color: Grey;" class="padding"><i class="fab fa-instagram"></i></span>
            <span style="font-size: 24px; color: Grey;" class="padding"><i class="fab fa-google-plus-g"></i></span>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    
  </footer>
</template>

<script>
export default {
  
  props: [
    "scale",
    "url"

  ],
  
};
</script>

<style>
a {
  color: #999966;
}

ul {
  list-style: none;
}

.padding{
  padding: 9%;
}

.logo-footer{
  padding-top: 8%;
  height: 30%;
  width: 85%;
}
</style>
