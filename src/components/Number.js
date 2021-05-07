import React from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"
import bubbleSort from '../utils/expensiveFunc';
import longArray from '../utils/longArray.json'


const Number = ({val, setVal}) => {
  const expensiveOperation = () => {
    bubbleSort(longArray)
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
     <NumberInput defaultValue={val} onChange={translateValString}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
      </NumberInput>
    </div>
  )
}

export default Number