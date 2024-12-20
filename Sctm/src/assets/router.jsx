import {createBrowserRouter} from 'react-router';
import {App} from '../App';
import {Home} from './pages/Home';
import {Features} from './pages/academyManagement/Features';
import {Overview} from './pages/academyManagement/Overview';
import {Pricing} from './pages/academyManagement/Pricing';
import {ErrorPage} from './pages/ErrorPage';
export const router = createBrowserRouter([
  {
    path: '',
    Component: App,
    children: [
      {
        path: '',
        Component: Home,
      },
      {
        path: '/academy/features',
        Component: Features,
      },
      {
        path: '/academy/overview',
        Component: Overview,
      },
      {
        path: '/academy/pricing',
        Component: Pricing,
      },
    ],
  },
  {
    path: '*',
    Component: ErrorPage,
  },
]);
