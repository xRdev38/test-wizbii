import { IProfile } from "./profile.model";

export interface IComment {
  id: number;
  postId: number;
  body: string;
  createdAt: string;
  thanx: boolean;
  thanxCount: number;
  profileId: number;
}
