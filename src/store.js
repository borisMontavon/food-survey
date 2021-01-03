import { createStore } from 'redux';
import rootReducers from './reducers/combine';

const initialState = {
    'inputValuesReducer': {
        'fName': '',
        'lName': '',
        'dOfBirth': '',
        'eMail': '',
        'telNum': '',
        'country': '',
        'perfectMeal': ''
    },
    'checkboxValuesReducer': {
        'plates': [],
        'desserts': [],
        'fruits': [],
        'drinks': ''
    }
};

const store = createStore(
    rootReducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
);

export default store;