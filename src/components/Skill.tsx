import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

type Props = { alt: string; img: StaticImageData | null; direction?: string };

export default function Skill({ alt = "", img, direction = "left" }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0, x: direction === "left" ? -200 : 200 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 1.5 }}
			className="flex--centered--row group relative rounded-full lg:m-6 m-12 lg:w-48 lg:h-48 md:w-32 md:h-32 border border-gray-600"
		>
			Skill
			<div className="flex--centered--row absolute top-0 text-emerald-900 text-4xl font-bold rounded-full lg:w-48 lg:h-48 md:w-32 md:h-32 group-hover:opacity-80 opacity-0 transition-all duration-200 ease-in-out bg-slate-300">
				100%
			</div>
		</motion.div>
	);
}
