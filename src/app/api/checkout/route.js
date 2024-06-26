import { NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET);

const getActiveProducts = async () => {
  const checkProducts = await stripe.products.list();
  const availaibleProducts = checkProducts.data.filter(
    (p) => p.active === true
  );
  return availaibleProducts;
};

export const POST = async (request) => {
  const { products } = await request.json();
  const data = products;

  let activeProducts = await getActiveProducts();

  try {
    for (const product of data) {
      const stripeProduct = activeProducts?.find(
        (stripeProduct) =>
          stripeProduct?.name?.toLowerCase() === product?.name?.toLowerCase()
      );

      if (stripeProduct === undefined) {
        const prod = await stripe.products.create({
          name: product.name,
          default_price_data: {
            unit_amount: product.price * 100,
            currency: "inr",
          },
        });
      }
    }
  } catch (err) {
    console.log("Error in creating product");
  }

  activeProducts = await getActiveProducts();
  let stripeItems = [];

  for (const product of data) {
    const stripeProduct = activeProducts?.find(
      (stripeProduct) =>
        stripeProduct?.name?.toLowerCase() === product?.name?.toLowerCase()
    );

    if (stripeProduct) {
      stripeItems.push({
        price: stripeProduct?.default_price,
        quantity: product?.quantity,
      });
    }
  }

  const session = await stripe.checkout.sessions.create({
    line_items: stripeItems,
    mode: "payment",
    success_url: "https://furnify-drab.vercel.app/success",
    cancel_url: "https://furnify-drab.vercel.app/cancel",
  });

  return NextResponse.json({ url: session.url });
};
