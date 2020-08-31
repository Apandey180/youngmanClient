<template>
    <div>
        <div>
            <b-button block variant="primary" id="rzp-button" @click="showRazorPay">Pay Now</b-button>
            <b-button block variant="primary" id="rzp-sub-button" @click="subscriptionRazorPay">Subscribe Now</b-button>
        </div>
    </div>
</template>
<script>
import razorpay from "../../../api/razorpay";

export default {
    data() {
        return {
            order:null,
            customer: null,
            subscription:null,
        };
    },
    methods:{
        loadRazorPay(src){
            return new Promise( (resolve) =>{
                const script = document.createElement('script');
                script.src = src;
                script.onload = () => {
                    resolve(true);
                }
                script.onerror = () => {
                    resolve(false);
                }
                document.body.appendChild(script);
            });
        },
        async showRazorPay(){
            const res = await this.loadRazorPay('https://checkout.razorpay.com/v1/checkout.js');

            if(!res){
                alert("Razorpay failed to load");
                return;
            }

            await this.createOrder();
            var self = this;
            
            var options = {
                "key": process.env.VUE_RAZORPAY_ID,
                "amount": this.order.amount,
                "currency": this.order.currency,
                "name": "Youngman India",
                "description": "Test Transaction",
                "image": "img/brand/logo.png",
                "order_id": this.order.id,
                "handler": function (response){
                    self.submitPaymentDetails(response);
                },
                "prefill": {
                    "name": this.customer.company,
                    "email": this.customer.email,
                    "contact": this.customer.phone_number
                },
                "theme": {
                    "color": "#ffd600"
                }
            };
            var razorpayObj = new Razorpay(options);
                razorpayObj.open();
        },
        createOrder(){
            return new Promise( (resolve) =>{
                this.customer = this.$store.state.checkout.customer;
                razorpay.createOrder({"user_id" : this.$store.state.checkout.customer_id}).then(response => {
                    resolve(true);
                    this.order = response.data;
                }).catch(error => {
                    console.log(error);
                    resolve(false);
                });
            });
        },
        submitPaymentDetails(data) {
            data.user_id = this.$store.state.checkout.customer_id;
            new Promise( (resolve) =>{
                razorpay.submitPaymentDetails(data).then(response => {
                    resolve(true);
                    self.$events.$emit('tabChange');
                }).catch(error => {
                    console.log(error);
                    resolve(false);
                });
            });
        },
        async subscriptionRazorPay(){
            const res = await this.loadRazorPay('https://checkout.razorpay.com/v1/checkout.js');

            if(!res){
                alert("Razorpay failed to load");
                return;
            }
            var self = this;
            await this.createSubcription();
            
            var options = {
                "key": "rzp_test_RvOGVVSf5LOp5C",
                "subscription_id":this.subscription.id,
                "name": "Youngman India",
                "description": "Test Subscription",
                "image": "img/brand/logo.png",
                "handler": function (response){
                    alert("Thanks :)")
                },
                "theme": {
                    "color": "#ffd600"
                }
            };
            var razorpayObj = new Razorpay(options);
                razorpayObj.open();
        },
        createSubcription(){
            return new Promise( (resolve) =>{
                razorpay.createSubcription().then(response => {
                    resolve(true);
                    this.subscription = response.data;
                }).catch(error => {
                    console.log(error);
                    resolve(false);
                });
            });
        }
    },

    mounted() {
        
      },
}
</script>