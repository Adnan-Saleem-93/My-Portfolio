"use client";

import {
	Cursor,
	useTypewriter,
	TypewriterHelper,
} from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import profilePic from "../../public/images/my-pic.jpg";
import Link from "next/link";
import { ILinkItem } from "@/utils/interfaces";
import { ReactNode } from "react";

const links: ILinkItem[] = [
	{ name: "About", href: "#about" },
	{ name: "Experience", href: "#experience" },
	{ name: "Projects", href: "#projects" },
	{ name: "Skills", href: "#skills" },
];

const Main = (): ReactNode => {
	const [text, count]: [text: string, count: TypewriterHelper] = useTypewriter({
		words: [
			"Hi, I'm Adnan Saleem!",
			"Software Engineer",
			"<b>Loves to Code</b>",
		],
		loop: true,
		delaySpeed: 3000,
		deleteSpeed: 100,
	});
	return (
		<section id="main" className="snap-start">
			<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
				<BackgroundCircles />
				<Image
					src={profilePic}
					alt="profile-avatar"
					className="rounded-full object-cover"
					width={150}
					height={150}
				/>
				<div className="z-20">
					<h1 className="text-md py-2 text-gray-400 tracking-[12px] uppercase">
						Full Stack Web Developer
					</h1>
					<h1 className="text-5xl py-2">
						<span>{text}</span>
						<Cursor cursorColor="#ffff00" />
					</h1>
					<div className="flex justify-center items-center pb-2">
						{links.map((link: ILinkItem, index: number) => {
							return (
								<Link href={link.href} key={index}>
									<button className="link_button">{link.name}</button>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Main;
