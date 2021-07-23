import { Component, OnInit } from '@angular/core';
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
    this.githubService.getUser().subscribe(user => {
      this.user = user
      console.log(this.user)
    }, err => {

    })         
  }

  ngOnInit(): void {
  }

}
