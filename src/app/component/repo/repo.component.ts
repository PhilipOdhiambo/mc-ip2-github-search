import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGithubUserRepo } from 'src/app/interface/github-user-repos';
import { GithubUser } from 'src/app/model/github-user';
import { Repo } from 'src/app/model/repo';
import { GithubService } from 'src/app/service/github.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  activeUser!:GithubUser


  public activeUserRepos!:Array<Repo>
  user:any

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private githubService:GithubService
  ) { }

  ngOnInit(): void {
    // Get user name from router params
    this.user = this.route.snapshot.paramMap.get('user')
    
    // Get the active user from service
    this.activeUser = this.githubService.getActivUser(this.user)
    if(!this.activeUser) {
      this.router.navigateByUrl('/github-users')
    }

    // Get active user repos from service
    this.githubService.getUserRepos(this.activeUser.reposUrl)
    .subscribe(repos => {
      this.activeUserRepos =  repos.map((repo:IGithubUserRepo) => {
        return new Repo({
          description : repo.description,
          html_url: repo.html_url,
          licence: repo.licence,
          name: repo.name,
          pushed_at: repo.pushed_at,
          updated_at: repo.updated_at
        })
      })      

    })
  }

}
