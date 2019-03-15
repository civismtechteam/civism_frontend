import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AppContainer from './components/AppContainer.js'
import store from './store.js'
import { IconContext } from "react-icons";

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <IconContext.Provider value={{}}>
      <AppContainer />
    </IconContext.Provider>
  </Provider>,
  document.getElementById('app')
);
