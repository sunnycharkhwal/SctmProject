import {createBrowserRouter, RouterProvider} from 'react-router';
import {Login} from './auth/Login';
import {Dashboardindex} from './dashboard/Dashboardindex';
import {WebsiteRoutes} from './WebsiteRoutes';
import {ErrorPage} from './pages/ErrorPage';
const router = createBrowserRouter([
  {
    path: '/*',
    element: <WebsiteRoutes />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard/*',
    element: <Dashboardindex />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export const WebRoutes = () => {
  return <RouterProvider router={router} />;
};
