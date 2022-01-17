import { Container, Grid } from "@mui/material";
import Navbar from "../components/layout/Navbar";
import NftCard from "../components/assets/nftCard";

const { Box } = require("@mui/system");

const arr = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10];
const Assets = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ margin: "4rem 0" }}>
        <Grid container spacing={10}>
          {arr.map((data) => {
            return (
              <Grid item xs={12} md={4} key={data}>
                <NftCard key={data} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Assets;
