import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
// import LoginPage from './components/Login';
import SignupPage from './components/Signup'
// import CreateStockForm1 from './components/CreateStockForm1'
// import Notification from './components/Notification'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<SignupPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
