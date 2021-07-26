import React from "react";
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

import CheckInput from '../elements/CheckInput';

const StyledNav = styled.nav`
  margin-top: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  > a {
    color: ${({theme}) => theme.onPrimary};
    font-size: 1.25rem;
    justify-self: center;
  }
  > a ~ a {
    margin-left: 1rem;
  }
`;

const NavBar = ({ onChange, theme, className, children }) => {
  
  return (
    <StyledNav className={className}>
        <NavLink to="/">Home</NavLink>
        <CheckInput theme={theme} onChange={onChange} />
        <NavLink to="/form">Complain</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
    </StyledNav>
  );
};

export default NavBar;
