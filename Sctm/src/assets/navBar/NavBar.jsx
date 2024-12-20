import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {NavLink} from 'react-router';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export const DrawerAppBar = props => {
  const {window} = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
      <Typography variant="h6" sx={{my: 2}}>
        MUI
      </Typography>
      <Divider />
      <div
        style={{background: 'black', display: 'flex', flexDirection: 'column'}}>
        <NavLink to="/" className="me-5 text-white">
          home
        </NavLink>
        <NavLink to="/academy/features" className="me-5 text-white">
          Features
        </NavLink>
        <NavLink to="/academy/overview" className="me-5 text-white">
          Overview
        </NavLink>
        <NavLink to="/academy/pricing" className="me-5 text-white">
          Pricing
        </NavLink>
      </div>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            MUI
          </Typography>
          <div className=" d-flex w-100 justify-content-end align-items-center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{display: {md: 'none'}}}>
              <MenuIcon />
            </IconButton>
          </div>
          <Box sx={{display: {xs: 'none', md: 'block'}}}>
            <div style={{background: 'black'}}>
              <NavLink to="/" className="me-5 text-white">
                home
              </NavLink>
              <NavLink to="/academy/features" className="me-5 text-white">
                Features
              </NavLink>
              <NavLink to="/academy/overview" className="me-5 text-white">
                Overview
              </NavLink>
              <NavLink to="/academy/pricing" className="me-5 text-white">
                Pricing
              </NavLink>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {xs: 'block', md: 'none'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
          }}>
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
