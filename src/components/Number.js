import React from 'react';
import { NumberInput, NumberInputField } from "@chakra-ui/react"
import expensiveFunc from '../utils/expensiveFunc';
import longArray from '../utils/longArray.json'


const Number = ({val, setVal, modelId}) => {
  const expensiveOperation = () => {
    expensiveFunc(longArray)
  }
  const translateValString = (e) => {
    if(e === ''){
      setVal(null)
    } else {
      setVal(e)
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