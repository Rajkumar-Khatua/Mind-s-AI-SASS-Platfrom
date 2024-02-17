import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { Menu, MenuIcon } from "lucide-react";

const Navbar = () => {
    
  return (
    <div>
      <div className="flex items-center p-4">
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon />
        </Button>
        <div className="flex w-full justify-end">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
