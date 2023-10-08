import {defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      type: 'string',
      title: 'Company Name'
    },
    {
      name: 'companyImage',
      title: 'Company Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Company Name'
        }
      ]
    },
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string'
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime'
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'datetime'
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string'}]
    }
  ]
})
