"use client";

import Cart from '../components/Cart';
import Header from '../components/Header';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const page = () => {
  const stripePromise = loadStripe(Publickey)

  return (
    <div>
      <Header />
      <Elements stripe={stripePromise}>
      <Cart />
      </Elements>
    </div>
  )
}

export default page