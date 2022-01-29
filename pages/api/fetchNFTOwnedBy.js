import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

export default async function fetchNft(req, res) {
  const rpcUrl = "https://rpc-mumbai.maticvigil.com";
  const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
  const NFT_MODULE_ADDRESS = "0x0C8fe5019D3B3BaC3B9e0878080C898518E02060";
  console.log(req.body.address);
  // const { address } = await req.boby;
  const address = req.body.address;
  const wallet = new ethers.Wallet(
    privateKey,
    ethers.getDefaultProvider(rpcUrl)
  );

  const nft = new ThirdwebSDK(wallet).getNFTModule(NFT_MODULE_ADDRESS);
  // nft owned by address
  await nft
    .getOwned(address)
    .then((data) => {
      console.log(data);
      res.send(JSON.stringify(data));
    })
    .catch((error) => {
      console.log(error);
    });
}
