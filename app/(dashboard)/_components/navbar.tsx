import { NavbarRoutes } from "@/components/navbar-routes";

import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <div className="p-4 h-full flex items-center bg-white shadow-slate-200 shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};
