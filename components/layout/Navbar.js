import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Stack } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState("");
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: "27e484dcd9e3efcfd25a83a78777cdf1", // required
      },
    },
  };
  const ConnectWallet = async () => {
    const web3modal = new Web3Modal({
      providerOptions,
    });
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    setCurrentUser(await signer.getAddress());
    console.log(signer);
  };
  useEffect(() => {
    // ConnectWallet();
  }, []);
  return (
    <AppBar position='static' color='transparent'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexGrow: 1,
              alignItems: "center",
            }}
          >
            <Stack direction='row' alignItems={"center"}>
              <Typography
                variant='h6'
                noWrap
                component='div'
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                LOGO
              </Typography>

              <Stack direction='row' gap={2}>
                <Link href='/assets'>
                  <Typography sx={{ cursor: "pointer" }} fontWeight={"bold"}>
                    Assests
                  </Typography>
                </Link>
                <Link href='/create'>
                  <Typography sx={{ cursor: "pointer" }} fontWeight={"bold"}>
                    Create
                  </Typography>
                </Link>
                {currentUser && (
                  <a href='myCollection'>
                    <Typography>My Collection</Typography>
                  </a>
                )}
              </Stack>
            </Stack>
            <Stack direction='row' gap={2}>
              <Link href='/profile'>
                <PersonIcon sx={{ cursor: "pointer" }} />
              </Link>
              <AccountBalanceWalletIcon
                onClick={ConnectWallet}
                sx={{ cursor: "pointer" }}
              />
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
