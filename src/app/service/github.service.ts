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
    return this.http.get(url)
  }
  
}
