"use client";
import React, { useState } from "react";
import Image from "next/image";
import cart from "@/../public/icon-cart.svg";
import plus from "@/../public/icon-plus.svg";
import minus from "@/../public/icon-minus.svg";

const Cart = () => {
  const [counter, setCounter] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);
  const itemPrice = 125.0;

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 1);
  };

  const addToCart = () => {
    setTotalPrice(counter * itemPrice);
    setCartItems(cartItems + 1);
  };

  const toggleCheckout = () => {
    setShowCheckout(!showCheckout);
  };

  return (
    <div className="mt-10 flex justify-between ">
      <div className="flex gap-4">
        <button>
          <Image
            src={minus}
            alt="minus-icon"
            className="relative h-2 w-4"
            onClick={handleClick2}
          />
        </button>

        <p className="font-bold mt-4"> {counter}</p>

        <button>
          <Image
            src={plus}
            alt="plus-icon"
            className="relative h-4 w-4"
            onClick={handleClick1}
          />
        </button>
      </div>

      <button
        className="text-black font-bold h-14 w-44 bg-orange-500 rounded-xl"
        onClick={() => {
          toggleCheckout();
          addToCart();
        }}
      >
        <div className="inline-block pr-2">
          <Image src={cart} alt="Cart" />
        </div>
        Add to cart
      </button>

      {showCheckout && (
        <div className="mt-4">
          <p className="text-lg font-semibold">Total: ${totalPrice}</p>
          <button className="px-4 py-2 mt-2 bg-orange-600 text-white rounded">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
