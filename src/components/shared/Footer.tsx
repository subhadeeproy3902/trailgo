"use client"
import Link from 'next/link';
import React from 'react'
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-black text-white p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Image src="/Train.webp" alt="Domestico Logo" width={500}
              height={500}  className="h-10 w-10"/>
          <p>Trailgo</p>
        </div>
        <div>
          <h3 className="font-bold mb-3">About us</h3>
          <ul>
            <li>
              <Link href="/">
                <span className="cursor-pointer hover:underline">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="cursor-pointer hover:underline">Contact Us</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="cursor-pointer hover:underline">Pricing</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Socails Links</h3>
          <ul>
            <li>
              <Link href="https://www.linkedin.com/">
                <span className="cursor-pointer hover:underline">LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link href="https://x.com">
                <span className="cursor-pointer hover:underline">X</span>
              </Link>
            </li>
            <li>
              <Link href="/https://github.com/subhadeeproy3902/trailgo">
                <span className="cursor-pointer hover:underline">Github</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Services</h3>
          <ul>
            <li>
              <Link href="/">
                <span className="cursor-pointer hover:underline">Stats</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="cursor-pointer hover:underline">Lorem</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="cursor-pointer hover:underline">Lorenm</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center pt-8 border-t border-gray-700 mt-8">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved by Trailgo </p>
      </div>
    </footer>
  )
}

export default Footer
