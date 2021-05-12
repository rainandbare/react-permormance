import React from 'react';
import { Radio, RadioGroup, Stack } from "@chakra-ui/react"
import bubbleSort from '../utils/expensiveFunc';
import longArray from '../utils/longArray.json';

const Choices = ({val, setVal}) => {
  const expensiveOperation = () => {
    bubbleSort(longArray)
  }
  return(
    <div>
      {expensiveOperation()}
      <RadioGroup 
        defaultValue={val} 
        colorScheme="orange" 
        onChange={(e) => setVal(e)}
      >
        <Stack direction="column">
          <Radio value="pickles">Pickles</Radio>
          <Radio value="meatballs">Meatballs</Radio>
          <Radio value="applesauce">Applesauce</Radio>
        </Stack>
      </RadioGroup>
    </div>
  )
}

export default Choices