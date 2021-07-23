import { IGithubUserRepo } from "../interface/github-user-repos";

export class Repo {
    repoOwner:string
    repoName:string
    repoUrl:string
    repoDescription: string
    repoLicence:string
    repoLastUpdate: string
    constructor(iRepo:IGithubUserRepo) {
        this.repoOwner =iRepo.owner.login
        this.repoName = iRepo.name
        this.repoUrl = iRepo.html_url
        this.repoDescription = iRepo.description
        this.repoLicence = iRepo.licence
        this.repoLastUpdate = iRepo.updated_at
        
    }
}
