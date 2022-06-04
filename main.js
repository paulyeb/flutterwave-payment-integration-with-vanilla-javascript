const form = document.getElementById('paymentForm');
const customer_name = document.getElementById('name');
const email = document.getElementById('email');
const phone_number = document.getElementById('phoneNumber');
const amount = document.getElementById('amount');

//Put an eventlistener on the form to listen for submit and further run the checkout function
form.addEventListener('submit', payNow);

function payNow (e) {
    e.preventDefault();

    //Set configuration AND gather user information
    FlutterwaveCheckout({
        //Use your own Flutterwave public key to be able to see the outcome in your Flutterwave dashboard
        public_key: "FLWPUBK_TEST-0d5bc54ed3d9b432aa64468519cbd0ae-X",
        tx_ref: "DB_"+Math.floor((Math.random()*1000000000)+1),
        amount: amount.value,
        currency: "NGN", //I set currency to naira because test cards were only working on Nigerian Naira.
        customer: {
            name: customer_name.value, //required
            email: email.value, //required
            phone_number: phone_number.value, //optional
        },
        customizations: {
            title: "PAY YOUR BILL",
        },
        callback:function (data) {
            console.log(data);
        }
    })
}