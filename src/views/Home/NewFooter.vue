<template>
  <div class="footer-component">
    <b-container>
        <b-card>
            <b-row>
                <b-col sm="12" md="3">
                    <ul class="footer_blk_one">
                        <li><span>Explore Youngman</span></li>
                        <li><a>View our Catalogue</a></li>
                        <li><a>FAQs</a></li>
                        <li><a>Health and Safety</a></li>
                        <li><a>News</a></li>
                        <li><a>About us</a></li>
                        <li><a>Contact us</a></li>
                    </ul>
                </b-col>
                <b-col sm="12" md="3">
                    <ul class="footer_blk_one">
                        <li><span>What We Do</span></li>
                        <li><a>Rent</a></li>
                        <li><a>Lease</a></li>
                        <li><a>Product Training</a></li>
                    </ul>
                </b-col>
                <b-col sm="12" md="6">
                    <div class="logo_blk">
                        <span class="logo">
                            <img src="@/assets/images/logo.png" alt="Logo">
                        </span>
                        <ul class="social_icons">
                            <li><img height="30px" width="32px" src="@/assets/images/facebook.png" alt="Facebook Icon" ></li>
                            <li><img height="30px" width="30px" src="@/assets/images/twitter.png" alt="Twitter Icon"></li>
                            <li><img height="27px" width="27px" src="@/assets/images/instagram.png" alt="Instagram Icon"></li>
                            <li><img height="32px" width="32px" src="@/assets/images/google-plus.png" alt="Google Icon"></li>
                        </ul>
                    </div>
                </b-col>
            </b-row>
        </b-card>
    </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .footer-component {
        margin-top: 50px;   
    }
    .footer-component .card {
        border-radius: 0px;
        border-left: none;
        border-right: none;
    }
    .container {
        max-width: 1300px;
    }
    .footer_blk_one li {
        list-style: none;
        font-size: 14px;
    }
    .footer_blk_one li a:hover {
        text-decoration: underline;
        cursor: pointer;
        color: #007bff;
    }
    .footer_blk_one li:first-child span {
        font-weight: bold;
        text-transform: uppercase;
    }
    .footer_blk_one li:first-child {
        margin-bottom: 10px;
        font-size: 15px;
    }
    .footer_blk_one li {margin-bottom: 8px;}
    .logo img {
        width: 280px;
    }
    .social_icons li {
        display: initial;
        margin: 5px 21px;
    }
    .social_icons {
        margin-left: -42px;
        margin-top: 15px;
    }
    .logo_blk {
        padding: 50px 115px;
    }
    .customercare_card {
        border-radius: 0px;
        background-color: #f6f0f0;
        border: none;
        margin-bottom: 15px;
        padding: 18px 2px;
    }
    .customercare_card h6 {
        font-size: 15px;;
        font-weight: bold;
        opacity: 0.8;
    }
    .customercare_card ul li {
        font-size: 14px;
        list-style: none;
        font-weight: bold;
        opacity: 0.8;
    }
    .customercare_card ul {
        margin-left: -40px;
    }
    .bi-box-seam, .bi-shop-window {
        opacity: 0.8;
        font-size: 20px;
    }
    @media only screen and (max-width: 768px) {
        .logo_blk {
            padding: 40px 0px;
            text-align: center;
        }
        .logo img {
            width: 235px;
        }
        .social_icons li {
            display: initial;
            margin: 5px 15px;
        }
    }
</style>