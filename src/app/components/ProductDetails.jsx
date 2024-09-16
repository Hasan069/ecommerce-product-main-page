import React from "react";

const ProductDetails = () => {
  return (
    <div className="max-w-lg mt-24">
      <p className="text-lg text-slate-500 font-bold ">Sneaker Company</p>
      <h1 className="text-5xl font-bold mt-6">Fall Limited Edition</h1>
      <h1 className="text-5xl font-bold">Sneakers</h1>
      <p className="text-base mt-9">
        These low-profile snakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they"ll withstand everyting the
        weather can offer.
      </p>

      <div className="flex gap-9">
        <h1 className="text-5xl font-bold mt-7">$125.00</h1>
        <h1 className="text-white bg-black h-10 p-2 w-12 text-center rounded-md font-bold mt-7">
          50%
        </h1>
      </div>

      <h2 className="mt-5 text-2xl font-bold line-through text-slate-500">$250.00</h2>
    </div>
  );
};

export default ProductDetails;
