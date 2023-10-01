import { Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./sidebar";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 text-foreground hover:opacity-75 transition">
        <Menu className="text-foreground" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-background border-0">
        <SheetClose asChild>
          <Sidebar />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};
