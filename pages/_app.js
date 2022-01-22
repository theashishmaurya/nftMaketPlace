import Contain from "../components/layout/container";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <Contain>
      <Component {...pageProps} />
    </Contain>
  );
}

export default MyApp;
