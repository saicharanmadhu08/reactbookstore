import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import BooksReducer from './book.api';


const rootReducer = combineReducers({
    form,
    auth: authReducer,
    books: BooksReducer
});

export default rootReducer;
