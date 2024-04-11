import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  console.log(stripe);
  const {data} = await req.json();
  const {amount} = data;
  console.log(amount);

  try {
    const payIntent = await stripe.paymentIntents.create({
      amount:Number(amount) * 100,
      current: "USD"
    })

    return NextResponse.json({status:200, intent:payIntent?.client_secret})
  } catch(error) {
    return NextResponse.json({status:400})
  }
}