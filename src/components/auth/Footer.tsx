"use client";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
	return (
		<div className="container-footer relative flex flex-col flex-wrap justify-between gap-y-10 bg-[#BCF2F6] px-4 py-10 md:px-32">
			<div className="z-10">
				<div
					className="wave absolute -top-16 left-0 z-50 h-[4rem] w-full"
					id="wave1"
				/>
				<div
					className="wave absolute -top-16 left-0 z-50 h-[4rem] w-full"
					id="wave2"
				/>
				<div
					className="wave absolute -top-16 left-0 z-50 h-[4rem] w-full"
					id="wave3"
				/>
				<div
					className="wave absolute -top-16 left-0 z-50 h-[4rem] w-full"
					id="wave4"
				/>
			</div>
			<div className="mx-auto flex w-full flex-row md:gap-0 justify-center items-center">
				<ul className="flex gap-8 text-[#153666] justify-center items-center">
					<Link
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[#153666] hover:text-[#1a2f4d] transition-colors"
					>
						<FaLinkedin size={24} />
					</Link>
					<Link
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[#153666] hover:text-[#060e1c] transition-all"
					>
						<FaGithub size={24} />
					</Link>
					<Link
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[#153666] hover:text-[#1a2f4d] transition-all"
					>
						<FaInstagram size={24} />
					</Link>
				</ul>
			</div>
			<div className="mx-auto flex w-full flex-row md:gap-0 justify-center items-center">
				<ul className="flex gap-8 text-[#153666] justify-center items-center">
					<li><Link href="#" className="hover:text-[#1a2f4d] transition-colors">Home</Link></li>
					<li><Link href="#" className="hover:text-[#1a2f4d] transition-colors">About</Link></li>
					<li><Link href="#" className="hover:text-[#1a2f4d] transition-colors">Services</Link></li>
					<li><Link href="#" className="hover:text-[#1a2f4d] transition-colors">Pricing</Link></li>
                    <li><Link href="#" className="hover:text-[#1a2f4d] transition-colors">Contact</Link></li>


				</ul>
			</div>
			<div className="text-[#153666] border-t-2 border-[#1a2f4d] pt-2 text-center font-mono text-xs md:text-base">
             Trailgo or its contributors. © 2024 All rights reserved 
			</div>
		</div>
	);
}

export default Footer;