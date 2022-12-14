import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <main>
        <h1>Homepage</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          magnam quo mollitia. Nihil voluptatum est impedit in repellat, qui et
          natus, vitae autem non magni iste nulla, suscipit eaque ab.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          perferendis inventore quasi, aperiam, voluptas amet laboriosam natus
          delectus voluptatum sed suscipit molestias unde possimus aspernatur
          reiciendis cumque animi nostrum quas.
        </p>
        <Link href='/ninjas'>
          <a className='btn'>See Ninja Listing</a>
        </Link>
      </main>
    </>
  );
}
