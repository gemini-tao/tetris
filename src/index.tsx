import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.scss';

ReactDOM.render(<App />, document.getElementById('root'));

interface Registration {
  waiting: any;
  [propName: string]: any;
}

function update(registration: Registration) {
  console.log(registration);
  try {
    registration.waiting.postMessage('skipWaiting');
  } catch (e) {
    window.location.reload();
  }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register({
  onUpdate: update
});

