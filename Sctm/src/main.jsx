import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/index.scss';
import './scss/res.scss';
import 'rsuite/dist/rsuite.min.css';
import {App} from './App';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {Dashboardindex} from './assets/dashboard/Dashboardindex';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
