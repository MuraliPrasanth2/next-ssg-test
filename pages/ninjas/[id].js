import Head from 'next/head';

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const ninjas = await response.json();
  const paths = ninjas.map((ninja) => {
    return { params: { id: ninja.id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const ninja = await response.json();
  return { props: { ninja } };
}

export default function Ninja({ ninja }) {
  return (
    <>
      <Head>
        <title>Ninja details | {ninja.name}</title>
      </Head>
      <main className='ninja-details-page'>
        <h1>{ninja.name}</h1>
        <address>
          <p>{ninja.address.street}</p>
          <p>{ninja.address.suite}</p>
          <p>{ninja.address.city}</p>
          <p>{ninja.address.zipcode}</p>
          <p>
            <a href={`mailto:${ninja.email}`}>{ninja.email}</a>
          </p>
          <p>
            <a href={`tel:${ninja.phone}`}>{ninja.phone}</a>
          </p>
        </address>
      </main>
    </>
  );
}
