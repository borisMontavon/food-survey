import { combineReducers } from 'redux';
import inputValuesReducer from '../reducers/inputValuesReducer';
import checkboxValuesReducer from './checkboxValuesReducer';

const rootReducers = combineReducers({
    inputValuesReducer,
    checkboxValuesReducer
});

export default rootReducers;