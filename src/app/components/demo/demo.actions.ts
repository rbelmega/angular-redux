import * as constants from './demo.constants';

export const loadDemoSuccess = ({ data }) => ({
  type: constants.LOAD_DEMO_SUCCESS,
  payload: data,
});

export const loadDemoFailure = error => ({
  type: constants.LOAD_DEMO_FAILURE,
  error,
});

export const loadDemoPending = () => ({
  type: constants.LOAD_DEMO_PENDING,
});

export const resetDemo = () => ({
  type: constants.RESET_DEMO,
});
