"use client";
import React, { useState } from "react";
import Image from "next/image";
import cart from "@/../public/icon-cart.svg";
import plus from "@/../public/icon-plus.svg";
import minus from "@/../public/icon-minus.svg";

const AddToCart = () => {
  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="mt-10 flex justify-between ">
      <div className="flex gap-4">
        <button>
          <Image src={minus} className="relative   h-2 w-4" />
        </button>

        <p> {counter}</p>
        <button>
          <Image src={plus} className="h-4 w-4" />
        </button>
      </div>

      <button className="text-black font-bold h-14 w-44 bg-orange-500 rounded-xl  ">
        <div className="inline-block pr-2">
          <Image src={cart} alt="Cart" />
        </div>
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
