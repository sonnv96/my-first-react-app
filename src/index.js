import PropTypes from 'prop-types';
import React from 'react';
import { render } from 'react-dom';
import './Css/index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App';
import todoApp from './reducers'
import registerServiceWorker from './registerServiceWorker';


let store = createStore(todoApp)
let rootElement = document.getElementById('app')
render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement

)

