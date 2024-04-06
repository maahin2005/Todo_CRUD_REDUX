import React from "react";
import { Flex } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

function LoginIndecator() {
  return (
    <Flex
      width={"100vw"}
      height={"30vh"}
      justify="center"
      alignItems={"center"}
    >
      <Spinner size="xl" />
    </Flex>
  );
}

export default LoginIndecator;
