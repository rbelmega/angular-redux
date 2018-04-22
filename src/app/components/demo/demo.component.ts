import {Component, OnInit} from '@angular/core';
import {DemoService} from './demo.service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {getDemoData, getState} from './demo.selectors';

declare var window: any;

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
    <input style="display: none" type='file' (change)="fileChanged($event)">
    <img class="no-way" src="assets/180px-VKNichosi.png">
  `,
})
export class DemoComponent implements OnInit {
  public demoData: Observable<any>;
  public file: any;
  public noway = {
    show: false
  };

  constructor(
    private store: Store<any>,
    private demoService: DemoService
  ) {
  }

  ngOnInit() {
    [1, 2, 4, 5, 6, 7, 8, 9].forEach((id) => this.demoService.loadDemoData({id}));

    this.demoData = this.store.select(getDemoData);

    window.Mousetrap.bind(['command+e', 'ctrl+e'], () => this.sendStoreData());
    window.Mousetrap.bind(['command+i', 'ctrl+i'], () => {
      const file: any = document.querySelector("[type='file']");

      file.click()
    })
  }

  sendStoreData() {
    document.querySelector(".no-way").classList.remove('no-way-animate');

    this.store.select(getState).subscribe(store => {
      this.demoService.sendData(store).subscribe((s) => {
        document.querySelector(".no-way").classList.add('no-way-animate');
      })
    })
  }

  reload(item) {
    this.demoService.loadDemoData({id: item.id})
  }

  fileChanged(e) {
    this.file = e.target.files[0];
    this.uploadDocument(this.file);
  }

  uploadDocument(file) {
    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      this.demoService.applyDemoData({data: JSON.parse(fileReader.result)})
    };

    fileReader.readAsText(file);
  }

}
