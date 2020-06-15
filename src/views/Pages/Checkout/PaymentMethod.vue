<template>
    <div>
        <div>
            <b-button block variant="primary" id="rzp-button" @click="showRazorPay">Pay Now</b-button>
        </div>
    </div>
</template>
<script>
import razorpay from "../../../api/razorpay";

export default {
    data() {
        return {
            order:null
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
                console.log("Razorpay failed to load");
                return;
            }

            await this.createOrder();
            
            var options = {
                "key": process.env.VUE_RAZORPAY_ID, // Enter the Key ID generated from the Dashboard
                "amount": this.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": this.order.currency,
                "name": "Youngman India",
                "description": "Test Transaction",
                "image": "https://example.com/your_logo",
                "order_id": this.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "handler": function (response){
                    alert(response.razorpay_payment_id);
                    alert(response.razorpay_order_id);
                    alert(response.razorpay_signature)
                },
                "prefill": {
                    "name": "Gaurav Kumar",
                    "email": "gaurav.kumar@example.com",
                    "contact": "9999999999"
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
                razorpay.createOrder().then(response => {
                    resolve(true);
                    this.order = response.data;
                }).catch(error => {
                    console.log(error);
                    reject(false);
                });
            });
        }
    },
    mounted() {
        
      },
}
</script>