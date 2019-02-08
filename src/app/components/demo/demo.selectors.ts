import {createSelector} from '@ngrx/store';

export const getState = (state) => (state.demo);

export const getDemoDataReducer = (state) =>
  state.demo;

export const getDemoData = createSelector(
  getDemoDataReducer,
  (demoReducer) => {
    if (demoReducer.data) {
      return Object.keys(demoReducer.data).map(key => demoReducer.data[key])
    }
  }
);


export const getDoubleData = createSelector(
  getDemoDataReducer,
  (demoReducer) => demoReducer.double
);
