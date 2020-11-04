import Head from 'next/head';
import {
  Box,
  Button,
  Code,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
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

      <Text mb={8} fontSize="lg">
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
        {`. It's the best and the easiest way to add comments or reviews to your static site. You can try it out by logging in.`}
      </Text>

      {auth.user ? (
        // <EmptyState />
        <Button
          as="a"
          backgroundColor="gray.900"
          color="white"
          variant="outline"
          fontWeight="medium"
          mt={4}
          size="lg"
          _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)'
          }}
          href="/dashboard"
        >
          View Dashboard
        </Button>
      ) : (
        <Stack>
          <Button
            onClick={(e) => auth.signinWithGitHub()}
            backgroundColor="gray.900"
            color="white"
            fontWeight="medium"
            leftIcon="github"
            mt={4}
            size="lg"
            _hover={{ bg: 'gray.700' }}
            _active={{
              bg: 'gray.800',
              transform: 'scale(0.95)'
            }}
          >
            Sign In with GitHub
          </Button>
          <Button
            onClick={(e) => auth.signinWithGoogle()}
            backgroundColor="white"
            color="gray.900"
            variant="outline"
            fontWeight="medium"
            leftIcon="google"
            mt={4}
            size="lg"
            _hover={{ bg: 'gray.100' }}
            _active={{
              bg: 'gray.100',
              transform: 'scale(0.95)'
            }}
          >
            Sign In with Google
          </Button>
        </Stack>
      )}
    </Flex>
  );
}
