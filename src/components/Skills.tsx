"use client";
import { motion } from "framer-motion";
import Skill from "./Skill";

const skills = [
	{ img: null, alt: "" },
	{ img: null, alt: "" },
	{ img: null, alt: "" },
	{ img: null, alt: "" },
	{ img: null, alt: "" },
	{ img: null, alt: "" },
	{ img: null, alt: "" },
	{ img: null, alt: "" },
	{ img: null, alt: "" },
	{ img: null, alt: "" },
];

const Skills = () => {
	return (
		<section id="#skills" className="snap-center">
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
				className="h-screen flex flex-col justify-evenly md:flex-row relative text-center mx-auto max-w-7xl px-10 items-center"
			>
				<h3 className="absolute top-24 text-2xl uppercase tracking-[12px] text-gray-400/80">
					Skill
				</h3>
				<div className="flex flex-wrap justify-between mt-4">
					{skills.map((skill, index) => {
						return <Skill key={index} {...skill} />;
					})}
				</div>
			</motion.div>
		</section>
	);
};

export default Skills;
