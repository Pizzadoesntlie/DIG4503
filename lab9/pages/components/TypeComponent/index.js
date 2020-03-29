import Head from 'next/head';
import Link from 'next/link';
import styles from "./TypeComponents.module.css";

class TypeSearch extends React.Component {

    readType(event) {
      event.preventDefault();

        let element = document.querySelector("#pokemonType");

        fetch("/api/pokemon/type/" + element.value).then((res) => {

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
                <title>This is the Type page!</title>
              </Head>
              <div>
                <p>
                </p>
                <Link href="/">
                <a><p className={styles.type}>Home</p></a>
              </Link>
                <Link href="./NameComponent">
                <a><p className={styles.type}>Name</p></a>
                </Link>
                <Link href="./IdComponent">
                <a><p className={styles.type}>Id</p></a>
                </Link>
              </div>
            </div>
                <div>
                    <h2>Pokemon Type</h2>
                    <form onSubmit= {this.readType}>
                        <input id="pokemonType" type="text" />
                        <button>Submit</button>
                    </form>
                </div>
                <h2>Reporting</h2>
        <div id="reportingArea"></div>
                </>
            );
        }
    }

export default TypeSearch;