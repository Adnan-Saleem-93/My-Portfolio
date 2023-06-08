import { IProject } from "@/utils/interfaces"

const Project = ({id,name,html_url,homepage}:IProject) => {
  return (
    <div className='m-2 h-[18rem] bg-cyan-900 shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center'>
        <div className='flex justify-evenly items-center flex-col w-[300px] h-full'>
            <span className='w-[75%] h-[24px] rounded-md my-4 text-lg text-center font-bold text-white'>
                {name.replaceAll("-"," ")}
            </span>
            <div className='mt-12 text-center flex'>
                <a href={html_url} target="_blank" className="">
                    <span className='hover:bg-slate-900 text-center text-white rounded-lg px-4 py-3 m-2 bg-slate-800 text-gray-700 font-bold text-lg'>
                        Code
                    </span>
                </a>
                <a href={homepage} target="_blank" className="">
                    <span className='hover:bg-slate-900 text-center text-white rounded-lg px-4 py-3 m-2 bg-slate-800 text-gray-700 font-bold text-lg'>
                        Preview
                    </span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Project