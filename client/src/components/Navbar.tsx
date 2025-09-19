import { ChefHat, Cookie, HandPlatter, Menu, Moon, PackageCheckIcon, ShoppingCart, SquareMenu, Sun, User, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";


const Navbar = () => {
  const admin: boolean = true;
  const loading: boolean = false;
  return (
    <div className="max-w-7xl mx-auto px-2">
      <div className="flex items-center justify-between h-14">
        {/* logo container  */}
        <Link to={"/"}>
          <h2 className="font-bold md:font-extrabold font-cursive text-2xl text-orange text-center uppercase flex justify-center items-center">
            <ChefHat className="rotate-330" size={30} /> Foodfactory
          </h2>
        </Link>

        {/* only for pc menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="hidden md:flex items-center gap-6">
            <Link to={"/"}>Home</Link>
            <Link to={"/profile"}>Profile</Link>
            <Link to={"/order/status"}>Orders</Link>
          </div>
          {admin && (
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Dashboard</MenubarTrigger>
                <MenubarContent>
                  <Link to={"/admin/restaurent"}>
                    <MenubarItem>Restaurant</MenubarItem>
                  </Link>
                  <Link to={"/admin/menu"}>
                    <MenubarItem> Menu</MenubarItem>
                  </Link>
                  <Link to={"/admin/orders"}>
                    <MenubarItem> Orders</MenubarItem>
                  </Link>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          )}
        </div>

        {/* theme,cart and avatar switch options container  also nly for pc*/}
        <div className="hidden md:flex items-center gap-4">
          {/* theme container */}
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Light</DropdownMenuItem>
                <DropdownMenuItem>Dark</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* cart container   */}
          <Link className="relative cursor-pointer" to={"/cart"}>
            <ShoppingCart />
            <Button
              size={"icon"}
              className="absolute -inset-y-3 left-2  text-xs rounded-full h-4 w-4 bg-red-500"
            >
              9
            </Button>
          </Link>

          {/* Avatar container   */}
          <Avatar>
            <AvatarImage />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          {/* logout button */}
          {loading ? (
            <Button disabled className="bg-orange hover:bg-hoverOrange">
              <Cookie className="animate-spin" />
              Please Wait
            </Button>
          ) : (
            <Button className="bg-orange hover:bg-hoverOrange">Logout</Button>
          )}
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = () => {
  // const user = true
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size={"icon"}
          className="rounded-full hover:bg-gray-200"
          variant="outline"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-2">
        <SheetHeader className="flex flex-row mt-6 items-center justify-between">
          <SheetTitle>
            <Link to={"/"}>
              <h2 className="font-bold md:font-extrabold font-cursive text-orange text-center uppercase flex justify-center items-center">
                <ChefHat className="rotate-330" size={30} /> Foodfactory
              </h2>
            </Link>
          </SheetTitle>

          {/* theme toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Light</DropdownMenuItem>
              <DropdownMenuItem>Dark</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SheetHeader>
        <hr className="mx-4" />
        <SheetDescription className="">
          <Link to={'/profile'} className="flex items-center gap-4 hover:bg-gray-200 rounded-lg cursor-pointer px-3 font-medium py-2 hover:text-gray-900">
          <User/>
          <span>Profile</span>
          </Link>
          <Link to={'/orders'} className="flex items-center gap-4 hover:bg-gray-200 rounded-lg cursor-pointer px-3 font-medium py-2 hover:text-gray-900">
          <HandPlatter/>
          <span>Order</span>
          </Link>
          <Link to={'/profile'} className="flex items-center gap-4 hover:bg-gray-200 rounded-lg cursor-pointer px-3 font-medium py-2 hover:text-gray-900">
          <ShoppingCart/>
          <span>Cart</span>
          </Link>
          <Link to={'/profile'} className="flex items-center gap-4 hover:bg-gray-200 rounded-lg cursor-pointer px-3 font-medium py-2 hover:text-gray-900">
          <SquareMenu/>
          <span>Menu</span>
          </Link>
          <Link to={'/profile'} className="flex items-center gap-4 hover:bg-gray-200 rounded-lg cursor-pointer px-3 font-medium py-2 hover:text-gray-900">
          <UtensilsCrossed/>
          <span>Restaurant</span>
          </Link>
          <Link to={'/profile'} className="flex items-center gap-4 hover:bg-gray-200 rounded-lg cursor-pointer px-3 font-medium py-2 hover:text-gray-900">
          <PackageCheckIcon/>
          <span>Restaurant Orders</span>
          </Link>
        </SheetDescription>
        <SheetFooter>
         
              <div className="flex flex-row items-center gap-2">
              <Avatar>
               <AvatarImage/>
               <AvatarFallback>HS</AvatarFallback>
              </Avatar>
              <h1 className="font-bold">Harsh Singh</h1>
              </div>
          
              <SheetClose asChild>
            <Button className="bg-orange hover:bg-hoverOrange">Logout</Button>
          </SheetClose>
            
         
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
