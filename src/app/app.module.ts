import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { routing } from './app.routing';
import { ScienceComponent } from './science/science.component';
import { PoliticsComponent } from './politics/politics.component';
import { GlobalComponent } from './global/global.component';
import { TechComponent } from './tech/tech.component';
import { SubmitComponent } from './submit/submit.component';
import { LoginComponent } from './login/login.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { CategoryPipePipe } from './category-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SubmitComponent,
    LoginComponent,
    ArticleListComponent,
    ScienceComponent,
    PoliticsComponent,
    GlobalComponent,
    TechComponent,
    CategoryPipePipe
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
