import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Button,
  Input,
  Checkbox,
  Heading,
  SimpleGrid,
  Select,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos, postTodoRequest } from "../Redux/Todo/actions";
import TodoListening from "../Components/TodoListening";
import { loginUnsuccessful } from "../Redux/LoginRedux/actions";

function Home() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [sortingTodo, setSortingTodo] = useState("all");

  const [newTodoObject, setNewTodoObject] = useState({
    id: Date.now(),
    title: "",
    status: false,
  });

  const handleNewTodoSubmition = (e) => {
    e.preventDefault();
    postTodoRequest(newTodoObject);
    dispatch(getAllTodos);
    setNewTodoObject({
      id: Date.now(),
      title: "",
      status: false,
    });
  };

  const sortingTodos = () => {
    if (sortingTodo === "Completed") {
      return todos.filter((todo) => todo.status === true);
    } else if (sortingTodo === "Pending") {
      return todos.filter((todo) => todo.status === false);
    } else {
      return todos;
    }
  };

  const handleLogout = () => {
    dispatch(loginUnsuccessful());
  };

  useEffect(() => {
    dispatch(getAllTodos);
  }, [newTodoObject]);

  return (
    <Box>
      <Button
        position="absolute"
        right={10}
        colorScheme="blue"
        top={5}
        onClick={handleLogout}
      >
        Logout
      </Button>

      <Box p={10} pt={2}>
        <Heading my={3}>Add your Todo</Heading>
        <form onSubmit={handleNewTodoSubmition}>
          <Flex width={"50%"} gap={2}>
            <Input
              placeholder="Enter Todo"
              value={newTodoObject.title}
              variant={"flushed"}
              borderColor={"teal"}
              onChange={(e) =>
                setNewTodoObject({ ...newTodoObject, title: e.target.value })
              }
              required
            />
            <Checkbox
              isChecked={newTodoObject.status}
              onChange={(e) =>
                setNewTodoObject({ ...newTodoObject, status: e.target.checked })
              }
            >
              Status
            </Checkbox>
            <Button width={"20%"} type="submit" colorScheme="teal">
              Add Todo
            </Button>
          </Flex>
        </form>
      </Box>
      <Box width={"30%"} px={10}>
        <Select onChange={(e) => setSortingTodo(e.target.value)}>
          <option value="all" style={{ color: "black" }}>
            all
          </option>
          <option style={{ color: "black" }} value="Completed">
            Completed Todos
          </option>
          <option style={{ color: "black" }} value="Pending">
            Pending Todos
          </option>
        </Select>
      </Box>
      <SimpleGrid columns={3} gap={5} p={10}>
        {sortingTodos().map((todo) => (
          <TodoListening {...todo} key={todo.id} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Home;
