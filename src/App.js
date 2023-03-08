import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import TopNav from './components/TopNav';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <TopNav />
    </ChakraProvider>
  );
}

export default App;
