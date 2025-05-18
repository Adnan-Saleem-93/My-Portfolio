import SectionTemplate from '../templates/Section-Template'

import { Icon } from '@iconify/react'

const SKILL_ICONS = [
  { title: 'React', iconName: 'skill-icons:react-dark', customClasses: '' },
  { title: 'Next.js', iconName: 'skill-icons:nextjs-light', customClasses: '' },
  {
    title: 'JavaScript',
    iconName: 'skill-icons:javascript',
    customClasses: '',
  },
  {
    title: 'TypeScript',
    iconName: 'skill-icons:typescript',
    customClasses: '',
  },
  { title: 'HTML', iconName: 'skill-icons:html', customClasses: '' },
  { title: 'CSS', iconName: 'skill-icons:css', customClasses: '' },
  {
    title: 'Tailwind CSS',
    iconName: 'skill-icons:tailwindcss-dark',
    customClasses: '',
  },
  { title: 'Node.js', iconName: 'skill-icons:nodejs-dark', customClasses: '' },
  {
    title: 'Express.js',
    iconName: 'skill-icons:expressjs-light',
    customClasses: '',
  },
  { title: 'MongoDB', iconName: 'skill-icons:mongodb', customClasses: '' },
  {
    title: 'Microsoft SQL Server',
    iconName: 'devicon:microsoftsqlserver-wordmark',
    customClasses: 'bg-slate-400 rounded-2xl p-1',
  },
  { title: 'Git', iconName: 'skill-icons:git', customClasses: '' },
  { title: 'GitHub', iconName: 'skill-icons:github-light', customClasses: '' },
  { title: 'npm', iconName: 'skill-icons:npm-dark', customClasses: '' },
  {
    title: 'Sanity CMS',
    iconName: 'devicon:sanity',
    customClasses: 'rounded-2xl',
  },
  { title: 'Vite', iconName: 'skill-icons:vite-dark', customClasses: '' },
  {
    title: 'Material UI',
    iconName: 'skill-icons:materialui-light',
    customClasses: '',
  },
  { title: 'C#', iconName: 'skill-icons:cs', customClasses: '' },
  { title: '.NET', iconName: 'skill-icons:dotnet', customClasses: '' },
  { title: 'Postman', iconName: 'skill-icons:postman', customClasses: '' },
  { title: 'Python', iconName: 'skill-icons:python-light', customClasses: '' },
  { title: 'Prisma ORM', iconName: 'skill-icons:prisma', customClasses: '' },
  {
    title: 'Notion',
    iconName: 'skill-icons:notion-light',
    customClasses: '',
  },
]
const Skills = async () => {
  return (
    <SectionTemplate sectionHeaderText="Skills">
      <div className="flex flex-wrap gap-5 items-center">
        {SKILL_ICONS.map((skill: any) => {
          return (
            <div key={skill.iconName} title={skill.title}>
              <Icon
                icon={skill.iconName}
                className={`h-16 w-16 ${skill.customClasses}`}
              />
            </div>
          )
        })}
      </div>
    </SectionTemplate>
  )
}

export default Skills
