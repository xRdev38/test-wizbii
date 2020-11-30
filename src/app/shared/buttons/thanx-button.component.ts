import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-thanx-button",
  templateUrl: "./thanx-button.component.html",
  styleUrls: ["./thanx-button.component.scss"]
})
export class ThanxButtonComponent {
  @Input() label: string = "Envoyez un thanx !";
  @Output() shared = new EventEmitter<boolean>();
  isSubmitting = false;

  hasShared() {
    this.isSubmitting = true;
    this.shared.emit(true);
  }
}
