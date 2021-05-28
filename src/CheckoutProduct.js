import React, { useState } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const [click, setClick] = useState(false);
  const removeFromBasket = () => {
    //remove item
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="img" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p classname="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove From Cart</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
