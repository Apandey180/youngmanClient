<template>
  <footer class="footer mar-top px-4 mx-2" style="background-color: #ffffff;">
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="12" md="3" lg="3">
          <center>
            <h2>EXPLORE YOUNGMAN</h2>
          </center>
          <ul>
            <li>
              <a href="!#" target="_blank">View Our Catalogue</a>
            </li>
            <li>
              <a href="!#" target="_blank">FAQs</a>
            </li>
            <li>
              <a href="!#" target="_blank">Health and Safety</a>
            </li>
            <li>
              <a href="!#" target="_blank">News</a>
            </li>
            <li>
              <a href="!#" target="_blank">About Us</a>
            </li>
            </ul>
        </b-col>
        <b-col sm="12" md="3" lg="3">
          <center>
            <h2>WHAT WE DO</h2>
            <ul>
              <li>
                <a href="!#" target="_blank">Rent</a>
              </li>
              <li>
                <a href="!#" target="_blank">Lease</a>
              </li>
              <li>
                <a href="!#" target="_blank">Product Training</a>
              </li>
            </ul>
          </center>
        </b-col>
        <b-col sm="12" md="6" lg="6">
          <b-row class="logo-footer col d-flex align-items-center justify-content-center">
            <img src="img/brand/logo.png" class="col align-self-center"/>

            <div id="social" class="padding">
            <a href="https://facebook.com" target="_blank"><span style="font-size: 24px; color: Grey;"><i class="fab fa-facebook-square"></i></span></a>
            <a href="https://twitter.com" target="_blank"><span style="font-size: 24px; color: Grey;"><i class="fab fa-twitter"></i></span></a>
            <a href="https://instagram.com" target="_blank"><span style="font-size: 24px; color: Grey;"><i class="fab fa-instagram"></i></span></a>
            <a href="https://google.com" target="_blank"><span style="font-size: 24px; color: Grey;"><i class="fab fa-google-plus-g"></i></span></a>
            <span class="stretch"></span>
            </div>
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
  padding: 5%;
}

.logo-footer{
  padding-top: 8%;
  height: 30%;
  width: 85%;
}

#social{
    width: 85%;
    display: flex;
    justify-content: space-between;
}
.mar-top{
  margin-top: 2%;
}
</style>
