import {  IProfile } from '@app/core';

export interface ICommentView {
  id: number;
  postId: number;
  body: string;
  createdAt: string;
  thanx: boolean;
  thanxCount: number;
  profileId: number;
  author: IProfile;
}
