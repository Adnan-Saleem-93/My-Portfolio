import { range } from "@/utils/helper-methods";
import {ReactNode} from 'react'
import ProjectSkeleton from '../components/profile-skeleton'

interface Project{
  id:number;
  name:string;
  url:string;
  homepage:string;
}


const Projects = () => {
    return (
        <div id='projects' className='w-full md:h-screen text-gray-300 bg-cyan-950'>
          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8 w-full flex justify-center items-center flex-col'>
              <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
                Projects
              </p>
              <p className='py-6 text-2xl'>Check out some of my most recent work</p>
            </div>
            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4'>
              {/* Grid Item */}
              {range(6).map((item:number):ReactNode=>{
                return (
                  <ProjectSkeleton key={item}/>
                )
              })}
            </div>
          </div>
        </div>
      );
}

export default Projects