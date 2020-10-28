import React from 'react';
import { Heading, Box, Text, Button } from '@chakra-ui/core';
import DashboardShell from './DashboardShell';

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Box width="100%" backgroundColor="white" borderRadius="8px" p={8}>
      <Heading size="md">
        Get feedback on your site at a blazing fast speed
      </Heading>
      <Text>Start today and grow with us 💯</Text>
      <Button>Upgrade to Starter</Button>
    </Box>
  </DashboardShell>
);

export default FreePlanEmptyState;
