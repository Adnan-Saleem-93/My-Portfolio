const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen bg-cyan-950 text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="sm:text-right">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            About
          </p>
        </div>
        <div className=" py-16 rounded-md  flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I&apos;m Adnan Saleem, nice to meet you.
              </p>
            </div>
            <div>
              <p>
                
                A software developer with experience in building Responsive and
                Scalable Web apps. I am well-experienced in Full-stack Web Development, 
                capable of working on both Frontend and Backend Applications, as well as
                Databases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About