import { Box, Button, Stack, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { GlassContainer } from "../layout/container";

export const GlassButton = styled(Button)(({ theme }) => ({
  /* From https://css.glass */
  background: " rgba(0, 0, 0, 0.65)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(0, 0, 0, 0.67)",
  "&:hover": {
    backgroundColor: "#000000",
  },
}));

const RandomImage = (props) => {
  return (
    <Box sx={{ position: "absolute", left: 10, top: 60 }}>
      <GlassContainer>Hey</GlassContainer>
    </Box>
  );
};
const HeroArea = () => {
  const [count, setCount] = useState(1);

  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "2rem 0rem",
      }}
    >
      <RandomImage />
      <Box
        sx={{
          flexGrow: 1,
          margin: "4rem 0rem",
        }}
      >
        <Typography
          variant='h2'
          fontWeight='bold'
          color='#ecf0f1'
          aling='center'
          sx={{ margin: "2rem 0rem" }}
        >
          Name your one place stop for{" "}
        </Typography>
        <Typography variant='h3' fontWeight='bold' align='center'>
          <TypewriterComponent
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Mint your art!")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Sell your art!")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Collect NFT!")
                .pauseFor(1000)
                .deleteAll()
                .callFunction(() => {
                  setCount(0);
                })
                .start();
            }}
          />
        </Typography>
      </Box>
      <Stack gap={2} alignItems='center' margin='5rem'>
        <Typography variant='h6' align='center' fontWeight='Bold'>
          To get Started
        </Typography>

        <GlassButton
          variant='contained'
          size='large'
          endIcon={<AccountBalanceWalletIcon />}
        >
          Connect your wallet
        </GlassButton>
      </Stack>
    </Box>
  );
};

export default HeroArea;
