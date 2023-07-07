"use client";
import { motion } from "framer-motion";

type Props = {};

const Skills = (props: Props) => {
	return (
		<section id="#skills" className="snap-center">
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
				className="h-screen flex flex-col md:flex-row relative text-center md:text-left mx-auto max-w-7xl px-10 justify-evenly items-center"
			>
				<h3 className="absolute top-24 text-2xl uppercase tracking-[12px] text-gray-400/80">
					Skills
				</h3>
			</motion.div>
		</section>
	);
};

export default Skills;
