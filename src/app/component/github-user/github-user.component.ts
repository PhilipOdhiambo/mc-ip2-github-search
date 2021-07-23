import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/service/github.service';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {

  constructor(private githubService:GithubService) { }

  ngOnInit(): void {


  }

}
