import {ReactNode} from 'react'

type Levels = "Beginner" | "Intermediate" | "Advanced" | "Expert"
interface Skill{
    id: string;
    name:string;
    level:Levels;
}

const skills: Skill[] = [
    {id:'html',name:'HTML',level:'Expert'},
    {id:'css',name:'CSS',level:'Advanced'},
    {id:'javascript',name:'JavaScript',level:'Expert'},
    {id:'jQuery',name:'jQuery',level:"Advanced"},
    {id:'reactjs',name:'React JS',level:"Expert"},
    {id:'react_native',name:'React Native',level:"Beginner"},
    {id:'nodejs',name:'Node JS',level:"Intermediate"},
    {id:'expressjs',name:'Express JS',level:"Intermediate"},
    {id:'mongodb',name:'MongoDB',level:"Intermediate"},
    {id:'c#',name:'C#',level:"Intermediate"},
    {id:'asp.net',name:'ASP.NET MVC',level:"Advanced"},
    {id:'.net_core',name:'.NET Core',level:"Intermediate"},
    {id:'windows_services',name:'Windows Services',level:"Advanced"},
    {id:'ms_sql_server',name:'MS SQL Server',level:"Advanced"},
    {id:'typescript',name:'TypeScript',level:"Intermediate"},
    {id:'material_ui',name:'Material UI',level:"Advanced"},
    {id:'bootstrap',name:'Bootstrap',level:"Expert"},
    {id:'tailwind_css',name:'Tailwind CSS',level:"Intermediate"},
    {id:'restful_api',name:'RESTful APIs',level:"Advanced"},
]

const Skills = () => {
    return (
        <div id='skills' className='w-full h-screen bg-cyan-950 text-gray-300'>
          {/* Container */}
          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
              <div className=' w-full flex justify-center items-center flex-col mb-7'>
                  <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
              </div> 
              <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                {skills.map((item): ReactNode =>{
                    return (
                    <div key={item.id} className='bg-cyan-700 rounded-md hover:bg-cyan-600 hover:shadow-md hover:shadow-[#040c16] hover:text-slate-950 hover:font-semibold duration-500'>
                        <p className='my-4'>{item.name}</p>
                    </div>
                    )
                })}
              </div>
          </div>
        </div>
      );
}

export default Skills