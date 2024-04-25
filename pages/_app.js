import "../styles/globals.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pokedex</title>
        <meta
          name="description"
          content="This is a super Pokedex, here you can fin all the pokemons to date !"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
