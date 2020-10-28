import Head from 'next/head';
import { Box, Button, Code, Flex, Heading, Icon, Text } from '@chakra-ui/core';

import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/EmptyState';

const Dashboard = () => {
  const auth = useAuth();

  if (!auth.user) {
    return 'Loading....';
  }
  return <EmptyState />;
};

export default Dashboard;
