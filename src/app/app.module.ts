import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { CommentModule } from '@app/comment/comment.module';
import { ProfileModule } from '@app/profile/profile.module';
import { ArticleModule } from '@app/article/article.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    CommentModule,
    ProfileModule,
    ArticleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
