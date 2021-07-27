import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { IGithubUser } from '../interface/github-user';
import { IGithubUserRepo } from '../interface/github-user-repos';
import { GithubUser } from '../model/github-user';
import { Repo } from '../model/repo'

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  users:Array<GithubUser>
  repos!:Repo[]

  constructor(private http:HttpClient) {
    this.users = []
  }

  getUser(user:string):Observable<IGithubUser> {
    let url = `https://api.github.com/users/${user}`
    return this.http.get<IGithubUser>(url)
  }

  getActivUser(name:any) {
    let user = this.users.filter(user => user.userName == name)
    return user[0]

  }

  getUserRepos(userUrl:string):Observable<Array<IGithubUserRepo>> {
    return this.http.get<Array<IGithubUserRepo>>(userUrl)
  }
  
}
