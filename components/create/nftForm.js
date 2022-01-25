import {
  Button,
  Divider,
  FormControl,
  Input,
  Paper,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { Box } from "@mui/system";
import { useCallback, useState } from "react";

import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { ThirdwebSDK } from "@3rdweb/sdk";

const NftForm = () => {
  const [file, setFile] = useState();
  const NFT_MODULE_ADDRESS = "0x0C8fe5019D3B3BaC3B9e0878080C898518E02060";
  const [data, setData] = useState({
    name: "",
    description: "",
    price: null,
  });
  const [url, setUrl] = useState(null);
  const [currentAddress, setCurrentAddress] = useState("");
  const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

  const providerOptions = {
    /* See Provider Options Section */
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: "27e484dcd9e3efcfd25a83a78777cdf1", // required
      },
    },
  };

  const handleChange = (e, name) => {
    setData({ ...data, [name]: e.target.value });
  };
  const handleSubmit = async () => {
    console.log(file, data);

    try {
      const web3modal = new Web3Modal({
        providerOptions,
      });
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      console.log("Signer:", signer);
      const nft = new ThirdwebSDK(signer).getNFTModule(NFT_MODULE_ADDRESS);
      const address = await signer.getAddress();

      setCurrentAddress(await signer.getAddress());
      nft
        .mintTo(address, {
          name: data.name,
          description: data.description,
          image: url,
        })
        .then(async (metadata) => {
          console.log("Nft Metadat:", metadata);
        });
    } catch (e) {
      console.log("error while minting nft:", e);
    }
  };

  const handlefileupload = async (e) => {
    setFile(e.target.files[0]);
    // console.log(e.target.files[0]);

    try {
      const file = e.target.files[0];
      const added = await client.add(file);
      console.log("ipfs added item: ", added);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      console.log(url);
      setUrl(url);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Paper
        sx={{
          padding: { xs: "2rem", md: "4rem" },
        }}
      >
        <FormControl fullWidth>
          <Box sx={{ display: "flex" }}>
            <Box>
              <Typography
                variant='h4'
                fontWeight='bold'
                sx={{ margin: "1rem 0rem" }}
              >
                Create New Item
              </Typography>

              <Typography fontWeight='500' sx={{ margin: "1rem 0rem" }}>
                Image, Video, Audio, or 3D Model
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: "30vh",
                  backgroundColor: "#CADDE1",
                  borderStyle: "dashed",
                  margin: "1rem 0rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography>Your Media Here</Typography>
              </Box>

              <input
                style={{ display: "none" }}
                accept='image/*'
                id='contained-button-file'
                type='file'
                multiple
                onChange={handlefileupload}
              />
              <label htmlFor='contained-button-file'>
                <Button
                  variant='contained'
                  component='span'
                  sx={{ margin: "1rem 0" }}
                >
                  Upload
                </Button>
              </label>
            </Box>
            <Box sx={{ margin: "0 2rem" }}>
              <Divider orientation='vertical' />
            </Box>
            <Box sx={{ margin: "4rem 0rem", width: "30rem" }}>
              <Stack gap={1} sx={{ margin: "1rem 0rem", flexGrow: 1 }}>
                <Typography fontWeight='bold'>Name</Typography>
                <TextField
                  variant='outlined'
                  size='small'
                  fullWidth
                  placeholder='name'
                  required
                  onChange={(e) => {
                    handleChange(e, "name");
                  }}
                />
              </Stack>
              <Stack gap={1} sx={{ margin: "1rem 0rem", flexGrow: 1 }}>
                <Typography fontWeight='bold'>Description</Typography>

                <TextareaAutosize
                  minRows={5}
                  fullWidth
                  placeholder='Description'
                  onChange={(e) => {
                    handleChange(e, "description");
                  }}
                />
              </Stack>
              {/* <Stack gap={1} sx={{ margin: "1rem 0rem", flexGrow: 1 }}>
                <Typography fontWeight='bold'>Listing Price</Typography>
                <TextField
                  variant='outlined'
                  size='small'
                  fullWidth
                  placeholder='price'
                  required
                  onChange={(e) => {
                    handleChange(e, "price");
                  }}
                />
              </Stack> */}
            </Box>
          </Box>
          <Divider sx={{ margin: "1rem 0" }} />
          <Button
            onClick={handleSubmit}
            variant='contained'
            sx={{ margin: "1rem 0rem" }}
          >
            Mint
          </Button>
        </FormControl>
      </Paper>
    </Box>
  );
};

export default NftForm;
