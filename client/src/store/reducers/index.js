import { combineReducers } from 'redux';
import users from './users.reducer';

const appReducers = combineReducers({
    users
});

export default appReducers;