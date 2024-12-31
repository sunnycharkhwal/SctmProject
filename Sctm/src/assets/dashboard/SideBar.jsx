import {NavLink} from 'react-router';
import {FaBars, FaHome, FaUser} from 'react-icons/fa';
import {BiCog} from 'react-icons/bi';
import {AnimatePresence, motion} from 'framer-motion';
import {useDispatch, useSelector} from 'react-redux';

import {SidebarMenu} from './SidebarMenu';
import {toggleSidebar} from '../../redux/Slices/sidebarSlice';

const routes = [
  {path: '/', name: 'Dashboard', icon: <FaHome />},
  {path: '/whatsapp', name: 'WhatsApp', icon: <FaUser />},
  {
    path: '/settings',
    name: 'Settings',
    icon: <BiCog />,
    subRoutes: [{path: '/settings/profile', name: 'Profile', icon: <FaUser />}],
  },
];

const animationVariants = {
  content: {
    hidden: {width: 0, opacity: 0, transition: {duration: 0.5}},
    show: {opacity: 1, width: 'auto', transition: {duration: 0.5}},
  },
};

export const SideBar = ({children}) => {
  const isOpen = useSelector(state => state.sidebar.isOpen);
  const dispatch = useDispatch();

  return (
    <div className="main-container">
      <motion.div className={`sidebar ${isOpen ? 'webW' : 'mobW'}`}>
        <div className="top_section">
          <AnimatePresence>
            {isOpen && (
              <motion.h1
                variants={animationVariants.content}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="logo">
                Sport Club
              </motion.h1>
            )}
          </AnimatePresence>
          <div className="bars">
            <FaBars onClick={() => dispatch(toggleSidebar())} />
          </div>
        </div>
        <section className="routes">
          {routes.map((route, index) =>
            route.subRoutes ? (
              <SidebarMenu
                key={index}
                route={route}
                showAnimation={animationVariants.content}
                isOpen={isOpen}
              />
            ) : (
              <NavLink to={route.path} key={index} className="link">
                <div className="icon">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={animationVariants.content}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text">
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            ),
          )}
        </section>
      </motion.div>
      <main className="RightMain">{children}</main>
    </div>
  );
};
