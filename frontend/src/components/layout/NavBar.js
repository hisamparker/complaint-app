import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { AxiosInstance } from "../../utils/Helpers";
import styled from "styled-components";
import AuthContext from "../../context/AuthContext";
import CheckInput from '../elements/CheckInput';

const StyledNav = styled.nav`
  margin-top: 1rem;
  padding: 1rem 3rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div > a {
    color: ${({theme}) => theme.onPrimary};
    font-size: 1.25rem;
    justify-self: center;
  }
  div > a ~ a {
    margin-left: 1rem;
  }
`;

const NavBar = ({ onChange, theme, className, children }) => {
  const { loggedIn, setLoggedIn } = useContext(AuthContext)

  const logUserOut = async() => {
    const { status } = await AxiosInstance.post('users/logout')
    if(status === 200){
        setLoggedIn(false)
    }
  }

  return (
    <StyledNav className={className}>
      <div>
        <NavLink to="/">Home</NavLink>
        <CheckInput theme={theme} onChange={onChange} />
      </div>
      <div>
        <NavLink to="/form">Complain</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        {loggedIn === false && ( <> <NavLink to="/register">Sign Up</NavLink> <NavLink to="/login">Log In</NavLink></> )}  
        {loggedIn === true && <NavLink onClick={logUserOut} to="/">Log Out</NavLink>}
      </div>
    </StyledNav>
  );
};

export default NavBar;
