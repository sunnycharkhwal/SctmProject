import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/index.scss';
import './scss/res.scss';
import {RouterProvider} from 'react-router';
import {router} from './assets/router';
import 'rsuite/dist/rsuite.min.css';
import {App} from './App';
import {Dashboardindex} from './assets/dashboard/Dashboardindex';
import {Provider} from 'react-redux';
import {store} from './redux/store';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
