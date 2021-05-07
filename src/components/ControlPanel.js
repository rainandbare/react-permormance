import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Flex } from '@chakra-ui/react';


const ControlPanel = () => {
  return(
    <Flex w="100%" direction="row-reverse">
       <ColorModeSwitcher />
    </Flex>
  )
}

export default ControlPanel