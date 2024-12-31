import {Button} from '@mui/material';
import React from 'react';
import {useDispatch} from 'react-redux';
import {toggleSidebar} from '../../redux/Slices/sidebarSlice';

export const TopBar = () => {
  const dispatch = useDispatch();
  return (
    <div style={{borderBottom: '2px solid'}}>
      <Button onClick={() => dispatch(toggleSidebar())}>nav</Button>
      <hr />
    </div>
  );
};
