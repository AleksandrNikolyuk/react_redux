import { FETCH_POSTS, NEW_POST } from '../actions/actiontypes/types';
import update from 'immutability-helper';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return update(state, {items: { $set: action.payload } } );
    case NEW_POST:
      return update(state, {item: { $set: action.payload } } );
    default:
      return state;
  }
}
