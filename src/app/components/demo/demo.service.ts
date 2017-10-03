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

  loadDemoData({ id }): void {
    this.store.dispatch(loadDemoPending({ id }));

    try {
      const success = Math.random()  < 0.5;

      if (!success) {
        throw 'I am Error';
      }
      setTimeout(() => {

        this.store.dispatch(loadDemoSuccess({ data: {
          id,
          text: id
        } }));
      }, Math.random() * 4000)


    } catch (error) {
      this.store.dispatch(loadDemoFailure({ error, id }));
    }
  }

}
