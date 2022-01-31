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
import { useCallback, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { AssetContext } from "../context/assetContext";
import { UserAddressContext } from "../context/userContext";
import ConnectWallet from "../utils/ConnectWallet";
import { GlassButton } from "../landingPage/heroArea";
const NftForm = ({ handleNftNext }) => {
  const [file, setFile] = useState();
  const { asset, setAsset } = useContext(AssetContext);
  // console.log(asset);
  const [data, setData] = useState({
    name: "",
    description: "",
  });
  const [url, setUrl] = useState(null);
  const [currentAddress, setCurrentAddress] = useState("");
  const [imgSrc, setImageSrc] = useState();

  const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

  const handleChange = (e, name) => {
    setData({ ...data, [name]: e.target.value });
  };
  const handleSubmit = async () => {
    console.log(file, data);

    if (typeof window !== "undefined") {
      console.log(sessionStorage.getItem("address"));
      setCurrentAddress(sessionStorage.getItem("address"));
    }
    try {
      console.log("name:", data.name);
      console.log("Image:", await url);
      await fetch("/api/mint", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          account: currentAddress,
          name: data.name,
          description: data.description,
          image: await url,
        }),
      })
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          console.log(data);
          setAsset({
            ...asset,
            name: data.name,
            image: data.image,
            tokenId: data.id,
          });
          handleNftNext();
        })
        .catch((e) => console.log(e));
    } catch (e) {
      console.log("error while minting nft:", e);
    }
  };

  const handlefileupload = async (e) => {
    setFile(e.target.files[0]);
    // console.log(e.target.files[0]);

    try {
      var url = URL.createObjectURL(e.target.files[0]);
      setImageSrc(url);
    } catch (err) {
      alert(err);
    }

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentAddress(sessionStorage.getItem("address"));
    }
  }, [currentAddress]);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box>
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
                  background: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "4px",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(5px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  margin: "1rem 0rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {file ? (
                  <img src={imgSrc} alt='img' width='100%' height='100%' />
                ) : (
                  <Typography>Your Media Here</Typography>
                )}
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
                <GlassButton
                  variant='contained'
                  component='span'
                  sx={{ margin: "1rem 0", borderRadius: "4px" }}
                >
                  Upload
                </GlassButton>
              </label>
            </Box>
            <Box sx={{ margin: "0 2rem" }}>
              <Divider orientation='vertical' />
            </Box>
            <Box
              sx={{
                margin: "4rem 0rem",
                width: "20rem",
                display: "flex",
                alingItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Stack gap={1} sx={{ margin: "1rem 0rem", flexGrow: 1 }}>
                <Typography fontWeight='bold'>Name</Typography>
                <TextField
                  variant='outlined'
                  size='small'
                  fullWidth
                  placeholder='name'
                  required
                  sx={{
                    background: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "4px",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(5px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                  onChange={(e) => {
                    handleChange(e, "name");
                  }}
                />
              </Stack>
              <Stack gap={1} sx={{ margin: "1rem 0rem", flexGrow: 1 }}>
                <Typography fontWeight='bold'>Description</Typography>

                <TextField
                  sx={{
                    background: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "4px",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(5px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
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
          <GlassButton
            onClick={handleSubmit}
            variant='contained'
            sx={{ margin: "1rem 0rem", borderRadius: "4px" }}
          >
            Mint
          </GlassButton>
        </FormControl>
      </Box>
    </Box>
  );
};

export default NftForm;
