import React, {useMemo} from 'react';
import { Select } from "@chakra-ui/react"
import expensiveFunc from '../utils/expensiveFunc';
import longArray from '../utils/longArray.json'

const Dropdown = ({val, setVal}) => {
  const expensiveOperation = () => {
    expensiveFunc(longArray)
  }
  return(
    <div>
      {useMemo(expensiveOperation, [])}
      <Select placeholder="Select option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </div>
  )
}

export default Dropdown