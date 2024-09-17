import Navbar from "./components/Navbar";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import cart from "../../public/icon-cart.svg";
import avatar from "../../public/image-avatar.png";
import ProductImageAndPopover from "./components/ProductImageAndPopover";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

export default function Home() {

  return (
    <>
      <div className="">
        <div className="flex justify-around  m-6  relative">
          <div className="flex gap-12">
            <Image src={Logo} alt="Logo" className="mt-6 h-6" />
            <Navbar />
          </div>
          <div className="gap-12 flex ">
            <button>
              <Image src={cart} alt="Cart Icon" className="h-5 left-10  " />
            </button>
            <Image
              src={avatar}
              alt="User Avatar"
              className="h-12 w-12 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="flex mt-28 w-[100%] h-[100%]  ">
        <ProductImageAndPopover />
        <div>
          <ProductDetails />
          <Cart />
        </div>
      </div>
    </>
  );
}
