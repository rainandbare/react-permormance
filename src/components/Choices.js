import React, {useContext} from 'react';
import { Radio, RadioGroup, Stack } from "@chakra-ui/react"
import expensiveFunc from '../utils/expensiveFunc';
import longArray from '../utils/longArray.json';
import {QuestionContext} from './Questionnaire';
import _ from "lodash";

const Choices = ({setVal, modelId, id}) => {
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
          <Radio value="pickles">Pickles</Radio>
          <Radio value="meatballs">Meatballs</Radio>
          <Radio value="applesauce">Applesauce</Radio>
        </Stack>
      </RadioGroup>
    </div>
  )
}

export default Choices