import { Box } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import AllRoutes from '../routes/AllRoutes';
import Navbar from "./Navbar";

function App() {
  return (
    <Box className="app">
      <ChakraProvider>
      <Navbar />
        <AllRoutes />
      </ChakraProvider>

    </Box>
  );
}

export default App;
