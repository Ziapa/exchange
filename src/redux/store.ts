import {AnyAction, applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {appReducer} from "./app-reducer";


const reducer = combineReducers({
    app: appReducer,
})



/* Types */
export type ReduxState = ReturnType<typeof reducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;

export type ReducersType = typeof  reducer
export type AppRootStateType = ReturnType<typeof reducer>

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
)

// @ts-ignore
window.store = store;