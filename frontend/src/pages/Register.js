import React, { useContext, useState } from "react";
import { AxiosInstance } from '../utils/Helpers'
import styled from "styled-components";
import Button from '../components/elements/Button';
import Input from '../components/elements/Input';
import AuthContext from "../context/AuthContext";
import { useHistory, useLocation } from "react-router-dom";

const Register = ({setError, setErrorMessage, setSuccess, setSuccessMessage}) => {
  const [credentials, setCredentials] = useState({});
  const { setLoggedIn } = useContext(AuthContext)
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const onRegisterUser = async(event) => {
    event.preventDefault();
    try {
      const registeredUserData = {
        email: credentials.email,
        name: credentials.name,
        userName: credentials.userName,
        password: credentials.password,
        passwordVerify: credentials.passwordVerify
      }
      const { status, data } = await AxiosInstance.post(
        'users',
          registeredUserData
      )
      if(status === 201){
        setLoggedIn(true)
        setSuccess(true)
        setSuccessMessage(`Welcome to hate day ${data.userName}`)
        history.replace(from);
      }
    } catch (err) {
      setError(true)
      setErrorMessage(err.message)
    }
  }

  const onHandleChange = (event) => {
    const { name, value } = event.target;

    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <StyledWrapper>
    <h1>Sign Up</h1>
      <form onSubmit={onRegisterUser}>
        <Input type="text" label="Name" name="name" onChange={onHandleChange} />
        <Input type="text" label="Username" name="userName" onChange={onHandleChange} />
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
        <Input
          label="Verify password"
          name="passwordVerify"
          type="password"
          onChange={onHandleChange}
        />
        <Button styleP="primary" type="submit">Sign Up</Button>
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

export default Register;
