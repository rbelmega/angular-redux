import * as constants from './demo.constants';

export const loadDemoSuccess = ({ data }) => ({
  type: constants.LOAD_DEMO_SUCCESS,
  payload: data,
});

export const loadDemoFailure = ({ error, id }) => ({
  type: constants.LOAD_DEMO_FAILURE,
  error,
  payload: id,
});

export const loadDemoPending = ({ id }) => ({
  type: constants.LOAD_DEMO_PENDING,
  payload: id,
});

export const resetDemo = () => ({
  type: constants.RESET_DEMO,
});

export const applyDemoData = ({ data }) => ({
  type: constants.APPLY_DEMO_DATA,
  payload: data,
});

export const loadDoublePending = ({ data }) => ({
  type: constants.LOAD_DOUBLE_PENDING,
});

export const loadDoubleSuccess = payload => ({
  type: constants.LOAD_DOUBLE_SUCCESS,
  payload,
});
export const loadDoubleFailure = error => ({
  type: constants.LOAD_DOUBLE_FAILURE,
  error,
});
export const resetDouble = () => ({
  type: constants.RESET_DOUBLE,
});
