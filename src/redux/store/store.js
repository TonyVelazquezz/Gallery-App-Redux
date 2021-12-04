import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//Reducers
import { authReducer } from '../reducers/auth.reducer';
import { profileReducer } from '../reducers/profile.reducer';

const reducers = combineReducers({
	auth: authReducer,
	profile: profileReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);
