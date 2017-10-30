import { combineReducers } from 'redux';
import { post } from './postReducer'

/*
*
*
contain list of reducer
*
*
*/

const rootReducer = combineReducers({ 
/*
*
All reducer and there respective name.
*
*/
post:post,
});

export default rootReducer;