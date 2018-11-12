import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends Component {
  render() {
    return (
      <div>
        <StripeCheckout
          name="Emaily"
          description="$5 for 5 survey credits"
          amount={500}
          token={token => console.log(token)} //poorly named property from StripeCheckout. Expects to receive a callback from Stripe.
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <button className="btn">Add Credits</button>
        </StripeCheckout>
      </div>
    );
  }
}

export default Payments;
