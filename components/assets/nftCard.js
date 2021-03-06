import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { GlassContainer } from "../layout/container";
import { UserAddressContext } from "../context/userContext";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

export default function NftCard({ nft }) {
  const { buyoutCurrencyValuePerToken, asset, id } = nft;
  const router = useRouter();
  const handleBuy = async () => {
    console.log("here!!");
    await fetch("/api/buyOut", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        listId: id,
      }),
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };

  return (
    <GlassContainer
      sx={{ maxWidth: 345, cursor: "pointer" }}
      onClick={() => {
        router.replace(`/nft/${id}`);
      }}
    >
      <CardMedia
        component='img'
        alt='green iguana'
        height='140'
        sx={{ borderRadius: "16px 16px 0 0" }}
        image={asset.image}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {asset.name}
        </Typography>
        {/* Description */}
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button size='small' onClick={handleBuy}>
          Buy
        </Button>
        <Typography fontSize='small' color='primary' variant='button'>
          Token Price : {buyoutCurrencyValuePerToken.displayValue}{" "}
          {buyoutCurrencyValuePerToken.symbol}{" "}
        </Typography>
      </CardActions>
    </GlassContainer>
  );
}
