import React, { useState, useCallback, useReducer } from 'react';
import questions from '../MOCK_DATA.json'
import defaultValues from '../MOCK_VALUES.json'
import Question from "./Question";
import {Box, Heading, OrderedList, useCallbackRef} from '@chakra-ui/react';

const Questionnaire = () => {
  const reducer = (state, action) => {
    if(action.type === 'SET_VALUE'){
      return {...state, ...action.payload}
    }
    return state
  }

  const [values, dispatch] = useReducer(reducer, defaultValues)
  
  const setAllValues = useCallback((newVal, id, modelId) => {
    dispatch({
      type: 'SET_VALUE',
      payload: {
        [id]: {
          [modelId]: newVal
        }
      }
    })
  }, [dispatch])

  return(
    <Box textAlign="left" maxW="sm">
      <Heading as="h2" size="2xl" mb={6}>Questionnaire</Heading>
      <OrderedList spacing={9}>
        {
          questions.map((quest) => (
            <Question 
              key={quest.id}
              id={quest.id}
              text={quest.questionText}
              type={quest.type}
              value={values[quest.id]}
              modelId={quest.modelId}
              setValues={setAllValues}
            />
          ))
        }
      </OrderedList>
    </Box>
  )
}

export default Questionnaire