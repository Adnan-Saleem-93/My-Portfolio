"use client";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
	return (
		<header className="w-full flex justify-between md:justify-around items-center sticky top-0">
			<motion.div
				initial={{ x: -500, scale: 0.5, opacity: 0 }}
				animate={{ x: 0, scale: 1, opacity: 1 }}
				transition={{ duration: 1.25 }}
			>
				<SocialIcon
					url="https://www.linkedin.com/in/adnan-saleem-199151181"
					target="_blank"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://twitter.com/DaniMalik_i"
					target="_blank"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://github.com/Adnan-Saleem-93"
					target="_blank"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.facebook.com/profile.php?id=100082987400951"
					target="_blank"
					fgColor="gray"
					bgColor="transparent"
				/>
			</motion.div>
			<motion.div
				initial={{ x: 500, scale: 0.5, opacity: 0 }}
				animate={{ x: 0, scale: 1, opacity: 1 }}
				transition={{ duration: 1.25 }}
				className="cursor-pointer flex items-center group"
			>
				<SocialIcon network="email" fgColor="gray" bgColor="transparent" />
				<p className="text-gray-400 opacity-0 group-hover:opacity-100 duration-500">
					Get In Touch!
				</p>
			</motion.div>
		</header>
	);
};

export default Header;
