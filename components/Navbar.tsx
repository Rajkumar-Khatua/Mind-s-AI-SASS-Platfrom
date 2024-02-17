import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { Menu, MenuIcon } from "lucide-react";
import MobileSideBar from "./MobileSidebar";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center p-4">
        <MobileSideBar />
        <div className="flex w-full justify-end">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
