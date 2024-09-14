import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Home() {
  return (
    <div>
      <NavigationMenu className="m-2 p-3">
        <NavigationMenuList className="gap-3 hover:bg-orange-800">
          <NavigationMenuItem >Collection</NavigationMenuItem>
          <NavigationMenuItem>Men</NavigationMenuItem>
          <NavigationMenuItem>Wemen</NavigationMenuItem>
          <NavigationMenuItem>About</NavigationMenuItem>
          <NavigationMenuItem>Contact</NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
