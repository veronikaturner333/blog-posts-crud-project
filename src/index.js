import React from 'react'
import {createRoot} from 'react-dom/client'
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {store} from './app/store'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)