"use client";

import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { ReactNode } from 'react';
import { IContactItem } from '@/utils/interfaces';

const contactItems:IContactItem[]=[
  {id:'linkedin',name:'LinkedIn', icon:FaLinkedin, href:'https://www.linkedin.com/in/adnan-saleem-199151181',background:'bg-[#0C64C5]'},
  {id:'github',name:'Github', icon:FaGithub, href:'https://github.com/Adnan-Saleem-93',background:'bg-[#333333]' },
  {id:'email',name:'Email', icon:HiOutlineMail, href:"mailto:adnan13893@gmail.com",background:'bg-fuchsia-900'},
  {id:'resume',name:'Resume', icon:BsFillPersonLinesFill, href:'https://firebasestorage.googleapis.com/v0/b/portfolio-d37f4.appspot.com/o/Adnan%20Saleem%20Resume.pdf?alt=media&token=48dba14a-6087-4c0a-92e5-d630f9a9b768', background:'bg-[#074369]' },
]

const Contact = () => {
  return (
    <div id='contact' className='w-full h-screen bg-cyan-950 flex flex-col justify-center items-center p-4'>
        <div className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-16 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
            </div>
        </div>
        <div>
            <ul className='grid grid-cols-2 gap-4'>
              {contactItems.map((contact):ReactNode=>{
                const {id,name,href,icon:Icon,background} = contact;
                return (
                  <li key={id} className={`w-[200px] h-[200px] flex justify-between border-2 border-slate-500 border-solid items-center mx-4 rounded-md duration-300 ${background} hover:scale-110`}>
                      <a
                      className='flex flex-col justify-evenly h-full items-center w-full text-gray-300'
                      href={href}
                      target='_blank'
                      >
                        <Icon size={50} />
                        <span className='font-bold text-2xl'>{name}</span>
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