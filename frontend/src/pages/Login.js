import React, { useState, useContext, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { AxiosInstance } from '../utils/Helpers'
import AuthContext from "../context/AuthContext";
import Button from '../components/elements/Button';
import Input from '../components/elements/Input';
import styled from "styled-components";


const Login = ({setError, setErrorMessage, setSuccess, setSuccessMessage}) => {
  const [credentials, setCredentials] = useState({});
  const { setLoggedIn } = useContext(AuthContext)
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onLoginUser = useCallback(async(event) => {
    event.preventDefault();
    try {
      const loggedInUserData = {
        email: credentials.email,
        password: credentials.password
      }
      const { status, data } = await AxiosInstance.post(
        'users/login',
        loggedInUserData
      )
      if(status === 200){
        setLoggedIn(true)
        setSuccess(true)
        setSuccessMessage(`Welcome back ${data.userName}`)
        history.replace(from);
      } 
    } catch (err) {
      setError(true)
      setErrorMessage(err.message)
    }
  });

  const onHandleChange = (event) => {
    const { name, value } = event.target;

    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <StyledWrapper>
    <h1>Log In</h1>
      <form onSubmit={onLoginUser}>
        <Input
          label="Email"
          name="email"
          type="email"
          onChange={onHandleChange}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          onChange={onHandleChange}
        />
        <Button styleP="primary" type="submit">Login</Button>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.article`
    width: 40vw;
    min-width: 375px;
    margin: 0 auto;
    margin-top: 4rem;
`;

export default Login;
