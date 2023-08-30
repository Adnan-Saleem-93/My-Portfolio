import Project from '../molecules/Project'
import ImmentiaLogo from '../../../public/images/immentia-logo.png'
import SectionTemplate from '../templates/Section-Template'

const projects = [
  {
    title: 'Project',
    description: 'This is a test project description',
    imgSrc: ImmentiaLogo,
    link: '',
    repo: ''
  },
  {
    title: 'Project',
    description: 'This is a test project description',
    imgSrc: ImmentiaLogo,
    link: '',
    repo: ''
  },
  {
    title: 'Project',
    description: 'This is a test project description',
    imgSrc: ImmentiaLogo,
    link: '',
    repo: ''
  },
  {
    title: 'Project',
    description: 'This is a test project description',
    imgSrc: ImmentiaLogo,
    link: '',
    repo: ''
  },
  {
    title: 'Project',
    description: 'This is a test project description',
    imgSrc: ImmentiaLogo,
    link: '',
    repo: ''
  },
  {
    title: 'Project',
    description: 'This is a test project description',
    imgSrc: ImmentiaLogo,
    link: '',
    repo: ''
  },
  {
    title: 'Project',
    description: 'This is a test project description',
    imgSrc: ImmentiaLogo,
    link: '',
    repo: ''
  },
  {
    title: 'Project',
    description: 'This is a test project description',
    imgSrc: ImmentiaLogo,
    link: '',
    repo: ''
  },
  {
    title: 'Project',
    description: 'This is a test project description',
    imgSrc: ImmentiaLogo,
    link: '',
    repo: ''
  }
]

const Projects = () => {
  return (
    <SectionTemplate
      classes="h-screen flex flex-col md:flex-row relative text-center md:text-left mx-auto px-2 md:px-10 justify-evenly items-center"
      sectionHeaderText="Projects"
    >
      <div className="relative top-8 w-full flex overflow-x-auto z-20 space-x-12">
        {projects.map((project, index) => {
          return <Project key={index} {...project} />
        })}
      </div>
    </SectionTemplate>
  )
}

export default Projects
