import {createBrowserRouter, RouterProvider} from 'react-router';
import {Login} from './auth/Login';
import {Dashboardindex} from './dashboard/Dashboardindex';
import {WebsiteRoutes} from './WebsiteRoutes';
import {ErrorPage} from './pages/ErrorPage';
import {AddStudentForm} from './form/AddStudentForm';
import {AddStudentFormDetail} from './form/AddStudentFormDetail';
import {Join} from './auth/Join';

const router = createBrowserRouter([
  // {
  //   path: '/*',
  //   element: <WebsiteRoutes />,
  // },
  {
    path: '/add-student-form',
    element: <AddStudentForm />,
  },
  {
    path: '/add-student-form-detail',
    element: <AddStudentFormDetail />,
  },
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/join',
    element: <Join />,
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
