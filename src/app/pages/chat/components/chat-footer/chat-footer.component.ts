import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  selector: 'w-chat-footer',
  templateUrl: './chat-footer.component.html',
  styleUrls: ['./chat-footer.component.scss'],
})
export class ChatFooterComponent {
  text: FormControl<string | null> = new FormControl('');

  @Output() sendText = new EventEmitter<string>();

  constructor() {}

  sendMessage(): void {
    if (this.text.value) {
      this.sendText.emit(this.text.value);
      this.text.setValue(null);
    }
  }
}
