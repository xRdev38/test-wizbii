import { Profile } from "./profile.model";

export interface IArticle {
  id: string;
  description: string;
  body: string;
  tagList: string[];
  commentList: string[];
  createdAt: string;
  updatedAt: string;
  thanx: boolean;
  thanxCount: number;
  author: Profile;
}
