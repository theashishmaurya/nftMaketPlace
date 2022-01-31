import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

export default async function list(req, res) {
  const rpcUrl = "https://rpc-mumbai.maticvigil.com";
  const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
  const NFT_MODULE_ADDRESS = "0x0C8fe5019D3B3BaC3B9e0878080C898518E02060";
  //   const MARKETPLACE_ADDRESS = "0x3Edd5980ab00A580171AcbB05696A4Eb988ba6E7";
  const MARKETPLACE_ADDRESS = "0x229b1f789506dbea2052f8423a780b1be1c16f21";
  //polygon mumbai test net
  const TOKEN_ADDRESS = "0x800d5c2BD0aB447ceC839Dc22A14ddA6751b8879";  //custom
  //   const TOKEN_ADDRESS = "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0";  //MATIC

  console.log(privateKey);

  const { tokenOffer, tokenId } = await req.body;

  console.log(req.body);
  
  const wallet = new ethers.Wallet(
    privateKey,
    ethers.getDefaultProvider(rpcUrl)
  );

  const market = new ThirdwebSDK(wallet).getMarketplaceModule(
    MARKETPLACE_ADDRESS
  );

  await market
    .createDirectListing({
      assetContractAddress: NFT_MODULE_ADDRESS,
      buyoutPricePerToken: ethers.utils.parseUnits(tokenOffer, 18),
      currencyContractAddress: TOKEN_ADDRESS,
      startTimeInSeconds: Math.floor(Date.now() / 1000),
      listingDurationInSeconds: 60 * 60 * 24,
      tokenId: tokenId,
      quantity: 1,
    })
    .then((data) => {
      console.log(data);
      res.send(JSON.stringify(data));
    })
    .catch((error) => {
      console.log(error);
    });
}
