import React from "react";
import "./Cart.sass";
import heart from "./../../../../assets/icons/heart.png";
import cart1 from "./../../../../assets/icons/cart1.png";
import cart2 from "./../../../../assets/icons/cart2.png";
import cart3 from "./../../../../assets/icons/cart3.png";

const Cart = () => {
  return (
    <div className="cart">
      <div className="row">
        <div className="col cart__title">
          <img src={heart} alt="heart" className="cart__icon" />
          <p className="cart__text">찜한 투자 상품</p>
        </div>
      </div>
      <div className="row cart__box-shadow">
        <div className="col col-sm-8 col-md-6 col-lg-4 cart__element">
          <img src={cart1} alt="cart" className="cart__element_pic" />
        </div>
        <div className="col col-sm-8 col-md-6 col-lg-4 cart__element">
          <img src={cart2} alt="cart" className="cart__element_pic" />
        </div>
        <div className="col col-sm-8 col-md-6 col-lg-4 cart__element">
          <img src={cart3} alt="cart" className="cart__element_pic" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
