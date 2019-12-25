import React, { useMemo } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

const Nav = () => {
  const { url: base } = useRouteMatch('/room/:id');

  const menuOptions = useMemo(() => (
    <div>
      <NavLink to={`${base}/current-playing`}>Currently Playing</NavLink>
      <NavLink to={`${base}/members`}>Members</NavLink>
      <NavLink to={`${base}/search`}>Search</NavLink>
      <NavLink to={`${base}/browse`}>Browse</NavLink>
    </div>
  ), [base])

  return menuOptions;
};

export default Nav;
