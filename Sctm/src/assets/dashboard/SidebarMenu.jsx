import {AnimatePresence, motion} from 'framer-motion';
import React, {useState, useEffect} from 'react';
import {FaAngleDown} from 'react-icons/fa';
import {NavLink} from 'react-router';

const menuAnimation = {
  hidden: {
    opacity: 0,
    height: 0,
    padding: 0,
    transition: {duration: 0.3, when: 'afterChildren'},
  },
  show: {
    opacity: 1,
    height: 'auto',
    transition: {duration: 0.3, when: 'beforeChildren'},
  },
};

const menuItemAnimation = {
  hidden: i => ({
    x: '-100%',
    transition: {duration: (i + 1) * 0.1},
  }),
  show: i => ({
    x: 0,
    transition: {duration: (i + 1) * 0.1},
  }),
};

export const SidebarMenu = ({route, showAnimation, isOpen, setIsOpen}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) setIsMenuOpen(false);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    setIsOpen(true);
  };

  return (
    <div className="menu">
      <div className="menu_item" onClick={toggleMenu}>
        <div className="icon">{route.icon}</div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={showAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="link_text">
              {route.name}
            </motion.div>
          )}
        </AnimatePresence>
        {isOpen && (
          <motion.div animate={{rotate: isMenuOpen ? -90 : 0}}>
            <FaAngleDown />
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="menu_container">
            {route.subRoutes.map((subRoute, i) => (
              <motion.div key={i} variants={menuItemAnimation} custom={i}>
                <NavLink to={subRoute.path} className="link">
                  <div className="icon">{subRoute.icon}</div>
                  <motion.div className="link_text">{subRoute.name}</motion.div>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
