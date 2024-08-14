"use client";

import GoogleButton from "@/components/auth/GoogleButton";
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const radios = [
    {
      name: "Ticket Manager",
    },
    {
      name: "Passenger",
    },
  ];

  const [role, setRole] = useState("PASSENGER");
  console.log(role);

  return (
    <>
      <div className="justify-between gap-x-8 px-4 py-8 pt-10 md:pt-12 lg:flex lg:p-6 xl:gap-x-10 xl:p-7 2xl:p-10 2xl:pt-10">
        <div className="relative flex w-full items-start pt-4 justify-center lg:w-5/12 2xl:pe-24">
          <div className=" w-full max-w-sm md:max-w-md lg:py-7 lg:ps-3 lg:pt-16 2xl:w-[630px] 2xl:max-w-none 2xl:ps-20 2xl:pt-7">
            <a
              className="absolute -top-4 start-0 hidden p-3 text-gray-500 hover:text-gray-700 lg:flex lg:items-center 2xl:-top-7 2xl:ps-20 "
              href="/"
            >
              <MoveLeft size={24} />
              <b className="ms-1 font-medium">Back to home</b>
            </a>
            <div className="mb-7 px-0 pt-3 text-center md:pt-0 lg:text-start xl:mb-8 2xl:mb-10">
              <h2 className="font-bold mb-3 text-[26px] leading-snug md:text-3xl md:!leading-normal lg:pe-16 lg:text-[28px] xl:text-3xl 2xl:pe-8 2xl:text-4xl">
                Join us -{" "}
                <span className="relative inline-block">
                  SIGN UP!
                  <svg
                    viewBox="0 0 147 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -bottom-2 start-0 h-2.5 w-28 text-blue xl:-bottom-1.5 xl:w-36"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M62.4325 0.957703C55.5264 1.2859 48.7014 1.68945 42.0459 2.13063C32.6242 2.75474 23.2063 3.40038 13.8451 4.42263C10.8984 4.74545 7.90595 4.94989 4.97767 5.35341C3.13948 5.60628 0.702089 5.96671 0.382211 6.04203C0.214902 6.08507 0.141911 6.1497 0.118325 6.17122C-0.0475096 6.32187 -0.0172508 6.46707 0.0763539 6.58006C0.113943 6.62848 0.208995 6.74689 0.472857 6.76303C18.1192 7.86599 36.1635 5.71388 53.8312 5.48791C84.4702 5.10053 116.038 6.63929 146.433 9.99658C146.699 10.0235 146.957 9.88894 146.994 9.68987C147.038 9.49618 146.846 9.30786 146.581 9.28096C116.134 5.91829 84.5144 4.37415 53.8165 4.76691C37.3509 4.97674 20.5603 6.86525 4.07184 6.21962C4.45068 6.16582 4.82217 6.112 5.16122 6.06357C8.0777 5.66005 11.0576 5.461 13.9925 5.13818C23.3338 4.11593 32.7326 3.4703 42.1417 2.85157C53.8165 2.07681 65.9998 1.40965 78.279 1.0976C82.6718 1.14602 87.0498 1.19446 91.4278 1.25364C100.899 1.38277 110.414 1.75939 119.863 2.26514C122.708 2.42117 125.553 2.58256 128.398 2.72245C129.341 2.77087 131.774 2.91073 132.113 2.89997C132.533 2.88921 132.614 2.63098 132.621 2.58794C132.643 2.4911 132.629 2.35658 132.422 2.2436C132.4 2.22745 132.267 2.17362 131.973 2.14134C114.792 0.236721 96.4471 -0.0806646 78.2937 0.376658C59.1453 0.177588 39.9232 0.0914646 20.8234 0C20.55 0 20.3266 0.161432 20.3244 0.360502C20.323 0.559572 20.5433 0.721008 20.8168 0.726389C34.6467 0.790952 48.5466 0.855478 62.4325 0.957703Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </h2>
            </div>
            <ul className="mt-6 flex lg:flex-row flex-col gap-3 w-full mb-4">
              {radios.map((item, idx) => (
                <li key={idx} className="w-full">
                  <label htmlFor={item.name} className="block relative">
                    <input
                      id={item.name}
                      type="radio"
                      defaultChecked={idx == 1 ? true : false}
                      name="payment"
                      className="sr-only peer"
                      onClick={() =>
                        setRole(item.name.toUpperCase().replace(" ", "_"))
                      }
                    />
                    <div className="w-full p-5 cursor-pointer rounded-lg border bg-white shadow-sm ring-indigo-600 peer-checked:ring-2 duration-200">
                      <div className="pl-7">
                        <h3 className="leading-none text-gray-800 font-medium">
                          {item.name}
                        </h3>
                      </div>
                    </div>
                    <span className="block absolute top-5 left-5 border peer-checked:border-[5px] peer-checked:border-indigo-600 w-4 h-4 rounded-full"></span>
                  </label>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-1 gap-4 pb-5 w-full md:pb-6 xl:gap-5 xl:pb-7">
              <GoogleButton role={role} />
            </div>
            <div className="before:content-[' '] relative flex items-center  before:absolute before:left-0 before:top-1/2 before:h-px before:w-full before:bg-gray-100 mb-2 justify-center">
              <span className="relative z-10 inline-block bg-white text-sm font-medium text-gray-500 2xl:text-base dark:bg-gray-50 p-2.5">
                OR
              </span>
            </div>
            <form>
              <div className="space-y-5">
                <div className="flex flex-col [&amp;>label>span]:font-medium">
                  <label className="block mb-4">
                    <span className="block text-sm mb-1.5 font-medium">
                      Your name
                    </span>
                    <span
                      className="flex items-center peer w-full transition duration-200 [&amp;.is-focus]:ring-[0.8px] ring-[0.6px] [&amp;.is-hover]:border-primary [&amp;.is-focus]:border-primary [&amp;.is-focus]:ring-primary [&amp;_input::placeholder]:opacity-60 px-4 py-2 h-12 rounded-md border border-muted ring-muted bg-transparent text-sm"
                      data-focus="false"
                      data-hover="false"
                    >
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full border-0 bg-transparent p-0 focus:outline-none focus:ring-0 [&amp;::-ms-clear]:hidden [&amp;::-ms-reveal]:hidden [&amp;::-webkit-search-cancel-button]:hidden [&amp;::-webkit-inner-spin-button]:m-0 [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:m-0 [&amp;::-webkit-outer-spin-button]:appearance-none"
                        name="email"
                      />
                    </span>
                  </label>
                  <label className="block">
                    <span className="block text-sm mb-1.5 font-medium">
                      Email
                    </span>
                    <span
                      className="flex items-center peer w-full transition duration-200 [&amp;.is-focus]:ring-[0.8px] ring-[0.6px] [&amp;.is-hover]:border-primary [&amp;.is-focus]:border-primary [&amp;.is-focus]:ring-primary [&amp;_input::placeholder]:opacity-60 px-4 py-2 h-12 rounded-md border border-muted ring-muted bg-transparent text-sm"
                      data-focus="false"
                      data-hover="false"
                    >
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full border-0 bg-transparent p-0 focus:outline-none focus:ring-0 [&amp;::-ms-clear]:hidden [&amp;::-ms-reveal]:hidden [&amp;::-webkit-search-cancel-button]:hidden [&amp;::-webkit-inner-spin-button]:m-0 [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:m-0 [&amp;::-webkit-outer-spin-button]:appearance-none"
                        name="email"
                      />
                    </span>
                  </label>
                </div>
                <button
                  className="inline-flex font-medium items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 px-5 py-2 text-base h-12 rounded-md border border-transparent dark:backdrop-blur bg-primary hover:bg-primary-dark dark:hover:bg-primary/90 focus-visible:ring-muted text-primary-foreground w-full"
                  type="submit"
                >
                  <span>Sign in</span>{" "}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 256 256"
                    className="ms-2 mt-0.5 h-5 w-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path>
                  </svg>
                </button>
              </div>
            </form>
            <p className="font-normal mt-6 text-center leading-loose text-gray-500 lg:mt-8 lg:text-start">
              Already have an account?{" "}
              <Link
                className="font-semibold text-gray-700 transition-colors hover:text-blue"
                href="/login"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden w-7/12 items-center justify-center rounded-[20px] bg-gradient-to-b from-sky-50/50 to-gray-50/50 backdrop-blur-3xl px-6 lg:flex xl:justify-start 2xl:px-16 dark:bg-gray-100/40">
          <div className="pb-8 pt-10 text-center xl:pt-16 2xl:block 2xl:w-[1063px]">
            <div className="flex flex-col justify-between items-center">
              <div className="mx-auto mb-10 max-w-sm pt-2 2xl:max-w-lg">
                <h2 className="text-3xl mb-5 font-semibold !leading-normal lg:text-[26px] 2xl:px-10 2xl:text-[32px]">
                  Start your journey with us today 🚀
                </h2>
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/register.webp"
                  alt="Sign in"
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-auto hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
