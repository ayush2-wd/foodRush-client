import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import useCart from '../../hooks/useCart';


const stripePromise= loadStripe(import.meta.env.VITE_STRIPE_PK)
const Payment = () => {
    const [cart] = useCart() || [];
    console.log(cart);
    // Calculate checkout price
    const cartTotal = cart.reduce((sum,item)=>sum+(item.price*item.quantity),0);
    console.log(cartTotal)
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 py-28'>
      <Elements stripe={stripePromise}>
      <CheckoutForm price={cartTotal} cart={cart} />
    </Elements>
    </div>
  )
}

export default Payment
