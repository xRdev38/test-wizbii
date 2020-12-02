import { Component, Input } from '@angular/core';

import { ICommentView } from '@app/comment/comment-view.interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comments: Array<ICommentView> | null = null;

  trackByFn(index: number, comment: ICommentView) {
    return comment.id;
  }
}
