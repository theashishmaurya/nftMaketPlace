import {
  Button,
  Divider,
  FormControl,
  Input,
  Paper,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { Box } from "@mui/system";
import { useCallback, useContext, useEffect, useState } from "react";

const ListingForm = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box>
        <FormControl fullWidth>
          <Box sx={{ display: "flex" }}>
            <Box>
              <Typography
                variant='h4'
                fontWeight='bold'
                sx={{ margin: "1rem 0rem" }}
              >
                List you NFT
              </Typography>

              <Typography
                fontWeight='500'
                sx={{ margin: "1rem 0rem" }}
              ></Typography>
              <Box
                sx={{
                  width: "100%",
                  height: "30vh",
                  backgroundColor: "#CADDE1",
                  borderStyle: "dashed",
                  margin: "1rem 0rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography>Your Media Here</Typography>
              </Box>
            </Box>
            <Box sx={{ margin: "0 2rem" }}>
              <Divider orientation='vertical' />
            </Box>
            <Box sx={{ margin: "4rem 0rem", width: "30rem" }}>
              <Stack gap={1} sx={{ margin: "1rem 0rem", flexGrow: 1 }}>
                <Typography>
                  {" "}
                  <b>Name</b> : {"Name"}
                </Typography>
              </Stack>
              <Stack gap={1} sx={{ margin: "1rem 0rem", flexGrow: 1 }}>
                <Typography>
                  <b>TokenId</b> : {"Tokenid"}
                </Typography>
              </Stack>

              <Stack gap={1} sx={{ margin: "1rem 0rem", flexGrow: 1 }}>
                <Typography fontWeight='bold'>
                  Select your listing Price
                </Typography>
                <TextField
                  variant='outlined'
                  size='small'
                  fullWidth
                  placeholder='price'
                  required
                  type='number'
                  //   onChange={(e) => {
                  //     handleChange(e, "price");
                  //   }}
                />
              </Stack>
            </Box>
          </Box>
          <Divider sx={{ margin: "1rem 0" }} />
          <Button variant='contained' sx={{ margin: "1rem 0rem" }}>
            Mint
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default ListingForm;
