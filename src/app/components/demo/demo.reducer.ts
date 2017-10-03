import * as constants from './demo.constants';

export interface DemoState {
  data?: any;
}

export interface Action {
  payload: any;
  type: string;
  error: any;
}

const initialState = {
  data: {}
};

export function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case constants.LOAD_DEMO_PENDING: {
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload]: {
            id: action.payload,
            loading: true,
            loaded: false,
          }
        }

      }
    }

    case constants.LOAD_DEMO_SUCCESS: {
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            id: action.payload.id,
            data: action.payload,
            loading: false,
            loaded: true,
          }
        }
      };
    }
    case constants.LOAD_DEMO_FAILURE:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload]: {
            loading: false,
            loaded: false,
            id: action.payload,
            error: action.error,
          }
        },
      };
    case constants.RESET_DEMO: {
      return initialState;
    }
    default:
      return state;
  }
}
