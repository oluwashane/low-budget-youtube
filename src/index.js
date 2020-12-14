import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import configureHomePageStore from './store/homepage-store';
import configureTrendingPageStore from './store/trendingpage-store';
import configureWatchVidPageStore from './store/watchVidPage-store';
import configureGlobalStore from './store/global-store';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

configureHomePageStore();
configureTrendingPageStore();
configureWatchVidPageStore();
configureGlobalStore();

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
