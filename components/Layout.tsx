interface LayoutProps {
  children: React.ReactNode;
}

import React from "react";
import Sidebar from "./layout/Sidebar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto xl:px-10 max-w-5xl">
        <div className="grid grid-cols-4 h-full">
          {/* sidebar */}
          <Sidebar />
          <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
