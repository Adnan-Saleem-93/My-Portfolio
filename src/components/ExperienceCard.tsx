import Image, { StaticImageData } from "next/image";

type Props = {
	imgSrc: StaticImageData;
	alt: string;
	name: string;
};

const ExperienceCard = ({ imgSrc, alt, name }: Props) => {
	return (
		<div className="m-4 flex flex-col justify-center items-center min-w-1/2 w-1/2">
			<Image
				src={imgSrc}
				alt={alt}
				className="rounded-full w-32 h-32 object-cover mb-4"
			/>
			<h3 className="text-bold text-2xl text-gray-300 tracking-wide">{name}</h3>
		</div>
	);
};

export default ExperienceCard;
