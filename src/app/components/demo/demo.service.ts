import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  loadDemoPending,
  loadDemoSuccess,
  loadDemoFailure,
} from './demo.actions';

@Injectable()
export class DemoService {
  constructor(
    private store: Store<any>,
  ) {}

  loadDemoData(): void {
    this.store.dispatch(loadDemoPending());

    try {
      const success = Math.random()  < 0.5;
      if (!success) {
        throw 'I am Error';
      }
      setTimeout(() => {
        const success = Math.random()  < 0.5;
        this.store.dispatch(loadDemoSuccess({ data: 1 }));
      }, Math.random()* 100)


    } catch (error) {
      this.store.dispatch(loadDemoFailure(error));
    }
  }

}
