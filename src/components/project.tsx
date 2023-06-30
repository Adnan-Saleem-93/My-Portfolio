import { IProject } from "@/utils/interfaces"
import Image, { StaticImageData } from "next/image";
import { FaCode, FaEye } from "react-icons/fa"
import { GoLinkExternal } from "react-icons/go";

// Import all images one by one from /assets/images folder
import birthday_reminder from '../assets/images/birthday-reminder.jpeg'
import cart from '../assets/images/cart.jpeg'
import color_generator from '../assets/images/color-generator.jpg'
import experience from '../assets/images/experience.jpeg'
import lorem_ipsum_generator from '../assets/images/lorem-ipsum-generator.jpeg'
import menu from '../assets/images/menu.jpeg'
import questions from '../assets/images/questions.jpeg'
import reviews from '../assets/images/reviews.jpeg'
import slider from '../assets/images/slider.jpeg'
import tours from '../assets/images/tours.jpeg'
import to_do_list from '../assets/images/to-do-list.jpeg'
import sidebar from '../assets/images/sidebar.jpg'
import socio from '../assets/images/socio.jpeg'
import no_thumbnail from '../assets/images/no-thumbnail.jpg'
import payment_form from '../assets/images/payment-form.jpeg'

const images : Array<StaticImageData> = [
    birthday_reminder,
    cart,
    color_generator,
    experience,
    lorem_ipsum_generator,
    menu,
    questions,
    reviews,
    slider,
    tours,
    to_do_list,
    sidebar,
    socio,
    payment_form
]

const Project = ({name,html_url,homepage}:IProject) => {
    const imgVar:string = name.toLowerCase()
    const imgSrc:StaticImageData= images.find(x=>x.src.includes(imgVar)) || no_thumbnail
  return (
    <div className='m-2 h-[18rem] bg-cyan-900 shadow-lg shadow-[#040c16] rounded-md flex justify-center items-center'>
        <div className='flex justify-evenly items-center flex-col w-[300px] h-full group'>
            {imgSrc && <Image className=" h-[300px]" src={imgSrc} alt={name} style={{objectFit:'cover',objectPosition:'center',zIndex:0, maxHeight:'300px !important',height:'300px !important', width:'300px',}} /> }
            <span className='group-hover:hidden flex items-center justify-center w-[75%] h-[24px] rounded-md my-4 text-lg text-center font-bold text-white'>
                {name.replaceAll("-"," ")}
            </span>
            <div className='text-center flex w-full hidden group-hover:flex'>
                <a href={html_url} target="_blank" className="flex hover:bg-fuchsia-700 justify-center items-center min-w-[120px] w-[50%] px-4 py-4 bg-sky-700">
                    <span className='flex justify-center items-center text-center text-white font-bold text-md w-full'>
                        Code
                        <GoLinkExternal className="ml-1" size={20}/>
                    </span>
                </a>
                <a href={homepage} target="_blank" className="flex hover:bg-fuchsia-900 justify-center items-center min-w-[120px] w-[50%] px-4 py-4 bg-blue-900">
                    <span className='flex justify-center items-center text-center text-white font-bold text-md'>
                        Preview
                        <GoLinkExternal className="ml-1" size={20}/>
                    </span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Project
