import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
} from '@mui/material';
import {Menu as MenuIcon} from '@mui/icons-material';
import {NavLink, useNavigate} from 'react-router';
import {Dropdown} from 'rsuite';
import './NavBar.scss';
import Logo from '../../images/logo.png';
//
const drawerWidth = 240;

export const DrawerAppBar = ({window}) => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const container = window ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
      <NavLink to="/" className="mb-5 text-white">
        home
      </NavLink>
    </Box>
  );

  return (
    <Box sx={{display: 'flex'}} className="navTop">
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <NavLink to="/" className="text-white">
            <img className="NavLogo" src={Logo} alt="logo" />
          </NavLink>
          <Box sx={{display: {xs: 'none', md: 'flex'}}} className="NavPcBtn">
            <Dropdown
              title={<span className="un">Academy management </span>}
              trigger="hover"
              className="NavHoverBtn">
              <Dropdown.Item onClick={() => navigate('/academy/overview')}>
                overview
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate('/academy/features')}>
                features
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate('/academy/pricing')}>
                pricing
              </Dropdown.Item>
            </Dropdown>
            <Dropdown
              title={<span className="un">Booking management</span>}
              trigger="hover"
              className="NavHoverBtn">
              <Dropdown.Item onClick={() => navigate('/academy/overview')}>
                overview
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate('/academy/pricing')}>
                pricing
              </Dropdown.Item>
            </Dropdown>
            <Dropdown
              title={<span className="un">Event management</span>}
              className="NavHoverBtn"
              onClick={() => navigate('/event-management')}></Dropdown>
          </Box>
          <Box className="d-flex  justify-content-end align-items-center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{display: {md: 'block'}}}
              className="text-black">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        anchor="right"
        ModalProps={{keepMounted: true}}
        sx={{
          display: {xs: 'block', md: 'none'},
          '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
        }}>
        {drawer}
      </Drawer>
    </Box>
  );
};

DrawerAppBar.propTypes = {window: PropTypes.func};
