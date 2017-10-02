import { createSelector } from '@ngrx/store';

export const getDemoDataReducer = (state) =>
  state.demo;

export const getDemoData = createSelector(
  getDemoDataReducer,
  (demoReducer) =>
    demoReducer.data
);
