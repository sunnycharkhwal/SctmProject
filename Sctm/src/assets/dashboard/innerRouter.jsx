import {SideBar} from './SideBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router';

import {Whatsapp} from './page/Whatsapp/Whatsapp';
import {Home} from './page/home/Home';
import React from 'react';

export const Index = () => {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whatsapp" element={<Whatsapp />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
};
