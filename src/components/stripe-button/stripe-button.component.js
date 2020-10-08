import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HZs8DK7zfg0LmQRqrpvXhSgpGk4AQna6So8KJijsRClli83Z5vewCLbtm0OdTNaYUBCTwWQ04ssva6qTJKqImTf008kdmMOzV";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      id="checkout-button"
      label="Pay Now"
      name="HRG Clothing Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
