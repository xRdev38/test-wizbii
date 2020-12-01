export interface IArticle {
  id: number;
  description: string;
  body: string;
  tagList: number[];
  createdAt: string;
  updatedAt: string;
  thanx: boolean;
  thanxCount: number;
  profileId: number;
}
