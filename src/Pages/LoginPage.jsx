import React, { useState } from "react";
import { Box, SimpleGrid, Input, Button, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginCredintied } from "../Redux/LoginRedux/actions";
import LoginIndecator from "./../Components/LoginIndecator";
import ErrorIndecator from "../Components/ErrorIndecator";

function LoginPage() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.loginState);
  const appState = useSelector((state) => state.appState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    dispatch(loginCredintied(credentials));
    setCredentials({ email: "", password: "" });
  };

  if (appState.isLoading) {
    return <LoginIndecator />;
  }

  if (loginState.isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Box p={10}>
      <Box width={"40%"} margin={"auto"} textAlign={"center"}>
        <Heading my={5}>Login to Task Management!</Heading>
        <form onSubmit={handleSubmit}>
          <SimpleGrid gap={5} p={10} boxShadow={"2xl"} background="brand.100">
            <Input
              placeholder="Enter reqres.in Email"
              value={credentials.email}
              name="email"
              onChange={handleChange}
              required
            />
            <Input
              placeholder="Enter any password"
              value={credentials.password}
              name="password"
              type="password"
              onChange={handleChange}
              required
            />
            <Button type="submit" colorScheme="purple">
              Login
            </Button>
          </SimpleGrid>
        </form>
        {appState.isError ? <ErrorIndecator /> : null}
      </Box>
    </Box>
  );
}

export default LoginPage;
