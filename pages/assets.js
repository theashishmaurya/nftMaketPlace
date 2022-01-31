import { Container, Grid } from "@mui/material";
import Navbar from "../components/layout/Navbar";
import NftCard from "../components/assets/nftCard";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Loader from "../components/utils/loader";
import { GlassContainer } from "../components/layout/container";
const { Box } = require("@mui/system");

const Assets = () => {
  const [marketData, setMarketData] = useState([]);
  useEffect(async () => {
    console.log("testing");
    await fetch("api/getListing")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        console.log(data);
        setMarketData(data);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  }, []);
  return (
    <GlassContainer
      sx={{ flexGrow: 1, minHeight: "100vh", margin: "4rem 0rem" }}
    >
      {marketData.length != 0 ? (
        <Box sx={{ margin: "4rem 2rem" }}>
          <Grid container spacing={10}>
            {marketData.map((data) => {
              return (
                <Grid item xs={12} md={4} key={data.id}>
                  <Link href={`/nft/${data.id}`}>
                    <NftCard key={data.id} nft={data} />
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      ) : (
        <Loader />
      )}
    </GlassContainer>
  );
};

export default Assets;
