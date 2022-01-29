import Contain from "../components/layout/container";
import "../styles/globals.css";
import { AssetProvider } from "../components/context/assetContext";
import { UserAddressProvider } from "../components/context/userContext";

function MyApp({ Component, pageProps }) {
  return (
    <AssetProvider>
      <UserAddressProvider>
        <Contain>
          <Component {...pageProps} />
        </Contain>
      </UserAddressProvider>
    </AssetProvider>
  );
}

export default MyApp;
