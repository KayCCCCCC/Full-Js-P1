
import { combineReducers } from 'redux';


import counterReducer from './counterReducer';
import handleReducer from './handleReducer';


const rootReducer = combineReducers({

    counter: counterReducer,
    handle: handleReducer

});

export default rootReducer;