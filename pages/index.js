import Head from 'next/head';
import {
  Box,
  Button,
  Code,
  Flex,
  Heading,
  Icon,
  Link,
  Text
} from '@chakra-ui/core';

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
      maxW="400px"
      margin="0 auto"
    >
      <Head>
        <title>Feedmeback</title>
        <link rel="icon" href="/favicon.ico" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (document.cookie && document.cookie.includes('feedmeback-auth')) {
                window.location.href = "/dashboard"
              }
            `
          }}
        />
      </Head>

      <Icon color="black" name="logo" size="64px" />

      <Text mb={4}>
        <Text as="span" fontWeight="bold" display="inline">
          Feedmeback
        </Text>
        {' is one of my side '}
        <Link
          href="http://www.manupaaji.codes"
          isExternal
          textDecoration="underline"
        >
          projects
        </Link>
        {`. It's the easiest way to add comments or reviews to your static site. You can try it out by logging in.`}
      </Text>

      {auth.user ? (
        // <EmptyState />
        <Button as="a" size="sm" fontWeight="medium" href="/dashboard">
          View Dashboard
        </Button>
      ) : (
        <Button
          mt={4}
          size="sm"
          fontWeight="medium"
          size="sm"
          onClick={(e) => auth.signinWithGitHub()}
        >
          Sign In
        </Button>
      )}
    </Flex>
  );
}
