import { Divider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GlassButton } from "../../components/landingPage/heroArea";
import { GlassContainer } from "../../components/layout/container";
import Loader from "../../components/utils/loader";

const NFTCard = () => {
  const router = useRouter();
  const [assetData, setAssetData] = useState({
    name: "",
    tokenId: "",
    image: "",
    price: null,
    symbol: "",
  });
  const [loader, setLoader] = useState(true);
  useEffect(async () => {
    if (!router.isReady) return;
    const { id } = router.query;
    console.log(id);
    await fetch("/api/fetchListById", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        listId: id,
      }),
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        console.log(data);
        setAssetData({
          ...assetData,
          name: data.asset.name,
          tokenId: data.asset.id,
          image: data.asset.image,
          price: data.buyoutCurrencyValuePerToken.displayValue,
          symbol: data.buyoutCurrencyValuePerToken.symbol,
        });
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router.isReady]);
  return (
    <GlassContainer
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "80vh",
        margin: "4rem 0rem",
        alignItems: "center",
      }}
    >
      {loader ? (
        <Loader />
      ) : (
        <Box>
          <Box sx={{ display: "flex" }}>
            <Box>
              <GlassContainer
                sx={{
                  padding: "2rem",
                  width: "35vh",
                  height: "30vh",
                  margin: "1rem 0rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={assetData.image}
                  alt='img'
                  width='100%'
                  height='100%'
                  style={{ borderRadius: "16px" }}
                />
              </GlassContainer>
            </Box>
            <Box sx={{ margin: "0 2rem" }}>
              <Divider orientation='vertical' />
            </Box>
            <Box sx={{ margin: "4rem 0rem", width: "20rem" }}>
              <Stack gap={1} sx={{ margin: "1rem 0rem", flexGrow: 1 }}>
                <Typography>
                  {" "}
                  <b>Name</b> : {assetData.name}
                </Typography>
              </Stack>
              <Stack gap={1} sx={{ margin: "1rem 0rem", flexGrow: 1 }}>
                <Typography>
                  <b>TokenId</b> : {assetData.tokenId}
                </Typography>
              </Stack>

              <Stack gap={1} sx={{ margin: "1rem 0rem", flexGrow: 1 }}>
                <Typography>
                  <b>Price : </b>
                  {assetData.price}
                  <s></s>
                  {assetData.symbol}
                </Typography>
              </Stack>
            </Box>
          </Box>

          <Divider sx={{ margin: "1rem 0" }} />
          <GlassButton
            fullWidth
            variant='contained'
            sx={{ margin: "1rem 0rem", borderRadius: "4px" }}
          >
            Buy (comming soon)
          </GlassButton>
        </Box>
      )}
    </GlassContainer>
  );
};

export default NFTCard;
