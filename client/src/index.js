import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from './i18n';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import './styles/_main.scss';

ReactDOM.render(
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </BrowserRouter>, 
  document.getElementById('root')
);