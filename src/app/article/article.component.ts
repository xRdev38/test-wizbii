import { Component, Input, OnInit } from "@angular/core";

import {
  IArticle,
} from '@app/core';

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"]
})
export class ArticleComponent implements OnInit {
  @Input() article: IArticle | null = null;
  stringComment = "";

  ngOnInit(): void {
    this.stringComment = this.article !== null ? this.getNumberOfComment(this.article.commentList.length) : this.stringComment;
  }

  getNumberOfComment(count: Number): string {
    return count > 1 ? `${count} commentaires` : `${count} commentaire`;
  }
}
