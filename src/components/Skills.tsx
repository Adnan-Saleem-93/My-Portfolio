import {ReactNode} from 'react'
interface Skill{
    id: string;
    name:string;
}

const skills: Skill[] = [
    {id:'html',name:'HTML'},
    {id:'css',name:'CSS'},
    {id:'javascript',name:'JavaScript'},
    {id:'jQuery',name:'jQuery'},
    {id:'reactjs',name:'React JS'},
    {id:'nodejs',name:'Node JS'},
    {id:'expressjs',name:'Express JS'},
    {id:'mongodb',name:'MongoDB'},
    {id:'c#',name:'C#'},
    {id:'asp.net',name:'ASP.NET MVC'},
    {id:'.net/core',name:'.NET Core'},
    {id:'windows_services',name:'Windows Services'},
    {id:'ms_sql_server',name:'MS SQL Server'},
    {id:'typescript',name:'TypeScript'},
    {id:'material_ui',name:'Material UI'},
    {id:'bootstrap',name:'Bootstrap'},
    {id:'tailwind_css',name:'Tailwind CSS'},
    {id:'restful_api',name:'RESTful APIs'},
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