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
import { AssetContext } from "../context/assetContext";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { CopyAll } from "@mui/icons-material";

const ListingForm = () => {
  const { asset, setAsset } = useContext(AssetContext);
  const [tokenOffer, setTokenOffer] = useState("");
  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const handleChange = (e) => {
    setTokenOffer(e.target.value);
  };

  const handleListing = async () => {
    // call listing api
    console.log(tokenOffer, asset.tokenId, signer.getAddress());
    try {
      await fetch("/api/list", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          tokenOffer: tokenOffer,
          tokenId: asset.tokenId,
          // signer: signer,
        }),
      })
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box>
        <FormControl fullWidth>
          <Box sx={{ display: "flex" }}>
            <Box>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ margin: "1rem 0rem" }}
              >
                List you NFT
              </Typography>

              <Typography
                fontWeight="500"
                sx={{ margin: "1rem 0rem" }}
              ></Typography>
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
            </Box>
            <Box sx={{ margin: "0 2rem" }}>
              <Divider orientation="vertical" />
            </Box>
            <Box sx={{ margin: "4rem 0rem", width: "30rem" }}>
              <Stack gap={1} sx={{ margin: "1rem 0rem", flexGrow: 1 }}>
                <Typography>
                  {" "}
                  <b>Name</b> : {asset.name}
                </Typography>
              </Stack>
              <Stack gap={1} sx={{ margin: "1rem 0rem", flexGrow: 1 }}>
                <Typography>
                  <b>TokenId</b> : {asset.tokenId}
                </Typography>
              </Stack>

              <Stack gap={1} sx={{ margin: "1rem 0rem", flexGrow: 1 }}>
                <Typography fontWeight="bold">
                  Select your listing Price
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="price"
                  required
                  type="number"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Stack>
            </Box>
          </Box>
          <Divider sx={{ margin: "1rem 0" }} />
          <Button
            variant="contained"
            sx={{ margin: "1rem 0rem" }}
            onClick={handleListing}
          >
            List
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default ListingForm;
