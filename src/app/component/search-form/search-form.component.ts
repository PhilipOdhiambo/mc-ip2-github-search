import { Component, OnInit } from '@angular/core';
import { IGithubUser } from 'src/app/interface/github-user';
import { GithubUser } from 'src/app/model/github-user';
import { GithubService } from 'src/app/service/github.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor(private githubService:GithubService) { }
  user:any

  onSubmit(search:any) {
    this.githubService.getUser(search.value).subscribe((user:IGithubUser) => {
      this.user = new GithubUser({
        avatar_url: user.avatar_url,
        created_at: user.created_at,
        login: user.login,
        name: user.name,
        repos_url: user.repos_url,
        updated_at: user.updated_at
      })
      
      console.log(this.user)
    }, err => {

    })         
  }

  ngOnInit(): void {
  }

}
