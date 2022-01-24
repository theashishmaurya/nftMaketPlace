import { Grid, Stack, styled, Typography } from "@mui/material";
import { Box, minWidth } from "@mui/system";
import ThreeBlob from "./3Dblob";

const EthBox = styled(Box)({
  //   background: "#000",

  minWidth: "10vh",
  minHeight: "10vh",
  borderStyle: "solid",
  borderWidth: "2px",
  borderImage:
    "linear-gradient(to left, #ecf0f1, rgba(201, 157, 102,0.2)) 1 20%;",

  borderImageSlice: 1,
});

const EthLogo = () => {
  return (
    <Box sx={{ position: "absolute" }}>
      <div className='space'>
        <div className='elogo'>
          <div className='trif u1'></div>
          <div className='trif u2'></div>
          <div className='trif u3'></div>
          <div className='trif u4'></div>
          <div className='ct'></div>
          <div className='trif l1'></div>
          <div className='trif l4'></div>
        </div>
      </div>
    </Box>
  );
};
const HeroArea = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4} display='flex' alignItems='center'>
        <Grid item xs={12} md={6}>
          <Stack gap={2}>
            <Typography variant='h2' fontWeight='bold'>
              Discover, Collect, and sell extraordinary NFTs
            </Typography>
            {/* <Typography variant='subtitle'>
              Minting NFTs like never before.
            </Typography> */}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <EthLogo /> */}
          <ThreeBlob />

          <Grid container spacing={2} sx={{ postion: "relative" }}>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
            <Grid item>
              <EthBox />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroArea;
