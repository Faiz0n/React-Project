import React from "react";

import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey ="pk_test_51KBKB4SDaGeGV5CM3ujFbjCY7OmJcTWVYXkBAVphTUlWiv5AoBYuoQ2K8xFP68CYDrMjnoDPixNBaq7Cd41gqqTH00Omb73kKE"
    
   const  onToken = token =>{
        console.log(token)
        alert('Payment successFul')
    } 

    return(
        <StripeCheckout
        label= 'Pay now'
        name= 'CRWN clothing Ltd'
        billingAddress
        shippingAdress
        image =  "https://svgshare.com/i/CUz.svg"
        description = {`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel="Pay now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}


export default StripeCheckoutButton



