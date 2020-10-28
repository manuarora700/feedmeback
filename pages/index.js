import Head from 'next/head';
import { Box, Button, Code, Flex, Heading, Icon, Text } from '@chakra-ui/core';

import { useAuth } from '@/lib/auth';

export default function Home() {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <title>Feedmeback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Icon color="black" name="logo" size="64px" />

      {auth.user ? (
        // <EmptyState />
        <Button onClick={(e) => auth.signout()}>Sign Out</Button>
      ) : (
        <Button mt={4} size="sm" onClick={(e) => auth.signinWithGitHub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
}
