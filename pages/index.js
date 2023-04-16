import Head from "next/head";
import Footer from "../src/Components/Footer";
import Body from "../src/Components/Body";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ecommerece Project</title>
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
