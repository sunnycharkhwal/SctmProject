import React from 'react';
import {Outlet} from 'react-router';
export const Home = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* will either be <Home/> or <Settings/> */}
    </div>
  );
};
