import * as constants from './demo.constants';

export const loadDemoSuccess = ({ data }) => ({
  type: constants.LOAD_DEMO_SUCCESS,
  payload: data,
});

export const loadDemoFailure = ({error, id }) => ({
  type: constants.LOAD_DEMO_FAILURE,
  error,
  payload: id
});

export const loadDemoPending = ({ id }) => ({
  type: constants.LOAD_DEMO_PENDING,
  payload: id
});

export const resetDemo = () => ({
  type: constants.RESET_DEMO,
});
