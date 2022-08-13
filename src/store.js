import thunk from 'redux-thunk';
import { legacy_createStore as createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { liveLocReducer } from './reducers/liveloc.reducer';
import { searchReducer } from './reducers/search.reducer';

const intialState = {
    
}
const reducers = combineReducers({
    liveLoc: liveLocReducer,
    searchByCity: searchReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    intialState,
    composeEnhancer(applyMiddleware(thunk))
)
export default store;