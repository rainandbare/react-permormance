import React from 'react';
import { ListItem, Text } from '@chakra-ui/react';


// Components
import Choices from './Choices';
import Compound from './Compound';
import YesNoUnknown from './YesNoUnknown';
import Number from './Number';

const Question = ({text, type, value, setValues, modelId}) => {
  const ComponentFromType = componentTypes[type]
  return(
    <ListItem>
      <Text mb={3}>{text}</Text>
      <ComponentFromType val={value} setVal={setValues} modelId={modelId}/>
    </ListItem>
  )
}

export default Question

const componentTypes = {
  choices: Choices,
  yesNoUnknown: YesNoUnknown,
  compound: Compound,
  number: Number
}