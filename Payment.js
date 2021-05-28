import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

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
          <div className="payment_details"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
