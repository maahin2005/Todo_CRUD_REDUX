import React, { useRef, useState } from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Button,
  Flex,
  Input,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  makeDeleteRequest,
  makeTitlePostRequest,
  makeToggleStatusPostRequest,
} from "../Redux/Todo/actions";

function TodoListening({ id, title, status }) {
  const dispatch = useDispatch();

  const inputRef = useRef();

  const [isEditMode, setIsEditMode] = useState(false);

  const handleToggleStatus = () => {
    dispatch(makeToggleStatusPostRequest(id, status));
  };

  const handleDeleteTodo = () => {
    dispatch(makeDeleteRequest(id));
  };

  const EditMode = () => {
    return (
      <Box pr={3}>
        <Input
          variant="filled"
          placeholder="Enter New Title"
          ref={inputRef}
          color={"black"}
          required
        />
      </Box>
    );
  };

  const handleEdit = () => {
    if (isEditMode) {
      let input = inputRef.current.value || "";

      if (input) {
        dispatch(makeTitlePostRequest(id, input));
      }
    }
    setIsEditMode(!isEditMode);
  };

  return (
    <Box p={5} boxShadow={"xl"} bg={status ? "teal.200" : "red.200"}>
      <Flex color={"black"}>
        <Box width="100%">
          <Heading size={"md"}>{title}</Heading>
          <Button
            my={5}
            variant="outline"
            colorScheme="purple"
            onClick={handleToggleStatus}
          >
            {status ? "Mark as Pending" : "Mark as Complete"}
          </Button>
        </Box>
        <SimpleGrid
          gap={2}
          width="40%"
          justifySelf={"end"}
          height="fit-content"
        >
          <Button colorScheme="orange" onClick={handleEdit}>
            {isEditMode ? "Done Edit" : "Edit"}
          </Button>
          <Button colorScheme="red" onClick={handleDeleteTodo}>
            Delete
          </Button>
        </SimpleGrid>
      </Flex>
      {isEditMode ? <EditMode /> : null}
    </Box>
  );
}

export default TodoListening;
