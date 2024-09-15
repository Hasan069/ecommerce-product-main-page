import React from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import cart from "../../public/icon-cart.svg";
import avatar from "../../public/image-avatar.png";

export default function Home() {
  return (
    <>
      <div>
        <div className="flex justify-around m-6  relative">
          <Image src={Logo} alt="Logo" className="mt-4 h-6" />
          <Navbar />
          <div className="gap-12 flex">
            <Image src={cart} alt="Cart Icon" className="h-5 left-12 mt-6" />
            <Image src={avatar} alt="User Avatar" className="h-12 w-12" />
          </div>
        </div>


        
      </div>
    </>
  );
}
