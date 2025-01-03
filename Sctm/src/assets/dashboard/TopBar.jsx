import {Button} from '@mui/material';
import React from 'react';
import {useDispatch} from 'react-redux';
import {toggleSidebar} from '../../redux/Slices/sidebarSlice';
import {NavLink} from 'react-router';
import {RiSidebarUnfoldLine} from 'react-icons/ri';
import {TopBarMenu} from './TopBarMenu';

export const TopBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="rightBar">
      <div className="row m-0 rightBar_inner">
        <div className="col-6 barsIconMob_two">
          <RiSidebarUnfoldLine onClick={() => dispatch(toggleSidebar())} />
        </div>
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6 barsIconWeb">
          <TopBarMenu />
        </div>
      </div>
    </div>
  );
};
