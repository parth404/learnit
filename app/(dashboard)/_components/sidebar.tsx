import React from "react";
import Logo from "./logo";
import { SidebarRoutes } from "./sidebar-routes";
import Link from "next/link";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="h-full flex flex-col overflow-y-auto bg-background shadow-slate-300 shadow-sm">
      <div className="p-6">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
