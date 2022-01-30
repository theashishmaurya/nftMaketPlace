import { Divider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GlassButton } from "../../components/landingPage/heroArea";
import { GlassContainer } from "../../components/layout/container";

const NFTCard = () => {
  const router = useRouter();
  const { id } = router.query;

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
      <Box>
        <Box sx={{ display: "flex" }}>
          <Box>
            <Box
              sx={{
                width: "35vh",
                height: "30vh",
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "4px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                margin: "1rem 0rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></Box>
          </Box>
          <Box sx={{ margin: "0 2rem" }}>
            <Divider orientation='vertical' />
          </Box>
          <Box sx={{ margin: "4rem 0rem", width: "20rem" }}>
            <Stack gap={1} sx={{ margin: "1rem 0rem", flexGrow: 1 }}>
              <Typography> {/* <b>Name</b> : {asset.name} */}</Typography>
            </Stack>
            <Stack gap={1} sx={{ margin: "1rem 0rem", flexGrow: 1 }}>
              <Typography>{/* <b>TokenId</b> : {asset.tokenId} */}</Typography>
            </Stack>

            <Stack gap={1} sx={{ margin: "1rem 0rem", flexGrow: 1 }}>
              <Typography>
                <b>TokenId : </b>
                {"Title"}
              </Typography>
              <Typography>
                <b>Title : </b>
                {"Title"}
              </Typography>
              <Typography>
                <b>Description : </b>
                {"Description"}
              </Typography>
              <Typography>
                <b>Price : </b>
                {"Price"}
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
          Buy
        </GlassButton>
      </Box>
    </GlassContainer>
  );
};

export default NFTCard;
