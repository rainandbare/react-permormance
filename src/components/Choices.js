import React from 'react';
import { Radio, RadioGroup, Stack } from "@chakra-ui/react"
import expensiveFunc from '../utils/expensiveFunc';
import longArray from '../utils/longArray.json';

const Choices = ({val, setVal, modelId}) => {
  const expensiveOperation = () => {
    expensiveFunc(longArray)
  }
  return(
    <div>
      {expensiveOperation()}
      <RadioGroup 
        defaultValue={val[modelId]} 
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