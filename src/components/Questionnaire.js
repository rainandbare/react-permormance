import React, { useState } from 'react';
import questions from '../MOCK_DATA.json'
import defaultValues from '../MOCK_VALUES.json'
import Question from "./Question";
import {Box, Heading, OrderedList} from '@chakra-ui/react';

const Questionnaire = () => {
  const [values, setValues] = useState(defaultValues)
  const setAllValues = (newVal, id, modelId) => {
    const newValues = {
      ...values,
      [id]: {
        [modelId]: newVal
      }
    }
    setValues(newValues)
  }
  return(
    <Box textAlign="left" maxW="sm">
      <Heading as="h2" size="2xl" mb={6}>Questionnaire</Heading>
      <OrderedList spacing={9}>
        {
          questions.map((quest) => (
            <Question 
              key={quest.id}
              text={quest.questionText}
              type={quest.type}
              value={values[quest.id][quest.modelId]}
              setValues={(newVal) => setAllValues(newVal, quest.id, quest.modelId)}
            />
          ))
        }
      </OrderedList>
    </Box>
  )
}

export default Questionnaire