import Head from 'next/head';
import Link from 'next/link';
import styles from "./IdComponents.module.css";


class IdSearch extends React.Component {

    readId(event) {
      event.preventDefault();

        let element = document.querySelector("#pokemonId");

        fetch("/api/pokemon/id/" + element.value).then((res) => {

            return res.json();
        })
        .then((processed) => {
            let reporting = document.querySelector("#reportingArea");

            if(processed.error) {
                reporting.innerHTML = processed.error;
            } else {
                reporting.innerHTML = processed.name;
            }
        });
        element.value = "";
    }
        render() {
            return (
                <>
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
                <Link href="./NameComponent">
                <a><p className={styles.id}>Name</p></a>
                </Link>
                <Link href="./TypeComponent">
                  <a><p className={styles.id}>Type</p></a>
                </Link>
              </div>
            </div>
                <div>
                    <h2>Pokemon ID</h2>
                    <form onSubmit= {this.readId}>
                        <input id="pokemonId" type="text" />
                        <button>Submit</button>
                    </form>
                </div>
                <h2>Reporting</h2>
        <div id="reportingArea"></div>
                </>
                
            );
        }
    }

export default IdSearch;