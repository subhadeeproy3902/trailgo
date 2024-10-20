"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GlobeImg from "../../../public/globe.svg";
import ProfileImg from "../../../public/women-profile.jpg"
import { ChatBubbleLeftEllipsisIcon, LifebuoyIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';


export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-transparent backdrop-blur-3xl w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="flex flex-wrap items-center justify-between mx-4 p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              width={500}
              height={500}
              src="/Train.webp"
              className="h-10 w-10"
              alt="Full-Stack-Kit Logo"
            />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
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
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 dark:border-gray-700">
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
      <div className="py-12 min-h-screen px-4 sm:px-6 lg:px-8">
        <main>

          <section className="text-center py-16">
            <h1 className="text-4xl font-bold text-gray-900">Get in touch with our team</h1>
            <p className="text-gray-500 mt-4">We have the team and know-how to help you scale 10x faster.</p>
            <div className="mt-8 bg-gray-100 p-10 rounded-lg">

              <Image
                src={GlobeImg}
                className="w-full"
                alt="Full-Stack-Kit Logo"
              />

            </div>

          </section>


          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <ChatBubbleLeftEllipsisIcon className="w-8 h-8 mx-auto text-gray-700" />
              <h3 className="text-lg font-semibold mt-4">Chat to Sales</h3>
              <p className="text-gray-500 mt-2">Speak to our friendly team.</p>
              <a href="mailto:sales@untitledui.com" 
              className=" bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-md mt-4 inline-block ">
                sales@trailgo.com
              </a>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <LifebuoyIcon className="w-8 h-8 mx-auto text-gray-700" />
              <h3 className="text-lg font-semibold mt-4">Chat to Support</h3>
              <p className="text-gray-500 mt-2">We’re here to help.</p>
              <a href="mailto:support@untitledui.com" className="  bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-md mt-4 inline-block ">
                support@trailgo.com
              </a>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <MapPinIcon className="w-8 h-8 mx-auto text-gray-700" />
              <h3 className="text-lg font-semibold mt-4">Visit Us</h3>
              <p className="text-gray-500 mt-2">Visit our office HQ.</p>
              <a href="https://maps.google.com" className=" bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-md mt-4 inline-block" target="_blank" rel="noopener noreferrer">
                View on Google Maps
              </a>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <PhoneIcon className="w-8 h-8 mx-auto text-gray-700" />
              <h3 className="text-lg font-semibold mt-4">Call Us</h3>
              <p className="text-gray-500 mt-2">Mon-Fri from 8am to 5pm.</p>
              <a href="tel:+1555000000" className=" bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-md mt-4 inline-block">
                +1 (555) 000-0000
              </a>
            </div>
          </section>


          <section className="mt-16">
            <h2 className="text-2xl font-semibold text-gray-900 text-center">
              Contact Us
            </h2>
            <form className="mt-8 max-w-xl mx-auto space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  placeholder="Write your message here"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                >
                  Send Message
                </button>
              </div>
            </form>
          </section>

          <section className="bg-white border border-gray-200 mt-5 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center">
              <Image
                src={ProfileImg}
                className="w-12 h-12 rounded-full mr-4 object-cover"
                alt="Profile"
              />

              <div>
                <h3 className="text-lg font-semibold">Still have questions?</h3>
                <p className="text-gray-500">
                  Can’t find the answer you’re looking for? Please <a href="#" className="text-orange-500 hover:text-orange-700 underline">chat to our friendly team</a>.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
              <a href="#" className="text-gray-700 border border-gray-300 rounded-md py-2 px-4 flex items-center hover:bg-gray-100">
                Documentation
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#" className="bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-md py-2 px-4">
                Get in touch
              </a>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}

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

const menuItem = [
  {
    name: "Home",
    href: "/",
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
    href: "/contact",
  },
];
