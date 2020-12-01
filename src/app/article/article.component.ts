import { Component, Input, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { ProfilesService } from '@app/core';
import { IArticleView } from '@app/article/article-view.interface';

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"]
})
export class ArticleComponent implements OnInit {
  @Input() dataView: IArticleView | null = null;
}
