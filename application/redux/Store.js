import { createStore, applyMiddleware, combineReducers } from 'redux'
import ReduxThunk from 'redux-thunk'
import AuthReducer from 'application/redux/reducers/AuthReducer'
import AlertReducer from 'application/redux/reducers/AlertReducer'


const reducers = combineReducers({
    AuthReducer,
    AlertReducer
})

export default store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(ReduxThunk)
);