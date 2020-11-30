import { Component, Input } from "@angular/core";

@Component({
  selector: "app-comment-meta",
  templateUrl: "./comment-meta.component.html",
  styleUrls: ["./comment-meta.component.css"]
})
export class CommentMetaComponent {
  @Input() meta: any;
}
