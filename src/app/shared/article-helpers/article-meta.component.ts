import { Component, Input } from "@angular/core";

interface IProfileView {
  id: string;
  firstname: string;
  lastname: string;
  desc: string;
  image: string;
  createdAt: string;
}

@Component({
  selector: "app-article-meta",
  templateUrl: "./article-meta.component.html",
  styleUrls: ["./article-meta.component.scss"]
})
export class ArticleMetaComponent {
  @Input() profile: IProfileView = {
    id: "",
    firstname: "",
    lastname: "",
    desc: "",
    image: "",
    createdAt: ""
  };

}
