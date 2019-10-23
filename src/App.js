import React from 'react';
import './App.css';

import {BrowserRouter, Router, Route, Switch, withRouter} from 'react-router-dom';
import {createBrowserHistory} from "history";

import PropertiesPage from './containers/PropertiesPage'

//  REDUX CONFIGURATION
import reducers from './reducers/index.js';
import {watcherSaga} from "./actions/index.js";
import {Provider as ReduxProvider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
    reducers,
    compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);
sagaMiddleware.run(watcherSaga);
//  END REDUX CONFIGURATION

const historial = createBrowserHistory();
function App() {
    return (
        <ReduxProvider store={store}>
            <Router history={historial}>
                <Route exact path="/" component={PropertiesPage}/>
            </Router>
        </ReduxProvider>
    );
}

export default App;
