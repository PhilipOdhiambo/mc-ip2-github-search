import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IGithubUser } from 'src/app/interface/github-user';
import { IGithubUserRepo } from 'src/app/interface/github-user-repos';
import { GithubUser } from 'src/app/model/github-user';
import { GithubService } from 'src/app/service/github.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @ViewChild('myform') myform!:NgForm
  value = '';

  constructor(private githubService:GithubService) { }
  user!:GithubUser

  onSubmit() {
    this.githubService.getUser(this.value).subscribe((user:IGithubUser) => {
      let newUser = new GithubUser({
        avatar_url: user.avatar_url,
        created_at: user.created_at,
        login: user.login,
        name: user.name,
        repos_url: user.repos_url,
        updated_at: user.updated_at
      })

      this.githubService.users.push(newUser)

      this.myform.resetForm()      
  
      
    }, err => {
      alert("The user name does not exist!!")
      setTimeout(()=> this.myform.resetForm() ,0)

    })         
  }

  ngOnInit(): void {
  }

}
