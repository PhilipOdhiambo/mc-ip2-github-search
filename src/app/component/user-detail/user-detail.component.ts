import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubUser } from 'src/app/model/github-user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, AfterViewInit {
  @Input() activeUser!:GithubUser

  constructor(
    private router:Router
  ) { }

  goToRepos() {
    this.router.navigate(['/github-users',this.activeUser.userName])

  }

  ngOnInit(): void {

    
  }
  ngAfterViewInit(){
  }

}
