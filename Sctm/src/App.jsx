import {Outlet} from 'react-router';
import {DrawerAppBar} from './assets/navBar/NavBar';

export const App = () => {
  return (
    <>
      <div style={{marginTop: '5rem'}}>
        <DrawerAppBar />
        <Outlet />
      </div>
    </>
  );
};
