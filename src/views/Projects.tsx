import { range } from "@/utils/helper-methods";
import {ReactNode} from 'react'
import ProjectSkeleton from '../components/project-skeleton'
import { getRepos } from "@/utils/apis";
import { IProject } from "@/utils/interfaces";
import Project from "@/components/project";

const Projects = async () => {
  const repos: IProject[] | null = await getRepos()
  
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
          <div className='flex flex justify-center items-center w-full h-[55%] overflow-x-auto gap-x-12 gap-y-4'>
            {/* Grid Item */}
            {repos?.length? repos.map((item:IProject):ReactNode=>{
              if(item.homepage){
                return <Project key={item.id} {...item}/>
              }
            }): range(6).map((item:number):ReactNode=>{
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