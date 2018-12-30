import {
  Component,
  OnInit,
  Input,
  ViewChild,
  HostListener
} from '@angular/core';
import {
  DomSanitizer,
  SafeUrl,
  SafeResourceUrl
} from '@angular/platform-browser';
import { HubMessage } from './interfaces';
import { HubEvents } from './enums';
import { Stream } from './stream';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {
  @ViewChild('iframe') iframe;
  @Input() sourceURL;
  @Input() streams: number;
  subjects: Stream[] = [];
  subscription: Stream;
  safeURL: SafeResourceUrl;
  port: any = null;
  isConnected = false;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.sourceURL
    );
    for (let i = 0; i < this.streams; i++) {
      this.subjects.push(new Stream(i));
    }

    this.subscription = new Stream(-1);
  }

  onClick() {
    ///
  }

  onNext(id, value = 'a', type = HubEvents.Next) {
    this.subjects[id].push({ value, type });
    this.port.postMessage({ header: type, id, value }, '*');
  }

  onComplete(id, value, type = HubEvents.Complete) {
    this.subjects[id].push({ value, type });
    this.port.postMessage({ header: type, id, value }, '*');
    this.subjects[id].isComplete = true;
  }

  onError(id, value = 'b', type = HubEvents.Error) {
    this.subjects[id].push({ value, type });
    this.port.postMessage({ header: type, id, value }, '*');
    this.subjects[id].isError = true;
  }

  @HostListener('window:message', ['$event'])
  onmessage(event: HubMessage) {
    if (event.origin.includes('stackblitz')) {
      if (event.data.header === HubEvents.Handshake) {
        this.port = event.source;
        if (this.isConnected) {
          this.subjects.forEach(subject => subject.clean());
          this.subscription.clean();
        }
        this.isConnected = true;
      } else if (event.data.header === HubEvents.Next) {
        this.subscription.push({
          type: HubEvents.Next,
          value: event.data.value
        });
      } else if (event.data.header === HubEvents.Error) {
        this.subscription.push({
          type: HubEvents.Error,
          value: event.data.value
        });
      } else if (event.data.header === HubEvents.Complete) {
        this.subscription.push({
          type: HubEvents.Complete,
          value: event.data.value
        });
      }
    }
  }
}
