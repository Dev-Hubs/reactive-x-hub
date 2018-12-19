import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { HubMessage, Stream } from './interfaces';
import {  HubEvents } from './enums';


@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {
@ViewChild('iframe') iframe;
channel: MessageChannel;
  constructor(private sanitizer: DomSanitizer) { }
  @Input() sourceURL;
  @Input() streams: Stream[];
  safeURL: SafeResourceUrl;

  port: any = null;
  ngOnInit() {
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.sourceURL);

  }

  onClick() {
    ///
  }

  @HostListener('window:message', ['$event'])
  onmessage(event: HubMessage) {
    if (event.origin.includes('stackblitz')) {
      if (event.data.header === HubEvents.Handshake) {
        this.port = event.source;
        this.port.postMessage({header: HubEvents.Next, id: 0, value: 1}, '*');
        this.port.postMessage({header: HubEvents.Next, id: 0, value: 1}, '*');
        this.port.postMessage({header: HubEvents.Error, id: 0, value: 'blyat'}, '*');
      } else {
        console.log(event.data);
      }
    }
  }

}
