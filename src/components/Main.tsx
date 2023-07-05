"use client";

import {
	Cursor,
	useTypewriter,
	TypewriterHelper,
} from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Main = (props: Props) => {
	const [text, count]: [text: string, count: TypewriterHelper] = useTypewriter({
		words: [
			"Hi, I'm Adnan Saleem!",
			"Full Stack Web Developer",
			"<b>Loves to Code</b>",
		],
		loop: true,
		delaySpeed: 3000,
		deleteSpeed: 100,
	});
	return (
		<section id="main" className="snap-center">
			<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
				<BackgroundCircles />
				<h1 className="text-6xl">
					<span>{text}</span>
					<Cursor cursorColor="#ffff00" />
				</h1>
			</div>
		</section>
	);
};

export default Main;
