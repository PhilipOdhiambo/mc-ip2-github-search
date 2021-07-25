import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubUserComponent } from './component/github-user/github-user.component';
import { RepoComponent } from './component/repo/repo.component';

const routes: Routes = [
  {path:"github-users", component:GithubUserComponent},
  { path: "github-users/:user", component:RepoComponent },
  { path: "**", redirectTo: "github-users", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
