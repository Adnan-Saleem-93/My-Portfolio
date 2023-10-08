import {type SchemaTypeDefinition} from 'sanity'

import skill from './schemas/skill'

import project from './schemas/project'
import experience from './schemas/experience'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [skill, experience, project]
}
