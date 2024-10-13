"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ModeToggle } from "../ui/ThemeToggle";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme; 
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    setDarkMode(currentTheme === "dark");
  }, [currentTheme]);

  return (
    <>
      <nav className="bg-transparent backdrop-blur-3xl w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="flex flex-wrap items-center justify-between mx-4 p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              width={500}
              height={500}
              src="/Train.webp"
              className="h-10 w-10"
              alt="Full-Stack-Kit Logo"
            />
          </a>
          <div className="flex gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button>
              <ModeToggle />
            </button>

            <Link
              href="/register"
              className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none mr-6 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </Link>
            <Link
              href="/login"
              className="text-white bg-muted-foreground focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </Link>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <HamburgerMenu />
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
              {menuItem.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {menuOpen ? (
            <div className="items-center justify-between w-full md:hidden md:w-auto md:order-1">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {menuItem.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </nav>
      <Image
        width={500}
        height={500}
        src="/bg.webp"
        className="w-full h-full absolute top-0 left-0 -z-10 object-cover"
        alt="Full-Stack-Kit Background"
      />
      <div className="py-12 min-h-screen px-4 sm:px-6 lg:px-8">
        <main>
          <section className="text-center py-12">
            <h1 className={`${darkMode ? "text-white" : "text-gray-900"} text-4xl md:text-5xl font-bold mb-4`}>
              Welcome to Trailgo
            </h1>
            <h2 className={`${darkMode ? "text-white" : "text-gray-700"} text-2xl mb-6`}>
              The best place to find your next adventure
            </h2>
            <p className={`${darkMode ? "text-white" : "text-gray-500"} max-w-2xl mx-auto mb-6`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              auctor, erat id lacinia ultrices, velit lectus aliquam nisi, nec
              tempor nunc nunc vel justo
            </p>
            <div className="space-x-4">
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Get Started
              </button>
              <button className="bg-transparent hover:bg-gray-100 text-orange-700 font-semibold py-2 px-4 border border-orange-500 rounded">
                Learn More
              </button>
            </div>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-4 bg-white dark:bg-black  border rounded-lg">
              <ThumbsUpIcon className="text-yellow-400 w-6 h-6 mx-auto mb-2" />
              <h4 className="font-semibold text-lg text-black dark:text-white">
                Service we can help you with
              </h4>
              <p className="text-gray-400 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a
                className="text-orange-500 hover:text-orange-700 mt-2 inline-block"
                href="#"
              >
                Our Service
              </a>
            </div>
            <div className="text-center p-4 bg-white dark:bg-black  border rounded-lg">
              <UsersIcon className="text-yellow-400 w-6 h-6 mx-auto mb-2" />
              <h4 className="font-semibold text-lg text-black dark:text-white">
                Why you should choose us
              </h4>
              <p className="text-gray-400 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a
                className="text-orange-500 hover:text-orange-700 mt-2 inline-block"
                href="#"
              >
                About Us
              </a>
            </div>
            <div className="text-center p-4 bg-white  dark:bg-black  border rounded-lg">
              <BarChartIcon className="text-yellow-400 w-6 h-6 mx-auto mb-2" />
              <h4 className="font-semibold text-lg text-black dark:text-white">
                Our performance
              </h4>
              <p className="text-gray-400 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a
                className="text-orange-500 hover:text-orange-700 mt-2 inline-block"
                href="#"
              >
                View Stats
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

function BarChartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function ThumbsUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const menuItem = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Services",
    href: "#",
  },
  {
    name: "Pricing",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

function HamburgerMenu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  );
}
