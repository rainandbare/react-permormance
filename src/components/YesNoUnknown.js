import React, {useContext} from 'react';
import { Radio, RadioGroup, Stack } from "@chakra-ui/react"
import expensiveFunc from '../utils/expensiveFunc';
import longArray from '../utils/longArray.json'
import {QuestionContext} from './Questionnaire'


const YesNoUnknown = ({setVal, modelId, id}) => {

  const val = useContext(QuestionContext);
  const expensiveOperation = () => {
    expensiveFunc(longArray)
  }
  return(
    <div>
      {expensiveOperation()}
      <RadioGroup
        defaultValue={val[id][modelId]} 
        colorScheme="orange" 
        onChange={(e) => setVal(e, id, modelId)}
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