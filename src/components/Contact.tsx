import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { ReactNode } from 'react';

interface ConnectItem{
  id:string;
  name:string;
  icon:IconType;
  href?:string;
  background:string;
}

const contactItems:ConnectItem[]=[
  {id:'linkedin',name:'LinkedIn',icon:FaLinkedin,href:'/',background:'bg-blue-600'},
  {id:'github',name:'Github',icon:FaGithub,href:'/',background:'bg-[#333333]'},
  {id:'email',name:'Email',icon:HiOutlineMail,href:'/',background:'bg-[#6fc2b0]'},
  {id:'resume',name:'Resume',icon:BsFillPersonLinesFill,href:'/',background:'bg-[#565f69]'},
]

const Contact = () => {
  return (
    <div id='contact' className='w-full h-screen bg-cyan-950 flex flex-col justify-center items-center p-4'>
        <div className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
            </div>
        </div>
        <div>
            <ul className='flex flex-row'>
              {contactItems.map((contact):ReactNode=>{
                const {id,name,href,icon:Icon,background} = contact;
                return (
                  <li key={id} className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${background}`}>
                      <a
                      className='flex justify-between items-center w-full text-gray-300'
                      href={href}
                      >
                        <span>{name}</span> <Icon size={30} />
                      </a>
                  </li>
                )
              })}
            </ul>
        </div>
    </div>
  )
}

export default Contact