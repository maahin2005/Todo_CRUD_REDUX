import { ChakraProvider } from "@chakra-ui/react";
import OpenRoutes from "./Routes/OpenRoutes";
import { useSelector } from "react-redux";
import { customDarkTheme, customLightTheme } from "./Themes/customTheme";
import ThemeChanger from "./Components/ThemeChanger";

function App() {
  const themeState = useSelector((state) => state.theme);
  return (
    <>
      <ChakraProvider
        theme={themeState.isDarkTheme ? customDarkTheme : customLightTheme}
      >
        <ThemeChanger position="absolute" right={0} />
        <OpenRoutes />
      </ChakraProvider>
    </>
  );
}

export default App;
