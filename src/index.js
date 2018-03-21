import React from 'react'
import thunk from "redux-thunk"
import ReactDOM from 'react-dom'
import AppRouter from './AppRouter'
import { Provider } from 'react-redux'
import rootReducer from './rootReducer'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware, compose } from 'redux'


let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const Root = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();