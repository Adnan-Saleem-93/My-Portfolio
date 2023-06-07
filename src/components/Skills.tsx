"use client";
import { range } from '@/utils/helper-methods';
import {ReactNode} from 'react'


interface Skill{
    id: string;
    name:string;
    level:number;
}

const skills: Skill[] = [
    {id:'html',name:'HTML',level:4},
    {id:'css',name:'CSS',level:3},
    {id:'javascript',name:'JavaScript',level:4},
    {id:'jQuery',name:'jQuery',level:4},
    {id:'reactjs',name:'React JS',level:5},
    {id:'react_native',name:'React Native',level:1},
    {id:'nodejs',name:'Node JS',level:3},
    {id:'expressjs',name:'Express JS',level:3},
    {id:'mongodb',name:'MongoDB',level:3},
    {id:'c#',name:'C#',level:4},
    {id:'asp.net',name:'ASP.NET MVC',level:5},
    {id:'.net_core',name:'.NET Core',level:3},
    {id:'entity_framework',name:'Entity Framework',level:3},
    {id:'windows_services',name:'Windows Services',level:4},
    {id:'ms_sql_server',name:'MS SQL Server',level:4},
    {id:'typescript',name:'TypeScript',level:2},
    {id:'material_ui',name:'Material UI',level:4},
    {id:'bootstrap',name:'Bootstrap',level:4},
    {id:'tailwind_css',name:'Tailwind CSS',level:2},
    {id:'restful_api',name:'RESTful APIs',level:3},
    {id:'git',name:'Git',level:3},
]

const Skills = () => {
    const renderSkillLevel = (level:number) :ReactNode[] => {
        return range(5).map((item) : ReactNode=>{
             if(item < level){
                 return (
                     <span key={item} className={`h-[16px] w-[16px] bg-cyan-400 rounded-full mx-2`}>
                     </span>
                 )
             } else{
                 return (
                     <span key={item} className={`h-[16px] w-[16px] bg-gray-900 rounded-full mx-2`}>
                     </span>
                 )
             }
         })
     }

    return (
        <div id='skills' className='w-full h-screen bg-cyan-950 text-gray-300'>
          {/* Container */}
          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
              <div className=' w-full flex justify-center items-center flex-col mb-7'>
                  <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
              </div> 
              <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-x-8 text-center py-8'>
                {skills.map((item): ReactNode =>{
                    const {id,name,level} = item;
                    return (
                    <div key={id} className='flex justify-between items-center p-4 hover:border-x-2 hover:border-slate-400 hover:border-solid hover:font-bold'>
                        <p className='inline'>{name}</p>
                        <div className='flex'>{renderSkillLevel(level)}</div>
                    </div>
                    )
                })}
              </div>
          </div>
        </div>
      );
}

export default Skills