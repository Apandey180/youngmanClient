<template>
<div class="bg-grad">
  <!-- NOTIFICATIONS -->
  <notifications></notifications>

  <!-- HEADER -->
  <b-navbar toggleable="lg" fixed="scroll">
    <b-navbar-toggle target="nav-collapse">
      <b-icon-list></b-icon-list>
    </b-navbar-toggle>
    <div class="navbar-header">
      <b-navbar-brand href="#">
        <img src="@/assets/images/logo.png" alt="Logo">
      </b-navbar-brand>
    </div>


    <!-- <b-icon-cart-fill></b-icon-cart-fill> -->
    <img class="mobile_cart_icon" src="@/assets/images/Cart_Icon1.png" alt="Shopping Cart Image" width="28px">
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="left_nav" >
          <b-nav-item to="/" style="margin-left:-130px">Home</b-nav-item>
          <b-nav-item to="/products">Products</b-nav-item>
          <b-nav-item to="/training">Training</b-nav-item>
          <b-nav-item href="#">About</b-nav-item>
      </b-navbar-nav>
      <b-input-group >
        <template v-slot:prepend>
          <b-icon-search></b-icon-search>
        </template>
          <b-form-input class="search_input" placeholder="Search Product"></b-form-input>
      </b-input-group>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
          <b-nav-item class="location_icon" id="location-popover"><b-icon-geo-alt></b-icon-geo-alt></b-nav-item>
          <b-nav-item class="web_cart_icon cart_icon" to="/cart"><img src="@/assets/images/shopping-cart.png" alt="Shopping Cart Image" width="28px"></b-nav-item>
          <b-nav-item class="login_btn" to="/login"><b-icon-person-circle></b-icon-person-circle> </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    
  </b-navbar>

  <!-- location popover -->
  <b-popover target="location-popover" triggers="focus" placement="bottom">
    <div class="popover_blk">
      <b-input type="text" placeholder="Enter your pincode"></b-input>
      <ul class="address_blk">
        <li><p style="font-size:13px;">Nearest Warehouse:</p></li>
        <li><h5 style="font-weight: bold;font-size: 17px;">Greater Noida</h5></li>
        <li style="font-size:12px;">Plot No. 14, NearCNG Pump,</li>
        <li style="font-size:12px;">Kasna Road,</li>
        <li style="font-size:12px;">Greater Noida (UP)</li>
        <li></li>
      </ul>
    </div>
  </b-popover>

  <!-- MAIN BODY -->
  <router-view ></router-view>

  <!-- FOOTER -->
  <content-footer/>
</div>
</template>

<script>
import ContentFooter from './NewFooter.vue';
export default {
    components: {
      ContentFooter
    },
    computed: {
      title() {
        return `${this.$route.name} Page`;
      }
    }
} 
</script>

<style scoped>
/* .header{
      background-color:#ffeb3b !important;
} */
.bg-grad{
      background-image: linear-gradient(to bottom,#ffeb3b 0%, #ffffff 90%, #ffffff 90%, #ffffff 100%) !important;
}
  .navbar-brand img {
    width: 280px;
  }
  .navbar-brand {margin-top: 11px;}
  /* .navbar-dark {
    background-color: black !important;
  } */
  .navbar-nav .nav-link {
    color:black !important;
    font-weight: bold;
  }
  .navbar-nav {
    margin-top: 5px;
  }
  .navbar-nav .nav-link {
    font-size: 17px;
  }
  .navbar-nav .router-link-exact-active {
    color: #757575 !important;
  }
  /* .login_btn {
    background:white;
    border-radius: 25px;
    padding: 6px 40px 5px 10px;
    font-size: 14px;
    margin-left: 10px;
  } */
  /* .jumbotron {
    background-color: black;
    padding: 10px 17px 20px 0px;
    border-radius: 0px;
    height: 350px;
    width: 100%;
    margin-top: 0px;
    background-image: linear-gradient(to top, #434343 0%, black 100%);
    background-image: linear-gradient(to bottom,#c1c161 100%, #d4d4b1 100%);
  } */
  .search_input {
    background-color: #757575;
    color: #fff;
    border-radius: 20px;
    font-size: 14px;
    border: none;
    height: 80%;
  }
  .input-group-prepend {
    height: 39px !important;
  }
  .search_input:focus {
    background-color: #757575;
    color: #fff;
  }
  
  .bi-search {opacity: 0.7; align-self: center; height: 70%;}
  .search_input::placeholder { 
    color: #fff;
    opacity: 0.7;
  }
  .popover_blk {
    padding: 10px;
  }
  .popover_blk .form-control {
    border-radius: 20px;
    font-size: 10px;
    height: 30px;
    box-shadow: 1px 1px 8px 0px #ccc;
    width: 85%;
    margin: 0 auto;
  }
  .popover {
    width: 100%;
    max-width: 340px;
  }
  .address_blk li {
    list-style: none;
  }
  .address_blk {
    margin-top: 15px;
  }
  .left_nav {
    margin-left: 17%;
    color: #000;
    }
  .left_nav li {margin-right: 30px;}
  /* .cart_icon a, .location_icon .login_btn a {font-size: 25px !important;} */
  .b-icon {font-size:  150% !important;}
  .bi-personal-icon {color: #757575;}
  .input-group-prepend {
    background-color: #757575;
    padding: 9px 9px 9px 13px;
    color: #fff;
    border-radius: 20px 0px 0px 20px;
  }
  .bi-list {
    color: #000;
    font-size: 25px;
  }
  .mobile_cart_icon {display: none !important;}


  @media only screen and (max-width: 768px) {
  .search_input { 
    width: auto;
  }
  .navbar-brand img {
    width: 180px;
  }
  .navbar-header {
    margin: 0 auto;
    display: table;
  }
  .navbar-toggler {
    margin: 8px;
  }
  .bi-cart-fill {
    font-size: 23px;
    margin-right: 15px;
  }
  .web_cart_icon {display: none;}
  .mobile_cart_icon {display: inline-block !important;}
  .input-group {
    /* margin-left: 39px; */
    margin: 0 auto;
    width: 85%;
    margin-bottom: 25px;
  }
  /* .jumbotron {
    margin-top: 95px;
  } */
}
.main-body{
    margin-top: -22%;
  }
</style>