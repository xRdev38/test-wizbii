import { Component, Input } from '@angular/core';

import {
  IProfile
} from '@app/core';

@Component({
  selector: 'app-comment-meta',
  templateUrl: './comment-meta.component.html',
  styleUrls: ['./comment-meta.component.scss']
})
export class CommentMetaComponent {
  @Input() meta: IProfile | null = null;
}
