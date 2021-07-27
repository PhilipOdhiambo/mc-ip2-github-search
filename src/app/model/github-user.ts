import { IGithubUser } from "../interface/github-user";

export class GithubUser {
    userName:string
    name:string
    avatarUrl: string
    reposUrl:string
    joined: string
    lastActive:string
    reposCount:number

    constructor(userInterface:IGithubUser) {
        this.avatarUrl = userInterface.avatar_url
        this.joined = userInterface.created_at
        this.lastActive = userInterface.updated_at
        this.name = userInterface.name
        this.reposUrl = userInterface.repos_url
        this.userName = userInterface.login
        this.reposCount = userInterface.public_repos

    }
}
