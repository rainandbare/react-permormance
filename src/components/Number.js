import React from 'react';
import { NumberInput, NumberInputField } from "@chakra-ui/react"
import expensiveFunc from '../utils/expensiveFunc';
import longArray from '../utils/longArray.json'


const Number = ({val, setVal, modelId, id}) => {
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
      <NumberInput defaultValue={val ? val[modelId] : null} onChange={translateValString}>
        <NumberInputField />
      </NumberInput>
    </div>
  )
}

export default Number