import {defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'projectName',
      title: 'Project Name',
      type: 'string'
    },
    {
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Project Name'
        }
      ]
    },
    {
      name: 'projectDescription',
      title: 'Project Description',
      type: 'string'
    },
    {
      name: 'demoUrl',
      title: 'Demo',
      type: 'string'
    },
    {
      name: 'codeUrl',
      title: 'Repository',
      type: 'string'
    }
  ]
})
