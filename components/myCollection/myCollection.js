import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
// import NFTMarketPlace from "../utils/nftMarketPlace.json";
import { ThirdwebSDK } from "@3rdweb/sdk";
const UserCollection = () => {
  const [currentUser, setCurrentUser] = useState("");
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: "27e484dcd9e3efcfd25a83a78777cdf1", // required
      },
    },
  };
  const NFT_MODULE_ADDRESS = "0x0C8fe5019D3B3BaC3B9e0878080C898518E02060";

  const MARKETPLACE_ADDRESS = "0x3Edd5980ab00A580171AcbB05696A4Eb988ba6E7";
  const TOKEN_ADDRESS = "0x800d5c2BD0aB447ceC839Dc22A14ddA6751b8879";

  // const ConnectWallet = async () => {
  //   const web3modal = new Web3Modal({
  //     providerOptions,
  //   });
  //   const connection = await web3modal.connect();
  //   const provider = new ethers.providers.Web3Provider(connection);
  //   const signer = provider.getSigner();
  //   setCurrentUser(await signer.getAddress());
  //   console.log(signer);
  // };
  const getListing = async () => {
    const web3modal = new Web3Modal({
      providerOptions,
    });
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const market = new ThirdwebSDK(signer).getMarketplaceModule(
      MARKETPLACE_ADDRESS
    );
    const nftCollection = new ThirdwebSDK(signer).getNFTModule(
      NFT_MODULE_ADDRESS
    );
    const tokenOffer = "1";
    // market.createDirectListing({
    //   assetContractAddress: NFT_MODULE_ADDRESS,
    //   buyoutPricePerToken: ethers.utils.parseUnits(tokenOffer, 18),
    //   currencyContractAddress: TOKEN_ADDRESS,
    //   startTimeInSeconds: Math.floor(Date.now() / 1000),
    //   listingDurationInSeconds: 60 * 60 * 24,
    //   tokenId: 1,
    //   quantity: 1,
    // });

    await nftCollection
      .getOwned(signer.getAddress())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    // ConnectWallet();
  }, []);
  return (
    <React.Fragment>
      <h1> Here's your collections</h1>
      <button onClick={getListing}>getListing price</button>
    </React.Fragment>
  );
};
export default UserCollection;
