"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import NavLink from "./NavLink";

const pageRoutes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-primary" href="#">
              <span>SMARTKAKSHA</span>
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {pageRoutes.map((route, i) => (
                  <li key={i}>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href={route.href}
                    >
                      {" "}
                      {route.name}{" "}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow"
                href="/login"
              >
                Login
              </Link>

              <div className="hidden sm:flex">
                <Link
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary"
                  href="/sign-up"
                >
                  Register
                </Link>
              </div>
            </div>

            <div className="block md:hidden">
              <Button
                variant="secondary"
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={handleToggle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed top-[4rem] z-50 flex h-fit w-full flex-col items-center justify-start gap-7 border-b-2 border-gray-500 bg-background pb-5 pt-5 text-center md:hidden">
          {pageRoutes.map((link, index) => (
            <NavLink item={link} key={index} handleMenuOpen={handleToggle} />
          ))}
        </div>
      )}
    </header>
  );
}