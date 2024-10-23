"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [letterIndex, setLetterIndex] = useState(-1);
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      image: "/1.jpg",
      title: "Explore Amazing Destinations",
      description: "Discover the world's most breathtaking locations",
    },
    {
      image: "/2.jpg",
      title: "Travel in Style",
      description: "Experience luxury and comfort in every journey",
    },
    {
      image: "/3.jpg",
      title: "Create Memories",
      description: "Make every moment count with Trailgo",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLetterIndex((prev) => {
        if (prev < text.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const text = "Welcome to Trailgo";

  const handleMouseEnter = (cardId: number) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-lg fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-lg">
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
              alt="Logo"
            />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link
              href="/register"
              className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none mr-6 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-300 hover:scale-105"
            >
              Register
            </Link>
            <Link
              href="/login"
              className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-300 hover:scale-105"
            >
              Login
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2"
            >
              <HamburgerMenu />
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {menuItem.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {menuOpen && (
            <div className="items-center justify-between w-full md:hidden md:w-auto md:order-1">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50">
                {menuItem.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      <div className="relative h-[600px] mt-16">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              width={1920}
              height={1080}
              src={item.image}
              className="w-full h-full object-cover"
              alt={item.title}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
                <p className="text-xl">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      <div className="py-12 px-4 sm:px-6 lg:px-8">
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
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h1>
            <h2
              className={`text-2xl text-gray-700 mb-6 transition-transform transform ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              The best place to find your next adventure
            </h2>
            <p
              className={`max-w-2xl mx-auto text-gray-500 mb-6 transition-transform transform ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              auctor, erat id lacinia ultrices, velit lectus aliquam nisi, nec
              tempor nunc nunc vel justo
            </p>
            <div className="space-x-4">
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition-all duration-300 hover:scale-105">
                Get Started
              </button>
              <button className="bg-transparent hover:bg-gray-100 text-green-700 font-semibold py-2 px-4 border border-green-500 rounded transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardData.map((card, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 ${
                  hoveredCard === index ? "transform scale-105" : ""
                } ${card.color}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="p-6">
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-sm font-semibold text-white bg-orange-500 rounded-full">
                      {card.badge}
                    </span>
                  </div>
                  <div
                    className={`transition-transform duration-300 ${
                      hoveredCard === index ? "transform -translate-y-2" : ""
                    }`}
                  >
                    <div className="relative z-10">
                      <div className="p-3 mb-4 inline-block bg-white rounded-lg">
                        {card.icon}
                      </div>
                      <h4 className="font-bold text-xl mb-3">{card.title}</h4>
                      <p className="text-gray-600 mb-4">{card.description}</p>
                      <a
                        href="#"
                        className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold"
                      >
                        {card.linkText}
                        <svg
                          className="w-4 h-4 ml-2 transition-transform duration-300 transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      hoveredCard === index
                        ? "from-orange-100/20 to-green-100/20"
                        : ""
                    } transition-opacity duration-300`}
                  />
                </div>
              </div>
            ))}
          </section>
          <section className="bg-gray-100 py-16">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Why Choose Trailgo?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Unmatched Expertise
                  </h3>
                  <p className="text-gray-600">
                    Our experienced travel guides bring deep knowledge of each
                    destination, ensuring you have an enriching experience.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Personalized Adventures
                  </h3>
                  <p className="text-gray-600">
                    We tailor every itinerary to suit your interests and
                    preferences, creating the trip of a lifetime just for you.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Community of Travelers
                  </h3>
                  <p className="text-gray-600">
                    Join a thriving community of like-minded explorers and share
                    your travel experiences with people from around the world.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Testimonials
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-gray-600 italic mb-4">
                    "Trailgo made our vacation unforgettable. The guided tours
                    were fantastic, and everything was so well organized."
                  </p>
                  <p className="text-gray-800 font-bold">- Emily R.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-gray-600 italic mb-4">
                    "I loved the personalized itineraries. The team really took
                    care of our preferences, and we saw some amazing hidden
                    gems."
                  </p>
                  <p className="text-gray-800 font-bold">- John D.</p>
                </div>
              </div>
            </div>
          </section>
          <footer className="bg-gray-900 text-white py-8 mt-16">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h5 className="text-lg font-semibold mb-4">About Us</h5>
                <p className="text-gray-400">
                  Trailgo is your ultimate travel companion, providing premium
                  travel packages, guided tours, and a community of explorers.
                </p>
              </div>
              <div>
                <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
                <ul className="space-y-2">
                  {menuItem.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-gray-400 hover:text-orange-500"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
                <p className="text-gray-400">Email: contact@trailgo.com</p>
                <p className="text-gray-400">Phone: +123 456 7890</p>
                <p className="text-gray-400">
                  Address: 123 Adventure Lane, Travel City, World
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-4 text-center">
              <p className="text-gray-500">
                &copy; {new Date().getFullYear()} Trailgo. All rights reserved.
              </p>
            </div>
          </footer>
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
    href: "/contact",
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
