import Navbar from "./components/Navbar";
import logo from "../../public/logo.svg";
import {cart} from "../../public/icon-cart.svg";
import avatar from "../../public/image-avatar.png";

export default function Home() {
  return (
    <div className="flex">
      <logo/>
      <Navbar />
      <cart />
      <avatar />
    </div>
  );
}
