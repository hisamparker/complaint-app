import React, { useState, useContext, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { AxiosInstance } from '../utils/Helpers'
import AuthContext from "../context/AuthContext";
import Button from '../components/elements/Button';
import Input from '../components/elements/Input';
import styled from "styled-components";


const Login = (props) => {
  const [credentials, setCredentials] = useState({});
  const { setLoggedIn } = useContext(AuthContext)
  let history = useHistory();
  // console.log(history.goBack());
  // let location = useLocation();
  // let { from } = location.state || { from: { pathname: "/" } };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onLoginUser = useCallback(async(event) => {
    event.preventDefault();
    try {
      const loggedInUserData = {
        email: credentials.email,
        password: credentials.password
      }
      const { status } = await AxiosInstance.post(
        'users/login',
        loggedInUserData
      )
      if(status === 200){
        setLoggedIn(true)
        history.push("/dashboard");
      }
    } catch (err) {
      console.log(err);
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
