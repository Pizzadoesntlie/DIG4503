import Head from 'next/head';
import Link from 'next/link';
import NameSearch from './components/NameComponent/';
import IdSearch from './components/IdComponent/';
import TypeSearch from './components/TypeComponent/';

const Home = () => {
  return (
    <div>
      <Head>
        <title>This is the homepage!</title>
      </Head>
      <div>
        <p>
        </p>
        <Link href="../components/NameComponent">
          <a><p>Name</p></a>
        </Link>
        <Link href="../components/IdComponent">
          <a><p>Id</p></a>
        </Link>
        <Link href="../components/TypeComponent">
          <a><p>Type</p></a>
        </Link>
      </div>
    </div>
  );
}

export default Home;
