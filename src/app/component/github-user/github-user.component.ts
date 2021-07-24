import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/service/github.service';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {
  users!:Array<any>
  activeUser:any

  constructor(private githubService:GithubService) { }

  updateActiveUser(index:number) {
    this.activeUser = this.users[index]

  }

  ngOnInit(): void {

    this.users = this.githubService.users

  }

}
