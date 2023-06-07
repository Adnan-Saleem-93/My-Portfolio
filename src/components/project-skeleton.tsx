const ProjectSkeleton = () => {
  return (
    <div className='w-[20rem] h-[17.5rem] bg-cyan-900 shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center mx-auto'>
        <div className='animate-pulse flex justify-center items-center flex-col'>
          <div className='w-[75%] h-[24px] rounded-md my-4 bg-slate-800 text-lg font-bold text-white'>
          </div>
          <div className='text-center w-[16rem] h-[16px] rounded-md bg-slate-800'></div>
          <div className='pt-8 text-center flex'>
              <div className='w-[6rem] h-[2.5rem] text-center rounded-lg px-4 py-3 m-2 bg-slate-800 text-gray-700 font-bold text-lg'>
              </div>
              <div className='w-[6rem] h-[2.5rem] text-center rounded-lg px-4 py-3 m-2 bg-slate-800 text-gray-700 font-bold text-lg'>
              </div>
          </div>
        </div>
    </div>
  )
}

export default ProjectSkeleton