import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full lg:h-screen relative overflow-hidden">
      <div className="absolute bottom-0 left-[-15%] right-0 top-[-20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgb(255,100,0,0.18),rgba(255,255,255,0))] -z-10 md:opacity-100 opacity-50" />
      <div className="absolute left-[25%] right-0 bottom-[-20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgb(71,255,93,0.2),rgba(255,255,255,0))] md:opacity-100 opacity-50 -z-10" />
      <Link
        className="sticky start-0 top-0 z-20 flex items-center justify-center bg-blue-500 p-3.5 text-sm font-medium text-white md:p-4 lg:hidden"
        href="/"
      >
        <ArrowLeft size={16} />
        <p className="font-normal ms-1 font-lexend">
          Back to home
        </p>
      </Link>
      {children}
    </section>
  );
};

export default AuthLayout;
