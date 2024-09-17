import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <div>
      <NavigationMenu className="m-2 p-4 ">
        <NavigationMenuList className="gap-4 cursor-pointer">
          <NavigationMenuItem className="hover:underline decoration-orange-400 decoration-4">
            Collections
          </NavigationMenuItem>
          <NavigationMenuItem className="hover:underline decoration-orange-400 decoration-4">
            Men
          </NavigationMenuItem>
          <NavigationMenuItem className="hover:underline decoration-orange-400 decoration-4">
            {" "}
            Wemen
          </NavigationMenuItem>
          <NavigationMenuItem className="hover:underline decoration-orange-400 decoration-4">
            About
          </NavigationMenuItem>
          <NavigationMenuItem className="hover:underline decoration-orange-400 decoration-4">
            Contact
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
