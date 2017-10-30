import React from 'react';
import ReactDOM from 'react-dom';
import { store, history } from './store';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import './index.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Provider store={store}>
        <Router history ={history}>
            <App/>
        </Router>
    </Provider>, 
 document.getElementById('root'));
registerServiceWorker();
