import { Component, Input, OnInit } from "@angular/core";

import {
  ITag,
} from '@app/core';

@Component({
  selector: "app-article-tag-list",
  templateUrl: "./article-tag-list.component.html",
  styleUrls: ["./article-tag-list.component.scss"]
})
export class ArticleTagListComponent implements OnInit {
  @Input() tags: Array<ITag> | null = null;

  ngOnInit() {
    this.tags = this.addHashTag(this.tags);
  }

  trackByFn(index: number, tag: ITag) {
    return tag.id;
  }

  private addHashTag(tags: Array<ITag> | null): Array<ITag> | null {
    return tags !== null ? tags.map(tag => {
      return {
        id: tag.id,
        name: `#${tag.name}`
      };
    }) : null;
  }
}
