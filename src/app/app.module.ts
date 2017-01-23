import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NewComponent } from './new/new.component';
import { CommentsComponent } from './comments/comments.component';
import { ShowComponent } from './show/show.component';
import { AskComponent } from './ask/ask.component';
import { JobsComponent } from './jobs/jobs.component';
import { SubmitComponent } from './submit/submit.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NewComponent,
    CommentsComponent,
    ShowComponent,
    AskComponent,
    JobsComponent,
    SubmitComponent,
    LoginComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
