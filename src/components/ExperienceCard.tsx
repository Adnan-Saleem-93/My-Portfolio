import { ITechnology } from "@/utils/interfaces";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

type Props = {
	imgSrc: StaticImageData;
	alt: string;
	name: string;
	position: string;
	period: string;
	details: string[];
	technologies?: ITechnology[];
	webLink?: string;
};

const ExperienceCard = ({
	imgSrc,
	alt,
	name,
	position,
	period,
	details,
	webLink,
	technologies,
}: Props) => {
	return (
		<a
			href={webLink}
			target="_blank"
			className="m-4 flex flex-col justify-start items-center min-w-1/2 min-h-[30rem] h-[40rem] max-h-[40rem] overflow-auto w-1/2 p-6 rounded-2xl bg-gray-800 hover:bg-gray-900"
		>
			<Image
				src={imgSrc}
				alt={alt}
				className="rounded-full w-32 h-32 object-cover mb-4"
			/>
			<div className="flex flex-col justify-center items-start ">
				<h3 className="text-bold text-3xl text-gray-300 tracking-wide mb-1">
					{position}
				</h3>
				<h3 className="font-bold text-xl text-gray-200 tracking-wide mb-1">
					{name}
				</h3>
				<p className="text-gray-400 text-sm mb-1">{period}</p>
				<div className="flex justify-start items-center">
					{technologies?.map(
						(technology: ITechnology, index: number): ReactNode => {
							const { name, img } = technology;
							return <Image key={index} src={img} alt={name} />;
						}
					)}
				</div>
				<ul className="list-disc max-w-md">
					{details.map((detail: string, index: number): ReactNode => {
						return (
							<li key={index} className="text-gray-400 text-sm">
								{detail}
							</li>
						);
					})}
				</ul>
			</div>
		</a>
	);
};

export default ExperienceCard;
