import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({ name: "hashtag" })
export class HashtagPipe implements PipeTransform {
  hashColor = "#545d61";

  constructor(private sanitizer: DomSanitizer) {}

  transform(text: any, color?: string): any {
    let newValue: string = "";
    let result: any = [];
    let tempString: string;
    const newText = text.split(/\s+/);
    const mentions = newText.filter( (el: string) => el[0] === "#" || el[0] === "@");
    for (const [index, value] of newText.entries()) {
      for (const mention of mentions) {
        if (
          value === mention ||
          value === mention + "." ||
          // tslint:disable-next-line: quotemark
          value === mention + "'s"
        ) {
          newValue = newText.length > 1 ? newText.join(" ") : value;
          newText.splice(
            index,
            1,
            `<span style="color: ${
              color ? color : this.hashColor
            }; display: inline;">${newValue}</span>`
          );
          result = newText.length > 1 ? newText.splice(0, 1) : newText;
        }
      }
    }
    tempString = result.join(" ");
    return this.sanitizer.bypassSecurityTrustHtml(tempString);
  }
}
