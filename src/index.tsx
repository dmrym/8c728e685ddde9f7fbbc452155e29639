import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import { Store } from './store/Store';
import reportWebVitals from './reportWebVitals';
import './assets/scss/App.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();