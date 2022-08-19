import thunk from 'redux-thunk';
import { legacy_createStore as createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { liveLocReducer } from './reducers/liveloc.reducer';
import { searchReducer } from './reducers/search.reducer';
import { weatherNewsReducer, generalNewsReducer, businessNewsReducer, techNewsReducer, moviesNewsReducer, sportsNewsReducer, searchNewsReducer  } from './reducers/news.reducer';

const intialState = {
    
}
const reducers = combineReducers({
    liveLoc: liveLocReducer,
    searchByCity: searchReducer,
    weatherNews: weatherNewsReducer,
    generalNews: generalNewsReducer,
    businessNews: businessNewsReducer,
    techNews: techNewsReducer,
    moviesNews: moviesNewsReducer,
    sportsNews: sportsNewsReducer,
    searchNews: searchNewsReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    intialState,
    composeEnhancer(applyMiddleware(thunk))
)
export default store;