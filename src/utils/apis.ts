import { client } from '../../sanity/lib/client'

export async function getProjects() {
  try {
    const projects = await client.fetch(
      '*[_type == "project"]',
      {},
      { next: { revalidate: 600 } }
    )
    return projects
  } catch (error) {
    return []
  }
}
export async function getExperience() {
  try {
    const experience = await client.fetch(
      '*[_type == "experience"]',
      {},
      { next: { revalidate: 600 } }
    )
    return experience
  } catch (error) {
    return []
  }
}

export async function getSkills() {
  try {
    const skills = await client.fetch(
      '*[_type == "skill"]',
      {},
      { next: { revalidate: 600 } }
    )
    return skills
  } catch (error) {
    return []
  }
}
