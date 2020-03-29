import Head from 'next/head';
import Link from 'next/link';
import styles from "../components/IdComponent/IdComponents.module.css";


const Id = () => {
    return (
      <div>
        <Head>
          <title>This is the ID page!</title>
        </Head>
        <div>
          <p>
        
          </p>
          <Link href="/">
          <a><p className={styles.id}>Home</p></a>
          </Link>
          <Link href="../components/NameComponent">
          <a><p className={styles.id}>Name</p></a>
          </Link>
          <Link href="../components/TypeComponent">
          <a><p className={styles.id}>Type</p></a>
          </Link>
        </div>
      </div>
    );
  }
  
  export default Id;