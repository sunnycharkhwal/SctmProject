// import {Outlet} from 'react-router';
// import {DrawerAppBar} from './assets/navBar/NavBar';

// export const App = () => {
//   return (
//     <>
//       <div style={{marginTop: '5rem'}}>
//         <DrawerAppBar />
//         <Outlet />
//       </div>
//     </>
//   );
// };

import {SideBar} from './assets/dashboard/SideBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router';

import {Home} from './assets/dashboard/page/home/Home';
import {Whatsapp} from './assets/dashboard/page/Whatsapp/Whatsapp';
import {TopBar} from './assets/dashboard/TopBar';

export const App = () => {
  return (
    <Router>
      <SideBar>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whatsapp" element={<Whatsapp />} />
        </Routes>
      </SideBar>
    </Router>
  );
};
