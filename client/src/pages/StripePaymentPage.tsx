import React from "react"
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { Button } from "@mui/material";

export const StripePaymentPage = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handlePayment = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}`,
            }
        });

        if (error.type === 'card_error' || error.type === 'validation_error') {
            console.log(error);
        }
    }

    return (
        <>
            <PaymentElement />
            <Button variant="contained" onClick={handlePayment} style={{float: 'right', marginTop: '5%'}}>Complete Payment</Button>
        </>
    )
}