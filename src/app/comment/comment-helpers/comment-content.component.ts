import { Component, Input } from '@angular/core';
import {
  IComment
} from '@app/core';

@Component({
  selector: 'app-comment-content',
  templateUrl: './comment-content.component.html',
  styleUrls: ['./comment-content.component.scss']
})
export class CommentContentComponent {
  @Input() comment: IComment | null = null;
}
