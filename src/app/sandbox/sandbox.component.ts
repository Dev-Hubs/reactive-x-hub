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
import { projection } from '@angular/core/src/render3';
import {
  StackblitzSdkService,
  CustomProject
} from 'src/app/sandbox/stackblitz-sdk.service';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {
  @ViewChild('iframe') iframe;
  @Input() sourceURL;
  @Input() project;
  @Input() streams: number;
  subjects: Stream[] = [];
  subscription: Stream;
  safeURL: SafeResourceUrl;
  port: any = null;
  isConnected = false;

  constructor(
    private sdk: StackblitzSdkService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.sdk.embed(this.iframe.nativeElement, this.project);
    // this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(
    //   this.sourceURL
    // );
    for (let i = 0; i < this.streams; i++) {
      this.subjects.push(new Stream(i));
    }

    this.subscription = new Stream(-1);
  }

  onClick(type: HubEvents, id, value = null) {
    this.subjects[id].push({ value, type });
    this.port.postMessage({ header: type, id, value }, '*');
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
