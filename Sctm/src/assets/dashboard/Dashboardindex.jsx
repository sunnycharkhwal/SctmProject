import {SideBar} from './SideBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router';

import {Home} from './page/home/Home';
import {Whatsapp} from './page/Whatsapp/Whatsapp';
import {TopBar} from './TopBar';

export const Dashboardindex = () => {
  return (
    <SideBar>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/whatsapp" element={<Whatsapp />} />
      </Routes>
    </SideBar>
  );
};
