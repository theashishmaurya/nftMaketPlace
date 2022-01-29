import * as React from "react";
import { useState, useEffect, useContext } from "react";
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
import ConnectWallet from "../utils/ConnectWallet";
import { UserAddressContext } from "../context/userContext";

const Navbar = () => {
  const [currentUser, setCurrentUser] = useContext(UserAddressContext);
  const connectWallet = () => {
    ConnectWallet()
      .then((data) => {
        console.log(data);
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    // ConnectWallet();
  }, []);
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexGrow: 1,
              alignItems: "center",
            }}
          >
            <Stack direction="row" alignItems={"center"}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                LOGO
              </Typography>

              <Stack direction="row" gap={2}>
                <a href="assets">
                  <Typography>Assests</Typography>
                </a>
                <a href="create">
                  <Typography>Create</Typography>
                </a>
                {currentUser && (
                  <a href="myCollection">
                    <Typography>My Collection</Typography>
                  </a>
                )}
              </Stack>
            </Stack>
            <Box>
              <AccountBalanceWalletIcon
                onClick={connectWallet}
                sx={{ cursor: "pointer" }}
              />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
