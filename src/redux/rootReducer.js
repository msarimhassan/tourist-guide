// ** Reducers Imports
import layout from './layout';
import navbar from './navbar';
import tour from './tour';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ navbar, layout, tour });

export default rootReducer;
