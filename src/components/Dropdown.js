import React from 'react';
import { Select } from "@chakra-ui/react"
import bubbleSort from '../utils/bubbleSort';
import longArray from '../utils/longArray.json'

const Choices = ({val, setVal}) => {
  const expensiveOperation = () => {
    bubbleSort(longArray)
  }
  return(
    <div>
      {expensiveOperation()}
      {/* <RadioGroup 
        defaultValue={val} 
        colorScheme="orange" 
        onChange={(e) => setVal(e)}
      >
        <Stack direction="column">
          <Radio value="pickles">Pickles</Radio>
          <Radio value="meatballs">Meatballs</Radio>
          <Radio value="applesauce">Applesauce</Radio>
        </Stack>
      </RadioGroup> */}
      <Select placeholder="Select option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </div>
  )
}

export default Choices