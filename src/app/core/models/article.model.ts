import { Profile } from "./profile.model";

export interface Article {
  id: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  author: Profile;
}
