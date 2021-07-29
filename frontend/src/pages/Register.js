import React, { useState } from "react";
import { AxiosInstance } from '../utils/Helpers'
import styled from "styled-components";
import Button from '../components/elements/Button';
import Input from '../components/elements/Input';


const Register = () => {
  const [credentials, setCredentials] = useState({});
  // let history = useHistory();
  // const { setUser } = useContext(UserContext);
  // const [error, setError] = useState(null);

  // //set user in context and push them home
  // const setUserContext = async () => {
  //   try {
  //     const {data} = await AxiosInstance('/users/login')
  //     setUser(data.user);
  //     history.push('/');
  //   } catch (err) {
  //     setError(err.response.data);
  //   }
  //  }

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
      await AxiosInstance.post(
        'users',
          registeredUserData
      )
    } catch (err) {
      console.log(err);
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
