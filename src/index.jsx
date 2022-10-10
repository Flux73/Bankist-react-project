import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import ProviderIntl from './i18n/ProviderIntl';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ProviderIntl>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProviderIntl>
  </Provider>
);
