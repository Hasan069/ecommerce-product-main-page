import React from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import cart from "../../public/icon-cart.svg";
import avatar from "../../public/image-avatar.png";
import ProductImageAndPopover from "./components/ProductImageAndPopover";
import ProductDetails from "./components/ProductDetails";

export default function Home() {
  return (
    <>
      <div >
        <div className="flex justify-around  m-6  relative ">
          <div className="flex gap-12">
            <Image src={Logo} alt="Logo" className="mt-6 h-6" />
            <Navbar />
          </div>
          <div className="gap-12 flex cursor-pointer">
            <Image src={cart} alt="Cart Icon" className="h-5 left-10 mt-6 " />
            <Image src={avatar} alt="User Avatar" className="h-12 w-12" />
          </div>
        </div>

      </div>
        
        <div className="flex m-20 p-20">
        <ProductImageAndPopover />
        <ProductDetails/>

        </div>
    </>
  );
}
