import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

export default async function buyNft(req, res) {
  // const rpcUrl = "https://rpc-mumbai.maticvigil.com";
  const rpcUrl = "https://polygon-rpc.com/";
  const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
  const MARKETPLACE_ADDRESS = "0x3Edd5980ab00A580171AcbB05696A4Eb988ba6E7";
  const { listId, buyerAddress } = await req.body;
  console.log("buyer:", buyerAddress);
  console.log(listId);
  const wallet = new ethers.Wallet(
    privateKey,
    ethers.getDefaultProvider(rpcUrl)
  );
  const market = new ThirdwebSDK(wallet).getMarketplaceModule(
    MARKETPLACE_ADDRESS
  );
  
  // buyout direct listing
  await market
    .buyoutDirectListing({ listingId: parseInt(listId), quantityDesired: 1 })
    .catch((error) => {
      console.log("Error:", error);
    });
}
