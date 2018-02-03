import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

fetch('https://generate-boxes.herokuapp.com/api')
  .then(res => res.json())
  .then(data => {
    ReactDOM.render(<App data={data} />, document.getElementById('root'));
    registerServiceWorker();
  });
