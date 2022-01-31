import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { GlassContainer } from "../layout/container";

export default function CollectionCard({ data }) {
  return (
    <GlassContainer sx={{ width: 345 }}>
      <CardMedia
        sx={{ borderRadius: "16px 16px 0 0" }}
        component='img'
        alt='green iguana'
        height='140'
        image={data.image}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {data.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {data.description}
        </Typography>
      </CardContent>
    </GlassContainer>
  );
}
