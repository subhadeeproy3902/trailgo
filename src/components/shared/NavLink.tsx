"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLink = ({ item, handleMenuOpen }: any) => {
  const pathName = usePathname();
  const handleClick = () => {
    handleMenuOpen();
  };
  return (
    <Link
      onClick={handleClick}
      href={item.href}
      className={`min-w-[100px] items-center rounded-md p-2 font-medium text-black hover:bg-secondary md:hover:bg-none ${
        pathName === item.href && "bg-primary text-white"
      }`}
    >
      {item.name}
    </Link>
  );
};

export default NavLink;