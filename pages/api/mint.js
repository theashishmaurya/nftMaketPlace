import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

export default async function mint(req, res) {
  const rpcUrl = "https://rpc-mumbai.maticvigil.com";
  const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
  const NFT_MODULE_ADDRESS = "0x0C8fe5019D3B3BaC3B9e0878080C898518E02060";
  console.log(privateKey);
  const { account, name, decription, image } = await req.body;
  console.log(req.body);
  const wallet = new ethers.Wallet(
    privateKey,
    ethers.getDefaultProvider(rpcUrl)
  );
  // initialize the SDK and get the NFT Collection module

  const nft = new ThirdwebSDK(wallet).getNFTModule(NFT_MODULE_ADDRESS);
  await nft
    .mintTo(account, {
      name: name,
      decription: decription,
      image: image,
    })
    .then((metadata) => {
      console.log(metadata);
      res.send(JSON.stringify(metadata));
      //   return metadata;
    })
    .catch((e) => console.log(e));
}
