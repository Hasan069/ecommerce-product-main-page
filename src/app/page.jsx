import React from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import cart from "../../public/icon-cart.svg";
import avatar from "../../public/image-avatar.png";
import product1 from "../../public/image-product-1.jpg"

export default function Home() {
  return (
    <>
      <div>
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
        <div className="m-12 relative top-24 justify-between">
          <Image src={product1} className="h-1/2 w-1/4 rounded-2xl" />
        </div>


      </div>
    </>
  );
}
