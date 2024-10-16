"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [visible, setVisible] = useState(false); // For animations
  const [letterIndex, setLetterIndex] = useState(-1); // Start with -1 to not show any letters initially

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100); // Delay for animation effect

    return () => clearTimeout(timer);
  }, []);

  
  // Step 3: Start letter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setLetterIndex((prev) => {
        // Stop after showing all letters
        if (prev < text.length - 1) {
          return prev + 1;
        }
        return prev; // No further increment
      });
    }, 100); // 3 seconds delay

    return () => clearInterval(interval);
  }, []);

  const text = "Welcome to Trailgo"; // Step 4: This is the text being animated

  const handleMouseEnter = (cardId: number) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

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
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link
              href="/register"
              className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none mr-6 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </Link>
            <Link
              href="/login"
              className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 dark:border-gray-700">
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
  {text.split("").map((letter, index) => (
    <span
      key={index}
      className={`inline-block transition-transform duration-500 transform ${
        index <= letterIndex ? "opacity-100" : "opacity-0"
      }`}
    >
      {letter === " " ? "\u00A0" : letter}  {/* Add this line to handle spaces */}
    </span>
  ))}
</h1>
            <h2
              className={`text-2xl text-gray-700 mb-6 transition-transform transform ${
                visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              The best place to find your next adventure
            </h2>
            <p
              className={`max-w-2xl mx-auto text-gray-500 mb-6 transition-transform transform ${
                visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              auctor, erat id lacinia ultrices, velit lectus aliquam nisi, nec
              tempor nunc nunc vel justo
            </p>
            <div className="space-x-4">
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Get Started
              </button>
              <button className="bg-transparent hover:bg-gray-100 text-green-700 font-semibold py-2 px-4 border border-green-500 rounded">
                Learn More
              </button>
            </div>
          </section>
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardData.map((card, index) => (
              <div
                key={index}
                className={`text-center p-4 border rounded-lg transition-transform transform ${
                  hoveredCard === index ? 'scale-105' : ''
                } ${card.color}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative">
                  <div
                    className={`absolute top-0 left-0 transform transition-transform ${
                      hoveredCard === index ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: 'orange',
                      pointerEvents: 'none',
                      transform: hoveredCard === index ? 'translate(calc(-50% + 2px), calc(-50% + 2px))' : 'translate(-50%, -50%)',
                      transition: 'transform 0.2s ease',
                    }}
                  />
                  <span className="block py-2">{card.icon}</span>
                  <h4 className={`font-semibold text-lg ${hoveredCard === index ? 'text-black' : 'text-black'}`}>{card.title}</h4>
                  <p className={`mt-2 ${hoveredCard === index ? 'text-black' : 'text-gray-500'}`}>{card.description}</p>
                  <a className="text-orange-500 hover:text-orange-700 mt-2 inline-block" href="#">
                    {card.linkText}
                  </a>
                </div>
              </div>
            ))}
          </section>

        </main>
      </div>
    </>
  );
}

const cardData = [
  {
    icon: <ThumbsUpIcon className="text-yellow-400 w-6 h-6 mx-auto mb-2" />,
    title: "Service we can help you with",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    linkText: "Our Service",
    color: "bg-orange-200", // Solid orange background for the first card
  },
  {
    icon: <UsersIcon className="text-yellow-400 w-6 h-6 mx-auto mb-2" />,
    title: "Join our community",
    description: "Maecenas auctor, erat id lacinia ultrices.",
    linkText: "Learn more",
    color: "bg-white-200",
  },
  {
    icon: <UsersIcon className="text-yellow-400 w-6 h-6 mx-auto mb-2" />,
    title: "Connect with us",
    description: "Aliquam nisi, nec tempor nunc nunc vel justo.",
    linkText: "Contact us",
    color: "bg-green-200",
  },
];

function ThumbsUpIcon(props: React.SVGProps<SVGSVGElement>) {
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
function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
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
