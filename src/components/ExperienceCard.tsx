import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

type Props = {
	imgSrc: StaticImageData;
	alt: string;
	name: string;
	period: string;
	details: string[];
};

const ExperienceCard = ({ imgSrc, alt, name, period, details }: Props) => {
	return (
		<div className="m-4 flex flex-col justify-center items-center min-w-1/2 w-1/2 border border-gray-500 p-6 rounded-lg bg-slate-700">
			<Image
				src={imgSrc}
				alt={alt}
				className="rounded-full w-32 h-32 object-cover mb-4"
			/>
			<h3 className="text-bold text-2xl text-gray-300 tracking-wide mb-1">
				{name}
			</h3>
			<p className="text-gray-400 text-sm mb-1">{period}</p>
			<ul className="list-disc max-w-sm">
				{details.map((detail: string, index: number): ReactNode => {
					return (
						<li key={index} className="text-gray-400 text-sm">
							{detail}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ExperienceCard;
