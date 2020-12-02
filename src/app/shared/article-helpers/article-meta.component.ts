import { Component, Input } from '@angular/core';

import { IProfileView } from './profile-view.interface';

@Component({
  selector: 'app-article-meta',
  templateUrl: './article-meta.component.html',
  styleUrls: ['./article-meta.component.scss']
})
export class ArticleMetaComponent {
  @Input() author: IProfileView = {
    id: 0,
    firstname: '',
    lastname: '',
    desc: '',
    image: '',
    createdAt: ''
  };
}
