import { combineReducers } from 'redux';
import ProspectItemReducer from './ProspectItem';

export default combineReducers({
  ProspectItem: ProspectItemReducer
});
