import Head from 'next/head';
import Link from 'next/link';

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return { props: { users } };
}

export default function Ninjas({ users }) {
  return (
    <>
      <Head>
        <title>Ninja List | Ninjas</title>
      </Head>
      <main className='ninjas-listing-page'>
        <h1>All Ninjas</h1>
        <nav aria-label='secondary' className='ninjas-list-container'>
          <ul className='ninjas-list'>
            {users.map((user) => (
              <li className='ninjas-list__item' key={user.id}>
                <Link href={`/ninjas/${user.id}`}>
                  <a>{user.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </>
  );
}
