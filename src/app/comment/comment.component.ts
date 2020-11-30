import { Component, Input } from "@angular/core";

import {
  IComment,
} from '@app/core';

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.css"]
})
export class CommentComponent {
  @Input() comments: Array<IComment> | null = null;

  trackByFn(index: number, comment: IComment) {
    return comment.id;
  }
}
