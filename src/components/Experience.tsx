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
						period="Apr 04, 2022 - Present"
						details={[
							"Joined as Frontend (ReactJS) Developer",
							"Currently working on a large-scale project (Rungjumper) for a client in the US",
							"Served as Team Lead for RungJumper project and also developed most of the frontend for it",
							"Supervised junior React developers on other projects as well.",
						]}
					/>
					<ExperienceCard
						imgSrc={ImmentiaLogo}
						alt="immentia"
						name="Immentia"
						period="Nov 26, 2019 - Mar 26, 2022"
						details={["Joined as ASP.NET intern."]}
					/>
				</div>
			</motion.div>
		</section>
	);
};

export default Experience;
