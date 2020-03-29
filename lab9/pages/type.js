import Head from 'next/head';
import Link from 'next/link';
import styles from "../components/TypeComponent/TypeComponents.module.css";


const Type = () => {
    return (
      <div>
        <Head>
          <title>This is the Type page!</title>
        </Head>
        <div>
          <p>
        
          </p>
          <Link href="/">
          <a><p className={styles.type}>Home</p></a>
          </Link>
          <Link href="../components/NameComponent">
          <a><p className={styles.type}>Name</p></a>
          </Link>
          <Link href="../components/IdComponent">
          <a><p className={styles.type}>Id</p></a>
          </Link>
        </div>
      </div>
    );
  }
  
  export default Type;