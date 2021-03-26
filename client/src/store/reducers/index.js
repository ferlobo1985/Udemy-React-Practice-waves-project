import { combineReducers } from 'redux';
import users from './users.reducer';
import products from './products.reducer';

const appReducers = combineReducers({
    users,
    products
});

export default appReducers;