import { Component } from '@angular/core';
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

  constructor() {}

  sendMessage(): void {
    console.log(this.text.value);
    this.text.setValue(null);
  }
}
