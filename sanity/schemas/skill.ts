import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title'
    }),
    defineField({
      name: 'skillImage',
      title: 'Skill image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Skill'
        }
      ]
    }),
    defineField({
      name: 'proficiency',
      title: 'Proficiency',
      type: 'string'
    })
  ]

  //   preview: {
  //     select: {
  //       skillImg: 'skillImage',
  //       proficiency: 'proficiency'
  //     }
  //   }
})
