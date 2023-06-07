import { IProject } from "./interfaces";
import { GITHUB_REPOS_URL } from "./constants"

export const getRepos = async():Promise<IProject[]| null> => {
    try {
        const response = await fetch(GITHUB_REPOS_URL);
        const data = await response.json()
        return data.map((item:any): IProject=> {
            const { id, name, url, homepage}: IProject = item 
            return { id, name, url,homepage}
        })
    } catch (error) {
        return null
    }
}