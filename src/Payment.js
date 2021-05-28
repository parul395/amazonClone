import React, { useState, useEffect } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";
import axios from "./axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getTotal } from "./reducer";
import { db } from "./firebase";
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  useEffect(() => {
    //generate special stripe secret
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //stripe expects the total in a currency subunits
        url: `/payments/create?total=${getTotal(basket) * 100}`,
      });

      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  console.log("hey");
  console.log("the secret is >>>>>", clientSecret);
  const handleSubmit = async (event) => {
    // stripe function
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent =Payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent?.id)
          .set({
            basket: basket,
            amount: paymentIntent?.amount,
            created: paymentIntent?.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });
      });
    history.replace("/orders");

    //const payload = await stripe
  };
  const handleChange = (event) => {
    //listen change in card element
    //display error as the customer types
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/*payment section -delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address:</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Air Force Station Bhuj,</p>
            <p>370001, Bhuj, Gujrat</p>
          </div>
        </div>
        {/*payment section -review item */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items And Delivery</h3>
          </div>
          <div className="payment__items">
            {/** products in cart */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/*payment section - payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
            {/**Stripe magic */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
