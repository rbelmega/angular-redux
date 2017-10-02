import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { getDemoData } from './demo.selectors';

@Component({
  selector: 'app-demo',
  template: `
  {{ demoData | async | json }}
  `,
})
export class DemoComponent implements OnInit {
  public demoData: Observable<any>;

  constructor(
    private store: Store<any>,
    private demoService: DemoService
  ) { }

  ngOnInit() {

    [1,2,4,5].forEach(() => this.demoService.loadDemoData());

    this.demoData = this.store.select(getDemoData);
  }

}
