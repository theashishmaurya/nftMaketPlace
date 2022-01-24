import Contain from "../components/layout/container";
import "../styles/globals.css";
import { AssetProvider } from "../components/context/assetContext";

function MyApp({ Component, pageProps }) {
  return (
    <AssetProvider>
      <Contain>
        <Component {...pageProps} />
      </Contain>
    </AssetProvider>
  );
}

export default MyApp;
