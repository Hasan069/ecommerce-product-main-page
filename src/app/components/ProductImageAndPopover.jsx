import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
          alt="product-1"
          className="h-[80%] w-[45%] rounded-2xl relative"
        />
        <div className="flex gap-6 mt-6 h-28 w-24 cursor-pointer">
          <Popover>
            <PopoverTrigger asChild>
              <Image src={productThumb1} className="rounded-2xl" />
            </PopoverTrigger>
            <PopoverContent>
              <Image src={product1} />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Image src={productThumb2} className="rounded-2xl" />
            </PopoverTrigger>
            <PopoverContent>
              <Image src={product2} />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Image src={productThumb3} className="rounded-2xl" />
            </PopoverTrigger>
            <PopoverContent>
              <Image src={product3} className="h-full w-full" />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Image src={productThumb4} className="rounded-2xl" />
            </PopoverTrigger>
            <PopoverContent>
              <Image src={product4} />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </>
  );
};

export default ProductImageAndPopover;

{
  /* <Popover>
  <PopoverTrigger>
    <Image src={productThumb1} alt="product-thumb" className="rounded-2xl" />
  </PopoverTrigger>
  <PopoverContent>
    <Image src={product1} />
  </PopoverContent>
</Popover> */
}

{
  /* <Image
src={productThumb1}
alt="product-thumb"
className="rounded-2xl"
/>  
<Image
src={productThumb2}
alt="product-thumb"
className="rounded-2xl"
/>
<Image
src={productThumb3}
alt="product-thumb"
className="rounded-2xl"
/>
<Image
src={productThumb4}
alt="product-thumb"
className="rounded-2xl"
/>
 */
}
