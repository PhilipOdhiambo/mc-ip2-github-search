import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GithubUserComponent } from './component/github-user/github-user.component';
import { RepoComponent } from './component/repo/repo.component';
import { SearchFormComponent } from './component/search-form/search-form.component';
import { NavComponent } from './component/nav/nav.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';
import { TimePipe } from './pipes/time.pipe';
import { ActiveUserDirective } from './directives/active-user.directive';

@NgModule({
  declarations: [
    AppComponent,
    GithubUserComponent,
    RepoComponent,
    SearchFormComponent,
    NavComponent,
    UserDetailComponent,
    TimePipe,
    ActiveUserDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
