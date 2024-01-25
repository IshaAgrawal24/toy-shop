const express = require("express");
const router = require("./Routes/productRoute");

const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OKlNvSBkaXgGHW4K0hPRYRLsA0nBLNoS8kOdvW9aAXF3TYR9RC3ymEO2ratRZCd82sFNUS5tz08z6ZJ1st77Gxo00XfCUU0gC"
);
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", router);

// CHECKOUT API
app.post("/api/create-checkout-session", async (req, res) => {
  const { products } = req.body;

  const lineItems = products.map((prod) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: prod.name,
        // images: prod.image,
      },
      unit_amount: prod.price * 100,
    },
    quantity: prod.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.json({ id: session.id });
});

module.exports = app;
