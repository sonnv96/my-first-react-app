import React from 'react'

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import p from './App.jsx'
import todoApp from '../reducers/index'

let store = createStore(todoApp)
let rootElement = document.getElementById('app')

render(
    <Provider store = {store}>
        <App />
    </Provider>,

    rootElement
)