import { reducers, store } from '@littleq/state-manager';
import { combineReducers } from 'redux';

const LOCATION_ACTION = {
  PATH: 'LOCATION_UPDATE_PATH',
  QUERY: 'LOCATION_UPDATE_QUERY',
  HASH: 'LOCATION_UPDATE_HASH'
};

reducers.location = (location = {}, action) => {
  switch (action.type) {
    case LOCATION_ACTION.PATH:
      return Object.assign({}, location, {
        path: action.path
      });
    case LOCATION_ACTION.QUERY:
      return Object.assign({}, location, {
        query: action.query
      });
    case LOCATION_ACTION.HASH:
      return Object.assign({}, location, {
        hash: action.query
      });
    default:
      return location;
  }
};

store.replaceReducer(combineReducers(reducers));

export { LOCATION_ACTION };
