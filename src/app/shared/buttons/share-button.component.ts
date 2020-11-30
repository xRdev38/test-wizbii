import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-share-button",
  templateUrl: "./share-button.component.html",
  styleUrls: ["./share-button.component.scss"]
})
export class ShareButtonComponent {
  @Input() label: string = "Partager à un ami !";
  @Output() sending = new EventEmitter<boolean>();
  isSubmitting = false;

  hasSending() {
    this.isSubmitting = true;
    this.sending.emit(true);
  }
}
