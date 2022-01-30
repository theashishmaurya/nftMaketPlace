import { Container, Grid } from "@mui/material";
import Navbar from "../components/layout/Navbar";
import NftCard from "../components/assets/nftCard";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
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
        // console.log(data[0].asset);
        setMarketData(data);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  }, []);
  return (
    <Box sx={{ flexGrow: 1, minHeight: "100vh" }}>
      <Box sx={{ margin: "4rem 0" }}>
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
    </Box>
  );
};

export default Assets;
