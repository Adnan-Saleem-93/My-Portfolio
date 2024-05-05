import {generalImageURL} from '@/utils/helper-methods'
import {getProjects} from '@/utils/apis'
import Project from '@/components/molecules/Project'
import SectionTemplate from '@/components/templates/Section-Template'

const ProjectsPage = async () => {
  const projects = await getProjects()

  return (
    <SectionTemplate
      classes="h-screen flex flex-col text-center md:text-left mx-auto px-2 md:px-10 justify-evenly items-center"
      sectionHeaderText="Projects"
    >
      <div className="w-full flex overflow-x-auto z-20 space-x-12">
        {projects.map((project: any, index: number) => {
          const {projectName, projectDescription, codeUrl, demoUrl, projectImage} = project
          const imgSrc: string = generalImageURL(projectImage)
          return (
            <Project
              key={index}
              title={projectName}
              imgSrc={imgSrc}
              description={projectDescription}
              link={demoUrl}
              repo={codeUrl}
            />
          )
        })}
      </div>
    </SectionTemplate>
  )
}

export default ProjectsPage
