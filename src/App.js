import React from 'react';
import './App.css';

import {Router, Route} from 'react-router-dom';
import {createBrowserHistory} from "history";

import PropertiesPage from './containers/PropertiesPage'
import PropertyDetails from './containers/PropertyDetails'

//  REDUX CONFIGURATION
import reducers from './reducers/index.js';
import {watcherSaga} from "./actions/index.js";
import {Provider as ReduxProvider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import MenuAppBar from "./components/common/MenuAppBar";

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
        <MenuAppBar/>
        <Router history={historial}>
          <Route exact path="/" component={PropertiesPage}/>
          <Route exact path="/details" component={PropertyDetails}/>
        </Router>
      </ReduxProvider>
  );
}

export default App;
