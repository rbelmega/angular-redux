import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {RouterReducerState, routerReducer} from '@ngrx/router-store';
import {storeFreeze} from 'ngrx-store-freeze';
import * as demo from '../components/demo/demo.reducer';


export interface AppState {
  demo: demo.DemoState;
  routerReducer?: RouterReducerState;
}

//storeFreeze
export const metaReducers: Array<MetaReducer<AppState>> = [];

export const reducers: ActionReducerMap<AppState> = {
  demo: demo.reducer,
  routerReducer,
};
