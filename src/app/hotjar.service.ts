import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ActivationEnd, Router } from '@angular/router';

declare const hj: any;
declare const window: any;

@Injectable()
export class HotjarService {
  constructor(private router: Router) {}

  init() {
    this.injectHotJar(1177853, 6).then(() => {
      this.initRouterEvents();
    });
  }

  injectHotJar(trackingId: number, version: number) {
    return new Promise(resolve => {
      this.setDefaults();

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = this.getSrc(trackingId, version);
      script.onload = resolve;
      document.getElementsByTagName('head')[0].appendChild(script);
    });
  }

  /**
   * set up watcher for router events
   */
  initRouterEvents() {
    this.router.events
      .pipe(filter(event => event instanceof ActivationEnd))
      .subscribe(this.sendPageDetails);
  }

  /**
   * Send page data to Hotjar service
   */
  sendPageDetails(event) {
    hj('stateChange', window.location);
  }

  private getSrc(trackingId, version): string {
    return `//static.hotjar.com/c/hotjar-${trackingId}.js?sv=${version}`;
  }

  private setDefaults() {
    window._hjSettings = window._hjSettings || {};

    window.hj =
      window.hj ||
      function() {
        (hj.q = hj.q || []).push(arguments);
      };
  }
}
