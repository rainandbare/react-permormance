import React, {useContext} from 'react';
import { NumberInput, NumberInputField } from "@chakra-ui/react"
import expensiveFunc from '../utils/expensiveFunc';
import longArray from '../utils/longArray.json'
import {QuestionContext} from './Questionnaire'



const Number = ({setVal, modelId, id}) => {
  const val = useContext(QuestionContext);
  const expensiveOperation = () => {
    expensiveFunc(longArray)
  }
  const translateValString = (e) => {
    if(e === ''){
      setVal(null, id, modelId)
    } else {
      setVal(e, id, modelId)
    }
  }
  return(
    <div>
      {expensiveOperation()}
      <NumberInput defaultValue={val && val[id] ? val[id][modelId] : null} onChange={translateValString}>
        <NumberInputField />
      </NumberInput>
    </div>
  )
}

export default Number