import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { getDemoData } from './demo.selectors';

@Component({
  selector: 'app-demo',
  template: `
    <div *ngFor='let item of (demoData | async)'>
      <h3>{{ item | json }}</h3>
      <button *ngIf="item.error" (click)="reload(item)">reload</button>
    </div>
    
  `,
})
export class DemoComponent implements OnInit {
  public demoData: Observable<any>;

  constructor(
    private store: Store<any>,
    private demoService: DemoService
  ) { }

  ngOnInit() {
    [1,2,4,5].forEach((id) => this.demoService.loadDemoData({ id }));

    this.demoData = this.store.select(getDemoData);
  }

  reload(item) {
    this.demoService.loadDemoData({ id: item.id })
  }

}
