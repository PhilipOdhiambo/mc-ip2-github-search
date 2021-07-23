import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { GithubUser } from '../model/github-user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) {
  }

  getUser() {
    let url = `https://api.github.com/users/daneden?access_token=${environment.apiKey}`
    let user = new GithubUser({
      avatar_url: "wwwwww",
      created_at: "today",
      login: "philip",
      name: "philip owing",
      repos_url: "wwRepo",
      updated_at: "dfddfdr"
    })

    return user
  }
  
}
