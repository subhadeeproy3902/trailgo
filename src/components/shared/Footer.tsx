"use client"
import Link from 'next/link';
import React from 'react'
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 via-gray-50 to-white text-gray-700 p-8 sm:p-10 shadow-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
        {/* Logo and Description */}
        <div className="flex flex-col items-start">
          <Image src="/Train.webp" alt="Trailgo Logo" width={50} height={50} className="h-12 w-12 mb-4" />
          <p className="text-lg font-bold">Trailgo</p>
          <p className="text-sm mt-2 text-gray-600">Explore with us</p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/">
                <span className="cursor-pointer hover:text-blue-600 transition-colors duration-200">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="cursor-pointer hover:text-blue-600 transition-colors duration-200">Contact Us</span>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <span className="cursor-pointer hover:text-blue-600 transition-colors duration-200">Pricing</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Social Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="https://www.linkedin.com/">
                <span className="cursor-pointer hover:text-blue-600 transition-colors duration-200">LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link href="https://x.com">
                <span className="cursor-pointer hover:text-blue-600 transition-colors duration-200">X</span>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/subhadeeproy3902/trailgo">
                <span className="cursor-pointer hover:text-blue-600 transition-colors duration-200">Github</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/stats">
                <span className="cursor-pointer hover:text-blue-600 transition-colors duration-200">Stats</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="cursor-pointer hover:text-blue-600 transition-colors duration-200">Lorem</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="cursor-pointer hover:text-blue-600 transition-colors duration-200">Lorenm</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center pt-8 border-t border-gray-300 mt-10">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved by Trailgo</p>
      </div>
    </footer>
  )
}

export default Footer;
