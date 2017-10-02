import * as constants from './demo.constants';

export interface DemoState {
  data?: any;
  error?: any;
  loading: boolean;
  loaded: boolean;
}

export interface Action {
  payload: any;
  type: string;
  error: any;
}

const initialState = {
  loading: false,
  loaded: false,
};

export function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case constants.LOAD_DEMO_PENDING: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }

    case constants.LOAD_DEMO_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        loaded: true,
      };
    }
    case constants.LOAD_DEMO_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };
    case constants.RESET_DEMO: {
      return initialState;
    }
    default:
      return state;
  }
}
