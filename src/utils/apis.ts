import {IGithubRepo} from './interfaces'
import {GITHUB_REPOS_URL} from './constants'

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
