"use client";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import ImmentiaLogo from "../../public/images/immentia-logo.png";
import IntelligenesLogo from "../../public/images/intelligenes-logo.png";

type Props = {};

const Experience = (props: Props) => {
	return (
		<section id="#experience" className="snap-center">
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
				className="h-screen flex flex-col md:flex-row relative text-center md:text-left mx-auto max-w-7xl px-10 justify-evenly items-center"
			>
				<h3 className="absolute top-24 text-2xl uppercase tracking-[12px] text-gray-400/80">
					Experience
				</h3>

				<div className="flex justify-start items-center w-full">
					<ExperienceCard
						imgSrc={IntelligenesLogo}
						alt="intelligenes"
						name="Intelligenes"
					/>
					<ExperienceCard
						imgSrc={ImmentiaLogo}
						alt="immentia"
						name="Immentia"
					/>
				</div>
			</motion.div>
		</section>
	);
};

export default Experience;
