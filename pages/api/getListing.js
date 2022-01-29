import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

export default async function getAllListedNFT(req, res) {
  const rpcUrl = "https://rpc-mumbai.maticvigil.com";
  const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
  const MARKETPLACE_ADDRESS = "0x3Edd5980ab00A580171AcbB05696A4Eb988ba6E7";

  const wallet = new ethers.Wallet(
    privateKey,
    ethers.getDefaultProvider(rpcUrl)
  );
  const market = new ThirdwebSDK(wallet).getMarketplaceModule(
    MARKETPLACE_ADDRESS
  );
  await market
    .getAllListings()
    .then((data) => {
      // list
      console.log(data);
      res.send(JSON.stringify(data));
    })
    .catch((err) => {
      console.log("Error:", err);
    });
}
