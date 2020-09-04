<template>
  <div class="training_component">
      <b-row>
          <b-col md="9" sm="12">
              <b-row class="left_blk">
                  <b-col md="4" sm="12" style= "margin-top:300px">
                      <b-card class="profile_card">
                          <img src="@/assets/images/user_settings.png" alt="User Settings Image">
                          <h5>My Profile</h5>
                          <p>Add team member, Change password etc.</p>
                      </b-card>
                  </b-col>
                  <b-col md="4" sm="12" style= "margin-top:300px">
                      <b-card class="profile_card">
                          <img width="55px" src="@/assets/images/orders.jpg" alt="Orders Image">
                          <h5>My Orders</h5>
                          <p>Active, Inactive, Pending orders</p>
                      </b-card>
                  </b-col>
                  <b-col md="4" sm="12" style= "margin-top:300px">
                      <b-card class="profile_card">
                          <img src="@/assets/images/address.png" alt="User Address Image">
                          <h5>Address</h5>
                          <p>Add and Remove addresses.</p>
                      </b-card>
                  </b-col>
              </b-row>
              <b-row>
                  <b-col md="4" sm="12">
                      <b-card class="side_menu_card">
                          <ul>
                              <li><b-icon-handbag></b-icon-handbag> Saved for Later</li>
                              <li><b-icon-heart></b-icon-heart> Liked Products</li>
                              <li><b-icon-card-checklist></b-icon-card-checklist> Invoices</li>
                              <li><b-icon-bar-chart-fill></b-icon-bar-chart-fill> Site Overview</li>
                              <li><b-icon-file-earmark></b-icon-file-earmark> Document Update</li>
                              <li><b-icon-pie-chart-fill></b-icon-pie-chart-fill> Analytics</li>
                              <li><img width="18px" src="@/assets/images/y_icon.jpeg" alt="Y Icon Image"> Points</li>
                              <li><b-icon-envelope></b-icon-envelope> Manage Notifications</li>
                          </ul>
                      </b-card>
                  </b-col>
                  <b-col md="8" sm="12">
                      <div class="pre_ordered_blk">
                        <h5>Previously Ordered</h5>
                        <b-card class="pre_orders_card" v-for="(item, index) in 4" :key="index"></b-card>
                      </div>
                  </b-col>
              </b-row>
          </b-col>
          <b-col md="3" sm="12" class="right_blk" style= "margin-top: 300px" >
              <b-card class="details_card">
                  <b-icon-person-circle></b-icon-person-circle>
                  <div class="personal_info">
                    <h6>John Albert</h6>
                    <p>example@gmail.com</p>
                    <p>9896646644</p>
                  </div>
                  <div class="address_blk">
                    <h6>Default Address</h6>
                    <p>House No, Locality, Landmark</p>
                    <p>Area, City</p>
                    <p>State</p>
                    <p>Pincode</p>
                  </div>
                  <div class="team_info">
                    <h6>Team Members</h6>
                    <p>XXXXXXXX (Purchser)</p>
                    <p>XXXXXXXXX (Accountant)</p>
                  </div>
              </b-card>
          </b-col>
      </b-row>
      <b-row>
          <b-col md="12" sm="12">
              <b-card class="empty_card">
              </b-card>
          </b-col>
      </b-row>

  </div>
</template>

<script>

export default {
    components: {
    }
}
</script>

<style scoped>
    .row {
        margin-right: 0px;
        margin-left: 0px;
    }
    .training_component {
        position: relative;
        margin-top: -21%;
    }
    .profile_card .card-body, .details_card .card-body {
        text-align: center;
    }
    .profile_card {max-height: 165px;}
    .profile_card img {width: 45px;}
    .profile_card h5 {
        font-weight: bold;
        margin: 10px;
    }
    .profile_card p {font-size: 14px;}
    .left_blk {
        margin: 10px !important;
    }
    .left_blk .card, .right_blk .details_card {
        border-radius: 45px;
        box-shadow: 2px 2px 10px 0px #999;
    }
    .bi-person-circle {
        font-size: 95px;
    }
    .details_card {margin: 15px;}
    .details_card h6 {
        font-weight: bold;
    }
    .personal_info {
        margin-top: 30px;
    }
    .personal_info h6, .address_blk h6, .team_info h6 {
        font-size: 18px;
    }
    .address_blk, .team_info {
        margin-top: 40px;
    }
    .details_card p {margin-bottom: 3px;}
    .side_menu_card {
        border-radius: 10px;
        margin: 10px;
    }
    .side_menu_card ul {margin-left: -40px;}
    .side_menu_card ul li {
        list-style: none;
        padding: 12px 25px;
        border-bottom: 1px solid #ccc;
    }
    .side_menu_card ul li:last-child {
        border-bottom: none;
    }
    .side_menu_card .card-body {padding: 0px;}
    .pre_ordered_blk {margin-top: 10px;}
    .pre_ordered_blk h5 {
        color: #757575;
        font-weight: bold;
    }
    .pre_orders_card {
        min-height: 200px;
        box-shadow: 2px 2px 10px 0px #999;
        margin-bottom: 10px;
        border-radius: 15px;
    }
    .empty_card {
        min-height: 200px;
        box-shadow: 2px 2px 10px 0px #999;
        margin-top: 15px;
        margin-left: 30px;
        border-radius: 15px;
        width: 90%;
    }

    @media only screen and (max-width: 768px) {
        .left_blk .card {
            margin-bottom: 15px;
        }
        .pre_ordered_blk h5 {margin: 15px;}
        .pre_ordered_blk .pre_orders_card {
            margin: 15px;
        }
        .training_component {
            margin-top: -60%;
        }
    }
</style>