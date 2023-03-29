import React from "react";
import { BiLogOut } from "react-icons/bi";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const Sidebar = () => {
  const items = [
    {
      icon: BsHouseFill,
      label: "Home",
      href: "/",
    },
    {
      icon: BsBellFill,
      label: "Notifications",
      href: "/notifications",
      auth: true,
      // alert: currentUser?.hasNotification,
    },
    {
      icon: FaUser,
      label: "Profile",
      // href: `/users/${currentUser?.id}`,
      href:'/users/123',  
      auth: true,
    },
  ];

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          {/* sidebarLogo */}
        </div>

      </div>
      <div>Sidebar</div>
    </div>
  );
};

export default Sidebar;
