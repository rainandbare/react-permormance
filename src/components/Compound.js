import React from 'react';
import Number from './Number'
import Dropdown from './Dropdown'
import { Box, Flex, ListItem, List } from '@chakra-ui/react';

const Compound = ({val, setVal}) => {
  console.log(val)
  return(
    <List >
      <ListItem>
        <Flex>
          <Box w={200} mr={5} mb={5}><Dropdown></Dropdown></Box>
          <Box w={20}><Number></Number></Box>
        </Flex>
      </ListItem>
      <ListItem>
        <Flex>
          <Box w={200} mr={5} mb={5}><Dropdown></Dropdown></Box>
          <Box w={20}><Number></Number></Box>
        </Flex>
      </ListItem>
      <ListItem>
        <Flex>
          <Box w={200} mr={5} mb={5}><Dropdown></Dropdown></Box>
          <Box w={20}><Number></Number></Box>
        </Flex>
      </ListItem>
    </List>
  )
}

export default Compound