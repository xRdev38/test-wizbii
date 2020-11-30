import { Component, Input } from "@angular/core";

@Component({
  selector: "app-comment-content",
  templateUrl: "./comment-content.component.html",
  styleUrls: ["./comment-content.component.css"]
})
export class CommentContentComponent {
  @Input() comment: any;
}
