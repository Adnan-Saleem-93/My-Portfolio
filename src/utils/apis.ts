import {IGithubRepo} from './interfaces'
import {GITHUB_REPOS_URL} from './constants'
import {client} from '../../sanity/lib/client'

export const getRepos = async (): Promise<IGithubRepo[] | []> => {
  try {
    const response = await fetch(GITHUB_REPOS_URL)
    const data = await response.json()
    return data.map((item: IGithubRepo): IGithubRepo => {
      const {id, name, html_url, homepage} = item
      return {id, name, html_url, homepage}
    })
  } catch (error) {
    return []
  }
}
export async function getExperience() {
  const experience = await client.fetch('*[_type == "experience"]')
  return experience
}

export async function getSkills() {
  const experience = await client.fetch('*[_type == "skill"]')
  return experience
}
