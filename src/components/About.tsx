"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import myPic2 from "../../public/images/my-pic-2.jpg";

type Props = {};

const About = (props: Props) => {
	return (
		<section id="about" className="snap-center">
			<div className="h-screen flex flex-col relative md:flex-row px-10 justify-evenly items-center">
				<h3 className="absolute top-24 text-3xl uppercase tracking-[12px] text-gray-400">
					About
				</h3>
				<div className="flex items-center justify-center">
					<motion.div
						initial={{ x: -200, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 1.25 }}
						viewport={{ once: true }}
						className="md:max-w-[25%] w-[25%]"
					>
						<Image
							src={myPic2}
							alt="about-section-pic"
							className="-mb-20 md:mb-0 flex-shrink-0 object-cover rounded-full md:rounded-lg md:w-64
               md:h-64 w-56 h-56 xl:w-[400px] xl:h-[400px] py-2 px-6"
						/>
					</motion.div>
					<motion.div
						initial={{ x: 200, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 1.25 }}
						viewport={{ once: true }}
						className="md:max-w-3xl w-3xl py-2 px-6"
					>
						<p className="inline tracking-wider leading-8">
							I'm a Full Stack Web Developer having more than 3 & a half years
							of industry experience in Web Development. I love to work on web
							applications using technologies like JavaScript, React JS, MERN
							Stack, C#, .NET & MS SQL Server. I have experience in building
							Responsive and Scalable Web apps. I am well-experienced in
							Full-stack Web Development, capable of working on both Frontend
							and Backend Applications, as well as Databases.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
