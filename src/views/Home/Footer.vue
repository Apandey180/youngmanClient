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
          <img src="https://picsum.photos/600/300/?image=25" height="150" width="600" />
          <div>
              
        <span style="font-size: 24px; color: Grey;"><i class="fab fa-facebook-square"></i></span>&nbsp;&nbsp;
        <span style="font-size: 24px; color: Grey;"><i class="fab fa-twitter"></i></span>&nbsp;&nbsp;
       <span style="font-size: 24px; color: Grey;"><i class="fab fa-instagram"></i></span>&nbsp;&nbsp;
        <span style="font-size: 24px; color: Grey;"><i class="fab fa-google-plus-g"></i></span>&nbsp;&nbsp;

      

          </div>
        </b-col>
      </b-row>
    </b-container>
    
  </footer>
</template>
<script src="/dist/vue-social-sharing.js"></script>

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
</style>
