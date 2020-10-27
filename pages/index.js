import Head from 'next/head';
import { useAuth } from '../lib/auth';
import styles from '../styles/Home.module.css';

export default function Home() {
  const auth = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>Feedmeback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Feedmeback!</h1>

        <p className={styles.description}>
          Current user:{' '}
          <code className={styles.code}>
            {auth.user ? auth.user.email : 'None'}
          </code>
        </p>

        {auth.user ? (
          <button onClick={(e) => auth.signout()}>SignOut</button>
        ) : (
          <button onClick={(e) => auth.signinWithGitHub()}>SignIn</button>
        )}
      </main>
    </div>
  );
}
