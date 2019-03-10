import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as demo from '../components/demo/demo.reducer';

export interface AppState {
  demo: demo.DemoState;
}

// storeFreeze
export const metaReducers: Array<MetaReducer<AppState>> = [];

export const reducers: ActionReducerMap<AppState> = {
  demo: demo.reducer,
};
