import Head from "next/head";
import Footer from "../src/Components/Footer";
import Body from "../src/Components/body";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Body/>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
