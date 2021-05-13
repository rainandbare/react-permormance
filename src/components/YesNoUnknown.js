import React from 'react';
import { Radio, RadioGroup, Stack } from "@chakra-ui/react"
import expensiveFunc from '../utils/expensiveFunc';
import longArray from '../utils/longArray.json'


const YesNoUnknown = ({val, setVal, modelId}) => {
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
        <Radio value="Y">Yes</Radio>
        <Radio value="N">No</Radio>
        <Radio value="U">Unknown</Radio>
      </Stack>
    </RadioGroup>
    </div>
  )
}

export default YesNoUnknown