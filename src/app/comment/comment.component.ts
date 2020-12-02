import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IProfile, IComment, ProfilesService } from '@app/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comments: Array<IComment> | null = null;
  authors: Array<Observable<IProfile>> | null = null;

  constructor(private profilesService: ProfilesService){}

  ngOnInit():void {
    this.getAuthor();
  }

  getAuthor():void {
    if( this.comments !== null ) {
      this.authors = this.comments !== null ? this.comments.map( comment => {
        return this.profilesService.getById(comment.profileId);
      }) : null;
    }
  }

  trackByFn(index: number, comment: IComment) {
    return comment.id;
  }
}
