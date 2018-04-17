import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { getDemoData } from './demo.selectors';

@Component({
  selector: 'app-demo',
  styleUrls: ['./demo.component.css'],
  template: `
    <div *ngFor='let item of (demoData | async)' class="example-component" 
    [ngClass]="{
      'loading':item.loading,
      'loaded':item.loaded,
      'error':item.error
    }"
    >
      <h3>{{ item.id }}</h3>
      <div class="status">
        <h2>Status:</h2>
        <p>loading: {{ item.loading }}</p>
        <p>loading: {{ item.loaded }}</p>
      </div>
      <p *ngIf="item.loaded">{{ item.data?.text }}</p>
      
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
    [1,2,4,5,6,7,8,9].forEach((id) => this.demoService.loadDemoData({ id }));

    this.demoData = this.store.select(getDemoData);
  }

  reload(item) {
    this.demoService.loadDemoData({ id: item.id })
  }

}
