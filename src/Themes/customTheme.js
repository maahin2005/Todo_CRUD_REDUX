import { extendTheme } from "@chakra-ui/react";

export const customDarkTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#242424",
        color: "white",
      },
    },
  },
  colors: {
    brand: {
      100: "#1A365D",

      // ...
      900: "#1a202c",
    },
  },
});

export const customLightTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "brand.lightGray",
        color: "black",
      },
    },
  },
  colors: {
    brand: {
      100: "white",
      lightGray: "#EDFDFD",
    },
  },
});
