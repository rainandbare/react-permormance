import React from 'react';
import { ChakraProvider, Box, Grid, theme, } from '@chakra-ui/react';
import Questionnaire from './components/Questionnaire';
import ControlPanel from './components/ControlPanel';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl" mx={20} my={10}>
      <ControlPanel />
        <Grid minH="100vh" p={3}>
          <Questionnaire />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;

