import { Box, Button, Stack, styled, Typography } from "@mui/material";
import { useEffect, useLayoutEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { GlassContainer } from "../layout/container";
import Image from "next/image";
import ConnectWallet from "../utils/ConnectWallet";

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

const Data = [
  {
    image: "/nftImage/BoredApe.png",
    left: -20,
    top: 10,
  },

  {
    image: "/nftImage/Wierd.png",
    left: -100,
    top: 500,
  },
  {
    image: "/nftImage/YatchApe.png",
    left: 1000,
    top: 500,
  },
  {
    image: "/nftImage/CoolCats.png",
    left: 1000,
    top: -20,
  },
];

const RandomImage = (props) => {
  return (
    <Box sx={{}}>
      <GlassContainer sx={{ padding: "2rem" }}>
        <Image
          src={props.image}
          alt='NftImage'
          width={100}
          height={100}
          className='image-curve'
        />
      </GlassContainer>
    </Box>
  );
};
const HeroArea = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [count, setCount] = useState(1);
  const getStart = "Get started now";
  const alreadyStart = "Let's Go";
  const handleWalletConnection = async () => {
    ConnectWallet()
      .then((data) => {
        console.log(data);
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useLayoutEffect(() => {
    if (sessionStorage.getItem("address")) {
      setCurrentUser(sessionStorage.getItem("address"));
    } else {
      sessionStorage.setItem("address", currentUser);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("address", currentUser);
  }, [currentUser]);

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
          <b
            style={{
              backgroundColor: "#e9bcb7",
              backgroundImage:
                "linear-gradient(315deg, #e9bcb7 20%, #29524a 74%)",

              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ARCANE
          </b>{" "}
          your one place stop for{" "}
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
          Get started now
        </Typography>

        {currentUser && (
          <GlassButton variant='contained' size='large'>
            You are connected to Marketplace
          </GlassButton>
        )}
        {!currentUser && (
          <GlassButton
            variant='contained'
            size='large'
            endIcon={<AccountBalanceWalletIcon />}
            onClick={handleWalletConnection}
          >
            Connect your wallet
          </GlassButton>
        )}
      </Stack>
      <Stack gap={4} alignItems={"center"} margin='2rem'>
        <Typography variant='h4' fontWeight={"bold"}>
          What Are NFT?
        </Typography>
        <Typography align='center'>
          A non-fungible token is a non-interchangeable unit of data stored on a
          blockchain, a form of digital ledger. Types of NFT data units may be
          associated with digital files such as photos, videos, and audio.
          Because each token is uniquely identifiable, NFTs differ from
          blockchain cryptocurrencies, such as Bitcoin.
        </Typography>
      </Stack>
      <Box sx={{ margin: "4rem 0rem" }}>
        <Typography fontWeight='bold' variant='h6' sx={{ margin: "2rem 0rem" }}>
          Some of Famous Nft&apos;s
        </Typography>
        <Stack direction='row' gap={6}>
          {Data.map((data, index) => {
            return <RandomImage {...data} key={index} />;
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default HeroArea;
