import { createContext, useState } from "react";
export const AssetContext = createContext({});

export const AssetProvider = ({ children }) => {
  const [asset, setAsset] = useState({
    name: "",
    description: "",
    image: "",
    tokenId: null,
  });
  const value = {
    asset,
    setAsset,
  };
  return (
    <AssetContext.Provider value={value}>{children}</AssetContext.Provider>
  );
};
