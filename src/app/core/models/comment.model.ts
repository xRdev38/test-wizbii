import { IProfile } from "./profile.model";

export interface IComment {
  id: string;
  body: string;
  createdAt: string;
  thanx: boolean;
  thanxCount: number;
  author: IProfile;
}
