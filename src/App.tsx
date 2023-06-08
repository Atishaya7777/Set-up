import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme";
import { ErrorBoundary } from "./components";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary></ErrorBoundary>
    </ChakraProvider>
  );
};

export default App;
