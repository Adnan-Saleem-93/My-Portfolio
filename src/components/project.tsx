import { IProject } from "@/utils/interfaces"

const Project = ({id,name,html_url,homepage}:IProject) => {
  return (
    <div className='p-4 h-[17.5rem] bg-cyan-900 shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center mx-auto'>
        <div className='flex justify-center items-center flex-col'>
            <span className='w-[75%] h-[24px] rounded-md my-4 text-lg text-center font-bold text-white'>
                {name.replaceAll("-"," ")}
            </span>
            <div className='pt-8 text-center flex'>
                <a href={html_url} target="_blank">
                    <span className='text-center text-white rounded-lg px-4 py-3 m-2 bg-slate-800 text-gray-700 font-bold text-lg'>
                        Code
                    </span>
                </a>
                <a href={homepage} target="_blank">
                    <span className='text-center text-white rounded-lg px-4 py-3 m-2 bg-slate-800 text-gray-700 font-bold text-lg'>
                        Demo
                    </span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Project