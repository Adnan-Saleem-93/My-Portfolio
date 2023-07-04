import { range } from "@/utils/helper-methods";
import {ReactNode, useState, useEffect} from 'react'
import ProjectSkeleton from '@/components/project-skeleton'
// import { getRepos } from "@/utils/apis";
import { IProject } from "@/utils/interfaces";
import Project from "@/components/project";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { GITHUB_REPOS_URL } from "@/utils/constants";

export const getServerSideProps: GetServerSideProps<{
  projects:IProject[]
}> = async () => {
  let projects : IProject[] = []
  try {
      const response = await fetch(GITHUB_REPOS_URL);
      const data = await response.json()
      projects = data.map((item:IProject): IProject=> {
          const { id, name, html_url, homepage} = item
          return { id, name, html_url ,homepage}
      })
      projects = projects.filter((x:IProject)=>x.homepage)
  } catch (error) {
      projects = []
  }
  return { props: { projects } }
}

const Projects = ({projects=[]}:InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(projects);
  // const [projects, setProjects] = useState<IProject[]>([])
  // const getReposHandler = async () => { 
  //   const reposList: IProject[] | [] = await getRepos()
  //   setProjects(reposList.filter(x=>x.homepage))
  // }
  // useEffect(() => {
  //   getReposHandler()
  
  //   return () => {
  //     setProjects([])
  //   }
  // }, [])
  
  return (
    <>
      <div id='projects' className='w-full md:h-screen text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8 w-full flex justify-center items-center flex-col'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
              Projects
            </p>
            <p className='py-6 text-2xl'>Check out some of my most recent work</p>
          </div>
          {/* Container */}
          <div className='flex p-4 items-center w-full h-[55%] overflow-x-auto'>
            {/* Grid Item */}
            {projects?.length ? projects.map((item:IProject):ReactNode=>{
                return <Project key={item.id} {...item}/>
            }): range(6).map((item:number):ReactNode=>{
              return (
                <ProjectSkeleton key={item}/>
              )
            })}
          </div>
        </div>
      </div>
    </>
    );
}

export default Projects