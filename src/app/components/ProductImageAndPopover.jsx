import React from "react";
import product1 from "../../../public/image-product-1.jpg";
import product2 from "../../../public/image-product-2.jpg";
import product3 from "../../../public/image-product-3.jpg";
import product4 from "../../../public/image-product-4.jpg";
import productThumb1 from "../../../public/image-product-1-thumbnail.jpg";
import productThumb2 from "../../../public/image-product-2-thumbnail.jpg";
import productThumb3 from "../../../public/image-product-3-thumbnail.jpg";
import productThumb4 from "../../../public/image-product-4-thumbnail.jpg";

import Image from "next/image";

const ProductImageAndPopover = () => {
  return (
    <>
      <div className="relative left-80">
        <Image
          src={product1}
          className="h-[80%] w-[45%] rounded-2xl relative"
        />
        <div className="flex gap-6 mt-6 h-28 w-24 cursor-pointer">
          <Image src={productThumb1} className="rounded-2xl" />
          <Image src={productThumb2} className="rounded-2xl" />
          <Image src={productThumb3} className="rounded-2xl" />
          <Image src={productThumb4} className="rounded-2xl" />
        </div>
      </div>
    </>
  );
};

export default ProductImageAndPopover;
