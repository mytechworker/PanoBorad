import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store, persistor } from 'redux/store';
import { colors, device, breakpoints } from 'theme/variables';
import 'antd/dist/antd.css';
import { PersistGate } from 'redux-persist/integration/react';
import 'config/axios.config';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={{ colors, device, breakpoints }}>
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
