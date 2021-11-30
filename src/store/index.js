import {createStore, combineReducers} from 'redux';
import serviceListReducer from '../reducers/serviceListReducer';
import serviceAddReducer from '../reducers/serviceAddReducer';
import serviceFiltrReducer from '../reducers/serviceFiltrReducer';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
  serviceFiltr: serviceFiltrReducer,
});

const store = createStore(reducer);
export default store;