import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { GithubUser } from 'src/app/model/github-user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, AfterViewInit {
  @Input() activeUser!:GithubUser

  constructor() { }

  ngOnInit(): void {

    
  }
  ngAfterViewInit(){
  }

}
