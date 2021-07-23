import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubUserComponent } from './component/github-user/github-user.component';
import { RepoComponent } from './component/repo/repo.component';
import { SearchFormComponent } from './component/search-form/search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubUserComponent,
    RepoComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
