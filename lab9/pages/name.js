import Head from 'next/head';
import Link from 'next/link';
import styles from "../components/NameComponent/NameComponents.module.css";


const Name = () => {
    return (
      <div>
        <Head>
          <title>This is the Name page!</title>
        </Head>
        <div>
          <p>
          </p>
          <Link href="/">
          <a><p className={styles.name}>Home</p></a>
          </Link>
          <Link href="../components/IdComponent">
          <a><p className={styles.name}>Id</p></a>
          </Link>
          <Link href="../components/TypeComponent">
          <a><p className={styles.name}>Type</p></a>
          </Link>
        </div>
      </div>
    );
  }
  
  export default Name;