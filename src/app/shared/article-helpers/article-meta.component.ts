import { Component, Input } from '@angular/core';

import { IProfileView } from './profile-view.interface';

@Component({
  selector: 'app-article-meta',
  templateUrl: './article-meta.component.html',
  styleUrls: ['./article-meta.component.scss']
})
export class ArticleMetaComponent {
  @Input() profile: IProfileView = {
    id: '',
    firstname: '',
    lastname: '',
    desc: '',
    image: '',
    createdAt: ''
  };
}
