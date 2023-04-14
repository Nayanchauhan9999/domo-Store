import "../styles/globals.css";
import Header from "../src/Components/Header";
import { Provider } from "react-redux";
import store from "../store/store";
import "../styles/style.scss"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
