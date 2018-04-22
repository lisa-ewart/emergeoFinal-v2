import {combineReducers} from 'redux';
import location from './location_reducer';

import data from './data';


const rootReducers= combineReducers({
 
 data,
 location

});


export default rootReducers;