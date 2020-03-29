import Head from 'next/head';
import Link from 'next/link';
import styles from "./NameComponents.module.css";

class NameSearch extends React.Component {

    readName(event) {
      event.preventDefault();

        let element = document.querySelector("#pokemonName");

        fetch("/api/pokemon/name/" + element.value)
        .then((res) => {

            return res.json();
        })
        .then((processed) => {
            let reporting = document.querySelector("#reportingArea");

            if(processed.error) {
                reporting.innerHTML = processed.error;
            } else {
                reporting.innerHTML = processed.name;
                console.log(element.value);
            }
        });
        element.value = "";
    }

    render() {
        return(
            <>
            <div>
            <Head>
              <title>This is the name page!</title>
            </Head>
            <div>
              <p>
                
              </p>
              <Link href="/">
              <a><p className={styles.name}>Home</p></a>
              </Link>
              <Link href="./IdComponent">
              <a><p className={styles.name}>Id</p></a>
        </Link>
        <Link href="./TypeComponent">
        <a><p className={styles.name}>Type</p></a>
        </Link>
            </div>
          </div>
            <div>
                <h2>Pokemon Name</h2>
                <form onSubmit= {this.readName}>
                    <input id="pokemonName" type="text" />
                    <button>Submit</button>
                </form>
            </div>
            <h2>Reporting</h2>
        <div id="reportingArea"></div>
            </>
        );
    }
}

export default NameSearch;