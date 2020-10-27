import Head from 'next/head';
import { Button, Code, Heading, Text } from '@chakra-ui/core';

import { useAuth } from '@/lib/auth';

export default function Home() {
  const auth = useAuth();

  return (
    <div>
      <Head>
        <title>Feedmeback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading>Feedmeback!</Heading>

        <Text>
          Current user: <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </Text>

        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>SignOut</Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGitHub()}>SignIn</Button>
        )}
      </main>
    </div>
  );
}
