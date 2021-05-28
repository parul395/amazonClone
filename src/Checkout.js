import React, { forwardRef } from "react";
import "./Checkout.css";
//import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const ticketNotVisibleState = {
    transform: "translateX(-100%)",
    opacity: 0.1,
  };
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="ad">
          <img
            className="checkout__ad"
            src="https://tricksoffer.in/wp-content/uploads/2019/06/amazon-credit-cardd-banner.png"
            alt="ad"
          />
        </div>
        <h3>Hello, {user?.email}</h3>

        <h2 className="checkout__title">
          Your Shopping Basket
          <span className="shop_basket"></span>
        </h2>

        {/* basket item */}

        <div>
          {basket.map((item, index) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
