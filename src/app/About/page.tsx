"use client";

import { ITechnology } from '@/utils/interfaces';
import { ReactNode } from 'react';

const technologies: ITechnology[] = [
  {id:'javascript',name:'JavaScript'},
  {id:'reactjs',name:'React JS'},
  {id:'mern',name:'MERN Stack'},
  {id:'c#',name:'C#'},
  {id:'.net',name:'.NET'},
  {id:'ms_sql',name:'MS SQL Server'},
]


const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="sm:text-right">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            About
          </p>
        </div>
        <div className=" py-16 rounded-md flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[800px] w-full grid gap-8 px-4 text-[20px]">
            <p className="text-gray-300 py-4">
              I have more than <span className='font-bold text-white'>3 & a half years of experience</span> in Web Development.
              I love to work on web applications using technologies like
              {technologies.map((technology,index):ReactNode=>{
                return <span key={technology.id} className='font-bold text-white'> {technology.name} {index===technologies.length-2 ? <span className='font-light'>&</span>
                : index===technologies.length-1 ? "." : ","
                }</span>
              })}
            </p>
            <p> 
              I have experience in building Responsive and
              Scalable Web apps. I am well-experienced in Full-stack Web Development, 
              capable of working on both Frontend and Backend Applications, as well as
              Databases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About