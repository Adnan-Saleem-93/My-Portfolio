import { IProject } from "@/utils/interfaces"
import { FaCode, FaEye } from "react-icons/fa"
import { GoLinkExternal } from "react-icons/go";

const Project = ({id,name,html_url,homepage}:IProject) => {
  return (
    <div className='m-2 h-[18rem] bg-cyan-900 shadow-lg shadow-[#040c16] rounded-md flex justify-center items-center'>
        <div className='flex justify-evenly items-center flex-col w-[300px] h-full'>
            <span className='w-[75%] h-[24px] rounded-md my-4 text-lg text-center font-bold text-white'>
                {name.replaceAll("-"," ")}
            </span>
            <div className='mt-12 text-center flex'>
                <a href={html_url} target="_blank" className="group flex justify-center items-center min-w-[100px] px-4 py-3 m-2 bg-sky-700 hover:border-solid hover:border-[1px] hover:border-sky-500 rounded-lg">
                    <span className='group-hover:hidden'>
                        <FaCode className="text-white font-bold text-lg" size={30}/>
                    </span>
                    <span className='group-hover:flex items-center hidden text-center text-white font-bold text-md'>
                        Code
                        <GoLinkExternal className="ml-1" size={20}/>
                    </span>
                </a>
                <a href={homepage} target="_blank" className="group flex justify-center items-center min-w-[100px] px-4 py-3 m-2 bg-sky-600/50 hover:border-solid hover:border-[1px] hover:border-sky-500 rounded-lg">
                    <span className='group-hover:hidden'>
                        <FaEye className="text-white font-bold text-md" size={30}/>
                    </span>
                    <span className='group-hover:flex items-center hidden text-center text-white font-bold text-md'>
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