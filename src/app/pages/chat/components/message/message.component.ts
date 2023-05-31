import { Component, HostBinding, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'w-message',
  templateUrl: 'message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() message: string = '';

  @Input() get isMessageFromProfile(): boolean {
    return this.#isMessageFromProfile;
  }

  public set isMessageFromProfile(value: boolean) {
    this.#isMessageFromProfile = value;
    this.isMessageFromProfileClass = this.#isMessageFromProfile;
  }

  @HostBinding('class.w-message') hostClass = true;

  @HostBinding('class.message-out') isMessageFromProfileClass = false;

  #isMessageFromProfile: boolean = false;
}
