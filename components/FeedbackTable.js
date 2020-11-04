import React from 'react';
import { Box, Code, IconButton, Switch, Text } from '@chakra-ui/core';
import { Table, Tr, Th, Td } from './Table';
import RemoveButton from './RemoveButton';

const FeedbackTable = ({ allFeedback }) => {
  return (
    <Table mb={20}>
      <thead>
        <Tr>
          <Th w="200px">Name</Th>
          <Th>Feedback</Th>
          <Th>Route</Th>
          <Th>Visible</Th>
          <Th>{''}</Th>
        </Tr>
      </thead>
      <tbody>
        {allFeedback.map((feedback) => (
          <Box as="tr" key={feedback.id}>
            <Td fontWeight="medium">{feedback.author}</Td>
            <Td>{feedback.text}</Td>
            <Td>
              <Code>{'/'}</Code>
            </Td>
            <Td>
              <Switch
                variantColor="green"
                defaultIsChecked={feedback.status === 'active'}
                size="md"
              ></Switch>
            </Td>
            <Td>
              <RemoveButton feedbackId={feedback.id} />
            </Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default FeedbackTable;
