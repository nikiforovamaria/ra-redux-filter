import { FILTR_SERVICE_FIELD } from '../actions/actionTypes.js';

const initialState = {
  value: '',
};

export default function serviceFiltrReducer(state = initialState, action) {
  switch (action.type) {
    case FILTR_SERVICE_FIELD:
      const {value} = action.payload;
      return {value};
    default:
      return state;
  };
}