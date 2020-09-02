<template>
    <div class="slider_block">
      <div class="pills_blk">
        <b-row>
          <b-col><b-badge pill variant="light">Rent</b-badge></b-col>
          <b-col><b-badge pill variant="light">Track Order</b-badge></b-col>
          <b-col><b-badge pill variant="light">Offer Zone</b-badge></b-col>
        </b-row>
      </div>

        <home-carousel/>
        <featured-categories/>
        <paginated-list/>
        <!-- SPECIALITY -->
      <div class="images_blk">
        <b-row>
          <b-col sm="12" md="6">
            <b-card>
              <img src="@/assets/images/product_3.png" alt="Product Image">
            </b-card>
          </b-col>
          <b-col sm="12" md="6">
            <b-card>
              <img src="@/assets/images/product_1.png" alt="Product Image">
            </b-card>
          </b-col>
          <b-col sm="12" md="6">
            <b-card>
              <img src="@/assets/images/product_2.png" alt="Product Image">
            </b-card>
          </b-col>
          <b-col sm="12" md="6">
            <b-card>
              <img src="@/assets/images/product_3.png" alt="Product Image">
            </b-card>
          </b-col>
        </b-row>
      </div>

        <customer-reviews/>


          <b-card class="customercare_card">
            <b-row>
                <b-col md="4" sm="12">
                    <b-row>
                        <b-col md="2" sm="2">
                            <b-icon-box-seam></b-icon-box-seam>
                        </b-col>
                        <b-col md="10" sm="10">
                            <h6>Pan India Delivery Available</h6>
                            <ul>
                                <li>Feel free to contact anytime</li>
                                <li>on our helpline number</li>
                                <li>09015964626 Or write us at</li>
                                <li>rental@youngman.co.in</li>
                            </ul>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col md="4" sm="12">
                    <b-row>
                        <b-col md="2" sm="2">
                            <img src="@/assets/images/call.png" alt="Call Image" width="20px" height="20px" style="opacity:0.6;">
                        </b-col>
                        <b-col md="10" sm="10">
                            <h6>Customer Support</h6>
                            <ul>
                                <li>Feel free to contact us in case of</li>
                                <li>any product realted doubts at</li>
                                <li>9205853991</li>
                            </ul>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col md="4" sm="12">
                    <b-row>
                        <b-col md="2" sm="2">
                            <b-icon-shop-window></b-icon-shop-window>
                        </b-col>
                        <b-col md="10" sm="10">
                            <h6>Bulk Requirement</h6>
                            <ul>
                                <li>For Bulk Requirements drop us an email on</li>
                                <li>on our helpline number</li>
                                <li>rental@youngman.co.in</li>
                                <li>9205853991</li>
                            </ul>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-card>

                        <email-submit/>


    </div>
</template>
<script>
  import HomeCarousel from './Home/HomeCarousel';
  import FeaturedCategories from './Home/FeaturedCategories';
  import Widgets from '../Widgets';
  import PaginatedList from './Home/PaginatedList';
  import EmailSubmit from "./Home/EmailSubmit";
  import CustomerReviews from "./Home/CustomerReviews";
 
  export default {
    name: 'starter-page',
    components: {
      HomeCarousel,
      FeaturedCategories,
      PaginatedList,
      EmailSubmit,
      CustomerReviews,
      Widgets
    },
    data() {
      return {};
    }
  };
</script>
<style>
 @import '../../assets/css/home.css';
</style>
