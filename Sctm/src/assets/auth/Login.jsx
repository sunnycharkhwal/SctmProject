import React from 'react';
import {NavLink} from 'react-router';

export const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <NavLink className="ms-5" to="/">
        home
      </NavLink>
    </>
  );
};
