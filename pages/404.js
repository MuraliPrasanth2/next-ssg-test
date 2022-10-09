import Head from 'next/head';
import Link from 'next/link';
import useRedirectAfterSomeSeconds from '../hooks/useRedirectAfterSomeSeconds';

export default function ErrorPage() {
  const { secondsRemaining } = useRedirectAfterSomeSeconds('/', 5);

  return (
    <>
      <Head>
        <title>Page not found - redirecting in 5 seconds</title>
      </Head>
      <main>
        <h1>404</h1>
        <p>
          This page cannot be found. Redirecting to homepage in&nbsp;
          {secondsRemaining} {secondsRemaining > 1 ? 'seconds' : 'second'}.
        </p>
        <p>
          <Link href='/'>
            <a className='redirect-link'>Recirect to Homepage now.</a>
          </Link>
        </p>
      </main>
    </>
  );
}
