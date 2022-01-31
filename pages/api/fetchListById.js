import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

export default async function (req, res) {
  const rpcUrl = "https://rpc-mumbai.maticvigil.com";
  const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
  // const MARKETPLACE_ADDRESS = "0x229b1f789506dbea2052f8423a780b1be1c16f21";
  const MARKETPLACE_ADDRESS = "0x3Edd5980ab00A580171AcbB05696A4Eb988ba6E7";

  const wallet = new ethers.Wallet(
    privateKey,
    ethers.getDefaultProvider(rpcUrl)
  );

  const market = new ThirdwebSDK(wallet).getMarketplaceModule(
    MARKETPLACE_ADDRESS
  );
  const { listId } = await req.body;
  console.log("***", req.body);
  console.log("list ID:", listId);
  /*
   * get listed nft by listId
   */

  await market
    .getDirectListing(listId)
    .then((data) => {
      console.log(data);
      res.send(JSON.stringify(data));
    })
    .catch((error) => console.error(error));
}
