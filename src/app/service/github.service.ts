import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { GithubUser } from '../model/github-user';
import { Observable } from 'rxjs';
import { IGithubUser } from '../interface/github-user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) {
  }

  getUser(user:string):Observable<IGithubUser> {
    let url = `https://api.github.com/users/${user}?access_token=${environment.apiKey}`
    return this.http.get<IGithubUser>(url)
  }
  
}
