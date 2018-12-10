import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import sdk from '@stackblitz/sdk';

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
  safeURL: SafeResourceUrl;
  ngOnInit() {
    window['mofo'] = this;
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.sourceURL);
    window['toto'] = this.iframe;
    window.addEventListener('message', (message) => {console.log(message.data); });
}

  listen() {
    this.iframe.nativeElement.contentWindow.addEventListener('message', (event) => { event.target.postMessage('hi', '*'); });
  }
  onClick() {
    this.iframe.nativeElement.contentWindow.postMessage('no', this.sourceURL);
  }

  noop() {
    console.log('nothing good');
  }

  onLoad(event) {
    console.log(event);
  }

  @HostListener('window:message', ['$event'])
  onmessage(event: MessageEvent) {
    console.log(event);
  }

}
